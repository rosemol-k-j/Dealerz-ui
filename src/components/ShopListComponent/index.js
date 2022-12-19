import React, { useEffect, useState ,createContext } from "react";
import StarRatings from "react-star-ratings";
import FilterComponent from "../FilterComponent";

export const CategoryContext = createContext()
export default function ShopListComponent() {
  const [productList, setProductList] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductList(json));
  }, []);
console.log(productList)

  return (
    <div className="row fullWidth shoplist-component">
      <CategoryContext.Provider value={setProductList}>
        <FilterComponent />
      </CategoryContext.Provider>
      <div className="productlist-component">
        {productList?.map((product) => {
          return (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt="productImage" />
              <div className="productTitle">{product.title}</div>
              <StarRatings
                rating={product.rating.rate}
                starRatedColor="#F86338"
                name="rating"
                starDimension="16px"
                starSpacing="3px"
              />
              <div className="productCategory">{product.category}</div>
              <div className="productPrice">${product.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
