import React from 'react'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Note from '../../components/Note'
import { Link, useParams } from 'react-router-dom'
import Product from '../../components/ProductList/Product'
import { useSelector } from 'react-redux'
import { searchState$, keyState$ } from '../../redux/selectors'
const cx = classNames.bind(styles)

function Search() {

    const { key } = useParams();
    const products = useSelector(searchState$);
    const keyword = useSelector(keyState$);

    return (
        <div className={cx('search')}>
            <Navbar />
            <Note />
            <div className={cx('search__wrapper')}>
                <div className={cx('search__wrapper--title')}>
                    <h1>{"Tìm thấy "} <strong>{products.length}</strong> {" kết quả với từ khóa "} <strong>"{keyword}"</strong></h1>
                </div>
                <div className={cx('search__wrapper--option')}>
                    <Link className={cx("news-menu-link", "active")} to="" title="Sản phẩm"><i></i>Sản phẩm</Link>
                    <Link className={cx("news-menu-link")} to="" title="Tin tức"><i></i>Tin tức</Link>
                </div>
                <div className={cx("search__wrapper--list")}>
                    {
                        products.map(product => (
                            <Product
                                settings={true}
                                title={product.title}
                                priceCurrent={product.priceCurrent}
                                salePercent={product.salePercent}
                                image={product.image}
                                border={true}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search