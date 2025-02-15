import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from './RootRoute/RootRoute'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider  client={queryClient}>
  <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>
  </StrictMode>,
)
