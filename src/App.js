import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a className="navbar-brand">CALL-API</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Trang Chủ</a>
            </li>
            <li>
              <a>Quản Lý Sản Phẩm</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">
                Thêm Sản Phẩm
              </button>

              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Trạng Thái</th>
                        <th>Hoạt Động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Iphone 6 plus</td>
                        <td>200$</td>
                        <td>
                          <span className="label label-warning">Còn Hàng</span>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success mr-10"
                          >
                            Sửa
                          </button>

                          <button type="button" className="btn btn-danger">
                            Xóa
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
