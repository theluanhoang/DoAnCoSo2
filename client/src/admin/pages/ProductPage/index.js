import React from 'react'
import styles from './ProductPage.module.scss'
import classNames from 'classnames/bind'
import AppTitle from '../../../components/admin/AppTitle'
import Functions from '../../../components/admin/Functions'
import { useDispatch, useSelector } from 'react-redux';
import { modalAdminState$, productsState$ } from '../../../redux/selectors';
import * as actions from '../../../redux/actions'
import { showModalUpdateProduct, showModalDeleteProduct } from '../../../redux/actions'
import ModalUpdateProduct from '../../../components/admin/Modal/ModalUpdateProduct'
import ModalDelete from '../../../components/admin/Modal/ModalDelete'
import Table from '../../../components/admin/Table'

const cx = classNames.bind(styles)

function ProductPage() {
    const dispatch = useDispatch();
    const products = useSelector(productsState$);
    const { isShowModalUpdateProduct, isShowModalDeleteProduct } = useSelector(modalAdminState$);

    React.useEffect(() => {
        dispatch(actions.getProducts.getProductsRequest());
    }, [dispatch]);

    const showModalUpdate = React.useCallback(() => {
        dispatch(showModalUpdateProduct());
    }, [dispatch]);

    const showModalDelete = React.useCallback(() => {
        dispatch(showModalDeleteProduct());
    }, [dispatch]);

    return (
        <div className={cx('productPage')}>
            {
                isShowModalUpdateProduct ? <ModalUpdateProduct /> : ""
            }
            {
                isShowModalDeleteProduct ? <ModalDelete /> : ""
            }

            <div className={cx('productPage__block')}>
                <AppTitle title={'Danh sách sản phẩm'} />
            </div>
            <div className={cx('productPage__wrapper')}>
                <Functions data={products}/>
                <div className={cx('productPage__dataTable--wrapper')}>
                    <Table data={products} showModalUpdate={showModalUpdate} showModalDelete={showModalDelete} titleTable={['Mã sản phẩm', 'Tên sản phẩm', 'Ảnh', 'Số lượng', 'Tình trạng', 'Giá tiền', 'Danh mục', 'Chức năng']} />
                </div>
            </div>
        </div>
    )
}

export default ProductPage