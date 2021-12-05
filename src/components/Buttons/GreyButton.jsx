// libs
import React from "react";

// styles
import stylesCSS from "./styles.scss";

export const GreyButton = ({ label }) => {
    return (
        <button type="button" className={stylesCSS.greyButton}>
            { label }
        </button>
    );
};