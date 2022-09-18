import './css/sb-admin-2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Createuser from './Createuser';
import Createproduct from './Createproduct';
import Portal from './Portal';
import Login from './Login';
import Userview from './Userview';
import Edituser from './Edituser';

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element= {<Login />} />
              <Route path="/portal" element={<Portal />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element= {<Userview />} />
              <Route path="users/edit/:id" element= {<Edituser />} />
              <Route path="create-user" element={<Createuser />} />
              <Route path="products" element={<Products />} />
              <Route path="create-product" element={<Createproduct />} />
              </Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
