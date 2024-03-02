/* eslint-disable no-undef */
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";

const showResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  //pagination
  const [currentPage, seTCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexofLastProduct = productsPerPage * currentPage;
  const indexofFirstProduct = indexofLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexofFirstProduct,
    indexofLastProduct
  );

  //function to change the current page
  const paginate = (pageNumber) => {
    seTCurrentPage(pageNumber);
  };

  //filter products based on category
  const [selectedCategory, setSelectedCategory] = useState("All");
  // category based filtering
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setSelectedCategory(curcat);
    setProducts(newItem);
    // console.log(selectedCategory)
  };
  return (
    <div>
      <PageHeader title={"Our Shop Pages"} curPage={"Shop"}></PageHeader>
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mood ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/* products cards */}
                <div>
                  <ProductCards
                    GridList={GridList}
                    products={currentProducts}
                  ></ProductCards>
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                ></Pagination>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search GridList={GridList} products={products}></Search>
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                ></ShopCategory>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
