import React from 'react'
import styles from './NewsPage.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar';
import Note from '../../components/Note';
import News from '../../components/News';
import { News1, News2, News3, News4 } from '../../assets/img';
import Footer from '../../components/Footer';

const cx = classNames.bind(styles)

function NewsPage() {
  return (
    <div className={cx('newsPage')}>
        <Navbar />
        <Note />
        <div className={cx('newsPage--list')}>
        <News 
            image={News1}
            desc='Đi chợ online: Xu hướng lên ngôi...'
            user='John Doe'
            time='30/06/2022'
          />
          <News 
            image={News2}
            desc='Cách chọn rau củ quả sạch tươi n...'
            user='David Lux'
            time='16/06/2022'
          />
          <News 
            image={News3}
            desc='Các loại ngũ cốc tốt cho sức khỏe...'
            user='Frankie De Boud'
            time='20/07/2022'
          />
          <News 
            image={News4}
            desc='Các cách chế biến món ăn từ rau...'
            user='John Doe'
            time='30/06/2022'
          />
        </div>
        <Footer />
    </div>
  )
}

export default NewsPage