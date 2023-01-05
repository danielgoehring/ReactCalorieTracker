import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Meal from './Meal';
import Button from '@mui/material/Button';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



function MealList(props) {
    

    return (
        <>
        <Container>
            <form onSubmit={props.handleSubmit}>
                <Typography>Search Food</Typography>
                <TextField label ="Search Food Name" value={props.name} onChange={(e) => props.setName(e.target.value)}/>
                <Typography>Ounces</Typography>
                <div>
                    <Select label ="Enter Number of Ounces" value={props.amount} onChange={(e) => props.setAmount(e.target.value)}
                                style={{width: 90}}
                                displayEmpty
                                placeholder="oz"
                                MenuProps={{
                                PaperProps: {
                                    style: { maxHeight: 120, },
                                },
                                }}>
                        {[...Array(101).keys()].map(i => (
                            <MenuItem value={i}>{i}</MenuItem>
                        ))}
                    </Select>
                </div>
                
                <Button variant="contained" color="primary" align="left" type="submit">Add Food</Button>
            </form>
            {props.data ? (
                
                <>
                
                <div style={{marginBottom: '100px'}}>
                    <Typography variant="h5">
                        Breakfast
                    </Typography>
                    <Meal 
                        data={props.data} 
                        amount={props.amount} 
                        calories={props.calories} 
                        carbs={props.carbs} 
                        protein={props.protein} 
                        fat={props.fat}/>
                </div>
                


                <div style={{marginBottom: '100px'}}>
                    <Typography variant="h5">
                        Lunch
                    </Typography>
                    <Meal 
                        data={props.data} 
                        amount={props.amount} 
                        calories={props.calories} 
                        carbs={props.carbs} 
                        protein={props.protein} 
                        fat={props.fat}/>
                </div>

                <div style={{marginBottom: '100px'}}>
                    <Typography variant="h5">
                        Dinner
                    </Typography>
                    <Meal 
                        data={props.data} 
                        amount={props.amount} 
                        calories={props.calories} 
                        carbs={props.carbs} 
                        protein={props.protein} 
                        fat={props.fat}/>
                </div>

                <div style={{marginBottom: '100px'}}>
                    <Typography variant="h5">
                        Snack
                    </Typography>
                    <Meal 
                        data={props.data} 
                        amount={props.amount} 
                        calories={props.calories} 
                        carbs={props.carbs} 
                        protein={props.protein} 
                        fat={props.fat}/>
                </div>
                </>
                 
                ) : null}
      
        </Container>
        </>
    )
}

export default MealList;