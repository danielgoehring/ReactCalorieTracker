import React, {useState} from 'react';

function Total(props) {
    return (

        
        <div>
            <p>Name: {props.name}</p>
            <p>Calories: {props.calories} kcal</p>
            <p>Carbohydrates: {props.carbs} g</p>
            <p>Protein: {props.protein} g</p>
            <p>Fat: {props.fat} g</p>
            <img src={props.footImg} alt='food' />
        </div>
    )
}

export default Total;