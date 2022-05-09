import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Movies() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <span> Movies {id}</span>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
