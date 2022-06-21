import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import MuiDrawer from '@mui/material/Drawer';
import Container from "@mui/material/Container";
import {Route, Routes, useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../ComponentDashBord/Chart";
import Deposits from "../ComponentDashBord/Deposits";
import Orders from "../ComponentDashBord/Orders";
import {WorkContext} from "../WorkContext";
import {createTheme, styled, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkerImage from "./WorkerImage";
import ResponsiveWorker from "./ResponsiveWorker";
import ResponsiveDateTimePickers from "./ResponsiveDateTimePickers";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {MainListItems, secondaryListItems} from "../ComponentDashBord/listItems";
import Title from "../ComponentDashBord/Title";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import {useState} from "react";

    function WeekSelectionUser (props) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'WeekSelectionUser © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);
const mdTheme = createTheme();

function WeekSelectionContent () {

    const [users, setUsers] = React.useState([{"id": -1}]);
    const navigate = useNavigate();
    const getUsers = async (user) => {
        const id = localStorage.getItem('id')
        const rawData = await fetch('http://localhost:5000/users/' + id);
        const data = await rawData.json();
        setUsers([{"id": -1}, ...data])
    }
    React.useEffect(() => {
        getUsers();
    }, [])
    const createDashBoard = () => {
        navigate('/dashboard')
        alert("ok");
    }

    const createAppointment = () => {
        navigate('/dashboard/resworker')
        alert("ok");
    }
    const createPedicure = () => {
        navigate('/dashboard/workerimg')
        alert("U R THE REAL MAN");
    }

    const createFacial = () => {
        navigate('/dashboard/appointment')
        alert("U R THE REAL WOMEN");
    }

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };


    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="overline"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Hi
                            <div id={'user'} onChange={(event)=>getUsers(event.target)}>
                                {
                                    users.map( r=> <option key={r.id} value={r.email}>{r.firstName}</option>)
                                }
                            </div>
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <MainListItems
                            clickDash={createDashBoard}
                            clickHair={createAppointment}
                            clickPedicure={createPedicure}
                            clickFacial={createFacial}

                        />
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <div></div>
                    <Routes>
                        <Route path={'workerimg'}  element={<WorkerImage/>}/>
                        <Route path={'resworker'}  element={<ResponsiveWorker/>}/>
                        <Route path={'appointment'}  element={<ResponsiveDateTimePickers/>}/>
                        <Route path={'/'}  element={<Content/>}/>
                    </Routes>
                </Box>

            </Box>
        </ThemeProvider>
    );
}
    function Content(){
        const [value, setValue] = React.useState(null);
        const [hours, setHours] = React.useState([]);
        const ctx = React.useContext(WorkContext);

       // const [meeting, setMeeting] = useState({userId:null,workerId: null,roleId: null, meeting:null });

        const createTask =async (time) => {
            const task = {};
            task.userid = ctx.meeting.userId;
            task.workerId = ctx.meeting.workerId;
            task.roleId = ctx.meeting.roleId;
            task.date = ctx.meeting.meeting;

            const rawRes = await fetch( `http://127.0.0.1:5000/workerChoice/`,{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({task})
            });
        }

        const getAvailableTime = async (newValue) => {

            const date = newValue.toISOString().split('T')[0];
            console.log(date, ctx.meeting);

            const rawRes = await fetch( `http://127.0.0.1:5000/workerChoice/${ctx.meeting.workerId}?date=${date}`);
            setValue(newValue);

            console.log(rawRes);

            const res = await rawRes.json();
            console.log(res);//בדיקות על הconsole
            setHours(res.workingHours)
            if(rawRes.ok === true){

              //  navigate('/dashboard')
            }
            else{
                alert(res.msg)
            }
            console.log('response from server', res)
        };

        return(
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                width :450,
                                height: 500,
                            }}
                        >
                            <Title>Today</Title>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Basic example"
                                    value={value}
                                    onChange={(newValue) => {
                                        getAvailableTime(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Paper>
                    </Grid>

                    {/* Recent Deposits */}
                    {/*
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                        </Paper>
                    </Grid>
                    */}
                    {/* Recent Orders */}

                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Title>Hours</Title>
                            {hours.map(h => <div key={h} onClick={()=> createTask(h)}>{h}</div>)}

                        </Paper>
                    </Grid>

                </Grid>
                <WeekSelectionUser sx={{ pt: 4 }} />
            </Container>
        )
            }

export default function WeekSelection() {
    return <WeekSelectionContent />;
}