import { createFileRoute } from '@tanstack/react-router'
import Store from '../../pages/groceries/Store'

export const Route = createFileRoute('/groceries/store')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Store/>
}
