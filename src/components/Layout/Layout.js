import React from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import AppMenu from '../AppMenu/AppMenu';
import { drawerWidth } from '../../utilities/constants';

const styles = theme => {
  return {
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'stretch',
      height: '100%',
    },
    contentMain: {
      overflowY: 'auto',
      flexGrow: 1,
      [theme.breakpoints.up('md')]: {
        marginLeft: drawerWidth,
      },
    },
    footer: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.up('md')]: {
        marginLeft: drawerWidth,
      },
    },
  };
};

function Layout({ classes, children }) {
  return (
    <>
      <CssBaseline />
      <AppMenu />
      <div className={classes.content}>
        <Header />
        <main className={classes.contentMain}>{children}</main>
        <footer className={classes.footer}>
          <Typography color="inherit" align="center" variant="caption">
            Copyright &copy; {new Date().getFullYear()} Dove Element Ltd
          </Typography>
        </footer>
      </div>
    </>
  );
}

export default withStyles(styles)(Layout);
