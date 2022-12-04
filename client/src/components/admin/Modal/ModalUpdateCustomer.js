import React from 'react'
import styles from './ModalUpdateProduct.module.scss'
import classNames from 'classnames/bind'
import Overlay from '../../Overlay'
import { useDispatch } from 'react-redux';
import { hideModalUpdateProduct } from '../../../redux/actions';
import Axios from 'axios'
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles)

function ModalUpdateProduct() {

    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');

    const setData = (customer) => {
        setName(customer.name ? customer.name : '');
        setAddress(customer.address ? customer.address : '');
        setPhoneNumber(customer.phoneNumber ? customer.phoneNumber : '');
        setEmail(customer.email ? customer.email : '');
    }

    const { id } = useParams();

    const dispatch = useDispatch();

    const hideModalUpdate = React.useCallback(() => {
        dispatch(hideModalUpdateProduct());
    }, [dispatch]);

    React.useEffect(() => {
        Axios.get('http://localhost:5000/customers/' + id).then((res) => {
            setData(res.data[0])
        })
    }, []);

    const submitUpdateCustomer = () => {

        const newCustomer = {
            "name": name,
            "address": address,
            "phoneNumber": phoneNumber,
            "email": email
        }
        Axios.post(`http://localhost:5000/customers/update/${id}`,
            newCustomer).then(() => {
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
                                <label htmlFor='nameCustomer'>Tên khách hàng</label>
                                <input type="text" id="nameCustomer" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className={cx('modalUpdateProduct__content--column')}>
                                <label htmlFor='addressCustomer'>Địa chỉ</label>
                                <input type="text" id="addressCustomer" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>
                        <div className={cx('modalUpdateProduct__content--row')}>
                            <div className={cx('modalUpdateProduct__content--column')}>
                                <label htmlFor='emailCustomer'>Email</label>
                                <input type="text" id="emailCustomer" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={cx('modalUpdateProduct__content--column')}>
                                <label htmlFor='phoneNumber'>Số điện thoại</label>
                                <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('modalUpdateProduct__content--btn')}>
                        <div className={cx("btn", "btn-save")} onClick={submitUpdateCustomer}>Lưu lại</div>
                        <div className={cx("btn", "btn-cancel")} onClick={hideModalUpdate}>Hủy bỏ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdateProduct