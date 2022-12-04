import React from 'react'
import styles from './Functions.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Functions() {
    return (
        <ul className={cx('functions')}>
            <li>
                <Link to='/admin/add-product'>
                    <i className='fas fa-plus'></i>
                    {" Tạo mới sản phẩm"}
                </Link>
            </li>
            <li>
                <Link to='' style={{ backgroundColor: '#e1ec86', color: '#4b5400' }}>
                    <i className='fas fa-file-upload'></i>
                    {" Tải từ file"}
                </Link>
            </li>
            <li>
                <Link to='' style={{ backgroundColor: '#bfbeef', color: '#03009a' }}>
                    <i className='fas fa-print'></i>
                    {" In dữ liệu"}
                </Link>
            </li>
            <li>
                <Link to='' style={{ backgroundColor: '#bfbeef', color: '#03009a' }}>
                    <i className='fas fa-copy'></i>
                    {" Sao chép"}
                </Link>
            </li>
            <li>
                <Link to='' style={{ backgroundColor: '#a2ecb5', color: '#008c04' }}>
                    <i className='fas fa-file-excel'></i>
                    {" Xuất Excel"}
                </Link>
            </li>
            <li>
                <Link to='' style={{ backgroundColor: '#efcaca', color: '#bf0000' }}>
                    <i className='fas fa-file-pdf'></i>
                    {" Xuất PDF"}
                </Link>
            </li>
            <li>
                <Link to='' style={{ backgroundColor: '#d0d0d0', color: '#000' }}>
                    <i className='fas fa-trash-alt'></i>
                    {" Xóa tất cả"}
                </Link>
            </li>
        </ul>)
}

export default Functions