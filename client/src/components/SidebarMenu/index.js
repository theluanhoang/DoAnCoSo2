import React from "react";
import styles from "./SidebarMenu.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SidebarMenu({ showSidebarMenu, setShowSidebarMenu }) {
  return (
    <div
      className={cx("wrapper", showSidebarMenu && "active")}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowSidebarMenu(false);
        }
      }}
    >
      <div className={cx("inner")}>
        <div className={cx("header")}>
          <Link className={cx("header__signin")} to="/">
            Đăng nhập
          </Link>
          <Link className={cx("header__signup")} to="/">
            Đăng ký
          </Link>
        </div>
        <ul className={cx("menu__list")}>
          <li className={cx("menu__item")}>
            <Link to="/">Trang chủ</Link>
          </li>
          <li className={cx("menu__item")}>
            <Link to="/">Giới thiệu</Link>
          </li>
          <li className={cx("menu__item")}>
            <Link to="/">Sản phẩm</Link>
          </li>
          <li className={cx("menu__item")}>
            <Link to="/">Tin tức</Link>
          </li>
          <li className={cx("menu__item")}>
            <Link to="/">Liên hệ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;
