import { createFileRoute } from '@tanstack/react-router'
import Home from '../../pages/groceries/Home'

export const Route = createFileRoute('/groceries/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home/>
}
