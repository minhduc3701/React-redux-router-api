import React from "react";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
          >
            &times;
          </button>
          <strong>404 - Không Tìm Thấy Trang</strong>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
