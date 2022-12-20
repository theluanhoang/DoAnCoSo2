import React from 'react'
import styles from './Cart.module.scss'
import classNames from 'classnames/bind'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getShoppingCart, hideModalCart  } from '../../redux/actions'
import CartProduct from './CartProduct'
import { shoppingCartState$ } from '../../redux/selectors'
import { Link } from 'react-router-dom'


const cx = classNames.bind(styles)

function Cart() {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const hideModal = React.useCallback(() => {
    dispatch(hideModalCart())
  }, [dispatch])


  
  React.useEffect(() => {
    dispatch(getShoppingCart.getShoppingCartRequest({ userId: currentUser.id}));
  }, [dispatch])

  const shoppingCart = useSelector(shoppingCartState$);

  return (
    <div className={cx('cart')}>
      <div className={cx('cart__overlay')} onClick={hideModal}></div>
      <div className={cx('cart__container')}>
        <div className={cx('cart__container--header')}>
          <h1>GIỎ HÀNG</h1>
          <FaTimes onClick={hideModal} />
        </div>
        {
          shoppingCart.length <= 0 && (
            <>
              <div className={cx('cart__container--image')}>
                <img src={'https://sfresh.w2.exdomain.net/catalog/view/theme/sfresh/image/mobile-shopping.svg'} alt='cartImage' />
              </div>
              <div className={cx('cart__container--btn', 'btn')} onClick={hideModal}>
                Tiếp tục mua hàng
              </div>
            </>
          )
        }
        {
          shoppingCart.length > 0 && (
            <>
              <ul className={cx('cart__list')}>
                {
                  shoppingCart.map(item => (
                    <CartProduct
                      image={item.productImage}
                      title={item.productTitle}
                      salePercent={item.productSalePercent}
                      priceCurrent={item.productPriceCurrent}
                      quantity={item.quantity}
                      item={item}
                    />
                  ))
                }
              </ul>
              <div className={cx('cart__line')}></div>
              <div className={cx('cart__total')}>
                <div className={cx('cart__total--cost')}>
                  <span><h3>Tổng tiền: </h3></span>
                  <span><p>138.000đ</p></span>
                </div>
                <Link to={'/checkout/checkout'} className={cx('cart__total--btn', 'btn')} style={{ width: '110%', marginTop: '0px' }}>
                  Thanh toán
                </Link>
              </div>
            </>
          )
        }
      </div>

    </div>
  )
}

export default Cart