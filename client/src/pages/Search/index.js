import React from 'react'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Note from '../../components/Note'
import { Link } from 'react-router-dom'
import { Product1 } from '../../assets/img'
import Product from '../../components/ProductList/Product'
const cx = classNames.bind(styles)

function Search() {
    return (
        <div className={cx('search')}>
            <Navbar />
            <Note />
            <div className={cx('search__wrapper')}>
                <div className={cx('search__wrapper--title')}>
                    <h1>{"Tìm thấy "} <strong>1</strong> {" kết quả với từ khóa "} <strong>"Cam"</strong></h1>
                </div>
                <div className={cx('search__wrapper--option')}>
                    <Link className={cx("news-menu-link", "active")} to="" title="Sản phẩm"><i></i>Sản phẩm</Link>
                    <Link className={cx("news-menu-link")} to="" title="Tin tức"><i></i>Tin tức</Link>
                </div>
                <div className={cx("search__wrapper--list")}>
                    <Product
                        settings={true}
                        title={'Trái cam mật'}
                        priceCurrent={'150000'}
                        salePercent={20}
                        image={Product1}
                        border={true}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search