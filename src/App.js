import * as React from 'react';
import SignUpUser from "./Component/SignUp";
import Demo from './Demo';
import PrimarySearchAppBar from "./Component/AppBar";
import { Routes , Route} from 'react-router-dom';
import ResponsiveDateTimePickers from "./Component/ResponsiveDateTimePickers";


function App() {
    return (
        <div className={"App"}>
            <Routes>

                <Route path={'/demo'}  element={<Demo/>}/>
                <Route path={'/'} element={<SignUpUser/>} />
            </Routes>
        </div>
    );
}

export default  App;