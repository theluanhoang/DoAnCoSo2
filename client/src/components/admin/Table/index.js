import React from 'react'
import styles from './Table.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Table({ data, showModalUpdate, showModalDelete, titleTable }) {
    return (
        <>
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
                            {
                                titleTable.map((title, index) => (
                                    <th key={index} className={cx("sorting")} tabindex="0" aria-controls="sampleTable" rowspan="1" colspan="1" aria-label="Chức năng: activate to sort column ascending" style={{ width: "90px;" }}>
                                        {title}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((product, index) => (
                                <tr key={index} role="row" className={cx("odd")}>
                                    <td width="10" className={cx("sorting_1")}><input type="checkbox" name="check1" value="1" /></td>
                                    <td>{product?.id}</td>
                                    <td>{product?.title}</td>
                                    <td><img src={product?.image} alt="" width="100px;" /></td>
                                    <td>{product?.qty}</td>
                                    <td>
                                        {
                                            product?.status === 'Còn hàng' ?
                                                <span className={cx("badge", "bg-success")}>Còn hàng</span> :
                                                <span className={cx("badge", "bg-danger")}>Hết hàng</span>
                                        }
                                    </td>
                                    <td>{product?.priceCurrent} đ</td>
                                    <td>Trái cây</td>
                                    <td>
                                        <Link to={'/admin/products/' + product.id} className={cx("btn", "btn-primary", "btn-sm", "trash")} onClick={showModalDelete} title="Xóa"><i class="fas fa-trash-alt"></i></Link>
                                        <Link to={'/admin/products/' + product.id} className={cx("btn", "btn-primary", "btn-sm", "edit")} onClick={showModalUpdate}><i class="fas fa-edit"></i></Link>
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
        </>
    )
}

export default Table