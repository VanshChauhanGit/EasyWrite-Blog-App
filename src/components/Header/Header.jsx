import React, { Children } from "react";
import { Logo, LogoutBtn, Container, Button } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navagate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const navBtns = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Profile",
      slug: "/my-profile",
      active: authStatus,
    },
  ];

  return (
    <header
      className="
    bg-gray-500
    text-white
    sticky
    top-0
    left-0
    w-full
    py-3
    z-50
  "
    >
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo
                width="100px"
                className="pt-1 text-3xl text-blue-700 hover:text-black"
              />
            </Link>
          </div>
          <ul className="flex mx-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="inline-block px-1 py-2 text-xl font-semibold rounded-xl ml-4 text-blue-100 duration-700 hover:text-black hover:translate-y-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          <ul className="flex ml-auto">
            {navBtns.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Button
                    children={item.name}
                    bgColor="bg-blue-200"
                    textColor="text-black"
                    onClick={() => navagate(item.slug)}
                    className="hover:bg-blue-500 hover:text-white duration-300 mr-2"
                  />
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
