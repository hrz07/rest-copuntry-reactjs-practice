import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div>
            <h3 className='text-center fw-bold my-5'>{data.length} Countries Data Fount</h3>
            <div className='container row row-cols-3 mx-auto'>
                {
                    data.map(country => <Country key={country.name.common} countryData={country} />)
                }
            </div>



        </div>
    );
}

export default Countries;
