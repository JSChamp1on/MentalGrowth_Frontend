// libs
import React, { useRef } from "react";

// styles
import stylesCSS from "./styles.scss";

// images
import closeSVG from "@images/close.svg";

export const Modal = (readonlyProps) => {
    const {
        onClickClose,
        children,
    } = readonlyProps;

    const closeArea = useRef(null);

    const onClickArea = (event) => {
        if (closeArea.current === event.target) {
            onClickClose(event);
        }
    };

    return (
        <div ref={closeArea} className={stylesCSS.blur} onClick={onClickArea}>
            <div className={stylesCSS.modal}>
                { children }
                <button type="button" className={stylesCSS.close} onClick={onClickClose}>
                    <img src={closeSVG} alt="Close"/>
                </button>
            </div>
        </div>
    );
};