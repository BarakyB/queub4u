import * as React from 'react';
import SignUpUser from "./Component/SignUp";
import DashBoard from "./ComponentDashBord/DashBoard";

import Demo from './Demo';
import { Routes , Route} from 'react-router-dom';

function App() {
    return (
        <div className={"App"}>
            <Routes>
                <Route path={'/dashboard'}  element={<DashBoard/>}/>
                <Route path={'/demo'}  element={<Demo/>}/>
                <Route path={'/'} element={<SignUpUser/>} />
            </Routes>
        </div>
    );
}

export default  App;