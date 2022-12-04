import React from 'react'
import styles from './Dashboard.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Card from '../../../components/admin/Card'
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import AppTitle from '../../../components/admin/AppTitle'

const cx = classNames.bind(styles)

function Dashboard() {

    return (
        <div className={cx('dashboard')}>
            <div className={cx('dashboard__wrapper')}>
                <AppTitle title={'Bảng điều khiển'}/>
                <div className={cx('dashboard__main')}>
                    <div className={cx('dashboard__left')}>
                        <div className={cx('dashboard__left--cardList')}>
                            <Card
                                icon={'customers'}
                                title={'TỔNG KHÁCH HÀNG'}
                                description={'Tổng số khách hàng được quản lý.'}
                                quantity={'56 khách hàng'}
                                bgr='#b9ffd3'
                                color='#22ad56'
                            />
                            <Card
                                icon={'products'}
                                title={'TỔNG SẢN PHẨM'}
                                description={'Tổng số sản phẩm được quản lý.'}
                                quantity={'1850 sản phẩm'}
                                bgr='#adcbf3'
                                color='#1d5aab'
                            />
                            <Card
                                icon={'orders'}
                                title={'TỔNG ĐƠN HÀNG'}
                                description={'Tổng số hóa đơn bán hàng trong tháng.'}
                                quantity={'180 đơn hàng'}
                                bgr='#fde1c3'
                                color='#ff8b07'
                            />
                            <Card
                                icon={'warn'}
                                title={'SẮP HẾT HÀNG'}
                                description={'Số sản phẩm cảnh báo hết cần nhập thêm.'}
                                quantity={'4 sản phẩm'}
                                bgr='#f9baba'
                                color='#de2222'
                            />
                        </div>
                        <div className={cx('dashboard__left--tile')} style={{ marginTop: '10px' }}>
                            <h3 className={cx('dashboard__left--tileTitle')}>
                                Tình trạng đơn hàng
                            </h3>
                            <div>
                                <table class="table table-bordered" >
                                    <thead>
                                        <tr>
                                            <th>ID đơn hàng</th>
                                            <th>Tên khách hàng</th>
                                            <th>Tổng tiền</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>AL3947</td>
                                            <td>Phạm Thị Ngọc</td>
                                            <td>
                                                19.770.000 đ
                                            </td>
                                            <td><span class="badge bg-info">Chờ xử lý</span></td>
                                        </tr>
                                        <tr>
                                            <td>ER3835</td>
                                            <td>Nguyễn Thị Mỹ Yến</td>
                                            <td>
                                                16.770.000 đ
                                            </td>
                                            <td><span class="badge bg-warning">Đang vận chuyển</span></td>
                                        </tr>
                                        <tr>
                                            <td>MD0837</td>
                                            <td>Triệu Thanh Phú</td>
                                            <td>
                                                9.400.000 đ
                                            </td>
                                            <td><span class="badge bg-success">Đã hoàn thành</span></td>
                                        </tr>
                                        <tr>
                                            <td>MT9835</td>
                                            <td>Đặng Hoàng Phúc	</td>
                                            <td>
                                                40.650.000 đ
                                            </td>
                                            <td><span class="badge bg-danger">Đã hủy	</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={cx('dashboard__left--tile')} style={{ marginTop: '10px' }}>
                            <h3 className={cx('dashboard__left--tileTitle')}>
                                Khách hàng mới
                            </h3>
                            <div>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên khách hàng</th>
                                            <th>Ngày sinh</th>
                                            <th>Số điện thoại</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#183</td>
                                            <td>Hột vịt muối</td>
                                            <td>21/7/1992</td>
                                            <td><span class="tag tag-success">0921387221</span></td>
                                        </tr>
                                        <tr>
                                            <td>#219</td>
                                            <td>Bánh tráng trộn</td>
                                            <td>30/4/1975</td>
                                            <td><span class="tag tag-warning">0912376352</span></td>
                                        </tr>
                                        <tr>
                                            <td>#627</td>
                                            <td>Cút rang bơ</td>
                                            <td>12/3/1999</td>
                                            <td><span class="tag tag-primary">01287326654</span></td>
                                        </tr>
                                        <tr>
                                            <td>#175</td>
                                            <td>Hủ tiếu nam vang</td>
                                            <td>4/12/20000</td>
                                            <td><span class="tag tag-danger">0912376763</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className={cx('dashboard__right')}>
                        <div className={cx('dashboard__left--tile')} style={{ marginTop: '10px' }}>
                            <h3 className={cx('dashboard__left--tileTitle')}>
                                Dữ liệu 6 tháng đầu vào
                            </h3>
                            <Line
                                data={{
                                    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                                    datasets: [
                                        {
                                            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                                            label: "Africa",
                                            borderColor: "#3e95cd",
                                            fill: false
                                        },
                                        {
                                            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                                            label: "Asia",
                                            borderColor: "#8e5ea2",
                                            fill: false
                                        },
                                        {
                                            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                                            label: "Europe",
                                            borderColor: "#3cba9f",
                                            fill: false
                                        },
                                        {
                                            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                                            label: "Latin America",
                                            borderColor: "#e8c3b9",
                                            fill: false
                                        },
                                        {
                                            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                                            label: "North America",
                                            borderColor: "#c45850",
                                            fill: false
                                        }
                                    ]
                                }}
                                options={{
                                    title: {
                                        display: true,
                                        text: "World population per region (in millions)"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    }
                                }}
                            />
                        </div>
                        <div className={cx('dashboard__left--tile')} style={{ marginTop: '10px' }}>
                            <h3 className={cx('dashboard__left--tileTitle')}>
                                Thống kê 6 tháng doanh thu
                            </h3>
                            <Bar
                                data={{
                                    labels: [
                                        "Africa",
                                        "Asia",
                                        "Europe",
                                        "Latin America",
                                        "North America"
                                    ],
                                    datasets: [
                                        {
                                            label: "Population (millions)",
                                            backgroundColor: [
                                                "#3e95cd",
                                                "#8e5ea2",
                                                "#3cba9f",
                                                "#e8c3b9",
                                                "#c45850"
                                            ],
                                            fill: true,
                                            data: [2478, 5267, 734, 784, 433]
                                        }
                                    ]
                                }}
                                options={{
                                    legend: { display: false },
                                    title: {
                                        display: true,
                                        text: "Predicted world population (millions) in 2050"
                                    }
                                }}

                            />
                        </div>
                    </div>
                </div>
                <div className={cx("text-center")} style={{ fontSize: '13px', textAlign: 'center !important' }}>
                    <p>
                        <b>{'Copyright '}
                            {new Date().getFullYear()} Phần mềm quản lý bán hàng | Dev By Luân
                        </b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard