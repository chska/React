import React from 'react';

// function pracownik(props){
//     return(
//         <div>
//             <h1>{props.nazwisko} {props.imie}</h1>
//             <h2>Stanowisko: {props.stanowisko}</h2>
//             <p>{props.children}</p>
//         </div>
//     )
// }

const pracownik = (props) =>{
    return(
        <div>
            <h1>{props.nazwisko} {props.imie}</h1>
            <h2>Stanowisko: {props.stanowisko}</h2>
            <p>{props.children}</p>
        </div>
    )
}

export default pracownik;