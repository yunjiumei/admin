export default [
  {
    path: '/login',
    name: '登录',
    component: './Login',
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    component: './404',
  },
];
