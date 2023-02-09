
import {Navigate, Route, Routes} from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes.jsx";
import JournalRoutes from "../journal/routes/JournalRoutes.jsx";
import CheckingAuth from "../ui/components/CheckingAuth";

import {useCheckAuth} from "../hooks";


const AppRouter = () => {
    const {status} =  useCheckAuth();

    if(status==='checking'){
        return <CheckingAuth/>
    }

    return (
        <Routes>

            {
                status === 'authenticated'
                    ? <Route path="/*" element={<JournalRoutes/>}></Route>
                    : <Route path="/auth/*" element={<AuthRoutes/>}></Route>
            }

            <Route path="*" element={<Navigate to='/auth/login'/>}></Route>
            {/*<Route path="/auth/*" element={<AuthRoutes/>}></Route>*/}


            {/*<Route path="/*" element={<JournalRoutes/>}></Route>*/}

        </Routes>
    );
};

export default AppRouter;
