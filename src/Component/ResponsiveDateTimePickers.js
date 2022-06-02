import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';

export default function ResponsiveDateTimePickers() {
    const [value, setValue] = React.useState(new Date('2022-01-01T00:00:00.000Z'));
    const [roles, setRoles] = React.useState([{"idrole":-1,"name":"select a role"}]);
    const [workers, setWorkers] = React.useState([{"idworkers":-1,"firstname":"select a worker", lastname:"", imagework:""}]);


    const saveTheDate = ()=>{
            const id = localStorage.getItem('id');
            console.log(id,value.toISOString());
    }

    const getRoles =async ()=>{
        const rawData = await fetch('http://localhost:5000/roles');
        const data = await rawData.json();
        setRoles([{"idrole":-1,"name":"select a role"}, ...data])
    }

    const getWorkers = async(role) => {
        const rawData = await fetch('http://localhost:5000/workers?'+'role='+role);
        const data = await rawData.json();
        setWorkers([ ...data])
    }

    React.useEffect(()=>{
        getWorkers(2);
    }, [])

    const selectWorker = (event) => {
        alert(event.target.id)
    }
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>

                    <DateTimePicker
                        label="Responsive"
                        renderInput={(params) => <TextField {...params} />}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Stack>

            </LocalizationProvider>

            <label htmlFor={'workers'}>Select a worker</label>
                {
                    workers.map( r=>  <div onClick={selectWorker} key={r.idworkers} id={r.idworkers} > {r.firstname + ' ' + r.lastname + ''+ r.imagework}</div>)
                }

            <label htmlFor={'range'}>Select a range of time</label>
            <input type={'number'} id={'range'} />
            <button onClick={saveTheDate}> Save the appointment</button>
        </div>
    );
}
