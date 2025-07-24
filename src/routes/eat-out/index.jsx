import { createFileRoute } from '@tanstack/react-router'
import Home from '../../pages/eat-out/Home'

export const Route = createFileRoute('/eat-out/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home/>
}
