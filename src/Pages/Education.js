import React from 'react'
import Grid from '@mui/material/Grid2';
import { studying } from './Consts/eduInfo';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';


const Education = () => {
  return (
    <Grid container>
      {studying.map(studying => (
        <Grid item key={studying.id} xs={12} md={6}>
          <Card>
          <CardHeader avatar={<Avatar aria-label={studying.eduType}>R</Avatar>} title={studying.school}
          subheader={studying.years}>
            {studying.eduType}
          </CardHeader>
          <CardContent>
            {/* CONTENT OF CARD HERE */}
          </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Education