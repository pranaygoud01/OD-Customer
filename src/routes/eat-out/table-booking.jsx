import { createFileRoute } from '@tanstack/react-router'
import TableBooking from '../../pages/eat-out/TableBooking'

export const Route = createFileRoute('/eat-out/table-booking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TableBooking/>
}
