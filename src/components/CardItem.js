import React from "react";
import { Link } from "react-router-dom";
function CardItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div class="card">
      <div class="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div class="card-content">
        <h3 class="card-title">{strCategory}</h3>
        <p>{strCategoryDescription.slice(0, 60)} ...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${idCategory}`} className="btn">
          watch category
        </Link>
      </div>
    </div>
  );
}

export default CardItem;
