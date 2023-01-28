import React from "react";
import {useRouteError} from 'react-router-dom'


export default function NotFoundURLPage() {
    const error = useRouteError();
    return(
        <div>
            <h6>{error.statusText || error.message}</h6>
            <h1>OOPS!</h1>
            <h4>We can not find this URL</h4>
            <h6>Please, back to the previous page</h6>
            <p>If the problem persists, please contact "rafaelfacundo63@gmail.com"</p>
        </div>
    );
}