import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import styles from './Contact.module.scss'
import classNames from 'classnames/bind'
import { useDispatch } from 'react-redux'
import { sendFeedback } from '../../redux/actions'
const cx = classNames.bind(styles)

function ContactPage() {
    const [content, setContent] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        let feedback = {
            userId: "21",
            content: content
        }
        dispatch(sendFeedback.sendFeedbackRequest(feedback));
        setSuccess(true);
        setData('');
    }

    const setData = (data) => {
        setPhone(data);
        setName(data);
        setEmail(data);
        setContent(data)
    }
    return (
        <div>
            <Navbar />
            <Section item={'Liên hệ'} />
            <div style={{ width: '80%', margin: '0 auto' }}>
                <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.6619189807493!2d108.24768071468287!3d15.979022188936652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108f7ce7d251%3A0xbabf10f9b837c321!2zMTIzIE5ndXnhu4VuIE1pbmggQ2jDonUsIEhvw6AgSOG6o2ksIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1670179866072!5m2!1sen!2s"} width="100%" height="450" style={{ border: "0;", margin: '0 auto' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '50px' }}>
                    <div className={cx('col-lg-4', 'col-md-6', 'col-sm-12', 'leave-your-message', 'order-1', 'order-md-2')} style={{ width: '48%' }}>
                        <h3>Thông tin liên hệ</h3>
                        <p className={cx('p-bottom')}>
                            Website thương mại điện tử S.Fresh do S Group là đơn vị chủ quản, chịu trách nhiệm và thực hiện các giao dịch liên quan mua sắm sản phẩm hàng hoá tiêu dùng thiết yếu.
                        </p>
                        <div className={cx("contact-box")}>
                            <p className={cx("add")}>
                                <strong>Địa chỉ: </strong>
                                Số 123 Nguyễn Minh Châu, P. Hòa Hải, Q. Ngũ Hành Sơn, Tp. Đà Nẵng
                            </p>
                            <p className={cx("phone")}>
                                <strong>Điện thoại: </strong>
                                <a href="tel:0379 124 695" title="0379 124 695" style={{ color: '#787878' }}>
                                    0379 124 695
                                </a>
                            </p>
                            <p className={cx("mail")}>
                                <strong>Email: </strong>
                                <a href="mailto:luanht.21it@vku.udn.vn" title="luanht.21it@vku.udn.vn" style={{ color: '#787878' }}>
                                    luanht.21it@vku.udn.vn
                                </a>
                            </p>
                        </div>
                    </div>
                    <form style={{ width: '48%' }}>
                        {
                            success && <p className={cx("form-newsletter__notification")}><div className={cx("alert", "alert-success")} role="alert">Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ trả lời bạn sớm nhất có thể.</div></p>
                        }
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Họ và tên</label>
                            <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp" value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div class="mb-3">
                            <label for="phoneInput" class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control" id="phoneInput" aria-describedby="emailHelp" value={phone} onChange={(e) => {
                                setPhone(e.target.value)
                            }} />
                        </div>
                        <div class="mb-3">
                            <label for="contentInput" class="form-label">Nội dung</label>
                            <textarea class="form-control" id="contentInput" onChange={(e) => {
                                setContent(e.target.value)
                            }}>{content}</textarea>
                        </div>
                        <button type="button" class="btn btn-primary" style={{ backgroundColor: '#000', borderColor: '#000' }} onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage