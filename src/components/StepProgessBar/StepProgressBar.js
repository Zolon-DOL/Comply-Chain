import PropTypes from "prop-types";
import React, { Component } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import styled from "styled-components";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { withLanguageContext } from "../Language";

const StepProgress = styled.div`
    color: white;
    width: 20px;
    height: 20px;
    font-size: 12px;
    background-color: ${props =>
        props.accomplished ? theme.colors.primary : "rgba(211, 211, 211)"};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class StepProgressBar extends Component {
    render() {
        const { localizor } = this.props;
        const numOfSteps = localizor.strings.steps.length;
        const currentStep = storage.steps.findNextIncompleteStep(numOfSteps);
        const percent = (100 / numOfSteps + 1.75) * currentStep;
        return (
            <ProgressBar
                percent={percent}
                filledBackground={theme.colors.primary}
            >
                {localizor.strings.steps.map((step, i) => {
                    return (
                        <Step key={`progress_${step.title}`}>
                            {() => (
                                <StepProgress
                                    accomplished={storage.steps.isStepComplete(
                                        i
                                    )}
                                >
                                    {i + 1}
                                </StepProgress>
                            )}
                        </Step>
                    );
                })}
            </ProgressBar>
        );
    }
}
StepProgressBar.propTypes = {
    localizor: PropTypes.object.isRequired
};
export default withLanguageContext(StepProgressBar);
