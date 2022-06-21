import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function ResponsiveWorker() {
    const [roles, setRoles] = React.useState([{"idrole":-1,"name":"select a role"}]);
    const [workers, setWorkers] = React.useState([{"idworkers":-1,"firstname":"select a worker", lastname:"", imagework:""}]);




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
        <React.Fragment>
            <Container maxWidth="sm">
                <Box sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                            backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}>

            <label htmlFor={'workers'}><br/><br/><br/><br/>Select a worker gggggdsvgdsf</label>
            {
                workers.map( r=>  <div onClick={selectWorker} key={r.idworkers} id={r.idworkers} > {r.firstname + ' ' + r.lastname + ''+ r.imagework}</div>)
            }

            <label htmlFor={'range'}>Select a range of time</label>
            <input type={'number'} id={'range'} />
                </Box>
            </Container>
        </React.Fragment>

</div>
    );
}
