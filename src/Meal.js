import React, {useState} from 'react';

function Meal(props) {
    return (
        <div>
            <p>Name: {props.data.parsed[0].food.label}</p>
            <p>Amount: {props.amount} oz</p>
            <p>Calories: {props.calories} kcal</p>
            <p>Carbohydrates: {props.carbs} g</p>
            <p>Protein: {props.protein} g</p>
            <p>Fat: {props.fat} g</p>
        </div>
    )
}

export default Meal;

