import React from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { search, showModalCart } from "../../redux/actions";
import { User } from "../../assets/img";
import { shoppingCartState$ } from "../../redux/selectors";
import SidebarMenu from "../SidebarMenu";

const cx = classNames.bind(styles);

function Navbar() {
    const dispatch = useDispatch();
    const [query, setQuery] = React.useState('');
    const showModal = React.useCallback(() => {
        dispatch(showModalCart())
    }, [dispatch])

  const [showSidebarMenu, setShowSidebarMenu] = React.useState(false)

  const searchHandler = (e) => {
    setQuery(e.target.value);
    dispatch(search.searchRequest(e.target.value));
  };
  const currentUser = JSON.parse(localStorage.getItem('user'))

  const shoppingCart = useSelector(shoppingCartState$);
  return (
    <>
      <div className={cx("navbar")}>
        <div className={cx("navbar__container")}>
          <ul className={cx("navbar__categories")}>
            <li className={cx("navbar__categories--item")}>
              <Link to={"/"}>Trang chủ</Link>
            </li>
            <li className={cx("navbar__categories--item")}>
              <Link to={"/introduce"}>Giới thiệu</Link>
            </li>
            <li className={cx("navbar__categories--item")}>
              <Link to={"/products"}>Sản phẩm</Link>
              <RiArrowDownSFill />
            </li>
            <li className={cx("navbar__categories--item")}>
              <Link to={"/news"}>Tin tức</Link>
            </li>
            <li className={cx("navbar__categories--item")}>
              <Link to={"/contact"}>Liên hệ</Link>
            </li>
          </ul>
          <div className={cx("navbar__logo")}>
            <img
              src="https://sfresh.w2.exdomain.net/image/catalog/sfresh/logo/logo.png"
              alt="S.Fresh"
            />
          </div>
          <div className={cx("navbar__search")}>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={searchHandler}
            />
            <Link to={"/search/" + query} className={cx("navbar__searchIcon")}>
              <AiOutlineSearch className={cx("navbar__searchIcon--icon")} />
            </Link>
          </div>
          <ul className={cx("navbar__icons")}>
            <li className={cx("navbar__icons--item")}>
              <Link to={"/heart"}>
                <AiOutlineHeart />
              </Link>
              <div className={cx("navbar__icons--notification")}>1</div>
            </li>
            <li className={cx("navbar__icons--item")}>
              <Link to={""}>
                <AiOutlineShoppingCart onClick={showModal} />
              </Link>
              <div className={cx("navbar__icons--notification")}>
                {shoppingCart.length}
              </div>
            </li>
            <li className={cx("navbar__icons--item", "navbar__icons--avatar")}>
              {currentUser ? (
                <Link to={""}>
                  <img
                    style={{ width: "30px" }}
                    src={User}
                    alt={currentUser.email}
                  />
                </Link>
              ) : (
                <Link to={""}>
                  <FaUserCircle />
                </Link>
              )}
              {currentUser ? (
                <ul
                  className={cx("navbar__icons--list")}
                  style={{ width: "200px", height: "150px" }}
                >
                  {currentUser.admin && (
                    <li className={cx("navbar__icons--sign")}>
                      <Link to="/admin">Bảng điều khiển</Link>
                    </li>
                  )}
                  <li className={cx("navbar__icons--sign")}>
                    <Link to="/account">Tài khoản</Link>
                  </li>
                  <li className={cx("navbar__icons--sign")}>
                    <Link to=""onClick={() => {
                      localStorage.removeItem('user');
                      window.location.href = 'http://localhost:3000/sign-in'
                    }}>Đăng xuất</Link>
                  </li>
                </ul>
              ) : (
                <ul className={cx("navbar__icons--list")}>
                  <li className={cx("navbar__icons--sign")}>
                    <Link to="/sign-in">Đăng nhập</Link>
                  </li>
                  <li className={cx("navbar__icons--sign")}>
                    <Link to="/sign-up">Đăng kí</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={cx("navbar__icons--item", "navbar__icons--menu")} onClick={() => setShowSidebarMenu(true)}>
              <AiOutlineMenu />
            </li>
          </ul>
        </div>
      </div>
      <SidebarMenu showSidebarMenu={showSidebarMenu} setShowSidebarMenu={setShowSidebarMenu}/>
    </>
  );
}

export default Navbar;
