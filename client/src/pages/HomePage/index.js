import React from 'react'
import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import { Banner1, Banner2, Banner3, Banner4, Banner5, BannerShipper, BgrMainBanner, Item1, Item2, Item3, Item4, Item5, Item6, News1, News2, News3, News4, NewsTheme, Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, SVG } from '../../assets/img'
import { Link } from 'react-router-dom'
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri'
import Banner from '../../components/BannerList/Banner'
import { fruits } from './data/fruits'
import { fresh_food } from './data/fresh_food'
import { vegetable } from './data/vegetable'
import News from '../../components/News'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { modalCartState$, productsState$ } from '../../redux/selectors';
import Product from '../../components/Product'
import { getProducts } from '../../redux/actions'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cx = classNames.bind(styles)
function NextArrow(props) {
  return (
    <div className={cx('right--icon', 'direction')}>
      <RiArrowRightSFill onClick={props.onClick} className={cx('arrowRight', 'arrow')} />
    </div>
  );
}

function PrevArrow(props) {
  return (
    <div className={cx('left--icon', 'direction')}>
      <RiArrowLeftSFill onClick={props.onClick} className={cx('arrowLeft', 'arrow')} />
    </div>
  );
}
function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(productsState$);
  const { isShowModalCart } = useSelector(modalCartState$);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    dispatch(getProducts.getProductsRequest());
  }, [dispatch]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    customPaging: i => (
      <div
        style={{
          display: 'none'
        }}
      >
        {i + 1}
      </div>
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={cx('homePage')}>
      <Navbar currentUser={currentUser} />
      {
        isShowModalCart && <Cart />
      }
      <div className={cx('homePage__banner')}>
        <img src={BgrMainBanner} alt='Banner' />
      </div>
      <div className={cx('container')}>
        <div className={cx('homePage__swiper--display')}>
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
        </div>

        <div className={cx('homePage__endow')}>
          <div className={cx('homePage__endowList')}>
            <div className={cx('homePage__endowList--title')}>
              <Link to={'/1'}>
                <img className={cx('title__icon')} src={SVG} alt='' />
                <h2>Ưu đãi trong tuần</h2>
              </Link>
            </div>
            <div className={cx("list__product--slide")}>
              <Slider {...settings}>
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
                      border={true}
                    />
                  ))
                }
              </Slider>
            </div>
          </div>
        </div>
        <div className={cx('banner__display')}>
          <ul className={cx('banner')}>
            <li className={cx('banner__item')}>
              <Link to={'/'}>
                <img src={Banner1} alt='' className={cx('banner__item--img')} />
              </Link>
            </li>
            <li className={cx('banner__item')}>
              <Link to={'/'}>
                <img src={Banner2} alt='' className={cx('banner__item--img')} />
              </Link>
            </li>
          </ul>
        </div>

        <div className={cx(["list__product", 'list__product--1'])}>
          <Banner
            image={Banner3}
            items={fruits}
            title={'Trái cây'}
          />
          <div className={cx("list__product--slide")}>
            <Slider {...settings}>
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
                    border={true}
                  />
                ))
              }
            </Slider>
          </div>
        </div>
        <div className={cx(["list__product", 'list__product--2'])}>

          <div className={cx("list__product--slide")}>
            <Slider {...settings} >
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
                    border={true}
                  />
                ))
              }
            </Slider>
          </div>
          <Banner
            right={false}
            image={Banner4}
            items={vegetable}
            title={'Rau củ quả'}
          />
        </div>
        <div className={cx(["list__product", 'list__product--3'])}>
          <Banner
            image={Banner5}
            items={fresh_food}
            title={'Thực phẩm tươi'}
          />
          <div className={cx("list__product--slide")}>
            <Slider {...settings}>
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
                    border={true}
                  />
                ))
              }
            </Slider>
          </div>
        </div>
        <div className={cx('banner__shipper')}>
          <div className={cx('banner-shipper__image')}>
            <img src={BannerShipper} alt='Banner Shipper' />
          </div>
          <div className={cx('banner-shipper__content')}>
            <h2>Giao hàng miễn phí tận nhà trong vòng 24h</h2>
            <div className={cx('banner-shipper__button')}>
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
      </div>
      <Footer />
    </div>
  )
}

export default HomePage

