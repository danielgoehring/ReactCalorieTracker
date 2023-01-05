import React, {useState} from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Icon from '@mui/material/Icon';
import DeleteIcon from '@mui/icons-material/Delete';
import MealList from './MealList';
import NavBar from './NavBar';
import { Typography } from '@mui/material';
import exercise from './icons/exercise.png';

// const addFood = newFood => {
//     setFood([...addFood, {}])
// }

function CalorieTracker() {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
    const [calories, setCalories] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [numOunces, setNumOunces] = useState(0);
    const [numServing, setNumServing] = useState(0);

    async function fetchAPI() {
        const APP_ID = "7020f5e0";
        const APP_KEY = "132102389cb716fbe45af39b17af701a"
        const searchQuery = "4 ounces of chicken breast";
        const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=${name}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const response = await fetch(baseURL);
        const data = await response.json();
        setData(data);

        console.log(data);
        console.log(data.parsed[0].food.nutrients.FAT);
        
    setNumOunces(amount);
    const numServings = (1/4) * (amount/1); // desired number of servings
    const servingSize = data.parsed[0].yield; // serving size in the API response
    const totalQuantity = numServings * servingSize; // total quantity of the food

    // Extract the desired nutrient data from the API response and multiply it by the number of servings
    const calories = data.parsed[0].food.nutrients.ENERC_KCAL * numServings;
    const carbs = data.parsed[0].food.nutrients.CHOCDF * numServings;
    const protein = data.parsed[0].food.nutrients.PROCNT * numServings;
    const fat = data.parsed[0].food.nutrients.FAT * numServings;

    setCalories(calories);
    setCarbs(carbs);
    setProtein(protein);
    setFat(fat);
    

    console.log(`Total quantity: ${totalQuantity} servings`);
    console.log(`Calories: ${calories} kcal`);
    console.log(`Carbohydrates: ${carbs} g`);
    console.log(`Protein: ${protein} g`);
    console.log(`Fat: ${fat} g`);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        fetchAPI();
    }

    /////////////////////////////////////////////////

    return (
        <>
        
        <CssBaseline />
        <NavBar/>
        <div style={{marginTop: '100px', marginBottom: '100px'}}>
        <Typography style={{letterSpacing: '7px', marginBottom: '20px'}} variant="h1">CalorieCounter</Typography>
        <img style={{width: '200px', height: '200px'}} src={exercise} alt="fitness icon" />
        </div>
        
        <Container>
            <MealList setName={setName} setAmount={setAmount} handleSubmit={handleSubmit} name={name} amount={amount} data={data} total={total} calories={calories} carbs={carbs} protein={protein} fat={fat} numOunces={numOunces} />
            
            <div>
            <a style={{fontSize: '9px'}} href="https://www.flaticon.com/free-icons/exercise" title="exercise icons">Exercise icons created by Trazobanana - Flaticon</a>
            </div>
        </Container>
        </>

    
        
    )
}

export default CalorieTracker;