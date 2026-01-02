"use client";

import Link from "next/link";
const menu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog List",
    url: "/blog-list",
  },
  {
    title: "Blog Detail",
    url: "/blog-detail/1",
  },
];
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const dipatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const className = "hover:text-blue-500 transition-colors";

  const handleLogout = () => {
    dipatch(logout());
    router.push("/login");
  };
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-center">
        <ul className="flex gap-8">
          {menu.map((item, index) => (
            <li key={index}>
              <Link className={className} href={`${item.url}`}>
                {item.title}
              </Link>
            </li>
          ))}

          {!isAuthenticated ? (
            <li>
              <Link className={className} href="/login">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
