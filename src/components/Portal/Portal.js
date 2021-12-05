// libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const portal = document.getElementById('root');

export const Portal = class extends Component {
    #htmlDomElement = document.createElement('div');

    /**
     * Added htmlDomElement
     */
    componentDidMount() {
        portal.appendChild(this.#htmlDomElement);
    }

    /**
     * Remove htmlDomElement
     */
    componentWillUnmount() {
        portal.removeChild(this.#htmlDomElement);
    }

    /**
     * Export to ref attribute of Higher-Order Component
     * // useRef.current.valueOf //
     * @returns {HTMLDivElement}
     */
    valueOf() {
        return this.#htmlDomElement;
    }

    render() {
        if (this.props.className) {
            this.#htmlDomElement.className = this.props.className;
        }

        if (this.props.style) {
            for (const property in this.props.style) {
                this.#htmlDomElement.style[property] = this.props.style[property];
            }
        }

        return ReactDOM.createPortal(this.props.children, this.#htmlDomElement);
    }
};