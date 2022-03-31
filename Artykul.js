import React from 'react';

function artykul(props){
    return(
        <div>
            <h2> {props.tytul} </h2>
            <p> {props.children}</p>
        </div>
    );
}

export default artykul;