import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import callApi from "./../../utils/apiCaller";
import * as Actions from "./../../actions/index";
import products from "../../reducers/products";

class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: false
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      callApi(`products/${id}`, "GET", null).then(res => {
        let data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        });
      });
    }
  }

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = e => {
    e.preventDefault();
    let { id, txtName, txtPrice, chkbStatus } = this.state;
    let { history } = this.props;
    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    };
    if (id) {
      callApi(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(res => {
        history.goBack();
      });
    } else {
      this.props.onAddProduct(product);
      history.goBack(); //tro lai trang truoc do (-1)
      //hoac dung history.push("/product/list") de ve trang chi dinh
    }
  };

  render() {
    let { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <legend>Thêm Sản Phẩm</legend>

          <div className="form-group">
            <label>Tên Sản Phẩm :</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              placeholder="Nhập Tên Sản Phẩm"
              value={txtName}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Giá :</label>
            <input
              type="text"
              className="form-control"
              name="txtPrice"
              placeholder="Nhập Giá Sản Phẩm"
              value={txtPrice}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Trạng Thái :</label>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="chkbStatus"
                  value={chkbStatus}
                  onChange={this.onChange}
                  checked={chkbStatus}
                />
                Còn Hàng
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mr-10">
            Lưu Lại
          </button>
          <Link to="/product-list" className="btn btn-danger">
            Đóng
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: product => {
      dispatch(Actions.actAddProductRequest(product));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductActionPage);
