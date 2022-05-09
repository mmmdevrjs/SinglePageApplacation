import React from "react";
import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import CardList from "../components/CardList";
import Loader from "../components/Loader";

export default function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <div>{!catalog.length ? <Loader /> : <CardList catalog={catalog} />}</div>
  );
}
