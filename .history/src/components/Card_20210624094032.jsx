import React from 'react';

const Card = (props) => {

    console.log(props);
    return (
        <div>
            <img height='200px' src={ props.country.flag}/>
            <div className="data-container">
                <ul>
                    <li>{props.country.name}</li>
                    <li>{'Capital: ' + props.country.capital}</li>
                    <li>{props.country.population + ' persons'}</li>
                </ul>
            </div>
            
            

        </div>
    );
};

export default Card;