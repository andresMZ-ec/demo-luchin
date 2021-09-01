import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { Routes } from './routes';
import {NotFound} from './pages/NotFound';
import { ComprobarToken } from './component/services/ConfirnUser';
import Context, { UserContextProvider } from './component/hooks/Context/useContextUsers';

//User UI
import { Header } from './component/headerUser/Header';
import { Footer } from './component/components/Footer';
import { Home } from './pages/inicio/home';
import { Promociones } from './pages/Promociones';
import { Contactanos } from './pages/Contactanos';
import { ProcesarPedido } from './pages/Procesar_pedido';
import { Bolsa } from './pages/bolsa/Bolsa';
import { MenuProductos } from './pages/menu/menu.productos';


//Administracion UI
import { Login } from './pages/admin/Login';
import { ResetPassword } from './pages/admin/ResetPass';
import SideBar from './component/components/SideBar';
import NavBar from './component/ADMIN/NavBar';
import {Homeadmin} from './pages/admin/Homeadmin';
import { MenuListProducts } from './pages/admin/MenuListProducts';
import { AddNewOrden } from './pages/admin/ordenes/NewOrder/AddNewOrder';
import { PromocionesAdmin } from './pages/admin/PromocionesAdmin';
import { Ventas } from './pages/admin/Ventas';
import {Addproduct} from './pages/admin/Addproduct'
import { Empleados } from './pages/admin/Empleados';
import { Clientes} from './pages/admin/Clientes'
import { ListaOrdenes } from './pages/admin/ordenes/ListaOrdenes';


export default function App() {    

    const RouteWithNavBarUser = ({component :  Component}) => {

        return(
            <Route>
                <Header />
                <main>
                    <Component />
                </main>
                <Footer />
            </Route>
        )
    }

    const RouteWithSideBar = ({ component: Component }) => {
        const { jwtAdmin } = useContext(Context);
        const history = useHistory();

        if(!jwtAdmin){
            history.push(Routes.LoginAdmin.path);
        }else{
            ComprobarToken('http://localhost:9000/api/auth/verifAdmin', jwtAdmin);
        }        

        return(
            <Route>
                <SideBar/>
                <div className="ctn-main-dash">
                    <NavBar/>
                    <main className="contenido-admin pos-main-rel">
                        <Component/>
                    </main>
                </div>
            </Route>
        )
    }


    return (
        <UserContextProvider>
            <Router>
                <Switch>

                    {/* rutas para interfaces del usuario */}
                    <RouteWithNavBarUser exact path={Routes.Home.path} component={Home} />
                    <RouteWithNavBarUser exact path={Routes.Contactanos.path} component={Contactanos} />
                    <RouteWithNavBarUser exact path={Routes.Promociones.path} component={Promociones} />  
                    <RouteWithNavBarUser exact path={Routes.ProcessPedido.path} component={ProcesarPedido} />  
                    <RouteWithNavBarUser exact path={Routes.Bolsa.path} component={Bolsa} />  
                    <RouteWithNavBarUser exact path={Routes.Menu.path} component={MenuProductos} /> 


                    {/* rutas para interfaces de administracion */}
                    <Route exact path={Routes.LoginAdmin.path}> <Login/> </Route>
                    <Route exact path={Routes.ResetPassAdmin.path}> <ResetPassword/> </Route>
                    <RouteWithSideBar exact path={Routes.Dashboard.path} component={Homeadmin} /> 
                    <RouteWithSideBar exact path={Routes.ListaMenu.path} component={MenuListProducts} /> 
                    {/* <RouteWithSideBar exact path={`${Routes.ListaMenu.path}/:category`} component={MenuListProducts} />  */}
                    <RouteWithSideBar exact path={Routes.AddOrden.path} component={AddNewOrden} />
                    <RouteWithSideBar exact path={Routes.AddProducto.path} component={Addproduct}/> 
                    <RouteWithSideBar exact path={Routes.PromocionesAdmin.path} component={PromocionesAdmin} /> 
                    <RouteWithSideBar exact path={Routes.Ventas.path} component={Ventas} />
                    <RouteWithSideBar exact path={Routes.Empleados.path} component={Empleados} />
                    <RouteWithSideBar exact path={Routes.Clientes.path} component={Clientes}/>
                    <RouteWithSideBar exact path={Routes.ListaOrdenes.path} component={ListaOrdenes}/>

                    <Route path="*" component={NotFound} />   
                </Switch>
            </Router>
        </UserContextProvider>
    );
}
