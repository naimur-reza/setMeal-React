import React from "react";
import SideCart from "../SideCart/SideCart";
import SingleCard from "./SingleCard/SingleCard";

const Card = ({ meals }) => {
  return (
    <div className="flex gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl justify-items-center place-items-center py-10">
{meals.map((meal) => (
        <SingleCard meal={meal}></SingleCard>
      ))}
</div>
    <div className="mt-10">
    <SideCart></SideCart>
    </div>
    </div>
  );
};

export default Card;
