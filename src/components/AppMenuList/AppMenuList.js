import React from 'react';
import { compose } from 'recompose';
import { Link, withRouter } from 'react-router-dom';
import {
  Hidden,
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  Map as MapIcon,
  Info as InfoIcon,
  AddLocation as AddIcon,
  Money as MoneyIcon,
  Mail as MailIcon,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

const AppMenuList = ({ classes, location: { pathname } }) => {
  const AppMenuItem = ({ to, text, icon }) => (
    <MenuItem component={Link} to={to} selected={to === pathname}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );

  return (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <MenuList>
        <AppMenuItem to="/" text="Home" icon={<HomeIcon />} />
        <AppMenuItem to="/map" text="Map" icon={<MapIcon />} />
        <AppMenuItem
          to="/map/locations/add"
          text="Add Location"
          icon={<AddIcon />}
        />
        <AppMenuItem to="/about" text="About" icon={<InfoIcon />} />
        <AppMenuItem to="/donate" text="Donate" icon={<MoneyIcon />} />
        <AppMenuItem to="/contact" text="Contact" icon={<MailIcon />} />
      </MenuList>
    </div>
  );
};

export default compose(
  withRouter,
  withStyles(styles),
)(AppMenuList);
