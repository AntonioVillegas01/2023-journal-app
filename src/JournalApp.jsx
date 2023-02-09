import React from 'react';
import AppRouter from "./router/AppRouter.tsx";
import AppTheme from "./theme/AppTheme.jsx";

const JournalApp = () => {
    return (
        <>
            <AppTheme>
                <AppRouter/>
            </AppTheme>
        </>
    );
};

export default JournalApp;
