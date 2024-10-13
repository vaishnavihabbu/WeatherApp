import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "43886fa5582f09c580feb1f03593c377";

    let getWeatherInfo = async ()=>{
        try{
            let res =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let response = await res.json();
        console.log(response);
        let weatherInfo = {
            city:city,
            temp : response.main.temp,
            tempMin : response.main.temp_min,
            tempMax : response.main.temp_max,
            humidity: response.main.humidity,
            feels_like : response.main.feels_like,
            weather : response.weather[0].description
        }

        console.log(weatherInfo);
        return weatherInfo;
        }catch(err){
            throw err;
        }
    }
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=  async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return (
        <div className='SearchBox'>
        <form action="" onSubmit={handleSubmit}>
        <TextField id="city" label="City name" variant="outlined" required onChange={handleChange} />
        <br></br> <br />
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>No data available!</p>}
        </form>
        </div>
    );
}