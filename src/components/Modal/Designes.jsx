// libs
import React, { Fragment } from "react";

// styles
import styleCSS from "./styles.scss";

export const Popup1 = (readonlyProps) => {
    const {
        title,
        large_image,
        steps,
    } = readonlyProps;

    return <>
        <img className={styleCSS.popup1} src={large_image} alt={title}/>
        <div className={styleCSS.popup1}>
            <h2>{ title }</h2>
            {
                steps?.map(({ text }, index) => (
                    <Fragment key={index}>
                        <span>Step { ++index }</span>
                        <p>{ text }</p>
                    </Fragment>
                ))
            }
        </div>
    </>;
};