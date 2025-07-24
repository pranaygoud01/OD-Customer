import { createFileRoute } from '@tanstack/react-router'
import CartPage from '../../pages/food-delivery/CartPage'

export const Route = createFileRoute('/food-delivery/cart')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CartPage/>
}
