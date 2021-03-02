import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        
            margin: theme.spacing(6),
            width: '250px',
            height: '60px',
           
    },
}));
const Listas = () => {
    const classes = useStyles();
    return (
        <div>
            <List component='nav'>
                <ListItem button className={classes.root}
                
                >
                    <ListItemIcon>
                        <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard'/>
                </ListItem>
                <Divider/>
                <ListItem button className={classes.root}>
                    <ListItemIcon>
                        <LibraryBooksRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Norma 035'/> 
                </ListItem>
                <Divider/>
                <ListItem button className={classes.root}>
                    <ListItemIcon>
                        <AssessmentRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Resultados'/>
                       
                </ListItem>
            </List>
        </div>
    )
}

export default Listas
