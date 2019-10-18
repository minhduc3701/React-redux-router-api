import React from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

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
    let { txtName, txtPrice, chkbStatus } = this.state;
    let { history } = this.props;
    callApi("products", "POST", {
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }).then(res => {
      history.goBack(); //tro lai trang truoc do (-1)
      //hoac dung history.push("/product/list") de ve trang chi dinh
    });
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
              placeholder="Input field"
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
              placeholder="Input field"
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

export default ProductActionPage;
