import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <ul>
                <b>Ingredients:</b>
                {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
                ))}
            </ul>
            <p><b>Calories:</b> {calories}</p>
            <a href={url}>Go to Recipe</a>
        </div>
    );
};

export default Recipe;