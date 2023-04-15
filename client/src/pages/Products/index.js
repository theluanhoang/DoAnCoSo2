import React from 'react'
import classNames from 'classnames/bind'
import styles from './Products.module.scss'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Section from '../../components/Section'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productsState$ } from '../../redux/selectors'
import Axios from 'axios'
import { getProducts } from '../../redux/actions'
import Product from '../../components/Product'

const cx = classNames.bind(styles)

let arr = []
let query = '';

function Products() {
    const dispatch = useDispatch();
    const [active, setActive] = React.useState('');
    const [orderBy, setOrderBy] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [categories, setCategories] = React.useState([]);
    const [orderProducts, setOrderProducts] = React.useState([]);
    const [distributors, setDistributors] = React.useState([]);
    const [distributor, setDistributor] = React.useState('');
    const order = [
        {
            name: "Mặc định",
            query: "",
        },
        {
            name: "Tên (A - Z)",
            query: " ORDER BY title DESC",
        },
        {
            name: "Tên (Z - A)",
            query: " ORDER BY title ASC",
        },
        {
            name: "Giá (Thấp > Cao)",
            query: " ORDER BY priceCurrent DESC",
        },
        {
            name: "Giá (Cao > Thấp)",
            query: " ORDER BY priceCurrent ASC",
        }
    ]
    let products = useSelector(productsState$);
    React.useEffect(() => {
        dispatch(getProducts.getProductsRequest());

        Axios.get('http://localhost:5000/category/')
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        Axios.get('http://localhost:5000/distributors/')
            .then((res) => {
                setDistributors(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [dispatch])

    React.useEffect(() => {
        query = 'SELECT * FROM product' + price + orderBy;
        Axios.post('http://localhost:5000/products/order/', {
            query: query
        })
            .then((response) => {
                setOrderProducts(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [orderBy, price])

    return (
        <div className={cx('products')}>
            <Navbar />
            <Section item={'Tất cả sản phẩm'} />
            <div className={cx('products__main')}>
                <div className={cx('products__main--container')}>
                    <div className={cx('left', 'left-content', 'col-lg-3', 'col-md-3', '_sidebarCart-sticky')}>
                        <div id='column-left' className={cx('left-column', 'compliance')}>
                            <div className={cx('articale-dm', 'collection-category', 'product_category')} id='product_category--1'>
                                <div className={cx('aside-title')}>Danh mục</div>
                                <div className={cx('aside-content')}>
                                    <ul className={cx('navbar-pills', 'nav-category')}>
                                        {
                                            categories.map((category, index) => (
                                                <li className={cx('nav-item')}>
                                                    <Link>{category.category_item}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('aside-filter', 'clearfix', 'hidden-xs')}>
                                <div className={cx('aside-titles')}>Lọc</div>
                                <div className={cx('aside-hidden-mobile')}>
                                    <div className={cx('filter-container')}>
                                        <aside className={cx('aside-item', 'filter-price')}>
                                            <div className={cx('aside-title')}>
                                                "Giá "
                                                <span className={cx('ant-svg', 'collapsible-plus')}>

                                                </span>
                                            </div>
                                            <div className={cx('aside-content', 'filter-group')}>
                                                <ul>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-00'>
                                                                <input type='radio' name='price' id='filter-price-00' />
                                                                <i className={cx('fa')}></i>
                                                                {" Tất cả "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-1'>
                                                                <input type='radio' name='price' id='filter-price-1' value=' WHERE priceCurrent < 100000' onChange={(e) => setPrice(e.target.value)} />
                                                                <i className={cx('fa')}></i>
                                                                {" Giá dưới 100.000đ "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-2'>
                                                                <input type='radio' name='price' id='filter-price-2' value=' WHERE priceCurrent BETWEEN 100000 AND 200000' onChange={(e) => setPrice(e.target.value)} />
                                                                <i className={cx('fa')}></i>
                                                                {" Giá 100.000đ - 200.000đ "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-3'>
                                                                <input type='radio' name='price' id='filter-price-3' value=' WHERE priceCurrent BETWEEN 200000 AND 300000' onChange={(e) => setPrice(e.target.value)} />
                                                                <i className={cx('fa')}></i>
                                                                {" Giá 200.000đ - 300.000đ "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-4'>
                                                                <input type='radio' name='price' id='filter-price-4' value=' WHERE priceCurrent BETWEEN 300000 AND 500000' onChange={(e) => setPrice(e.target.value)} />
                                                                <i className={cx('fa')}></i>
                                                                {" Giá 300.000đ - 500.000đ "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-5'>
                                                                <input type='radio' name='price' id='filter-price-5' value=' WHERE priceCurrent BETWEEN 500000 AND 1000000' onChange={(e) => setPrice(e.target.value)} />
                                                                <i className={cx('fa')}></i>
                                                                {" Giá 500.000đ - 1.000.000đ "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-6'>
                                                                <input type='radio' name='price' id='filter-price-6' value=' WHERE priceCurrent BETWEEN 1000000 AND 2000000' onChange={(e) => setPrice(e.target.value)} />
                                                                <i className={cx('fa')}></i>
                                                                {" Giá 1.000.000đ - 2.000.000đ "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-7'>
                                                                <input type='radio' name='price' id='filter-price-7' value=' WHERE priceCurrent BETWEEN 2000000 AND 3000000' onChange={(e) => setPrice(e.target.value)} />
                                                                <i className={cx('fa')}></i>
                                                                {" Giá 2.000.000đ - 3.000.000đ "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for='filter-price-8'>
                                                                <input type='radio' name='price' id='filter-price-8' value=' WHERE priceCurrent > 3000000' onChange={(e) => setPrice(e.target.value)} />
                                                                <i className={cx('fa')}></i>
                                                                {" Giá trên 3.000.000đ "}
                                                            </label>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                        <aside className={cx('aside-item', 'filter-manufacturer')}>
                                            <div className={cx('aside-title')}>
                                                Thương hiệu <span className={cx('ant-svg', 'collapsible-plus')}></span>
                                            </div>
                                            <div className={cx('aside-content', 'filter-group')}>
                                                <ul>
                                                    {
                                                        arr.map((distributor, index) => (

                                                            <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                                <span>
                                                                    <label for={`filter-manufacture-${index}`}>
                                                                        <input id={`filter-manufacture-${index}`} type="checkbox" value={`distributor = ${distributor.supplier}`} onChange={(e) => setDistributor(e.target.value)} />
                                                                        <i className={cx('fa')}></i> {distributor.supplier}
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </aside>
                                        <aside className={cx('aside-item', 'filter-option')}>
                                            <div className={cx('aside-title')}>Trọng lượng
                                                <span className={cx('ant-svg', 'collapsible-plus')}>

                                                </span>
                                            </div>
                                            <div className={cx('aside-content', 'filter-group')}>
                                                <ul>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for="filter-option-13-0">
                                                                <input id="filter-option-13-0" type="checkbox" name="option[]" value="13-50" onclick="loadFilter()" />
                                                                <i className={cx('fa')}></i> 1kg
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for="filter-option-13-1"> <input id="filter-option-13-1" type="checkbox" name="option[]" value="13-51" />
                                                                <i className={cx('fa')}></i> 2kg
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for="filter-option-13-2"> <input id="filter-option-13-2" type="checkbox" name="option[]" value="13-51" />
                                                                <i className={cx('fa')}></i> 3kg
                                                            </label>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                        <aside className={cx('aside-item', 'filter-option')}>
                                            <div className={cx('aside-title')}>
                                                Số lượng
                                                <span className={cx('ant-svg', 'collapsible-plus')}></span>
                                            </div>
                                            <div className={cx('aside-content', 'filter-group')}>
                                                <ul>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for="filter-option-15-0">
                                                                <input id="filter-option-15-0" type="checkbox" name="option[]" value="15-56" />
                                                                <i className={cx('fa')}></i> 10 quả
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for="filter-option-15-1">
                                                                <input id="filter-option-15-1" type="checkbox" name="option[]" value="15-56" />
                                                                <i className={cx('fa')}></i> 20 quả
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                        <span>
                                                            <label for="filter-option-15-2">
                                                                <input id="filter-option-15-2" type="checkbox" name="option[]" value="15-56" />
                                                                <i className={cx('fa')}></i> 30 quả
                                                            </label>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                        <aside className={cx('aside-item', 'filter-attribute')}>
                                            <div className={cx('aside-title')}>
                                                Khuyễn mãi - Ưu đãi
                                                <span className={cx('ant-svg', 'collapsible-plus')}></span>
                                            </div>
                                            <ul>
                                                <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
                                                    <span>
                                                        <label for="filter-attribute-9-15">
                                                            <input id="filter-attribute-9-15" type="checkbox" />
                                                            <i className={cx('fa')}></i>
                                                            Khuyễn mãi - Ưu đãi
                                                        </label>
                                                    </span>
                                                </li>
                                            </ul>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('category-products', 'products', 'category-products-grids', 'clearfix')} style={{ marginLeft: '30px' }}>
                        <div className={cx('sort-cate', 'clearfix')}>
                            <div className={cx('sort-cate-left')} id="sort-by">
                                <h3 className={cx('nd-titles')}>
                                    <i class="fa-solid fa-arrow-up-short-wide"></i>
                                    Sắp xếp theo
                                </h3>
                                <ul>
                                    {
                                        order.map(item => (
                                            <li className={cx('btn-quick-sort', active === item.name ? 'active' : '')} onClick={() => {
                                                setActive(item.name);
                                                setOrderBy(item.query);
                                            }}>
                                                <Link ><i class="fa-regular fa-circle"></i>{item.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={cx('products__main--list')}>
                            {
                                orderProducts.length > 0 ? orderProducts.map(product => (
                                    <Product
                                        key={product.id}
                                        settings={product.setting}
                                        title={product.title}
                                        priceCurrent={product.priceCurrent}
                                        salePercent={product.salePercent}
                                        image={product.image}
                                        product={product}
                                        border={true}
                                    />
                                )) : products.map(product => (
                                    <Product
                                        key={product.id}
                                        settings={product.setting}
                                        title={product.title}
                                        priceCurrent={product.priceCurrent}
                                        salePercent={product.salePercent}
                                        image={product.image}
                                        product={product}
                                        border={true}
                                    />
                                ))

                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products