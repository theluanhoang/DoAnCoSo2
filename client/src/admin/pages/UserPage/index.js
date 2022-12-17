import React from 'react'
import styles from './UserPage.module.scss'
import classNames from 'classnames/bind'
import AppTitle from '../../../components/admin/AppTitle'
import Functions from '../../../components/admin/Functions'
import { useDispatch, useSelector } from 'react-redux';
import { modalAdminState$, customersState$ } from '../../../redux/selectors';
import * as actions from '../../../redux/actions'
import { Link } from 'react-router-dom'
import ModalDeleteCustomer from '../../../components/admin/Modal/ModalDeleteCustomer'
import ModalUpdateCustomer from '../../../components/admin/Modal/ModalUpdateCustomer'

const cx = classNames.bind(styles)

function UserPage() {
    const dispatch = useDispatch();
    const customers = useSelector(customersState$);
    const { isShowModalDeleteCustomer, isShowModalUpdateCustomer } = useSelector(modalAdminState$);

    React.useEffect(() => {
        dispatch(actions.getCustomers.getCustomersRequest());
    }, [dispatch]);

    const showModalUpdate = React.useCallback(() => {
        dispatch(actions.showModalUpdateCustomer());
    }, [dispatch]);

    const showModalDelete = React.useCallback(() => {
        dispatch(actions.showModalDeleteCustomer());
    }, [dispatch]);
    return (
        <div className={cx('userPage')}>
            {
                isShowModalDeleteCustomer ? <ModalDeleteCustomer /> : ""
            }
            {
                isShowModalUpdateCustomer ? <ModalUpdateCustomer /> : ""
            }
            <div className={cx('userPage__block')}>
                <AppTitle title={'Danh sách khách hàng'} />
            </div>
            <div className={cx('userPage__wrapper')}>
                <Functions data={customers}/>
                <div className={cx('userPage__table')}>
                    <div className={cx('productPage__dataTable--header')}>
                        <ul>
                            <li className={cx('productPage__dataTable--headerLeft')}>
                                <label>
                                    {"Hiện "}
                                    <select name="sampleTable_length" aria-controls="sampleTable"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>
                                    {" danh mục"}
                                </label>
                            </li>
                            <li className={cx('productPage__dataTable--headerRight')}>
                                <label>
                                    {"Tìm kiếm: "}
                                    <input type="search" placeholder="" aria-controls="sampleTable" />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('productPage__dataTable--table')}>
                        <table className={cx("table", "table-hover", "table-bproductPageed", "dataTable", "no-footer")} id="sampleTable" role="grid" aria-describedby="sampleTable_info">
                            <thead>
                                <tr role="row">
                                    <th width="10" className={cx("sorting_asc")} tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style={{ width: "13px;" }}>
                                        <input type="checkbox" id="all" />
                                    </th>
                                    <th className={cx("sorting")} tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending" style={{ width: "90px;" }}>
                                        Mã khách hàng
                                    </th>
                                    <th className={cx("sorting")} tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending" style={{ width: "90px;" }}>
                                        Tên khách hàng
                                    </th>
                                    <th className={cx("sorting")} tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending" style={{ width: "90px;" }}>
                                        Địa chỉ
                                    </th>
                                    <th className={cx("sorting")} tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending" style={{ width: "90px;" }}>
                                        Email
                                    </th>
                                    <th className={cx("sorting")} tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending" style={{ width: "90px;" }}>
                                        Số điện thoại
                                    </th>
                                    <th className={cx("sorting")} tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending" style={{ width: "90px;" }}>
                                        Chức năng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map((customer, index) => (
                                        <tr key={index} role="row" className={cx("odd")}>
                                            <td width="10" className={cx("sorting_1")}><input type="checkbox" name="check1" value="1" /></td>
                                            <td>{customer?.id}</td>
                                            <td>{customer?.name}</td>
                                            <td>{customer?.address}</td>
                                            <td>{customer?.email}</td>
                                            <td>{customer?.phoneNumber}</td>
                                            <td>
                                                <Link to={'/admin/customers/' + customer.id} className={cx("btn", "btn-primary", "btn-sm", "trash")} onClick={showModalDelete} title="Xóa"><i class="fas fa-trash-alt"></i></Link>
                                                <Link to={'/admin/customers/' + customer.id} className={cx("btn", "btn-primary", "btn-sm", "edit")} onClick={showModalUpdate}><i class="fas fa-edit"></i></Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                    <div className={cx('productPage__dataTable--footer', 'row')}>
                        <div class="col-sm-12 col-md-5">
                            <div className={cx("dataTables_info")} id="sampleTable_info" role="status" aria-live="polite">
                                Hiện 1 đến 10 của 16 danh mục
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-7">
                            <div class="dataTables_paginate paging_simple_numbers" id="sampleTable_paginate">
                                <ul class="pagination"><li class="paginate_button page-item previous disabled" id="sampleTable_previous">
                                    <Link to='' aria-controls="sampleTable" data-dt-idx="0" tabindex="0" class="page-link">
                                        Lùi
                                    </Link>
                                </li>
                                    <li class="paginate_button page-item active">
                                        <Link to='' aria-controls="sampleTable" data-dt-idx="1" tabindex="0" class="page-link">1
                                        </Link>
                                    </li>
                                    <li class="paginate_button page-item "><Link to="" aria-controls="sampleTable" data-dt-idx="2" tabindex="0" class="page-link">2
                                    </Link>
                                    </li>
                                    <li class="paginate_button page-item next" id="sampleTable_next"><Link to="" aria-controls="sampleTable" data-dt-idx="3" tabindex="0" class="page-link">Tiếp</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage