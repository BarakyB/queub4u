import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Grid} from "@mui/material";

export const MainListItems = (props) => {
    return (
        <React.Fragment>
                <ListItemButton onClick={props.clickDash}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="DashBoard"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon/>
                </ListItemIcon>
                <ListItemText primary="Orders"/>
            </ListItemButton>
            <ListItemButton onClick={props.clickHair}>
                <ListItemIcon>
                    <ContentCutIcon/>
                </ListItemIcon>
                <ListItemText primary="Hair Removal"/>
            </ListItemButton>
            <ListItemButton onClick={props.clickPedicure}>
            <ListItemIcon>
                    <SwipeRightIcon/>
                </ListItemIcon>
                <ListItemText primary="Pedicure Manicure"/>
            </ListItemButton>
            <ListItemButton onClick={props.clickFacial}>
            <ListItemIcon>
                    <FaceRetouchingNaturalIcon/>
                </ListItemIcon>
                <ListItemText primary="Facial Treatment"/>
            </ListItemButton>
        </React.Fragment>
    )
}


export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);