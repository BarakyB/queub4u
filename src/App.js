import * as React from 'react';
import SignUpUser from "./Component/SignUp";
import Demo from './Demo';
import PrimarySearchAppBar from "./Component/AppBar";
import { Routes , Route} from 'react-router-dom';
import StaticTimePicker from "./Component/StaticTimePicker";

function App() {
    return (
        <div className={"App"}>
            <PrimarySearchAppBar/>
            <SignUpUser/>
            <Routes>
                <Route path={'/'} component={<SignUpUser/>} />
                <Route path={'/demo'} component={<Demo/>}/>
                <Route path={'/staticTimePicker'} component={<StaticTimePicker/>}/>

            </Routes>
        </div>
    );
}

export default  App;