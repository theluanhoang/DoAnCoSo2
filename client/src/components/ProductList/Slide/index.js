import React from 'react'
import styles from './Slide.module.scss'
import classNames from 'classnames/bind'
import Product from '../Product'
import { useSelector, useDispatch } from 'react-redux'
import { productsState$ } from '../../../redux/selectors'
import * as actions from '../../../redux/actions'
const cx = classNames.bind(styles)

function Slide({ marginLeft }) {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(actions.getProducts.getProductsRequest());
    }, [dispatch]);
    const products = useSelector(productsState$);

    return (
        <div className={cx('slide')} style={{ marginLeft: marginLeft, transition: 'all ease-in-out 0.4s' }}>
            {
                products.map((product) => (
                    <Product 
                        key={product.id}
                        title={product.title}
                        priceCurrent={product.priceCurrent}
                        salePercent={product.salePercent}
                        image={product.image}
                        border={true}
                        product={product}
                    />
                ))
            }
        </div>
    )
}

export default Slide