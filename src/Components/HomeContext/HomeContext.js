import React from 'react';
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid2';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';


export default function HomeContext() {
    return(
        <Grid container spacing={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardActionArea>
                    <CardHeader avatar={<Avatar aria-label="School">R</Avatar>} title="School Name" subheader="dates at school"/>
                    <CardMedia component="img" height="194" img="https://source.unsplash.com/random"/>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <p>some info on the school can go here to fill up the space</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardActionArea>
                    <CardHeader avatar={<Avatar aria-label="School">R</Avatar>} title="School Name" subheader="dates at school"/>
                    <CardMedia component="img" height="194" img="https://source.unsplash.com/random"/>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <p>some info on the school can go here to fill up the space</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardActionArea>
                    <CardHeader avatar={<Avatar aria-label="School">R</Avatar>} title="School Name" subheader="dates at school"/>
                    <CardMedia component="img" height="194" img="https://source.unsplash.com/random"/>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <p>some info on the school can go here to fill up the space</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        </Grid>
    );
}