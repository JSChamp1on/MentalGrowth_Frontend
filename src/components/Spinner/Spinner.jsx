// libs
import React from "react";

// styles
import styleCSS from "./styles.scss";

export const Spinner = ({ payload }) => {
    if (!payload?.loading) {
        return null;
    }

    return (
        <div className={styleCSS.ldsRing}>
            {
                Array(4).fill(<div/>).map((obj, index) => ({ ...obj, key: index }))
            }
        </div>
    );
};