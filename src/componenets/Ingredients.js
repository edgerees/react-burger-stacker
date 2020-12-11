import React, {Component} from 'react';



export default class Ingredient extends Component {
    
    render() {
        
        const ingredientItem = this.props.ingredients.map((eachItem, ind) => {
            return <div>
                    <li key={ind}>{eachItem.name}</li><button onClick={() =>this.props.moveToBurger(eachItem)}>Add to Burger</button>
                    </div>
        })
        return(
        <div>
            <h1>Ingredients</h1>
            {ingredientItem}
        </div>
    )
    }
    
}