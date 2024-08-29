import './bootstrap'
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import MainLayout from '@/Layouts/MainLayout'
import { ModalProvider } from '@/Components/Context/ModalContext'

library.add(fas, fab, far)

const appName = import.meta.env.VITE_APP_NAME || 'Steelsmart'

createInertiaApp({
  title: title => title ? `${title} - ${appName}`: appName,
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <MainLayout children={page} />)
    return page
  },
  setup({el, App, props}) {
    let root = createRoot(el)
    root.render(
      <ModalProvider>
        <App {...props} />
      </ModalProvider>
    )
  },
  progress: {
    delay: 250,
    color: '#fff',
    includeCSS: true,
    showSpinner: false,
  },
})
