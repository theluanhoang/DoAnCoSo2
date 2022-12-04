import React from 'react'
import styles from './FormSignUp.module.scss'
import classNames from 'classnames/bind'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function FormSignUp() {
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitSignup = () => {
        const account = {
            'name': name,
            'address': address,
            'phoneNumber': phoneNumber,
            'email': email,
            'password': password,
        }

        Axios.post('http://localhost:5000/accounts/sign-up',
            account).then(() => {
                navigate('/sign-up/success');
            })
    }

    return (
        <div className={cx('form')}>
            <h1 className={cx('form__title')}>ĐĂNG KÝ</h1>
            <div className={cx('form__line')}></div>
            <form method="post" action="">
                <input type='text' placeholder="Họ và tên" onChange={(e) => setName(e.target.value)} required={true}/>
                <input type='text' placeholder="Địa chỉ" onChange={(e) => setAddress(e.target.value)} required={true}/>
                <input type='text' placeholder="Số điện thoại" onChange={(e) => setPhoneNumber(e.target.value)} required={true}/>
                <input type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} required={true}/>
                <input type='password' placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} required={true}/>
                <div onClick={submitSignup} className={cx('form__btn')}>Đăng ký</div>
            </form>
        </div>)
}

export default FormSignUp