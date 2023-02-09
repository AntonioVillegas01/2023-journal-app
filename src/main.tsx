
// @ts-ignore
import ReactDOM from 'react-dom/client'
import React from "react";
import JournalApp from "./JournalApp.jsx";
import './styles.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";



ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <JournalApp/>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>,
)
