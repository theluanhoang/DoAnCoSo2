import React from 'react'
import styles from './Section.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Section({item}) {
    return (
        <section className={cx('bread-crumb')}>
            <div className={cx('container')}>
                <div className={cx('nd-main-title-breadcrumb', 'text-center')}>{item}</div>
                <ul className={cx('breadcrumb')}>
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                        <Link itemprop="item" href="https://sfresh.w2.exdomain.net/">
                            <span itemprop="name"><i className={cx("fa", "fa-home")}></i> Trang chủ</span>
                        </Link>
                    </li>
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"> <strong> <span itemprop="name">{item}</span>  </strong> </li>
                </ul>
            </div>
        </section>
    )
}

export default Section