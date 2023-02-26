import React from 'react';
import { Link, link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utilities/constants';

const VideoCard = ({ video: { id: { videoId}, snippet } }) => {
  return (
    <Card className='video-card' sx={{width: {  xs: '100%', sm: '358px', md: '320px'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
        <CardMedia 
          alt= {snippet?.title}
          sx={{width: {xs: '100%', sm: '358px', md: '320px'}, height: 180}}
          image={snippet?.thumbnails?.high?.url}/>
      </Link>
      <CardContent className='video-card__content' sx={{ backgroundColor: '#1e1e1e', height: '106px'}}>
      <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
        <Typography className='video-card__title' variant='subtitle1' fontWeight='bold' color='#fff'>
          {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)} 
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : `/channel/${demoChannelUrl}`}>
        <Typography className='video-card__subtitle' variant='subtitle2' fontWeight='bold' color='#e3e3e3'>
          {snippet?.channelTitle.slice(0, 50) || demoChannelTitle.slice(0, 50)} 
          <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}></CheckCircle>
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;