import React from 'react';
import Products from '@pages/Products';
import Sales from '@pages/Sales';
import Purchases from '@pages/Purchases';
import { Inventory2Outlined, SellOutlined, ShoppingBagOutlined } from '@material-ui/icons';

const routes = [
  { title: 'Productos', component: Products, path: '/products', icon: <Inventory2Outlined /> },
  { title: 'Ventas', component: Sales, path: '/sales', icon: <SellOutlined /> },
  { title: 'Compras', component: Purchases, path: '/purchases', icon: <ShoppingBagOutlined /> }
]

export default routes;