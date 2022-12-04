import React from 'react'
import styles from './AppTitle.module.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function AppTitle({ title }) {
    const [date, setDate] = React.useState("Thứ Hai")
    const [dateState, setDateState] = React.useState(new Date());
    React.useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    const setThu = (current_day) => {
        let day;
        switch (current_day) {
            case 0:
                day = "Chủ Nhật";
                setDate(day);
                break;
            case 1:
                day = "Thứ Hai";
                setDate(day);
                break;
            case 2:
                day = "Thứ Ba";
                setDate(day);
                break;
            case 3:
                day = "Thứ Tư";
                setDate(day);
                break;
            case 4:
                day = "Thứ Năm";
                setDate(day);
                break;
            case 5:
                day = "Thứ Sáu";
                setDate(day);
                break;
            case 6:
                day = "Thứ Bảy";
                setDate(day);
                break;
            default:
                day = "Failure";
                setDate(day);
                break;
        }
    }
    React.useEffect(() => {
        setThu(dateState.getDay());
    }, [date]);
    return (
        <div className={cx('app__app--title')}>
            <ul className={cx('app__app--list', 'breadcrumb')}>
                <li className={cx('app__app--item')}>
                    <Link to=''>
                        <b>{title}</b>
                    </Link>
                </li>
            </ul>
            <div className={cx('app__app--clock')}>
                <span className={cx('app__app--date')}>{date}, {dateState.getDate()}/{dateState.getMonth() + 1}/{dateState.getFullYear()} - {dateState.getHours()}:{dateState.getMinutes()}:{dateState.getSeconds()}</span>
            </div>
        </div>)
}

export default AppTitle