import { createFileRoute } from '@tanstack/react-router'
import CRestaurant from '../../../pages/food-delivery/CRestaurant'
import FoodNav from '../../../components/food-delivery/FoodNav'
import Footer from '../../../components/Footer'

export const Route = createFileRoute('/food-delivery/collections/')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <div>
    <FoodNav/>
    <CRestaurant/>
    <Footer/>
    </div>
}
