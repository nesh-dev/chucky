import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardActionArea, Paper, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MediaCard(props) {
  const { categories } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid item xs={4}>
      {categories.map((item) => (
      <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
      </Grid>
   
  </Paper>
  );
}
