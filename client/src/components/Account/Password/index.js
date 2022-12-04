import React from 'react'
import styles from './Password.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Password() {
  return (
    <div className={cx('password')}>
        <h1>Đổi mật khẩu</h1>
            <form>
                <div class="mb-3">
                    <label for="password" class="form-label">Mật khẩu hiện tại</label>
                    <input type="password" class="form-control" id="password" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="repassword" class="form-label">Xác nhận mật khẩu</label>
                    <input type="password" class="form-control" id="repassword" />
                </div>
                <Link to="/sign-up/account" type="submit" class="btn btn-danger">Quay lại</Link>
                <button type="submit" class="btn btn-primary" style={{ marginLeft: '30px' }}>Cập nhật</button>
            </form>
    </div>
  )
}

export default Password