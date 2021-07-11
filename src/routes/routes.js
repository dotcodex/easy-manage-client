import Products from '@pages/Products';
import Sales from '@pages/Sales';
import Purchases from '@pages/Purchases';

const routes = [
  { title: 'Productos', component: Products, path: '/products' },
  { title: 'Ventas', component: Sales, path: '/sales' },
  { title: 'Compras', component: Purchases, path: '/purchases' }
]

export default routes;