import React from 'react'
import styles from './AddProduct.module.scss'
import classNames from 'classnames/bind'
import AppTitle from '../../../../components/admin/AppTitle'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createProduct } from '../../../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FileBase64 from 'react-file-base64'
import * as actions from '../../../../redux/actions'
import { distributorsState$, categoryState$ } from '../../../../redux/selectors';
import Axios from 'axios';

const cx = classNames.bind(styles)

function AddProduct() {
  const distributors = useSelector(distributorsState$);
  const categories = useSelector(categoryState$);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [idState, setIdState] = React.useState(0);
  const [data, setData] = React.useState('');

  const handleClose = () => {
    
    if (idState === 1) {
      const parameters = {
        supplier: data
      }
      Axios.post('http://localhost:5000/distributors/add', parameters, {
        headers: {
          header1: `Bearer $`,
        }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else if (idState === 2) {
      const parameters = {
        category_item: data
      }
      Axios.post('http://localhost:5000/category/add', parameters)
      .then(function (response) {
        window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    setShow(false);
  };
  const handleShow = (id) => {
    setShow(true);
    setIdState(id);
  };

  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [quantity, setQuantity] = React.useState(0);
  const [priceCurrent, setPriceCurrent] = React.useState('');
  const [priceCost, setPriceCost] = React.useState('');
  const [salePercent, setSalePercent] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [distributor, setDistributor] = React.useState('');

  const handleSave = () => {
    const product = {
      title: title,
      description: description,
      qty: quantity,
      image: image,
      priceCurrent: priceCurrent,
      priceCost: priceCost,
      category: category.value,
      salePercent: salePercent,
      distributor: distributor.value,
      status: status.value,
    }

    dispatch(createProduct.createProductRequest(product));
    navigate('/admin/products');
  }

  React.useEffect(() => {
    dispatch(actions.getDistributors.getDistributorsRequest());
    dispatch(actions.getCategory.getCategoryRequest());
  }, [])

  return (
    <div className={cx('addProduct')}>
      <div className={cx('addProduct__wrapper')}>
        <AppTitle title={`Danh sách sản phẩm / Tạo mới sản phẩm`} />
      </div>
      <div className={cx('addProduct__wrapper')}>
        <div className={cx('addProduct__tile')}>
          <h3 className={cx('addProduct__tile--title')}>
            Tạo mới sản phẩm
          </h3>
          <div className={cx('addProduct__tile--body')}>
            <ul className={cx('addProduct__tile--functions')}>
              <li>
                <Link to={''} onClick={() => handleShow(1)} className={cx('btn', 'btn-add', 'btn-sm')} data-toggle="modal" data-target="#addNhaCungCap">
                  <i className='fas fa-folder-plus'></i>
                  {" Thêm nhà cung cấp"}
                </Link>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {
                        idState === 1 ? 'Thêm mới nhà cung cấp' : ''
                      }
                      {
                        idState === 2 ? 'Thêm mới danh mục' : ''
                      }
                      {
                        idState === 3 ? 'Thêm mới tình trạng' : ''
                      }
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className={cx("form-group col-md-3")}>
                    <div>
                      <label className={cx("control-label")} style={{ width: '200px' }}>
                        {
                          idState === 1 ? 'Nhập tên nhà cung cấp mới' : ''
                        }
                        {
                          idState === 2 ? 'Nhập tên danh mục mới' : ''
                        }
                        {
                          idState === 3 ? 'Nhập tình trạng mới' : ''
                        }
                      </label>
                      <input className={cx("form-control")} style={{ width: '450px', marginLeft: '8px' }} type="text" placeholder="" onChange={(e) => setData(e.target.value)} />
                      {
                        idState === 2 ? (
                          <>
                            <label className={cx("control-label")} style={{ width: '200px', marginTop: '10px' }}>Danh sách danh mục đã có</label>
                            <ul style={{ paddingLeft: '20px', overflowY: 'scroll', width: '500%' }}>
                              {
                                categories.map((category, index) => (
                                  <li key={index} style={{ listStyle: 'circle' }}>{category.category_item}</li>
                                ))
                              }
                            </ul>
                          </>
                        ) : ''
                      }
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className={cx('btn', 'btn-danger')} onClick={handleClose}>
                      Hủy bỏ
                    </Button>
                    <Button className={cx('btn', 'btn-success')} onClick={handleClose}>
                      Lưu lại
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
              <li>
                <Link to={''} onClick={() => handleShow(2)} className={cx('btn', 'btn-add', 'btn-sm')}>
                  <i className='fas fa-folder-plus'></i>
                  {" Thêm danh mục"}
                </Link>
              </li>
              <li>
                <Link to={''} onClick={() => handleShow(3)} className={cx('btn', 'btn-add', 'btn-sm')}>
                  <i className='fas fa-folder-plus'></i>
                  {" Thêm tình trạng"}
                </Link>
              </li>
            </ul>
          </div>
          <form className={cx('row')}>
            <div className={cx("form-group col-md-3")}>
              <label className={cx("control-label")}>Tên sản phẩm </label>
              <input className={cx("form-control")} type="text" placeholder="" onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={cx("form-group col-md-3")}>
              <label className={cx("control-label")}>Số lượng</label>
              <input className={cx("form-control")} type="number" placeholder="" onChange={e => setQuantity(e.target.value)} />
            </div>
            <div className={cx("form-group col-md-3")}>
              <label htmlFor='statusInput' className={cx("control-label")}>Tình trạng</label>
              <select className={cx("form-control")} id="statusInput" onChange={e => setStatus({ value: e.target.value })}>
                <option>-- Chọn tình trạng --</option>
                <option value="Còn hàng">Còn hàng</option>
                <option value="Hết hàng">Hết hàng</option>
              </select>
            </div>

            <div className={cx("form-group col-md-3")}>
              <label htmlFor='nhaCungCap' className={cx("control-label")}>Danh mục</label>
              <select className={cx("form-control")} id="nhaCungCap" onChange={e => setCategory({ value: e.target.value })}>
                <option>-- Chọn danh mục --</option>
                {
                  categories.map((category, index) => (
                    <option key={index} value={category.category_item}>{category.category_item}</option>
                  ))
                }
              </select>
            </div>
            <div className={cx("form-group col-md-3")}>
              <label htmlFor='nhaCungCap' className={cx("control-label")}>Nhà cung cấp</label>
              <select className={cx("form-control")} id="nhaCungCap" onChange={e => setDistributor({ value: e.target.value })}>
                <option>-- Chọn nhà cung cấp --</option>
                {
                  distributors.map((distributor, index) => (
                    <option key={index} value={distributor.supplier}>{distributor.supplier}</option>
                  ))
                }
              </select>
            </div>
            <div className={cx("form-group col-md-3")}>
              <label className={cx("control-label")}>Giá bán</label>
              <input className={cx("form-control")} type="text" placeholder="" onChange={e => setPriceCurrent(e.target.value)} />
            </div>
            <div className={cx("form-group col-md-3")}>
              <label className={cx("control-label")}>Giá vốn</label>
              <input className={cx("form-control")} type="text" placeholder="" onChange={e => setPriceCost(e.target.value)} />
            </div>
            <div className={cx("form-group col-md-3")}>
              <label className={cx("control-label")}>Giảm giá(%) </label>
              <input className={cx("form-control")} type="text" placeholder="" onChange={e => setSalePercent(e.target.value)} />
            </div>
            <div className={cx("form-group col-md-12")} style={{ marginBottom: '10px' }}
            >
              <label className={cx("control-label")}>Ảnh sản phẩm</label>
              <br />
              <img src={image} alt={title} style={{ width: '100px', borderRadius: '10px' }} />
              <div>
                <FileBase64
                  accept='image/*'
                  multiple={false}
                  type='file'
                  height="450"
                  width="400"
                  alt="Thumb image"
                  id={styles.thumbimage}
                  onDone={({ base64 }) => setImage(base64)} />
              </div>
            </div>
            <div className={cx("form-group col-md-12")}>
              <label className={cx('control-label')}>Mô tả sản phẩm</label>
              <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  setDescription(data);
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
            </div>
          </form>
          <button className={cx('btn', 'btn-save')} style={{ marginRight: '20px' }} onClick={handleSave} >Lưu lại</button>
          <Link to='/admin' className={cx('btn', 'btn-cancel')}>Hủy bỏ</Link>
        </div>
      </div>
    </div >
  )
}

export default AddProduct