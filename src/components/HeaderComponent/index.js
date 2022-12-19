import React, { useState } from "react";
import {
  FaShoppingCart,
  FaRegHeart,
  FaUserAlt,
  FaRegBell,
} from "react-icons/fa";
import BannerComponent from "../BannerComponent";
import ShopListComponent from "../ShopListComponent";

export default function HeaderComponent() {
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The name you entered was: ${searchItem}`);
  };

  return (
      <div className="column fullWidth fullHeight header-container">
        <div className="header fullWidth">
          <div className="title-name">Dealerz.</div>
          <div className="header-icon">
            <i className="fa fa-phone"> Call Center</i>
            <i className="fa-light fa fa-truck"> Shipping & Returns</i>
          </div>
        </div>
        <div className="nav-bar container fullWidth">
          <div className="row">
            <div className="item">Shop</div>
            <div className="item">Promo</div>
            <div className="item">About</div>
            <div className="item">Blog</div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              placeholder="Search what you need"
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <input type="submit" hidden />
          </form>
          <div className="row nav-icons">
            <div className="item">
              <FaRegHeart />
            </div>
            <div className="item">
              <FaShoppingCart />
            </div>
            <div className="item">
              <FaUserAlt />
            </div>
            <div className="item">
              <FaRegBell />
            </div>
          </div>
        </div>
        <BannerComponent/>
        <ShopListComponent/>
      </div>
  );
}
