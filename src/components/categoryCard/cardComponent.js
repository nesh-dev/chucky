import React from 'react'
import {Card, CardContent, CardActionArea, Typography } from '@material-ui/core'

export default function cardComponent(props) {
    const {item, classes, catChange} = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" onClick={catChange}>
                            {item} 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
