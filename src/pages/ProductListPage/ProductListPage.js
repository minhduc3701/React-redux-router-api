import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import callApi from "./../../utils/apiCaller";
import * as Actions from "./../../actions/index";

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            onDelete={this.onDelete}
            key={index}
            index={index}
            product={product}
          ></ProductItem>
        );
      });
    }
    return result;
  };

  onDelete = id => {
    let { products } = this.state;
    callApi(`products/${id}`, "DELETE", null).then(res => {
      if (res.status === 200) {
        let index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products
          });
        }
      }
    });
  };

  findIndex = (products, id) => {
    let result = -1;
    // for (let i = 0; i < products.length; i++) {
    //   if (products[i].id === id) {
    //     result = i;
    //     break;
    //   }
    // }
    products.forEach((product, index) => {
      if (product.id === id) result = index;
    });
    return result;
  };

  render() {
    let { products } = this.props;
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(Actions.actFetchProductsRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListPage);
