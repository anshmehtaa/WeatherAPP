import React, { useState } from "react";
import "./Style.css";
import { useEffect } from "react";

const Tempapp = () => {
    const [ city , setCity] = useState(null);
    const [ search , setSearch] = useState("sirsa");
    useEffect(()=>  {
        const fetchApi = async () => {
            const url = `http://api.weatherapi.com/v1/current.json?key=2b12b3184e5b41db9a784127232609
            &q=${search}`
            const response = await  fetch (url);
            const resJson = await response.json();
            console.log (resJson);
            setCity(resJson.current);
        }
        fetchApi();

    } , [search])
    return (

        <>
            <div className="box">
                <div className="inputData">
                <input 
                    type="search" value={search} className="inputFeild"
                    onChange={(event)=>{setSearch(event.target.value) } }/>
                    </div>

                {(!city ? (
                    <h1 className="notFound">location Not Found</h1>
                ) : (
                    <div>
                    <div className="info">
            <h2 className="location">
            <i className ="fas fa-street-view"> </i>{search}
            </h2>
            <h1 className="temp">
            {city.temp_c} °Cel
            </h1>
            <h3 className="tempmin_max"> Humidity : {city.humidity}% | Wind : {city.wind_kph}km/h</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
                ))}

            </div>
        </>
    )
}

export default Tempapp;