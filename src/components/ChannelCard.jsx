import { Box, CardContent, CardMedia, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utilities/constants';
import { borderRadius } from '@mui/system';

const ChannelCard = ({channelDetail, marginTop}) => (
  <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',height: '326px', margin: 'auto',marginTop , zIndex: 11,position: 'relative', width: { xs: '356px', md: '320px'}}}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff'}}>
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}/>
        <Typography variant='h6' sx={{ margin: '0 auto'}}>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px'}}></CheckCircle>
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard;