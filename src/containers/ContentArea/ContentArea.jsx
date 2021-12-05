// libs
import React from "react";

// styles
import stylesCSS from "./styles.scss";

export const ContentArea = (readonlyProps) => {
    const {
        className: classNameHOK,
        children,
    } = readonlyProps;

    return <>
        <div className={[classNameHOK, stylesCSS.contentAreaBlock].join(' ')}>
            { children }
        </div>
    </>;
};