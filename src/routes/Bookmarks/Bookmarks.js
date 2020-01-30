
import PropTypes from "prop-types";
import React, { Component } from "react";
import { toast, cssTransition } from "react-toastify";
import styled from "styled-components";
import Icons from "../../components/Icons";
import { withLanguageContext } from "../../components/Language";
import { theme } from "../../modules/config/theme";
import { storage } from "../../modules/storage";
import { getPropByString } from "../../modules/utils";
import Title from "../../components/Title/Title";

const PaddedContent = styled.div`
    padding-left: 25px;
`;

const IconWrapper = styled.button`
    color: ${theme.colors.primary};
    font-size: 2em;
    cursor: pointer;
    margin-left: 10px;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    outline: none;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${theme.colors.grayLight};
    padding: 20px 10px;
    margin-top: 1em;
`;

const BookmarkIcon = styled(Icons.BookmarkCheck)`
    display: block;
    overflow: visible;
`;

const ItemHeaderTitle = styled.h2`
    margin: 0;
`;

const ItemHeader = styled.span`
    font-weight: bold;
    font-family: ${theme.fonts.headings};
`;

const ItemTitle = styled.h2`
    padding: 0;
    margin: 0;
`;

const ItemTitleContainer = styled.div``;

const Item = styled.div``;

const ToastStrong = styled.span`
    font-weight: bold;
    width: 430px;
    padding: 10px;
`;
const Content = styled.div`
    display: flex;
    // width: 440px;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
`;

const UndoButton = styled.button`
    border: none;
    background: ${theme.colors.primaryDarker};
    color: ${theme.colors.white};
    height: auto;
    width: 74px;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
`;

const UndoText = styled.span`
    font-size: 12px;
    width:180px;
    padding: 0 5 px;
`;
class ToastUndo extends Component {
    componentDidMount() {
        if (this.node) {
            this.node.focus();
        }
    }
    handleClick = () => {
        const { bookmark, undo, shouldClose, closeToast } = this.props;
        undo(bookmark);
        if (shouldClose) {
            closeToast();
        }
    };

    render() {
        const { bookmark, localizor } = this.props;
        return (
            <Content>
                <UndoText>
                    {localizor.strings.general.removed}{""}
                    <ToastStrong>
                        {getPropByString(localizor.strings, bookmark.name)}
                    </ToastStrong>{""}
                    {localizor.strings.general.fromBookmarks}.
                </UndoText>{""}
                <UndoButton
                    id="undo-bookmark-btn"
                    ref={node => (this.node = node)}
                    onTouchEnd={e => {
                        e.preventDefault();
                        this.handleClick();
                    }}
                    onClick={this.handleClick}
                >
                    {localizor.strings.general.undo}
                </UndoButton>
            </Content>
        );
    }
}

const Slide = cssTransition({
    enter: "Toastify__slide-enter",
    exit: "Toastify__slide-exit",
    duration: [450, 750],
    appendPosition: true
});

class Bookmarks extends Component {
    constructor(props) {
        super(props);
        const bookmarks = storage.bookmarks.retrieveBookmarks();
        this.state = {
            bookmarks,
            bookmarksToRemove: []
        };
        this.timeoutTimeSecs = 25;
        this.toastId = "bookmarkToast";
        this.lastRemovedIdx = -1;
        this.removeBookmarkBtns = [];

        this.itemTitleContainers = [];
        this.lastItemTitle = null;
    }

    componentWillUnmount() {
        const { bookmarksToRemove } = this.state;
        this.removeBookmarks(bookmarksToRemove);
    }

    removeBookmarks = bookmarksToRemove => {
        if (bookmarksToRemove) {
            bookmarksToRemove.map(bookmark => {
                storage.bookmarks.removeBookmark(bookmark.name);
                return bookmark;
            });
        }
    };

    renderBookmarks = bookmarks => {
        const { localizor } = this.props;
        const { bookmarksToRemove } = this.state;

        const filtered = bookmarks.filter(
            bookmark => !bookmarksToRemove.includes(bookmark)
        );
        return (
            <div>
                <Title
                    title={
                        localizor.strings.general.bookmarks +
                        " - Comply Chain - " +
                        localizor.strings.general.dol
                    }
                />
                {filtered.map((bookmark, i) => {
                    return (
                        <IconContainer
                            id={`bookmark_${bookmark.name}`}
                            key={`bookmark_${bookmark.name}`}
                        >
                            <Item>
                                <PaddedContent>
                                    {bookmark.header && (
                                        <ItemHeaderTitle>
                                            <ItemHeader>
                                                {getPropByString(localizor.strings, bookmark.header)}
                                            </ItemHeader>
                                        </ItemHeaderTitle>
                                    )}
                                    <a href={bookmark.url} ref={node => (this.itemTitleContainers[i] = node)}>
                                        <ItemTitleContainer>
                                            <ItemTitle>
                                                {getPropByString(localizor.strings, bookmark.name)}
                                            </ItemTitle>
                                        </ItemTitleContainer>
                                    </a>
                                </PaddedContent>
                            </Item>
                            <IconWrapper
                                aria-label="Remove bookmark"
                                onClick={() => {this.markForRemoval(bookmark, i);}}
                            >
                                <BookmarkIcon />
                            </IconWrapper>
                        </IconContainer>
                    );
                })}
                {filtered.length === 0 && (
                    <p>{localizor.strings.general.nobookmarks}.</p>
                )}
            </div>
        );
    };

    markForRemoval = (bookmark, i = -1) => {
        const { bookmarksToRemove } = this.state;
        bookmarksToRemove.push(bookmark);
        this.setState({ bookmarksToRemove });
        storage.bookmarks.removeBookmark(bookmark.name);
        const toastComp = (
            <ToastUndo
                undo={this.unmarkForRemoval}
                localizor={this.props.localizor}
                bookmark={bookmark}
            />
        );

        if (toast.isActive(this.toastId)) {
            toast.update(this.toastId, {
                render: toastComp
            });
        } else {
            toast(toastComp, {
                toastId: this.toastId,
                transition: Slide
            });
        }
        if (i !== -1) {
            this.lastRemovedIdx = i;
        }

        if (this.itemTitleContainers[this.lastRemovedIdx]) {
            this.lastItemTitle = this.itemTitleContainers[this.lastRemovedIdx];
        }

        this.undoTimerHandler(false)
    };

    undoTimerHandler(clear=false) {
        let milliseconds = this.timeoutTimeSecs * 1000;
        if (!clear) {
            this.undoTimer = setTimeout(() => {
                this.setItemContainerTitleFocus();
                toast.dismiss(this.toastId);
            }, milliseconds);
        } else if (clear) {
            clearTimeout(this.undoTimer);
            let lastItemIdx = this.itemTitleContainers.length - 1;
            this.itemTitleContainers.splice(lastItemIdx, 1);
            this.itemTitleContainers.splice(lastItemIdx, 0, this.lastItemTitle);
            this.itemTitleContainers.splice(lastItemIdx+1, 0, null);
            this.undoTimer = setTimeout(() => {
                this.setItemContainerTitleFocus();
                toast.dismiss(this.toastId);
            }, 0);
        }
    }

    setItemContainerTitleFocus() {
        let lengthItems = this.itemTitleContainers.length;
        let lastItemIdx = lengthItems - 1;
        if (this.itemTitleContainers[lastItemIdx] === null) {
            this.itemTitleContainers.splice(lastItemIdx, 1);
        }
        if (this.lastRemovedIdx === lastItemIdx || lengthItems === 1) {
            this.lastRemovedIdx = 0;
        }
        if (this.itemTitleContainers[this.lastRemovedIdx]) {
            let focusIdx = this.lastRemovedIdx;
            this.itemTitleContainers[focusIdx].focus();
        }
    }

    unmarkForRemoval = bookmark => {
        const { bookmarksToRemove } = this.state;
        const idx = bookmarksToRemove.indexOf(bookmark);
        if (idx !== -1) {bookmarksToRemove.splice(idx, 1);}
        this.setState({ bookmarksToRemove });
        storage.bookmarks.toggleBookmark(
            bookmark.name,
            bookmark.prefix,
            bookmark.header,
            bookmark.url
        );

        this.undoTimerHandler(true)
    };

    render() {
        const { bookmarks } = this.state;
        const { localizor } = this.props;
        return (
            <div>
                <h1>{localizor.strings.general.bookmarks}</h1>
                {bookmarks.length === 0 && (
                    <p>{localizor.strings.general.nobookmarks}.</p>
                )}
                {bookmarks.length > 0 && (
                    <div>{this.renderBookmarks(bookmarks)}</div>
                )}
            </div>
        );
    }
}

Bookmarks.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Bookmarks);
