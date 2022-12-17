import React from 'react'
import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import { Banner1, Banner2, Banner3, Banner4, Banner5, BannerShipper, BgrMainBanner, Item1, Item2, Item3, Item4, Item5, Item6, News1, News2, News3, News4, NewsTheme, Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, SVG } from '../../assets/img'
import { Link, useLocation } from 'react-router-dom'
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri'
import Slide from '../../components/ProductList/Slide'
import Banner from '../../components/BannerList/Banner'
import { fruits } from './data/fruits'
import { fresh_food } from './data/fresh_food'
import { vegetable } from './data/vegetable'
import News from '../../components/News'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { modalCartState$, loginState$, productsState$ } from '../../redux/selectors';
import Product from '../../components/ProductList/Product'
import { getProducts } from '../../redux/actions'

const cx = classNames.bind(styles)

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(productsState$);
  const { isShowModalCart } = useSelector(modalCartState$);
  const currentUser = useSelector(loginState$);
  const [slide, setSlide] = React.useState(0);
  const [slide2, setSlide2] = React.useState(0);
  const [length, setLength] = React.useState(products.length);
  const handleLeft = () => {
    if (slide >= 0) {
      setSlide(0)
    }
    else {
      setSlide(prev => prev + 1);
    }
  }
  const handleRight = () => {
    if (slide <= -3) {
      setSlide(-3)
    }
    else {
      setSlide(prev => prev - 1);
    }
  }
  const handleLeft2 = () => {
    if (slide2 >= 0) {
      setSlide2(0)
    }
    else {
      setSlide2(prev => prev + 1);
    }
  }
  const handleRight2 = () => {
    if (slide2 <= -3) {
      setSlide2(-3)
    }
    else {
      setSlide2(prev => prev - 1);
    }
  }
  const marginLeft = slide * 277 + 'px'
  const marginLeft2 = slide2 * 240 + 'px'


  React.useEffect(() => {
    dispatch(getProducts.getProductsRequest());
    setLength(products.length);
}, [dispatch]);


  return (
    <div className={cx('homePage')}>
      <Navbar currentUser={currentUser} />
      {
        isShowModalCart && <Cart />
      }
      <div className={cx('homePage__banner')}>
        <img src={BgrMainBanner} alt='Banner' />
      </div>
      <ul className={cx('homePage__swiper')}>
        <li className={cx('homePage__swiper--item')}>
          <Link to={''}>
            <img src={Item1} alt='Item' className={cx('homePage__swiper--image')} />
          </Link>
          <p className={cx('homePage__swiper--desc')}>Rau củ quả</p>
        </li>
        <li className={cx('homePage__swiper--item')}>
          <Link to={''}>
            <img src={Item2} alt='Item' className={cx('homePage__swiper--image')} />
          </Link>
          <p className={cx('homePage__swiper--desc')}>Thịt tươi sống</p>

        </li>
        <li className={cx('homePage__swiper--item')}>
          <Link to={''}>
            <img src={Item3} alt='Item' className={cx('homePage__swiper--image')} />
          </Link>
          <p className={cx('homePage__swiper--desc')}>Thực phẩm khô</p>

        </li>
        <li className={cx('homePage__swiper--item')}>
          <Link to={''}>
            <img src={Item4} alt='Item' className={cx('homePage__swiper--image')} />
          </Link>
          <p className={cx('homePage__swiper--desc')}>Trái cây</p>

        </li>
        <li className={cx('homePage__swiper--item')}>
          <Link to={''}>
            <img src={Item5} alt='Item' className={cx('homePage__swiper--image')} />
          </Link>
          <p className={cx('homePage__swiper--desc')}>Trứng và bơ</p>

        </li>
        <li className={cx('homePage__swiper--item')}>
          <Link to={''}>
            <img src={Item6} alt='Item' className={cx('homePage__swiper--image')} />
          </Link>
          <p className={cx('homePage__swiper--desc')}>Đồ uống</p>

        </li>
      </ul>
      <div className={cx('homePage__endow')}>
        <div className={cx('homePage__endowList')}>
          <div className={cx('homePage__endowList--title')}>
            <Link to={'/1'}>
              <img className={cx('title__icon')} src={SVG} alt='' />
              <h2>Ưu đãi trong tuần</h2>
            </Link>
          </div>
          <div className={cx('homePage__endowList--display')}>
            <ul className={cx('productList')} style={{ marginLeft: marginLeft, transition: 'all ease-in-out 0.4s' }}>
              {
                products.map((product) => (
                  <Product
                    key={product.id}
                    settings={product.setting}
                    title={product.title}
                    priceCurrent={product.priceCurrent}
                    salePercent={product.salePercent}
                    image={product.image}
                    product={product}
                  />
                ))
              }
            </ul>
          </div>
          {
            slide === -3 ? <></>
              : (
                <div className={cx('right--icon', 'direction')}>
                  <RiArrowRightSFill onClick={handleRight} className={cx('arrowRight', 'arrow')} />
                </div>
              )
          }
          {
            slide === 0 ? <></>
              : (
                <div className={cx('left--icon', 'direction')}>
                  <RiArrowLeftSFill onClick={handleLeft} className={cx('arrowLeft', 'arrow')} />
                </div>
              )
          }
        </div>
      </div>
      <ul className={cx('banner')}>
        <li className={cx('banner__item')}>
          <Link to={'/'}>
            <img src={Banner1} alt='' />
          </Link>
        </li>
        <li className={cx('banner__item')}>
          <Link to={'/'}>
            <img src={Banner2} alt='' />
          </Link>
        </li>
      </ul>
      <div className={cx("list__product")}>
        <Banner
          image={Banner3}
          items={fruits}
          title={'Trái cây'}
        />
        <div className={cx("list__product--slide")}>
          <ul>
            <Slide marginLeft={marginLeft2} />
          </ul>
        </div>
        {
          slide2 === -3 ? <></>
            : (
              <div className={cx('right--icon', 'direction', 'right')}>
                <RiArrowRightSFill onClick={handleRight2} className={cx('arrowRight', 'arrow')} />
              </div>
            )
        }
        {
          slide2 === 0 ? <></>
            : (
              <div className={cx('left--icon', 'direction', 'left')}>
                <RiArrowLeftSFill onClick={handleLeft2} className={cx('arrowLeft', 'arrow')} />
              </div>
            )
        }
      </div>
      <div className={cx("list__product")}>
        <Banner
          right={true}
          image={Banner4}
          items={vegetable}
          title={'Rau củ quả'}
        />
        <div className={cx("list__product--slide")} style={{ marginLeft: '20px', width: '70%' }}>
          <ul style={{ width: '111%' }}>
            <Slide marginLeft={marginLeft2} />
          </ul>
        </div>
        {
          slide2 === -3 ? <></>
            : (
              <div className={cx('right--icon', 'direction', 'right')} style={{ right: '27.5%' }}>
                <RiArrowRightSFill onClick={handleRight2} className={cx('arrowRight', 'arrow')} />
              </div>
            )
        }
        {
          slide2 === 0 ? <></>
            : (
              <div className={cx('left--icon', 'direction', 'left')} style={{ left: '0' }}>
                <RiArrowLeftSFill onClick={handleLeft2} className={cx('arrowLeft', 'arrow')} />
              </div>
            )
        }
      </div>
      <div className={cx("list__product")}>
        <Banner
          image={Banner5}
          items={fresh_food}
          title={'Thực phẩm tươi'}
        />
        <div className={cx("list__product--slide")}>
          <ul>
            <Slide marginLeft={marginLeft2} />
          </ul>
        </div>
        {
          slide2 === -3 ? <></>
            : (
              <div className={cx('right--icon', 'direction', 'right')}>
                <RiArrowRightSFill onClick={handleRight2} className={cx('arrowRight', 'arrow')} />
              </div>
            )
        }
        {
          slide2 === 0 ? <></>
            : (
              <div className={cx('left--icon', 'direction', 'left')}>
                <RiArrowLeftSFill onClick={handleLeft2} className={cx('arrowLeft', 'arrow')} />
              </div>
            )
        }
      </div>
      <div className={cx('banner__shipper')}>
        <img src={BannerShipper} alt='Banner Shipper' />
        <div className={cx('banner__shipper--content')}>
          <h2>Giao hàng miễn phí tận nhà trong vòng 24h</h2>
          <div className={cx('banner__shipper--button')}>
            Tìm hiểu thêm
          </div>
        </div>
      </div>
      <div className={cx('news')}>
        <div className={cx('news__title')}>
          <h1>Tin tức mới nhất</h1>
          <img src={NewsTheme} alt='' />
        </div>
        <ul className={cx('news__list')}>
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
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage