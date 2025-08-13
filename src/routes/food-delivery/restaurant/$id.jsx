import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/food-delivery/restaurant/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/food-delivery/restaurant/$id"!</div>
}
