// libs
import React, { useEffect } from "react";

// styles
import stylesCSS from "./styles.scss";

// components
import { ContentHeader } from "@components/ContentHeader";
import { Spinner } from "@components/Spinner";
import { Fail } from "@components/Fail";

// containers
import { NavigationPanel } from "@containers/NavigationPanel";
import { ContentArea } from "@containers/ContentArea/ContentArea";
import { HomepageExercises } from "@containers/HomepageExercises";

export const Homepage = (readonlyProps) => {
    useEffect(() => {
        readonlyProps.actionMgTest.call(readonlyProps);
    }, []);

    return (
        <div className={stylesCSS.wrapper}>
            <NavigationPanel className={stylesCSS.navigationPanel}/>
            <ContentArea className={stylesCSS.contentArea}>
                <ContentHeader title="Exercises" description="Strengthen respiratory system"/>
                <HomepageExercises/>
                <Spinner payload={readonlyProps.methodMgTest}/>
                <Fail payload={readonlyProps.methodMgTest}/>
            </ContentArea>
        </div>
    );
};