import React from "react";

class ProductActionPage extends React.Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form>
          <legend>Thêm Sản Phẩm</legend>

          <div className="form-group">
            <label>Tên Sản Phẩm :</label>
            <input
              type="text"
              className="form-control"
              name="txt"
              placeholder="Input field"
            ></input>
          </div>
          <div className="form-group">
            <label>Giá :</label>
            <input
              type="text"
              className="form-control"
              name="txt"
              placeholder="Input field"
            ></input>
          </div>
          <div className="form-group">
            <label>Trạng Thái :</label>
            <div className="checkbox">
              <label>
                <input type="checkbox" />
                Checkbox
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mr-10">
            Lưu Lại
          </button>
          <button type="submit" className="btn btn-danger">
            Đóng
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
