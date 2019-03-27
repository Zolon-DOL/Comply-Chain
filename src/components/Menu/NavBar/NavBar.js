import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import { isBrowser } from "../../../modules/utils/platform";
import Button from "../../Button";
import Icons from "../../Icons";
import { withLanguageContext } from "../../Language";
import Breadcrumbs from "../Breadcrumbs";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import SideNav from "../SideNav";
import { theme } from "../../../modules/config/theme";

const NavbarRoot = styled.div`
    background-color: #fff;
    border-bottom: 1px solid ${theme.colors.grayLight};
    width: 100%;
    z-index: 100;
`;

const NavbarWrapper = styled.div`
    display: flex;
    padding: 5px 5px;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.div`
    text-align: center;
    padding: 14px 14px;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;
`;

const SideNavFooter = styled.div`
    padding-bottom: 3em;
    padding-bottom: calc(3em + constant(safe-area-inset-bottom));
    padding-bottom: calc(3em + env(safe-area-inset-bottom));
`;

const MenuButton = styled(Button)`
    padding: 16px 16px;
`;

const StepsMenuItem = styled(SideNav.Item)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        font-size: 25px;
    }
`;

const StepWrapper = styled.div`
    display: flex;
    align-items: center;

    svg {
        font-size: 25px;
    }
`;

const StepIcon = styled.span`
    flex-shrink: 0;
`;
const StepText = styled.span`
    padding-left: 15px;
`;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, stepAccordionActive: false };

        if (!isBrowser()) {
            document.addEventListener(
                "backbutton",
                this.onBackButtonPressed,
                false
            );
        }
    }

    onBackButtonPressed = e => {
        const { visible } = this.state;
        const { location } = this.props;
        if (visible) {
            e.preventDefault();
            this.handleSideNavClose();
        } else {
            e.preventDefault();
            if (location.pathname === "/") {
                navigator.app.exitApp();
            } else {
                navigator.app.backHistory();
            }
        }
    };

    toggleSideNav = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    };

    handleSideNavClose = () => {
        this.setState({ visible: false });
    };

    toggleStepAccordion = () => {
        const { stepAccordionActive } = this.state;
        this.setState({ stepAccordionActive: !stepAccordionActive });
    };
    render() {
        const { visible, stepAccordionActive } = this.state;
        const { leftItems, rightItems, id, localizor } = this.props;
        return (
            <div id={id}>
                <NavbarRoot>
                    <SideNav
                        id="side-nav"
                        visible={visible}
                        onClose={this.handleSideNavClose}
                    >
                        <div id="side-nav-main-content">
                            {leftItems.map((item, i) => (
                                <SideNav.Item
                                    {...item.props}
                                    key={"mobile_left_" + i}
                                    onClick={this.handleSideNavClose}
                                >
                                    {item.props && item.props.content}
                                </SideNav.Item>
                            ))}
                            <StepsMenuItem
                                id="steps-dropdown"
                                onClick={this.toggleStepAccordion}
                            >
                                {localizor.strings.general.stepsToBasic}
                                <StepIcon>
                                    {!stepAccordionActive && (
                                        <Icons.ArrowCircleRight />
                                    )}
                                    {stepAccordionActive && (
                                        <Icons.ArrowCircleDown />
                                    )}
                                </StepIcon>
                            </StepsMenuItem>

                            {stepAccordionActive &&
                                localizor.strings.steps.map((step, i) => {
                                    return (
                                        <SideNav.IdentedItem
                                            as={NavLink}
                                            to={`/steps/${i + 1}`}
                                            key={step.title}
                                            id={`step-${i + 1}-link`}
                                            onClick={this.handleSideNavClose}
                                        >
                                            <StepWrapper>
                                                <StepIcon>
                                                    <Icons.StepIcon
                                                        step={i + 1}
                                                    />
                                                </StepIcon>
                                                <StepText>
                                                    {step.title}
                                                </StepText>
                                            </StepWrapper>
                                        </SideNav.IdentedItem>
                                    );
                                })}
                        </div>
                        <SideNavFooter id="side-nav-footer">
                            <LanguageSwitcher />
                        </SideNavFooter>
                    </SideNav>
                    <NavbarWrapper>
                        <span id="navbar-left-items">
                            <NavItem as={Breadcrumbs} id="breadcrumbs" />
                        </span>
                        <span id="navbar-right-items">
                            <NavItem
                                id="menu-btn"
                                as={MenuButton}
                                right
                                onClick={this.toggleSideNav}
                            >
                                {!visible && localizor.strings.general.menu}
                                {visible && localizor.strings.general.close}
                            </NavItem>
                            {rightItems.map((item, i) => (
                                <NavItem
                                    {...item.props}
                                    right
                                    key={"mobile_right_" + i}
                                >
                                    {item.props && item.props.content}
                                </NavItem>
                            ))}
                        </span>
                    </NavbarWrapper>
                </NavbarRoot>
            </div>
        );
    }
}

NavBar.propTypes = {
    id: PropTypes.string,
    leftItems: PropTypes.arrayOf(PropTypes.object),
    rightItems: PropTypes.arrayOf(PropTypes.object),
    localizor: PropTypes.object.isRequired
};

NavBar.defaultProps = {
    leftItems: [],
    rightItems: []
};

export default withRouter(withLanguageContext(NavBar));
