import React from 'react'
import styles from './ProductList.module.scss'
import classNames from 'classnames/bind'
import Product from '../../components/ProductList/Product'
import { useSelector, useDispatch } from 'react-redux'
import { productsState$ } from '../../redux/selectors'
import * as actions from '../../redux/actions'


const cx = classNames.bind(styles)

function ProductList({ marginLeft }) {
    const dispatch = useDispatch();
    const products = useSelector(productsState$);
    React.useEffect(() => {
        dispatch(actions.getProducts.getProductsRequest());
    }, [dispatch]);

    return (
        <ul className={cx('productList')} style={{ marginLeft: marginLeft, transition: 'all ease-in-out 0.4s' }}>
            {
                products.map((product) => (
                    <Product
                        key={product.id}
                        settings={product.setting}
                        title={product.title}
                        priceCurrent={product.priceCurrent}
                        salePercent={product.salePercent}
                        image={product.image}
                        product={product}
                    />
                ))
            }
        </ul>
    )
}

export default ProductList