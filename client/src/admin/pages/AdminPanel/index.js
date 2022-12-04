import React from 'react'
import styles from './AdminPanel.module.scss'
import classNames from 'classnames/bind'
import Sidebar from '../../../components/admin/Sidebar'
import Navbar from '../../../components/admin/Navbar'
import Dashboard from '../Dashboard/'
import Order from '../Order'
import ProductPage from '../ProductPage'
import AddProduct from '../ProductPage/AddProduct'
import UpdateProduct from '../ProductPage/UpdateProduct'
import UserPage from '../UserPage'

const cx = classNames.bind(styles)

function AdminPanel({ components, heading }) {
  return (
    <div className={cx('admin')}>
      <div className={cx('admin__block')}></div>
      <Sidebar />
      <div className={cx('admin__main')}>
        <Navbar />
        {
          components === 'dashboard' ? <Dashboard /> : ''
        }
        {
          components === 'orders' ? <Order /> : ''
        }
        {
          components === 'products' ? <ProductPage /> : ''
        }
        {
          components === 'customers' ? <UserPage /> : ''
        }
        {
          components === 'addProduct' ? <AddProduct /> : ''
        }
        {
          components === 'updateProduct' ? <UpdateProduct /> : ''
        }
      </div>
    </div>
  )
}

export default AdminPanel