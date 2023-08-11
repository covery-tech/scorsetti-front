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
import { Dashboard } from "./Pages/Dashboard/Dashboard";
// import { ProtectRoutePas } from "./ProtectRoutePas";
import ProfilePas from "./Pages/ProfilePas/ProfilePas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import OrdersTableAll from "./components/DashBoard/TableOrders/TableAll";
import Cars from "./Pages/Products/Cars/CarsContainer";
import Motorcycles from "./Pages/Products/Motorcycles/MotorcyclesContainer";
import { ProtectRouteLogin } from "./ProtectRouteLog";
import HomeProduct from "./Pages/Products/Home/HomeContainer";
import PersonalAccidents from "./Pages/Products/PersonalAccidents/PersonalAccidentsContainer";

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
            {/*Panel Admin and Pas */}
            <Route
              path="/scorsetti/panel-admin"
              element={
                <ProtectRouteLogin>
                  <Navbar />
                  <Dashboard />
                </ProtectRouteLogin>
              }
            />
            {/*crear perfil de cada usuario */}
            <Route
              path="/scorsetti/panel-admin/user/:userId"
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
            {/* productos Scorsetti */}

            {/* Auto */}
            <Route
              path="/producto/auto"
              element={
                <>
                  <Navbar />
                  <Cars />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/auto"
              element={
                <>
                  <Navbar />
                  <Cars />
                </>
              }
            />

            {/* Moto */}
            <Route
              path="/producto/moto"
              element={
                <>
                  <Navbar />
                  <Motorcycles />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/moto"
              element={
                <>
                  <Navbar />
                  <Motorcycles />
                </>
              }
            />

            {/* Hogar */}
            <Route
              path="/producto/hogar"
              element={
                <>
                  <Navbar />
                  <HomeProduct />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/hogar"
              element={
                <>
                  <Navbar />
                  <HomeProduct />
                </>
              }
            />

            {/* Accidente personal */}
            <Route
              path="/producto/ap"
              element={
                <>
                  <Navbar />
                  <PersonalAccidents />
                </>
              }
            />
            <Route
              path="/usuario_pas/:userId/producto/ap"
              element={
                <>
                  <Navbar />
                  <PersonalAccidents />
                </>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext>
  );
}

export default App;
