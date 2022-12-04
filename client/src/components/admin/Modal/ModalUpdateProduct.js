import React from 'react'
import styles from './ModalUpdateProduct.module.scss'
import classNames from 'classnames/bind'
import Overlay from '../../Overlay'
import { useDispatch } from 'react-redux';
import { hideModalUpdateProduct } from '../../../redux/actions';
import Axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const cx = classNames.bind(styles)

function ModalUpdateProduct() {

  const [name, setName] = React.useState();
  const [quantity, setQty] = React.useState();
  const [price, setPrice] = React.useState();
  const [salePercent, setSalePercent] = React.useState();
  const [status, setStatus] = React.useState();
  const [previewSource, setPreviewSource] = React.useState();

  const setData = (product) => {
    setName(product.title ? product.title : '');
    setQty(product.qty ? product.qty : 0);
    setPrice(product.priceCurrent ? product.priceCurrent : '');
    setSalePercent(product.salePercent ? product.salePercent : '');
    setStatus(product.status ? product.status : '');
    setPreviewSource(product.image ? product.image : '');
  }

  const { id } = useParams();

  const dispatch = useDispatch();

  const hideModalUpdate = React.useCallback(() => {
    dispatch(hideModalUpdateProduct());
  }, [dispatch]);

  React.useEffect(() => {
    Axios.get('http://localhost:5000/products/' + id).then((res) => {
      setData(res.data[0])
    })
  }, []);

  const submitUpdateProduct = () => {

    const newProduct = {
      "title": name,
      "qty": quantity,
      "salePercent": salePercent,
      "status": status,
      "image": previewSource,
      "priceCurrent": price
    }
    Axios.post(`http://localhost:5000/products/update/${id}`,
      newProduct).then(() => {
        window.location.reload(false);
      })
  }

  return (
    <div className={cx('modalUpdateProduct')}>
      <Overlay />
      <div className={cx('modalUpdateProduct__wrapper')}>
        <div className={cx('modalUpdateProduct__content')}>
          <div className={cx('modalUpdateProduct__content--title')}>
            <h3>Chỉnh sửa thông tin cơ bản</h3>
          </div>
          <div className={cx('line')}></div>
          <div className={cx('modalUpdateProduct__content--form')}>
            <div className={cx('modalUpdateProduct__content--row')}>
              <div className={cx('modalUpdateProduct__content--column')}>
                <label htmlFor='nameProduct'>Tên sản phẩm</label>
                <input type="text" id="nameProduct" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={cx('modalUpdateProduct__content--column')}>
                <label htmlFor='salePercent'>Giảm giá(%)</label>
                <input type="text" id="salePercent" value={salePercent} onChange={(e) => setSalePercent(e.target.value)} />
              </div>
            </div>
            <div className={cx('modalUpdateProduct__content--row')}>
              <div className={cx('modalUpdateProduct__content--column')}>
                <label htmlFor='quantityProduct'>Số lượng</label>
                <input type="number" id="quantityProduct" value={quantity} onChange={(e) => setQty(e.target.value)} />
              </div>
              <div className={cx('modalUpdateProduct__content--column')}>
                <label htmlFor='statusProduct'>Tình trạng</label>
                <select id="statusProduct" onChange={(e) => setStatus(e.target.value)}>
                  {
                    status === 'Còn hàng' ?
                      <>
                        <option value='Còn hàng' selected>Còn hàng</option>
                        <option value='Hết hàng'>Hết hàng</option>
                        <option value='Đang nhập hàng'>Đang nhập hàng</option>
                      </>
                      : ''
                  }
                  {
                    status === 'Hết hàng' ?
                      <>
                        <option value='Còn hàng'>Còn hàng</option>
                        <option value='Hết hàng' selected>Hết hàng</option>
                        <option value='Đang nhập hàng' selected>Đang nhập hàng</option>
                      </>
                      : ''
                  }
                  {
                    status === 'Đang nhập hàng' ?
                      <>
                        <option value='Còn hàng'>Còn hàng</option>
                        <option value='Hết hàng'>Hết hàng</option>
                        <option value='Đang nhập hàng' selected>Đang nhập hàng</option>
                      </>
                      : ''
                  }
                </select>
              </div>
            </div>
            <div className={cx('modalUpdateProduct__content--row')}>
              <div className={cx('modalUpdateProduct__content--column')}>
                <label htmlFor='priceProduct'>Giá bán</label>
                <input type="text" id="priceProduct" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className={cx('modalUpdateProduct__content--column')}>
                <label htmlFor='categories'>Danh mục</label>
                <select id="categories">
                  <option value='Còn hàng'>Trái cây</option>
                  <option value='Hết hàng'>Thức ăn</option>
                  <option value='Đang nhập hàng'>Nước uống</option>
                </select>
              </div>
            </div>
          </div>
          <Link to={`/admin/products/update-product/${id}`} onClick={hideModalUpdate} className={cx('modalUpdateProduct__content--advanced')}>
            <p>Chỉnh sửa nâng cao</p>
          </Link>
          <div className={cx('modalUpdateProduct__content--btn')}>
            <div className={cx("btn", "btn-save")} onClick={submitUpdateProduct}>Lưu lại</div>
            <div className={cx("btn", "btn-cancel")} onClick={hideModalUpdate}>Hủy bỏ</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalUpdateProduct