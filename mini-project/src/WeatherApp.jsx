import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function (){
    const [weatherInfo , setWeatherInfo]=useState({
        city : "Pune",
        feels_like:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather :"haze"
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }


    return (
        <div style ={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}