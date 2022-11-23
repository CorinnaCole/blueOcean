/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BirdBinderEntry = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bird Name
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Last Seen: ?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Spotted At: ?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            personal note or first 100 charaters of it.
          </Typography>
        </CardContent>
        {/* <CardActions>

      </CardActions> */}
      </Card>
    </div>
  );
};

export default BirdBinderEntry;
