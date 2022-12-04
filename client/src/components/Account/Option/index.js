import React from 'react'
import { Link } from 'react-router-dom'

function Option() {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Tài khoản</th>
                    <th scope="col">Đơn Hàng</th>
                    <th scope="col">Thư thông báo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Link to="/account/edit" >Sửa thông tin tài khoản</Link></td>
                    <td><Link to="/account/order" >Xem lịch sử mua hàng</Link></td>
                    <td rowSpan={6}><Link to="/account/newsletter" >Đăng ký / hủy đăng ký nhận tin</Link></td>
                </tr>
                <tr>
                    <td><Link to="/account/password" >Đổi mật khẩu</Link></td>
                    <td><Link to="/account/wishlist" >Đổi / Trả hàng</Link></td>
                </tr>
                <tr>
                    <td rowSpan={4}><Link to="/account/wishlist">Danh sách yêu thích</Link></td>
                </tr>
                <tr>
                </tr>
                <tr>
                    <td><Link to="/account/transaction" >Lịch sử giao dịch</Link></td>
                </tr>
                <tr>
                    <td><Link to="/account/recurring" >Thanh toán định kỳ</Link></td>
                </tr>
            </tbody>
        </table>)
}

export default Option