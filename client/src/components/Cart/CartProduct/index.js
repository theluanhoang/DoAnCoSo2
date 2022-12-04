import React from 'react'
import styles from './CartProduct.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteShoppingCartItem, updateShoppingCartItem } from '../../../redux/actions'


const cx = classNames.bind(styles)

function CartProduct({ image, title, priceCurrent, salePercent, product, quantity }) {
    
    const [qty, setQty] = React.useState(quantity);

    const dispatch = useDispatch();

    let priceSale;
    if (salePercent === '0') {
        priceSale = priceCurrent + 'đ';
    }
    else {
        const sale = Math.round(Number(priceCurrent) - Number(priceCurrent) * (Number(salePercent) / 100));
        priceSale = sale + 'đ';
    }

    const deleteProduct = () => {
        dispatch(deleteShoppingCartItem.deleteShoppingCartItemRequest(
            {
                productId: product.id,
                customerId: '21'
            }
        ));
    }

    const qtyDescrease = () => {
        if (qty > 1) {
            dispatch(updateShoppingCartItem.updateShoppingCartItemRequest({
                productId: product.id,
                customerId: "21",
                quantity: qty - 1
            }))
            setQty(pre => pre - 1);
        }
    }

    const qtyIncrease = () => {
        dispatch(updateShoppingCartItem.updateShoppingCartItemRequest({
            productId: product.id,
            customerId: "21",
            quantity: qty + 1
        }))
        setQty(pre => pre + 1);
    }

    return (
        <div className={cx('product')}>
            <Link to={''} style={{ color: '#000' }}>
                <div className={cx('product__image')}>
                    <img src={image} alt='product' />
                </div>
                <div className={cx('product__information')}>
                    <div className={cx('product__information--title')}>
                        <p>{title}</p>
                    </div>
                    <div className={cx('product__information--qty')}>
                        <p>Số lượng</p>
                    </div>
                    <div className={cx('product__information--input')}>
                        <button className={cx('btn', 'btnMinus')} onClick={qtyDescrease}><AiOutlineMinus /></button>
                        <input type={'number'} value={qty} />
                        <button className={cx('btn', 'btnPlus')} onClick={qtyIncrease}><AiOutlinePlus /></button>
                    </div>
                </div>
                <div>
                    <div className={cx('product__information--cost')}>{priceSale}</div>
                    <div className={cx('product__information--skip')} onClick={deleteProduct}>Bỏ sản phẩm</div>
                </div>
            </Link>
        </div>)
}

export default CartProduct