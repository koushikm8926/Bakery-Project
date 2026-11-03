import LoginPage from "../login/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Sandton Bakery",
  description: "Sign up for exclusive bakery offers and instant order tracking.",
};

export default function RegisterPage() {
  return <LoginPage />;
}
