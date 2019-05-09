import React from 'react';
// import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  mapSection: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row-reverse',
    },
  },
  map: {
    background: '#00ff00',
    flexGrow: 1,
    [theme.breakpoints.up('lg')]: {
      flexGrow: 2,
    },
  },
  results: {
    background: '#00ffff',
    flexGrow: 1,
  },
});

const Map = ({ classes }) => {
  return (
    <>
      <section className={classes.mapSection}>
        <div className={classes.map} />
        <div className={classes.results} />
      </section>
    </>
  );
};

export default withStyles(styles)(Map);
