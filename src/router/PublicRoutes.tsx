import { IS_DEBUG } from '~/config'
import { Navigate } from 'react-router-dom'
import { PublicLayout } from '~/components/layout'
import DevView from '~/pages/DevView'
import Landing from '~/pages'
import AuthView from '~/pages/Auth/Auth'

const PUBLIC_ROUTES = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: '*',
        element: <Navigate to='/' />
      },
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/auth',
        element: <AuthView />
      }
    ]
  }
]

// Add debug routes
IS_DEBUG &&
  PUBLIC_ROUTES[0].children.push({
    path: '/dev',
    element: <DevView />
  })

export default PUBLIC_ROUTES