import { createFileRoute } from '@tanstack/react-router'

import FoodHome from '../../pages/FoodHome'

export const Route = createFileRoute('/food-delivery/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FoodHome/>
}
