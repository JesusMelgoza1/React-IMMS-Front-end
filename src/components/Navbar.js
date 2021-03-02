import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core'
import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
 
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
    account:{
        flexGrow:1
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
        
}))

const Navbar = (props) => {
    const classes = useStyles()
    return (
        
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                        onClick={() => props.accionAbrir()}
                    >
                        
                        <MenuRoundedIcon />
                    </IconButton>
                    <Typography variant='h6' className= {classes.account}>
                        Norma 035 IMSS
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        >
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
         
    )
}

export default Navbar
