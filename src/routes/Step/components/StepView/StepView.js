import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import AccordionView from "../../../../components/AccordionView";
import Bookmarkable from "../../../../components/Bookmarkable";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import { withLanguageContext } from "../../../../components/Language";
import { theme } from "../../../../modules/config/theme";
import KeyTermList from "../KeyTermList";
import LearningObjectiveList from "../LearningObjectiveList";
import TopicsList from "../TopicList";

const StepNavButtonGroup = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
`;

const HeaderIcon = styled.span`
    vertical-align: middle;
    padding-right: 10px;
`;

const OrderedListWrapper = styled.div`
    & ol {
        list-style: none;
        counter-reset: li;
    }
    & li {
        counter-increment: li;
        &::before {
            content: counter(li) ".";
            color: ${theme.colors.primary};
            font-weight: bold;
            width: 1em;
            margin-left: -1em;
            margin-right: 0.5em;
            text-align: right;
            direction: rtl;
        }
    }
`;
class StepView extends Component {
    constructor(props) {
        super(props);
        this.state = this.buildStepData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.localizor.language !== this.props.localizor.language ||
            prevProps.location.pathname !== this.props.location.pathname
        ) {
            this.setState(this.buildStepData());
        }

        if (prevState.reset !== this.state.reset) {
            this.setState({ reset: false });
        }
    }

    buildStepData = () => {
        const { step, localizor } = this.props;

        const stepData = localizor.strings.steps[step - 1];
        const prevStep =
            (localizor.strings.steps[step - 2] && step - 1) || null;
        const nextStep = (localizor.strings.steps[step] && step + 1) || null;
        let items;
        if (stepData) {
            const topics = stepData.topics;
            const learningObjectives = stepData.learningObjectives;
            const keyTerms = stepData.keyTerms;
            const Resources = stepData.furtherResources;
            const Training = stepData.training;
            const ExtraInfo = stepData.extraInfo;
            items = {
                data: {
                    resources: {
                        title: localizor.strings.general.furtherResources,
                        content: Resources && (
                            <OrderedListWrapper>
                                <Resources />
                            </OrderedListWrapper>
                        ),
                        id: "resources"
                    },
                    learningObjectives: {
                        title: localizor.strings.general.learningObjectives,
                        content: (
                            <LearningObjectiveList
                                objectives={learningObjectives}
                            />
                        ),
                        id: "learning-objectives"
                    },
                    keyTerms: {
                        title: localizor.strings.general.keyTerms,
                        content: (
                            <KeyTermList terms={keyTerms}>
                                {ExtraInfo && <ExtraInfo />}
                            </KeyTermList>
                        ),
                        id: "key-terms"
                    },
                    topics: {
                        title: localizor.strings.general.topics,
                        content: (
                            <TopicsList step={Number(step)} topics={topics} />
                        ),
                        id: "topics"
                    },
                    training: {
                        title: localizor.strings.general.training,
                        content: Training && (
                            <OrderedListWrapper>
                                <Training />
                            </OrderedListWrapper>
                        ),
                        id: "training"
                    }
                },
                nextStep: nextStep && `/steps/${nextStep}`,
                prevStep: prevStep && `/steps/${prevStep}`,
                title: stepData.title,
                titleString: `steps.${step - 1}.title`
            };
        }
        return items;
    };

    navigate = path => {
        const { history } = this.props;
        this.setState({ reset: true });
        history.push(path);
    };

    render() {
        const { localizor, pdf, step, location } = this.props;
        const {
            nextStep,
            prevStep,
            data,
            data: { learningObjectives, keyTerms, topics, resources, training },
            title,
            titleString,
            reset
        } = this.state;
        if (!data) {
            return <div>Step not found!</div>;
        }
        const sections = [learningObjectives, keyTerms, topics];
        if (resources.content) {
            sections.push(resources);
        }
        if (training.content) {
            sections.push(training);
        }
        return (
            <Bookmarkable titleString={titleString} url={location.pathname}>
                <h3>
                    <HeaderIcon>
                        <Icons.StepIcon step={step} />
                    </HeaderIcon>
                    {title}
                </h3>
                <AccordionView
                    id="step-accordions"
                    sections={sections}
                    pdf={pdf}
                    reset={reset}
                />
                <StepNavButtonGroup>
                    {prevStep && (
                        <Button
                            id="prev-step"
                            variant="primaryDarkest"
                            onClick={() => this.navigate(prevStep)}
                        >
                            <Icons.ArrowDropLeft />
                            {localizor.strings.general.prevStep}
                        </Button>
                    )}
                    {nextStep && (
                        <Button
                            id="next-step"
                            variant="primary"
                            onClick={() => this.navigate(nextStep)}
                        >
                            {localizor.strings.general.nextStep}
                            <Icons.ArrowDropRight />
                        </Button>
                    )}
                </StepNavButtonGroup>
            </Bookmarkable>
        );
    }
}

StepView.propTypes = {
    localizor: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    step: PropTypes.number.isRequired,
    pdf: PropTypes.bool
};

export default withRouter(withLanguageContext(StepView));
