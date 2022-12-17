import React from 'react'
import styles from './UpdateProduct.module.scss'
import classNames from 'classnames/bind'
import AppTitle from '../../../../components/admin/AppTitle'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FileBase64 from 'react-file-base64';
import Axios from 'axios';
import { distributorsState$, categoryState$ } from '../../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../redux/actions'



const cx = classNames.bind(styles)

function UpdateProduct() {

    const dispatch = useDispatch();

    const distributors = useSelector(distributorsState$);
    const categories = useSelector(categoryState$);

    const navigate = useNavigate();

    const { id } = useParams();

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

    const setData = (product) => {
        setTitle(product.title);
        setImage(product.image);
        setDistributor(product.distributor);
        setQuantity(product.qty);
        setPriceCurrent(product.priceCurrent);
        setPriceCost(product.priceCost);
        setStatus(product.status);
        setSalePercent(product.salePercent);
        setCategory(product.category);
        setDescription(product.description);
    }

    React.useEffect(() => {
        Axios.get('http://localhost:5000/products/' + id).then((res) => {
            setData(res.data[0])
        })
    }, []);

    const handleSave = () => {
        const product = {
            title: title,
            description: description,
            qty: quantity,
            image: image,
            priceCurrent: priceCurrent,
            priceCost: priceCost,
            category: category ? category.value : '',
            salePercent: salePercent,
            distributor: distributor ? distributor.value : '',
            status: status ? status.value : '',
        }

        Axios.post(`http://localhost:5000/products/update/${id}`,
            product).then(() => {
                navigate('/admin/products');
            })
    }
    React.useEffect(() => {
        dispatch(actions.getDistributors.getDistributorsRequest());
        dispatch(actions.getCategory.getCategoryRequest());
    }, [])


    return (
        <div className={cx('updateProduct')}>
            <div className={cx('updateProduct__wrapper')}>
                <AppTitle title={`Danh sách sản phẩm / Cập nhật sản phẩm`} />
            </div>
            <div className={cx('updateProduct__wrapper')}>
                <div className={cx('updateProduct__tile')}>
                    <h3 className={cx('updateProduct__tile--title')}>
                        Cập nhật sản phẩm
                    </h3>
                    <form className={cx('row')}>
                        <div className={cx("form-group col-md-3")}>
                            <label className={cx("control-label")}>Tên sản phẩm </label>
                            <input className={cx("form-control")} type="text" placeholder="" onChange={e => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className={cx("form-group col-md-3")}>
                            <label className={cx("control-label")}>Số lượng</label>
                            <input className={cx("form-control")} type="number" placeholder="" onChange={e => setQuantity(e.target.value)} value={quantity} />
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
                            <input className={cx("form-control")} type="text" placeholder="" onChange={e => setPriceCurrent(e.target.value)} value={priceCurrent} />
                        </div>
                        <div className={cx("form-group col-md-3")}>
                            <label className={cx("control-label")}>Giá vốn</label>
                            <input className={cx("form-control")} type="text" placeholder="" onChange={e => setPriceCost(e.target.value)} value={priceCost} />
                        </div>
                        <div className={cx("form-group col-md-3")}>
                            <label className={cx("control-label")}>Giảm giá(%) </label>
                            <input className={cx("form-control")} type="text" placeholder="" onChange={e => setSalePercent(e.target.value)} value={salePercent} />
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
                                    onDone={({ base64 }) => setImage(base64)}
                                />
                            </div>
                        </div>
                        <div className={cx("form-group col-md-12")}>
                            <label className={cx('control-label')}>Mô tả sản phẩm</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={description || ''}
                                onReady={editor => {
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

export default UpdateProduct