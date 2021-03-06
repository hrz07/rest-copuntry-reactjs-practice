import React from 'react';

const Country = ({ countryData }) => {

    return (
        <div>
            <div className="card my-4 rounded-lg" style={{width: '18rem'}}>
                <img src={countryData.flags.png} className="card-img-top" alt="..." />
                    <div className="card-body shadow-lg">
                        <h4 className="card-title fw-bold text-danger">{countryData.name.common}</h4>
                        <p className="card-text m-0 p-0">Capital City : {countryData.capital}</p>
                        <p className="card-text m-0 p-0">Population : {countryData.population}</p>
                        <p className="card-text m-0 p-0">Continents : {countryData.continents}</p>
                        <p className="card-text m-0 p-0">Area : {countryData.area}</p>
            
                       
                    </div>
            </div>

        </div>
    );
}

export default Country;
