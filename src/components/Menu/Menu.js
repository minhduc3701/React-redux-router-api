import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true
  },
  {
    name: "Quản Lý Sản Phẩm",
    to: "/product-list",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    ></Route>
  );
};

class Menu extends React.Component {
  showMenus = menus => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            to={menu.to}
            label={menu.name}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };

  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">CALL-API</a>
        <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
      </div>
    );
  }
}

export default Menu;
