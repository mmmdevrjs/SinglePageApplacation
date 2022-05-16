import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import CardList from "../components/CardList";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default function Home() {
  const [catalog, setCatalog] = useState([]);

  // filter qilingan cataloglarni saqlash uchun
  const [filterCatalog, setFilterCatalog] = useState([]);

  // search qilganda domenni yoniga yozish va search tog;ri ishlashligi uchun
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // str = cb(value) yani callbek funksiyadagi inputni valuesiga teng
  const handleSearch = (str) => {
    setFilterCatalog(
      catalog.filter(
        (item) =>
          // includes-degani ichida shu value bor bolsa degani
          item.strCategory.toLowerCase().includes(str.toLowerCase()),
        navigate({
          pathname,
          search: `?search=${str}`,
        })
      )
    );
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      // catalogdagi hamma narsa filterCatalogda ham bor
      setFilterCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory.toLowerCase().includes(search.split("=")[1])
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <div>
      {" "}
      <Search cb={handleSearch} />{" "}
      {!catalog.length ? <Loader /> : <CardList catalog={filterCatalog} />}
    </div>
  );
}
