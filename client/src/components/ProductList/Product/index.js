import React from 'react'
import styles from './Product.module.scss'
import classNames from 'classnames/bind'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showModalCart } from '../../../redux/actions';
import Axios from 'axios';

const cx = classNames.bind(styles)
let id;
function Product({ image, setting, title, priceCurrent, salePercent, border, product }) {
    const [obj, setObj] = React.useState({});
    id = product ? product.id : ''
    let priceSale, priceOld;

    let productItem = React.useRef();
    productItem.current = product;

    React.useEffect(() => {
        setObj(product);
    }, [product]);

    const dispatch = useDispatch();

    const showModal = React.useCallback(() => {
        dispatch(showModalCart());
    }, [dispatch])
    if (salePercent === null) {
        if (priceCurrent === undefined) {
            priceSale = 'Liên hệ'
            priceOld = null;
        }
        else {
            priceSale = priceCurrent + 'đ';
            priceOld = null;
        }
    }
    else {
        const sale = Math.round(Number(priceCurrent) - Number(priceCurrent) * (Number(salePercent) / 100));
        priceSale = sale + 'đ';
        priceOld = priceCurrent;
    }
    const addToCart = () => {
        const item = {
            customerId: '21',
            productTitle:  product.title,
            productPriceCurrent: product.priceCurrent, 
            productPriceCost: product.priceCost, 
            productImage: image, 
            productSalePercent: product.salePercent, 
        }

        Axios.post('http://localhost:5000/shopping-cart/add', item)
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => console.log(err));

        showModal();
    }

    return (
        <div className={cx('product', border ? 'border' : '')}>
            <div className={cx('productTop')}>
                <Link to={`/product/${id}`}>
                    <img src={image} alt='endow' className={cx('product--image')} />
                </Link>
                <div className={cx('product__button')}>
                    <div className={cx('product__button--heart')}>
                        <Link to={'/'}>
                            <AiOutlineHeart className={cx('product__button--icon')} />
                        </Link>
                    </div>
                    <div className={cx('product__button--shoppingCart')} onClick={addToCart}>
                        <Link to={'/'}>
                            {
                                setting
                                    ? <AiOutlineSetting className={cx('product__button--icon')} />
                                    : <AiOutlineShoppingCart className={cx('product__button--icon')} />
                            }
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('productBottom')}>
                <div className={cx('productBottom__title')}>
                    <p>{title}</p>
                </div>
                <div className={cx('productBottom__price')}>

                    {
                        salePercent ?
                            (
                                <div className={cx('productBottom__priceSale')}>
                                    <p>{priceSale}</p>
                                </div>
                            ) :
                            <></>
                    }
                    {
                        priceOld !== null ?
                            (
                                <div className={cx('productBottom__priceCurrent')}>
                                    <strike>{priceOld}đ</strike>
                                </div>
                            ) :
                            <></>
                    }

                </div>
            </div>
            {
                salePercent !== '0' ?
                    (
                        <div className={cx('product__sale')}>-{salePercent}%</div>
                    ) :
                    <></>
            }
        </div>
    )
}

export default Product