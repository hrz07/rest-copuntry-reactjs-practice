import React from 'react';

const Country = ({ countryData }) => {
    console.log(countryData.name.common)

    return (
        <div>
            <div className="card my-2" style={{width: '18rem'}}>
                <img src={countryData.flags.png} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title fw-bold text-danger">{countryData.name.common}</h4>
                        <p className="card-text m-0 p-0">Capital City : {countryData.capital}</p>
                        <p className="card-text m-0 p-0">Population : {countryData.population}</p>
                        <p className="card-text m-0 p-0">Continents : {countryData.continents}</p>
                       
                    </div>
            </div>

        </div>
    );
}

export default Country;
