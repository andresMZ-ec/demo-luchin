export const Routes = {
    POINTSERVER: {path:"http://localhost:8000/"},

    //rutas de Usuario
    Home : {path: "/"},
    Promociones : {path: "/promociones"},
    Contactanos : {path: "/contactanos"},
    Account : {path: "/account"},
    Bolsa : {path: "/mi-bolsa"},
    ProcessPedido : {path: "/pedido/checkout"},
    Menu : {path: "/menu"},
    
    
    //rutas de Administración
    LoginAdmin: {path: "/admin-center/login"},
    ResetPassAdmin: {path: "/admin-center/reset-password"},
    Dashboard : {path: "/admin-center/resume"},
    /* menu */
        AddProducto: {path: "/admin-center/new-producto"},
        ListaMenu: {path: "/admin-center/lista-menu"},
    /* ordenes */
        ListaOrdenes : {path: "/admin-center/ordenes"},
        AddOrden : {path: "/admin-center/new-orden"},
    Clientes : {path: "/admin-center/Clientes"},
    Ventas : {path: "/admin-center/ventas"},
    PromocionesAdmin : {path: "/admin-center/promociones"},
    Empleados : {path: "/admin-center/empleados"},

}