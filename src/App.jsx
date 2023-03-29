import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { addToDb, getShoppingCart } from "./utilities/fakedb";

const App = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.categories));
      
  }, []);
  return (
    <div >
      <Header></Header>
      <Card meals={meals} ></Card>
    </div>
  );
};

export default App;
