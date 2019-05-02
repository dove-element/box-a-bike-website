import React from 'react';
import { Drawer, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppMenuList from '../AppMenuList/AppMenuList';
import { drawerWidth } from '../../utilities/constants';

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

const AppMenu = ({ mobileOpen, onMobileOpenToggle, container, classes }) => {
  return (
    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={onMobileOpenToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenuList />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <AppMenuList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default withStyles(styles)(AppMenu);
