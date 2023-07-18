import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import OptionsMenu from "./Pages/OptionsMenu/OptionsMenu";
import Register from "./Pages/Register/Register";
import { UserContext } from "./components/Context/userContext";
import Footer from "./components/Footer/Footer";
import { UserDetail } from "./Pages/Detail/userDetail";
import { TablePas } from "./Pages/TablePas/Table";
import { TableEditPas } from "./Pages/TableEditPas/TableEditPas";
import { ProtectRoute } from "./ProtectRoute";
import { MyUser } from "./Pages/MyUser/MyUser";
import CarsRedesign from "./Pages/Products/Carsv2/Carsv2";
import Familiar from "./Pages/Products/Familiar/Familiar";
import MotoRedesign from "./Pages/Products/Motov2/Motov2";
import Life from "./Pages/Products/Life/Life";
import Commerce from "./Pages/Products/Commerce/Commerce";
import Accidents from "./Pages/Products/Accidents/Accidents";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ProtectRoutePas } from "./ProtectRoutePas";
import ProfilePas from "./Pages/ProfilePas/ProfilePas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Ecomovil from "./Pages/Products/Ecomovil/Ecomovil";
import OrdersTableAll from "./components/DashBoard/TableOrders/TableAll";

function App() {
  return (
    <UserContext>
      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            {/* Public home routes */}
            <Route path="/" element={<Home />} />
            <Route path="/ingresar" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            {/* Protected user routes */}
            <Route
              path="/miusuario"
              element={
                <>
                  <Navbar />
                  <MyUser />
                </>
              }
            />
            <Route
              path="/opciones"
              element={
                <ProtectRoute>
                  <Navbar />
                  <OptionsMenu />
                </ProtectRoute>
              }
            />
            <Route
              path="/opciones/tabla_pas"
              element={
                <ProtectRoute>
                  <Navbar />
                  <TablePas />
                </ProtectRoute>
              }
            />
            <Route
              path="/opciones/usuario_pas/:userId"
              element={
                <ProtectRoute>
                  <Navbar />
                  <TableEditPas />
                </ProtectRoute>
              }
            />
            {/* Public PAS homepage route */}
            <Route
              path="/usuario_pas/:userId"
              element={
                <>
                  <Navbar />
                  <UserDetail />
                </>
              }
            />
            {/* Public PAS Products routes */}
            <Route
              path="/usuario_pas/:userId/producto/auto"
              element={
                <>
                  <Navbar />
                  <CarsRedesign />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/familiar"
              element={
                <>
                  <Navbar />
                  <Familiar />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/moto"
              element={
                <>
                  <Navbar />
                  <MotoRedesign />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/vida"
              element={
                <>
                  <Navbar />
                  <Life />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/comercio"
              element={
                <>
                  <Navbar />
                  <Commerce />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/acc_personal"
              element={
                <>
                  <Navbar />
                  <Accidents />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/ecomovil"
              element={
                <>
                  <Navbar />
                  <Ecomovil />
                </>
              }
            />
            {/* Public LIBRA Products routes */}
            <Route
              path="/libra/producto/auto"
              element={
                <>
                  <Navbar />
                  <CarsRedesign />
                </>
              }
            />
            <Route
              path="/libra/producto/familiar"
              element={
                <>
                  <Navbar />
                  <Familiar />
                </>
              }
            />
            <Route
              path="/libra/producto/moto"
              element={
                <>
                  <Navbar />
                  <MotoRedesign/>
                </>
              }
            />
            <Route
              path="/libra/producto/vida"
              element={
                <>
                  <Navbar />
                  <Life />
                </>
              }
            />
            <Route
              path="/libra/producto/comercio"
              element={
                <>
                  <Navbar />
                  <Commerce />
                </>
              }
            />
            <Route
              path="/libra/producto/acc_personal"
              element={
                <>
                  <Navbar />
                  <Accidents />
                </>
              }
            />
            <Route
              path="/libra/producto/ecomovil"
              element={
                <>
                  <Navbar />
                  <Ecomovil />
                </>
              }
            />

            <Route
              path="/cards"
              element={
                <>
                  <Navbar />
                </>
              }
            />

            {/*Panel Admin and Pas */}
            <Route
              path="/libra/panel-admin"
              element={
                <ProtectRoutePas>
                  <Navbar />
                  <Dashboard />
                </ProtectRoutePas>
              }
            />
            {/*crear perfil de cada usuario */}
            <Route
              path="/libra/panel-admin/user/:userId"
              element={
                <>
                  <Navbar />
                  <ProfilePas />
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <Navbar />
                  <OrdersTableAll />
                </>
              }
            />
            {/* perfilPas */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext>
  );
}

export default App;
