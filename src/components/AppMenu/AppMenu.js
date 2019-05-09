import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { toggleSidebar } from '../../actions/navigationActions';
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

const AppMenu = ({ isSidebarOpen, toggleSidebar, classes }) => {
  return (
    <nav className={classes.drawer}>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={isSidebarOpen}
          onClose={toggleSidebar}
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

AppMenu.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.navigation.isSidebarOpen,
  };
}

const mapDispatchToProps = { toggleSidebar };

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AppMenu);
