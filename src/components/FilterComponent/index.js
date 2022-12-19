import React, { useEffect, useState, useContext } from "react";
import { CategoryContext } from "../ShopListComponent";
import MultiRangeSlider from "multi-range-slider-react";

export default function FilterComponent() {
  const setProductList = useContext(CategoryContext);
  const [category, setCategory] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  const handleSort = (sortItem) => {
    fetch(`https://fakestoreapi.com/products/category/${sortItem}`)
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
      });
  };

  const [minValue, set_minValue] = useState(1);
  const [maxValue, set_maxValue] = useState(500);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div className="filter-component">
      <div className="priceRange">
        <h3>Price</h3>
        <MultiRangeSlider
          className="priceRangeSlider"
          min={1}
          max={500}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
          label={false}
          ruler={false}
          barInnerColor={"#F3692E"}
        />
        <div className="rangeValue">
          <div>Range</div>
          <div>
            {`$${minValue} - $${maxValue}`}
          </div>
        </div>
      </div>
      <div className="filterCategory">
        <h3>Product Categories</h3>
        {category?.map((category) => {
          return (
            <div key={category} onClick={(e) => handleSort(e.target.innerHTML)}>
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}
