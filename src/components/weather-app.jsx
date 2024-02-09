import searchIcon from '../Assets/search.png'
import cloudIcon from '../Assets/cloud.png'
import './styles.css'
import { useState } from 'react'

export default function WeatherApp(){

    const [inputValue, setInputValue] = useState('')
    const temp = document.getElementsByClassName("temp")
    const location = document.getElementsByClassName("loc")

    const api_key = "c4e7515b3fc8e86b9763959e978b0eef"

    const Api = async function(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=${api_key}`
        const response = await fetch(url)
        const result = await response.json()
        

        temp[0].innerHTML = Math.floor(result.main.temp) + ' c'
        location[0].innerHTML = result.name
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="container">
            <div className="search">
                <input type="text" placeholder="Search" className='input' value={inputValue} onChange={handleInputChange}/>
                <div className="search-icon" onClick={Api}>
                    <img src={searchIcon} alt="Search Icon"/>
                </div>
            </div>
            <div className="main">
                <div className="main-icon">
                    <img src={cloudIcon} alt="Cloud Icon"/>
                </div>
                <div className="temperature">
                    <p className='temp'>21 c</p>
                </div>
                <div className="country">
                    <p className='loc'>New York</p>
                </div>
            </div>
        </div>
    );
}
