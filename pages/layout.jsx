import Link from "next/link";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
