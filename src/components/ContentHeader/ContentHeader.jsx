// libs
import React from "react";

// style
import styleCSS from "./styles.scss";

export const ContentHeader = (readonlyProps) => {
    const {
        title,
        description,
    } = readonlyProps;

    return <>
        {
            description
            ? <>
                <h2>{ title }</h2>
                <span className={styleCSS.description}>{ description }</span>
        
            </>
            : <>
                <h2 className={styleCSS.h2}>{ title }</h2>
            </>
        }
    </>;
};