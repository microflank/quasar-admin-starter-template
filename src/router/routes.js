
// Containers
const MainLayout = () => import('layouts/MainLayout')

// Views
const Dashboard = () => import('pages/Dashboard')
const Artists = () => import('pages/Artists')
const Users = () => import('pages/Users')
const Tracks = () => import('pages/Tracks')

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'artists',
        name: 'Artists',
        component: Artists
      },
      {
        path: 'users',
        name: 'Users',
        component: Users
      },
      {
        path: 'tracks',
        name: 'Tracks',
        component: Tracks
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
