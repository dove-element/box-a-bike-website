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
  menuLists: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const AppMenuList = ({ classes, location: { pathname } }) => {
  const AppMenuItem = ({ to, text, icon }) => (
    <MenuItem component={Link} to={to} selected={to === pathname}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );

  return (
    <>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <div className={classes.menuLists}>
        <MenuList>
          <AppMenuItem to="/" text="Home" icon={<HomeIcon />} />
          <AppMenuItem to="/map" text="Map" icon={<MapIcon />} />
          <AppMenuItem
            to="/map/locations/add"
            text="Add Location"
            icon={<AddIcon />}
          />
        </MenuList>
        <MenuList>
          <AppMenuItem to="/about" text="About" icon={<InfoIcon />} />
          <AppMenuItem to="/donate" text="Donate" icon={<MoneyIcon />} />
          <AppMenuItem to="/contact" text="Contact" icon={<MailIcon />} />
        </MenuList>
      </div>
    </>
  );
};

export default compose(
  withRouter,
  withStyles(styles),
)(AppMenuList);
