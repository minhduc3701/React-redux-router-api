import React from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";

class ProductListPage extends React.Component {
  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            index={index}
            product={product}
          ></ProductItem>
        );
      });
    }
    return result;
  };

  render() {
    let products = [];
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-info mb-10">
          Thêm Sản Phẩm
        </button>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
}

export default ProductListPage;
