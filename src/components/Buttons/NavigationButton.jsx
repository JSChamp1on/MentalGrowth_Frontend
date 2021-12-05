// libs
import React from "react";

// styles
import stylesCSS from "./styles.scss";

export const NavigationButton = ({ imgUrl, label, bactive }) => {
    const jImg = {
        width: 20,
        height: 20,
        backgroundColor: bactive ? '#161616' : '#8D8D9C',
        mask: `url(${imgUrl}) no-repeat center`,
        WebkitMask: `url(${imgUrl}) no-repeat center`,
    };

    return (
        <button type="button" className={[stylesCSS.navigationButton, bactive ? stylesCSS.active : ''].join(' ')}>
            <div style={jImg}/>
            <span>{ label }</span>
        </button>
    );
};