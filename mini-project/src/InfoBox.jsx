import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox( {info}){
    let INIT_URL = "https://images.unsplash.com/photo-1589011352120-510c9fca6d31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let COLD_URL ="https://images.unsplash.com/photo-1534324482290-e147f564f5b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGR8ZW58MHx8MHx8fDA%3D"
    let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D"
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 100? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="span">
          {info.city} {info.humidity > 100? <ThunderstormIcon></ThunderstormIcon> : info.temp > 20 ? <WbSunnyIcon></WbSunnyIcon> : <AcUnitIcon></AcUnitIcon>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <p>Temperature : {info.temp}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min Temperature : {info.tempMin}&deg;C</p>
            <p>Max Temperature : {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like : {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
            </div>
        </div>
    )
}