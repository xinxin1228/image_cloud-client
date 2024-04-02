import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import WarpRouter from './router'
import store from '@/store'
import '@/assets/iconfont/iconfont.css'
import '@/assets/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <WarpRouter />
  </Provider>
)
