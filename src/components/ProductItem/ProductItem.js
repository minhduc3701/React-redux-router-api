import React from "react";

class ProductItem extends React.Component {
  onDelete = id => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      this.props.onDelete(id);
    }
  };

  render() {
    let { product, index } = this.props;
    let statusName = product.status ? "Còn Hàng" : "Sold Out";
    let statusClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-10">
            Sửa
          </button>

          <button
            onClick={() => this.onDelete(product.id)}
            type="button"
            className="btn btn-danger"
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
