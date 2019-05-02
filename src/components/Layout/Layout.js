import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import AppMenu from '../AppMenu/AppMenu';
import { drawerWidth } from '../../utilities/constants';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
  },
});

class Layout extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, children } = this.props;

    return (
      <>
        <CssBaseline />
        <Header onMenuClick={this.handleDrawerToggle} />
        <AppMenu
          mobileOpen={this.state.mobileOpen}
          onMobileOpenToggle={this.handleDrawerToggle}
        />
        <main className={classes.content}>{children}</main>
      </>
    );
  }
}

export default withStyles(styles)(Layout);
