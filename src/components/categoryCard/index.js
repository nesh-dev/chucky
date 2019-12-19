import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core'
import CardComponent from './cardComponent';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MediaCard(props) {
  const { categories, catChange } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      {categories && categories.map((item) => (
        <CardComponent
          item={item}
          classes={classes}
          catChange={catChange} />
      ))}
    </React.Fragment>

  );
}
