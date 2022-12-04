import { Route, Routes } from 'react-router-dom'
import Account from './pages/Account';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUpSuccess from './pages/SignUp/SignUpSuccess';
import history from './history';
import AdminPanel from './admin/pages/AdminPanel';
import ProductPage from './pages/ProductPage';
import News from './pages/NewsPage';
import Search from './pages/Search';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutPageSuccess from './pages/CheckoutPage/CheckoutSuccess';

function App() {

  return (
    <div>
      <Routes history={history}>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<AdminPanel components={'dashboard'}/>} />
        <Route path='/admin/orders' element={<AdminPanel components={'orders'}/>} />
        <Route path='/admin/customers' element={<AdminPanel components={'customers'}/>} />
        <Route path='/admin/customers/:id' element={<AdminPanel components={'customers'}/>} />
        <Route path='/admin/products' element={<AdminPanel components={'products'}/>} />
        <Route path='/admin/products/:id' element={<AdminPanel components={'products'}/>} />
        <Route path='/admin/add-product' element={<AdminPanel components={'addProduct'}/>} />
        <Route path='/admin/products/update-product/:id' element={<AdminPanel components={'updateProduct'}/>} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-up/success' element={<SignUpSuccess />} />
        <Route path='/account' element={<Account slug='index' />} />
        <Route path='/account/edit' element={<Account slug={'edit'} />} />
        <Route path='/account/wishlist' element={<Account slug={'wishlist'} />} />
        <Route path='/account/order' element={<Account slug={'order'} />} />
        <Route path='/account/transaction' element={<Account slug={'transaction'} />} />
        <Route path='/account/recurring' element={<Account slug={'recurring'} />} />
        <Route path='/account/newsletter' element={<Account slug={'newsletter'} />} />
        <Route path='/account/password' element={<Account slug={'password'} />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/news' element={<News />} />
        <Route path='/search' element={<Search />} />
        <Route path='/checkout/checkout/' element={<CheckoutPage />}/>
        <Route path='/checkout/success/' element={<CheckoutPageSuccess />}/>
      </Routes>
    </div>
  );
}

export default App;
