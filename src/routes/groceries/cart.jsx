import { createFileRoute } from "@tanstack/react-router";
import CartPage from "../../pages/groceries/CartPage";
import GNavBar from "../../components/groceries/GNavBar";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/groceries/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
    <GNavBar/>
      <CartPage />
      <Footer/>
    </>
  );
}
