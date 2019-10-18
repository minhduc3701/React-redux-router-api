import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import callApi from "./../../utils/apiCaller";

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    callApi("products", null).then(res => {
      this.setState({
        products: res.data
      });
    });
  }

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
    let { products } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info mb-10">
          Thêm Sản Phẩm
        </Link>
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
