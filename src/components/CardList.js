import React from "react";
import CardItem from "./CardItem";

function CardList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((element) => (
        <CardItem
          key={element.idCategory}
          idCategory={element.idCategory}
          strCategory={element.strCategory}
          strCategoryThumb={element.strCategoryThumb}
          strCategoryDescription={element.strCategoryDescription}
          {...element}
        />
      ))} 
    </div>
  );
}

export default CardList;
