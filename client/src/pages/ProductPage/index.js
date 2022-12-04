import React from 'react'
import styles from './ProductPage.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import Product from '../../components/ProductList/Product';
import { products } from '../../products';
import Note from '../../components/Note';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const cx = classNames.bind(styles);

function ProductPage() {

  const { id } = useParams()

  const [quantity, setQuantity] = React.useState(1);
  const [slide, setSlide] = React.useState(1);

  const handlePlus = () => {
    setQuantity(prev => prev + 1);
  }
  const handleMinus = () => {
    if (quantity <= 1) setQuantity(1);
    else setQuantity(prev => prev - 1);
  }

  const handleSlideToTop = () => {
    if (slide <= 1) {
      setSlide(1)
    }
    else {
      setSlide(prev => prev - 1);
    }
  }

  const [idProduct, setIdProduct] = React.useState();
  const [image, setImage] = React.useState();
  const [priceCurrent, setPriceCurrent] = React.useState();
  const [priceCost, setPriceCost] = React.useState();
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [salePercent, setSalePercent] = React.useState();
  const [qty, setQty] = React.useState();

  const setData = (product) => {
    setIdProduct(product.id);
    setImage(product.image);
    setPriceCurrent(product.priceCurrent);
    setTitle(product.title);
    setDescription(product.description);
    setSalePercent(product.salePercent);
    setQty(product.qty);
  }

  React.useEffect(() => {
    Axios.get('http://localhost:5000/products/' + id).then((res) => {
      setData(res.data[0])
      console.log(res.data);
    })
  }, [id]);

  return (
    <div className={cx('ProductPage')}>
      <Navbar />
      <Note />
      <div className={cx('ProductPage__content')}>
        <div className={cx('ProductPage__content--container')}>
          <div className={cx('ProductPage__image')}>
            <div className={cx('ProductPage__image--container')}>
              <div className={cx('ProductPage__image--left')}>
                <div className={cx('ProductPage__image--leftIcon')} onClick={handleSlideToTop}>
                  <IoIosArrowUp />
                </div>
                <div className={cx('ProductPage__image--leftImage')}>
                  <ul className={cx('ProductPage__image--leftImageList')} >
                    {
                      products.map((product, index) => (
                        <li key={index} >
                          <img src={product?.image} alt={product?.title} />
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={cx('ProductPage__image--leftIcon')}>
                  <IoIosArrowDown />
                </div>

              </div>
              <div className={cx('ProductPage__image--right')}>
                <div className={cx('ProductPage__image--rightImage')}>
                  <img src={image} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className={cx('ProductPage__details')}>
            <div className={cx('ProductPage__details--container')}>
              <h3 className={cx('ProductPage__details--title')}>
                {title}
              </h3>
              <div className={cx('ProductPage__details--id')}>
                <p>Mã sản phẩm <span>{idProduct}</span></p>

              </div>
              <div className={cx('ProductPage__details--cost')}>
                <p className={cx('ProductPage__details--costNew')}>{priceCurrent}đ</p>
                <p className={cx('ProductPage__details--costCurrent')}><strike>{priceCost}đ</strike></p>
              </div>
              <div className={cx('ProductPage__details--sale')}>
                <p>Tiết kiệm: <span>-{salePercent}%</span> so với giá thị trường</p>
              </div>
              <div className={cx('ProductPage__details--desc')}>
                <p>Cam (danh pháp hai phần: Citrus × sinensis) là loài cây ăn quả cùng họ với bưởi.</p>
              </div>
              <label htmlFor="">Số lượng</label>
              <div className={cx('ProductPage__details--button')}>
                <div className={cx('ProductPage__details--input')}>
                  <button type="button" className={cx("btnDecrease", "btn")} onClick={handleMinus}><span>-</span></button>
                  <input type="number" defaultValue={1} size="2" value={quantity} />
                  <button type="button" className={cx("btnIncrease", "btn")} onClick={handlePlus}><span>+</span></button>
                </div>
                <div class="btn-muangay">
                  <button id="button-buy" type="button" className={cx("btn-buy-now")}>Mua ngay</button>
                </div>
              </div>
              <div className={cx("btn-mua")}>
                Thêm vào giỏ hàng
              </div>
            </div>
          </div>
          <div className={cx('ProductPage__commit')}>
            <div className={cx("item")}>
              <div className={cx("icon")}>
                <img src="https://sfresh.w2.exdomain.net/image/cache/catalog/sfresh/services/service_1-0x0.png" alt="100% tự nhiên" className={cx("img-responsive")} />
              </div>
              <div className={cx("info")}> 100% tự nhiên </div>
            </div>
            <div className={cx("item")}>
              <div className={cx("icon")}>
                <img src="https://sfresh.w2.exdomain.net/image/cache/catalog/sfresh/services/service_2-0x0.png" alt="100% tự nhiên" className={cx("img-responsive")} />
              </div>
              <div className={cx("info")}> Chứng nhận ATTP </div>
            </div>
            <div className={cx("item")}>
              <div className={cx("icon")}>
                <img src="https://sfresh.w2.exdomain.net/image/cache/catalog/sfresh/services/service_3-0x0.png" alt="100% tự nhiên" className={cx("img-responsive")} />
              </div>
              <div className={cx("info")}> Luôn luôn tươi mới </div>
            </div>
            <div className={cx("item")}>
              <div className={cx("icon")}>
                <img src="https://sfresh.w2.exdomain.net/image/cache/catalog/sfresh/services/service_4-0x0.png" alt="100% tự nhiên" className={cx("img-responsive")} />
              </div>
              <div className={cx("info")}> An toàn cho sức khoẻ </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('ProductPage__description')}>
        <div className={cx('ProductPage__description--wrapper')}>
          <div className={cx('ProductPage__description--details-product')}>
            <ul className={cx('ProductPage__description--navTabs')}>
              <li className={cx('ProductPage__description--navItem')}>
                <p>Mô tả</p>
              </li>
            </ul>
            <div className={cx('ProductPage__description--content')}>
              <div className={cx("tab-pane fade show active")} id="home" role="tabpanel" aria-labelledby="home-tab">
                {ReactHtmlParser(description)}
              </div>
            </div>
            <div className={cx('RelatedProducts')}>
              <div className={cx('RelatedProducts__wrapper')}>
                <div className={cx('RelatedProducts__title')}>
                  <Link title='Sản phẩm liên quan' to={''}>Sản phẩm liên quan</Link>
                </div>
                <div className={cx('RelatedProducts__list')} style={{ marginLeft: '60px' }}>
                  <ul>
                    {
                      products.map((product, index) => (
                        <Product
                          title={product.title}
                          image={product.image}
                          salePercent={product.salePercent}
                          priceCurrent={product.priceCurrent}
                          border='true'
                        />
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage