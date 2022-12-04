import React from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { hideModalDeleteProduct } from '../../../redux/actions';
import { useParams } from 'react-router-dom'
import styles from './ModalDelete.module.scss'
import classNames from 'classnames/bind'
import Overlay from '../../Overlay';

const cx = classNames.bind(styles)

function ModalDelete() {
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);
  const dispatch = useDispatch();
  const deleteProduct = () => {
    Axios.get('http://localhost:5000/products/delete/' + id)
      .then(() => {
        dispatch(hideModalDeleteProduct());
      })
      .then(() => {
        window.location.reload(false);
      })
  }

  const hideModalUpdate = React.useCallback(() => {
    dispatch(hideModalDeleteProduct());
  }, [dispatch]);
  
  React.useEffect(() => {
    Axios.get('http://localhost:5000/products/' + id).then((res) => {
      setProduct(res.data[0])
    })
  }, []);

  return (
    <div className={cx('modalDelete')}>
      <Overlay />
      <div className={cx('modalDelete__wrapper')}>
        <div className={cx('modalDelete__wrapper--title')}>Cảnh báo</div>
        <div className={cx('modalDelete__wrapper--text')}>Bạn có chắc chắn muốn xóa <p> {product?.title}? </p></div>
        <div className={cx('modalDelete__wrapper--btn')}>
          <div className={cx('btn')}>
              <button className={cx('btn-cancel')} onClick={hideModalUpdate}>Hủy bỏ</button>
          </div>
          <div className={cx('btn')}>
              <button className={cx('btn-confirm')} onClick={deleteProduct}>Đồng ý</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete