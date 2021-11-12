import React from 'react';
import './ReviewCard.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const ReviewCard = ({review}) => {
    const [expanded, setExpanded] = React.useState(false);

    
    return (
        <Grid style={{marginTop: '20px'}} item xs={12} sm={6} md={4}>
             <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } 
        title={review.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={review.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {review?.name1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {review.description}
        </Typography>
        <Rating
        name="simple-controlled"
        value={review.rating}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
        </Grid>
       
    );
};

export default ReviewCard;