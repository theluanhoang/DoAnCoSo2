import React from 'react'
import classNames from 'classnames/bind'
import styles from './SignUpSuccess.module.scss'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function SignUpSuccess() {
  return (
    <div className={cx('signUp__success')}>
      <Navbar />
      <div className={cx('signUp__success--banner')}>
        <img src={'https://sfresh.w2.exdomain.net/image/catalog/sfresh/breadcrumb/bg-breadcrumb.jpg'} alt='Banner' />
      </div>
      <div className={cx('signUp__success--status')}>
        <h3>Tài khoản của bạn đã được tạo!</h3>
        <FaHome /> Trang chủ <IoIosArrowForward /> Tài khoản <IoIosArrowForward /> Thành công
      </div>
      <div className={cx('signUp__success--content')}>
        <div className={cx('signUp__success--contentWrapper')}>
          <h3>Tài khoản của bạn đã được tạo!</h3>
          <p>Chúc mừng! Bạn đã tạo mới tài khoản thành công!</p>
          <p>Bây giờ bạn có thể sử dụng các quyền lợi của thành viên để tiến hành mua sắm với các tiện ích nâng cao.</p>
          <p>Nếu bạn có bất kỳ câu hỏi nào liên quan đến việc mua sắm online, vui lòng liên hệ với chủ cửa hàng.</p>
          <p>Một email xác nhận đã được gửi tới tài khoản bạn đã đăng ký, nếu không nhận được trong vòng 1 giờ, vui lòng liên hệ với chúng tôi.</p>
          <Link to={'/account'} className={cx('signUp__success--btn')}>
            Tiếp tục
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUpSuccess