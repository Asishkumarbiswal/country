import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import './Countries.css';

function Countries() {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
                const data = await response.json();
                setCountry(data);
            } catch (error) {
                console.log("Error fetching data: ",error);
            } 
        }
        fetchData();
    },[]);

    return ( 
        <div className='Countries'>
            {
                country.map((country) => {
                   return <CountryCard key={country.name} image={country.flag} name={country.name}/>
                })
            }
        </div>
     );
}

export default Countries;