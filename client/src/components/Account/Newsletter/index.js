import React from 'react'
import styles from './Newsletter.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Newsletter() {
    return (
        <div className={cx('newsletter')}>
            <h3>Đăng ký nhận thông báo</h3>
            <p>Đăng ký</p>
            <form>
                <div className="mb-3 form-check">
                    <input type="radio" className="form-check-input" id="yes" />
                    <label className="form-check-label" for="yes">Có</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="radio" className="form-check-input" id="no" />
                    <label className="form-check-label" for="no">Không</label>
                </div>
                <Link to="/sign-up/account" type="submit" class="btn btn-danger">Quay lại</Link>
                <button type="submit" class="btn btn-primary" style={{ marginLeft: '30px' }}>Cập nhật</button>
            </form>
        </div>
    )
}

export default Newsletter