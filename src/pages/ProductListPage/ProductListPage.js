import React from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import axios from "axios";

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
    // let { products } = this.props;
    let products = [];
    axios({
      method: "GET",
      url: "http://localhost:3000/products",
      data: null
    })
      .then(res => {
        products = res.data;
      })
      .catch(err => {
        console.log(err);
      });

    console.log(products);
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

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductListPage);
