import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

var recipeLength = 3;

var myRecipes = [
  { 
    "name": "Banana Bread",
    "ingredients": ["Bananas", "Flour", "Eggs", "Sugar", "Love"],
    "id": 1
  },
  {
    "name": "Sugar Cookies",
    "ingredients": ["Sugar", "Flour", "Eggs", "Love"],
    "id": 2
  },
  {
    "name": "Chocolate Brownies",
    "ingredients": ["Chocolate", "Sugar", "Other stuff"],
    "id": 3
  }
];

var App = React.createClass({
  setInitialState: function(){
    return {
      recipes: []
    };
  },
  componentWillMount: function(){
    this.setState({recipes: myRecipes});
  },
  //need to figure this out
  addRecipe: function(recipe){
    let newRecipes = this.state.recipes.concat(recipe);
    this.setState({ recipes: newRecipes});
    recipeLength++;
  },
  render: function(){
    
    return (
    <div>
        <h1 id="title">My Recipe Box</h1>
        <div id="recipeContainer">
          <Recipes  key={recipeLength} recipes={this.state.recipes} />
          
          <AddRecipe addRecipe={this.addRecipe} />  
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById("app"));
