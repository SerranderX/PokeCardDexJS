import React, { Fragment } from 'react';
import { Loading } from '@components/Loading/Loading';
import { HelmetSection } from '@components/HelmetSection/HelmetSection'
import "@pages/LoadingPage/LoadingPage.css";

export const LoadingPage = () => {
    return (
        <Fragment>
            <HelmetSection sectionName={"Loading..."} />
            <div className="Loading-page-container">
                <Loading centered={true}/>
            </div>
        </Fragment>
    );
};