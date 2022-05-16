import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealId } from "../api";
import Loader from "./Loader";
function Recipe(props) {
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleShowRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  useEffect(() => {
    getMealId(id).then((data) => setRecipe(data.meals[0]));
  }, []);
  return (
    <>
      <div>
        <button className="btnBack" onClick={() => navigate(-1)}>
          Go Back
        </button>
        {!recipe.idMeal ? (
          <Loader />
        ) : (
          <div className="recipe">
            <img className="recipeImg" src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h6>
              {" "}
              <b>Category:</b> {recipe.strCategory}
            </h6>
            {recipe.strArea ? (
              <h6>
                {" "}
                <b>Country:</b> {recipe.strArea}
              </h6>
            ) : null}
            <h3>
              <b>Instructions</b>
            </h3>
            <p> {recipe.strInstructions}</p>

            <button className="btn" onClick={handleShowRecipe}>
              Show Recipe
            </button>
            {showRecipe ? (
              <table className="centered">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(recipe).map((key) => {
                    if (key.includes("Ingredient") && recipe[key]) {
                      return (
                        <tr>
                          <td>{recipe[key]}</td>
                          <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            ) : null}

            <h4>Watch the cooking</h4>
            {recipe.strYoutube ? (
              <div className="youtobe">
                <iframe
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                    -11
                  )}`}
                  title={id}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

export default Recipe;
