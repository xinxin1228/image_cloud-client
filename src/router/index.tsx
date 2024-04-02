import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import Layout from '../layout/client'
import { curringFun } from '../utils/curringFun'
import TopLoading from 'components/Nprogress'

const lazyRouter = curringFun((root: string, path: string) => {
  // const Comp = lazy(() => import(`../pages/${root}${path}`))

  const modules = import.meta.glob('../pages/**/*.tsx')
  /* @ts-ignore */
  const Comp = lazy(modules[`../pages/${root}${path}/index.tsx`])
  console.log('🚀  ~ lazyRouter ~ Comp:', Comp)

  return (
    <Suspense fallback={<TopLoading />}>
      <Comp />
    </Suspense>
  )
})

const lazyClientRouter = lazyRouter('client')
// const lazyAdminRouter = lazyRouter('admin')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: lazyClientRouter('/Home')
      },
      {
        path: 'personal',
        element: lazyClientRouter('/Personal')
      },
      {
        path: 'share',
        children: [
          {
            path: '',
            loader: () => {
              return redirect('/share/accept')
            }
          },
          {
            index: true,
            path: 'accept',
            element: lazyClientRouter('/ShareAccept')
          },
          {
            path: 'release',
            element: lazyClientRouter('/ShareRelease')
          }
        ]
      },
      {
        path: 'collection',
        element: lazyClientRouter('/Collection')
      },
      {
        path: '*',
        element: <h1>404</h1>
      }
    ]
  },
  {
    path: '/admin',
    element: <>admin</>
  }
])

const WarpRouter = () => {
  return <RouterProvider router={router} />
}

export default WarpRouter
