import { createFileRoute } from '@tanstack/react-router'
import SingleRestaurant from '../pages/food-delivery/SingleRestaurant'

export const Route = createFileRoute('/j')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SingleRestaurant/>
}
