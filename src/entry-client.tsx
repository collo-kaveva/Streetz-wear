import { hydrateRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

hydrateRoot(document.getElementById('root')!, <RouterProvider router={router} />)
