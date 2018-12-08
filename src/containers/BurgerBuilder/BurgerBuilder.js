import React,{Component} from 'react';
import Auxx from './../../hoc/Auxx';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES ={
    cheese: 2,
    meat: 0.5,
    bacon: 1
};

class BurgerBuilder extends Component{

state= {
    ingredients:{
        meat:0,
        cheese:0,
        bacon:0
    },
    totalPrice: 4
}

addIngredient =(type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type]= updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice+ priceAddition;
    this.setState({ingredients: updatedIngredients,totalPrice: newPrice});

}

removeIngredient=(type)=>{

}

    render(){
        return(
            <Auxx>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdd={this.addIngredient}/>
            </Auxx>
        );
    }
}

export default BurgerBuilder;