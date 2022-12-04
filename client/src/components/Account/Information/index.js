import React from 'react'
import styles from './Information.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Information() {
    return (
        <div className={cx('information')}>
            <h1>Thông tin tài khoản</h1>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Họ và tên</label>
                    <input type="name" class="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Địa chỉ</label>
                    <input type="address" class="form-control" id="address" />
                </div>
                <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Số điện thoại</label>
                    <input type="phoneNumber" class="form-control" id="phoneNumber" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" />
                </div>
                <Link to="/sign-up/account" type="submit" class="btn btn-danger">Quay lại</Link>
                <button type="submit" class="btn btn-primary" style={{ marginLeft: '30px' }}>Cập nhật</button>
            </form>
        </div>
    )
}

export default Information