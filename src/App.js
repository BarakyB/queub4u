import * as React from 'react';
import SignUpUser from "./Component/SignUp";
import DashBoard from "./ComponentDashBord/DashBoard";
import SignInUser from "./Component/SignIn";
import ResponsiveDateTimePickers from "./Component/ResponsiveDateTimePickers";
import ResponsiveWorker from "./Component/ResponsiveWorker";
import WorkerImage from "./Component/WorkerImage";
import WeekSelection from "./Component/WeekSelection";
import {WorkContext} from "./WorkContext";

import Demo from './Demo';
import { Routes , Route} from 'react-router-dom';
import {useState} from "react";

function App() {
    const [meeting, setMeeting] = useState({userId:null,workerId: null,roleId: null, meeting:null });
    return (
        <div className={"App"}>
            <WorkContext.Provider value={{meeting, setMeeting}}>
            <Routes>
                <Route path={'/WeekSelection'}  element={<WeekSelection/>}/>
                <Route path={'/WorkerImage'}  element={<WorkerImage/>}/>
                <Route path={'/ResponsiveWorker'}  element={<ResponsiveWorker/>}/>
                <Route path={'/ResponsiveDateTimePickers'}  element={<ResponsiveDateTimePickers/>}/>
                <Route path={'/signin'}  element={<SignInUser/>}/>
                <Route path={'/dashboard/*'}  element={<DashBoard/>}/>
                <Route path={'/demo'}  element={<Demo/>}/>
                <Route path={'/'} element={<SignUpUser/>} />
            </Routes>
            </WorkContext.Provider>
        </div>
    );
}

export default  App;