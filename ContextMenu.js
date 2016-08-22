import React from 'react';

export default class ContextMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            target: ''
        }
    }

    componentDidMount () {
        let context = document.getElementById(this.props.contextID);
        context.addEventListener('contextmenu', () => {this.openContextMenu(event)});

        let menu = document.getElementById('contextMenu');
        menu.addEventListener('mouseleave', () => {this.closeContextMenu()});

    }

    render () {
        return (
            <div id="contextMenu">
                {(() => {
                    let functions = this.props.functions;
                    for (let i = 0; i < functions.length; i++) {
                        let clickHandler = () => {
                            this.closeContextMenu();
                            functions[i].function(this.state.target);
                        }
                        let title = functions[i].title;
                        let icon = functions[i].icon;
                        return (
                            <span onClick={clickHandler}>
                                <svg className="svg__icon">
                                    <use xlinkHref={icon}></use>
                                </svg>
                                {title}
                            </span>
                        )
                    }
                })()}
            </div>
        );
    }

    openContextMenu = (event) => {
        event.preventDefault();
        let menuEnabled = event.target.closest('.menuEnabled');
        if ( menuEnabled ) {
            this.setState({target: event.target});

            let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

            let menu = document.getElementById('contextMenu');

            menu.style.cssText =
                'left: ' + (event.clientX + xOffset) + 'px;' +
                'top: ' + (event.clientY + yOffset) + 'px;' +
                'visibility: visible;';
        }

    }

    closeContextMenu = () => {
        let menu = document.getElementById('contextMenu');
        menu.style.cssText = 'visibility: hidden;';

    }


}
