import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilterCAtegory } from "../api";
import Loader from "./Loader";
import MealList from "./MealList";

export default function Movies() {
  const [meals, setMeals] = useState([]);

  const { name } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getFilterCAtegory(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <div>
      <button className="btnBack" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Loader /> : <MealList meals={meals} />}
    </div>
  );
}
