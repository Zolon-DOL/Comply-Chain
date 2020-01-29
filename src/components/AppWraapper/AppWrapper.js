import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Routes from "../../modules/config/routes";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { isBrowser } from "../../modules/utils/platform";
import BrandStrip from "../BrandStrip";
import Icons from "../Icons";
import { withLanguageContext } from "../Language";
import BottomDrawer from "../Menu/BottomDrawer/BottomDrawer";
import BottomNavBar from "../Menu/BottomNavBar";
import NavBar from "../Menu/NavBar";
import MobileScrollbar from "../MobileScrollbar";
import { Navigator } from "../Navigation";
import Share from "../Share";
import StepProgressBar from "../StepProgessBar";
import ScrollToTop from "./ScrollToTop";
//import SkipToMainContent from "../SkipToMainContent/SkipToMainContent";

const Main = styled.div`
    padding: 0 10px;
`;

const MainWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 5.2em;
    top: calc(5.2em + constant(safe-area-inset-top));
    top: calc(5.2em + env(safe-area-inset-top));
    bottom: 3.2em;
    bottom: calc(3.2em + constant(safe-area-inset-bottom));
    bottom: calc(3.2em + env(safe-area-inset-bottom));
    overflow-y: overlay;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    @media print {
        position: unset;
    }
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    @media print {
        display: none;
    }
`;

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    @media print {
        display: none;
    }
`;

const StepBarWrapper = styled.div`
    background-color: ${theme.colors.grayLightest};
    padding: 30px 30px;
    border-bottom: 1px solid ${theme.colors.grayLight};

    @media print {
        display: none;
    }
`;

const NavbarWrapper = styled.div``;

const Container = styled.div`
    margin-top: 1.8em;
    margin-bottom: 0.8em;
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
    width: 100%;
`;

const BottomNavButton = styled.button`
    border: none;
    background: transparent;
`;

const ToastContainerWrapper = styled.div`
    .toast-container {
        bottom: 3.2em;
        bottom: calc(3.2em + constant(safe-area-inset-bottom));
        bottom: calc(3.2em + env(safe-area-inset-bottom));
        & > * {
            color: ${theme.colors.white};
            background: ${theme.colors.primary};
        };
        width:399px;
        left:47.5%;
    }

    .toast {
        background: ${theme.colors.primary};
        position: fixed;
        align-content:center;
        align-items: center;
        left:10px;
        right:10px;
        bottom:70px;
        width:300px;
        margin: 0 auto;
    }
`;

class AppWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.updateNavBarItems(),
            bottomDrawerActive: false,
            sideNavVisible: false,
            backUrl: undefined
        };
    }

    componentWillMount() {
        if (window.PointerEvent) {
            document.addEventListener("pointerdown", this.closeDrawer, false);
        } else {
            document.addEventListener("mousedown", this.closeDrawer, false);
        }
    }

    componentDidMount() {
        storage.search.clearSearchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.localizor.language !== this.props.localizor.language) {
            this.setState({ ...this.updateNavBarItems() });
        }
        if (prevProps.location.pathname !== this.props.location.pathname) {
            const { pathname } = prevProps.location;
            const exclude = [
                Routes.Search.path,
                Routes.Bookmarks.path,
                Routes.Home.path
            ];
            let backUrl = undefined;
            if (!exclude.includes(pathname)) {
                backUrl = pathname;
            } else if (pathname === Routes.Home.path) {
                backUrl = undefined;
            } else {
                backUrl = this.state.backUrl;
            }
            this.setState({ backUrl });
        }
    }

    componentWillUnmount() {
        storage.search.clearSearchData();
        if (window.PointerEvent) {
            document.removeEventListener(
                "pointerdown",
                this.closeDrawer,
                false
            );
        } else {
            document.removeEventListener("mousedown", this.closeDrawer, false);
        }
    }

    updateNavBarItems = () => {
        const { localizor } = this.props;
        const items = {
            navBarLeftItems: [
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhatAre.path,
                        content: localizor.strings.info.whatAre.title,
                        id: "what-are-link",
                        key: "whatAre"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.WhyDevelop.path,
                        content: localizor.strings.info.whyDevelop.title,
                        id: "why-develop-link",
                        key: "whyDevelop"
                    }
                },
                {
                    props: {
                        as: NavLink,
                        to: Routes.Basics.path,
                        content: localizor.strings.info.basics.title,
                        id: "basics-link",
                        key: "basics"
                    }
                }
            ],

            bottomNavItems: [
                {
                    props: {
                        as: NavLink,
                        to: Routes.Bookmarks.path,
                        id: "bookmarks-link",
                        onClick: e => {
                            this.displayBackPage(e, Routes.Bookmarks.path);
                        }
                    },
                    icon: Icons.Bookmarks,
                    label: localizor.strings.general.bookmarks,
                    alt: localizor.strings.general.bookmarks
                },
                {
                    props: {
                        as: NavLink,
                        to: "/search",
                        id: "search-link",
                        onClick: e => {
                            this.displayBackPage(e, Routes.Search.path);
                        }
                    },
                    icon: Icons.Search,
                    label: localizor.strings.general.search,
                    alt: localizor.strings.general.search
                },
                {
                    props: {
                        as: Share,
                        id: "share-link"
                    },
                    icon: Icons.Share,
                    label: localizor.strings.general.share,
                    alt: localizor.strings.general.share
                },
                {
                    props: {
                        as: BottomNavButton,
                        id: "about-link",
                        onClick: () => this.toggleBottomDrawer()
                    },
                    icon: Icons.About,
                    label: localizor.strings.general.about,
                    alt: localizor.strings.general.about
                }
            ],

            bottomDrawerItems: [
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-about-link",
                        to: Routes.About.path,
                        onClick: () => this.toggleBottomDrawer()
                    },
                    label: localizor.strings.info.about.title
                },
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-findings-link",
                        to: Routes.Findings.path,
                        onClick: () => this.toggleBottomDrawer()
                    },
                    label: localizor.strings.info.findings.title
                },
                {
                    props: {
                        as: NavLink,
                        id: "bottom-drawer-goods-link",
                        to: Routes.Goods.path,
                        onClick: () => this.toggleBottomDrawer()
                    },
                    label: localizor.strings.info.goods.title
                }
            ]
        };
        return items;
    };

    displayBackPage = (e, backPageUrl) => {
        const { location, history } = this.props;
        const { backUrl } = this.state;

        if (backPageUrl === location.pathname && backUrl) {
            e.preventDefault();
            history.push(backUrl);
        }
    };

    toggleBottomDrawer = () => {
        this.setState({ bottomDrawerActive: !this.state.bottomDrawerActive });
    };

    closeDrawer = e => {
        if (!this.state.bottomDrawerActive) return;
        const aboutBtn = document.getElementById("about-link");
        const bottomDrawer = document.getElementById("bottom-drawer");
        if (aboutBtn.contains(e.target) || bottomDrawer.contains(e.target)) {
            return;
        }
        this.setState({ bottomDrawerActive: false });
    };

    handleSideNavToggle = visible => {
        if (isBrowser()) return;
        this.setState({ sideNavVisible: visible });
    };

    render() {
        const {
            navBarLeftItems,
            bottomNavItems,
            bottomDrawerActive,
            bottomDrawerItems,
            sideNavVisible,
            backUrl
        } = this.state;
        const { location } = this.props;
        return (
            <MobileScrollbar>
                <ScrollToTop>
                    <Header>
                        <NavbarWrapper>
                            {/*<SkipToMainContent/>*/}
<div tabIndex={1                                        }>
                            <BrandStrip />
                            </div>
                            <NavBar
                                leftItems={navBarLeftItems}
                                onSideNavToggle={this.handleSideNavToggle}
                                backUrl={backUrl}
                            />
                        </NavbarWrapper>
                    </Header>
                    <div aria-hidden={sideNavVisible}>
                        <MainWrapper id="main" tabIndex={-1}>
                            {location.pathname.includes("/steps") && (
                                <StepBarWrapper id="step_progess_bar">
                                    <StepProgressBar />
                                </StepBarWrapper>
                            )}
                            <Main>
                                <Container id="container">
                                    <Navigator />

                                    <ToastContainerWrapper>
                                        <ToastContainer
                                            className="toast-container"
                                            toastClassName="toast"
                                            autoClose={false}
                                            closeButton={false}
                                            closeOnClick={false}
                                            position="bottom-center"
                                        />
                                    </ToastContainerWrapper>
                                </Container>
                            </Main>
                        </MainWrapper>
                        <Footer>
                            <BottomNavBar
                                id="bottom-nav-bar"
                                items={bottomNavItems}
                            />
                            <BottomDrawer
                                id="bottom-drawer"
                                active={bottomDrawerActive}
                                items={bottomDrawerItems}
                                onClose={() => {
                                    this.setState({
                                        bottomDrawerActive: false
                                    });
                                }}
                            />
                        </Footer>
                    </div>
                </ScrollToTop>
            </MobileScrollbar>
        );
    }
}

AppWrapper.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    localizor: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(AppWrapper));
