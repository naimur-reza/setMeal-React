import React from "react";

const SingleCard = ({ meal}) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = meal;
  return (
    <div className="w-80 border rounded-md">
      <div className="p-3">
        <img className="w-1/2 mx-auto" src={strCategoryThumb} />
        <h1 className="text-lg font-semibold py-3">Category :{strCategory}</h1>
        <p className="text-slate-600">{strCategoryDescription.slice(0, 100)}</p>
      </div>
        <div className="pt-4 w-full">
          <button  className="bg-sky-400 w-full px-4 py-2 rounded-md text-white font-semibold shadow-sky-300  shadow-lg">
            Add To Cart
          </button>
        </div>
    </div>
  );
};
export default SingleCard;
