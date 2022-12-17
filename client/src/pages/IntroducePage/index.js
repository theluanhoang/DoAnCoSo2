import React from 'react'
import styles from './IntroducePage.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Section from '../../components/Section'

const cx = classNames.bind(styles)

function IntroducePage() {
    return (
        <div>
            <Navbar />
            <Section item={'Giới thiệu'}/>
            <section className={cx("information_page")}>
                <div className={cx("container")}>
                    <div className={cx("row")}>
                        <div id="content" class="col-xs-12 col-sm-12 col-md-12">
                            <div className={cx("title-block-page")}>
                                <h1 className={cx("title-head")}>Giới thiệu</h1>
                            </div>
                            <div className={cx("content-page", "v-base")}>
                                <p>
                                    <strong>S.Fresh</strong>
                                    là hệ thống cửa hàng thực phẩm sạch uy tín nhất ở Việt Nam, chuyên cung cấp thực phẩm sạch tới từng bếp ăn của gia đình bạn.</p> <p><strong>Tầm nhìn: </strong>Được nuôi trồng, chế biến theo phương Bio (sinh học), Organic (hữu cơ), Eco (sinh thái); cam kết không bán hàng giả, hàng nhái và hàng kém chất lượng. Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực phẩm.</p> <p><strong>Mục tiêu:</strong> Sản phẩm được giao đến tay khách hàng luôn đúng cam kết, đúng chất lượng niệm yết, luôn được bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực phẩm.</p> <p>&nbsp;</p> </div> </div> </div> </div> </section>

            <Footer />
        </div>
    )
}

export default IntroducePage