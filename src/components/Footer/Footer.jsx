import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-6 border-t-2 border-t-black flex justify-center items-center flex-auto bg-white w-full dark:border-gray-600 border-gray-200 dark:bg-gray-100 dark:bg-opacity-10 bg-opacity-10 backdrop-blur-xl dark:shadow-gray-600/50">
      <div className="w-1/2 p-6 flex h-full flex-col justify-between">
        <div className="mb-4 inline-flex items-center justify-center">
          <Logo
            width="100px"
            className="hover:text-black text-blue-700 text-3xl hover:cursor-default"
          />
        </div>
        <div>
          <p className="text-lg text-white">
            &copy; Copyright 2024 | Made with ❤️ by Vansh Chauhan!
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <p className="text-2xl text-black mb-4 font-semibold text-center dark:text-white">
          Contact at
        </p>
        <div className=" h-fit">
          <Link
            to="mailto: Vanshchauhan1106@gmail.com?subject=Contact%20From%20EasyWrite!&body=Why Contact, Write here!"
            target="_blank"
            className="text-4xl text-white ml-4 duration-500 hover:text-black "
          >
            <i class="fa-solid fa-envelope"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/vansh-chauhan-741a5b257/"
            target="_blank"
            className="text-4xl text-white ml-4 duration-500 hover:text-black"
          >
            <i class="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            to="https://github.com/VanshChauhan-1106"
            target="_blank"
            className="text-4xl text-white ml-4 duration-500 hover:text-black "
          >
            <i class="fa-brands fa-square-github"></i>
          </Link>
          <Link
            to="https://www.instagram.com/vansh_.chauhan_/"
            target="_blank"
            className="text-4xl text-white ml-4 duration-500 hover:text-black"
          >
            <i class="fa-brands fa-square-instagram"></i>
          </Link>
          <Link
            to="https://vanshchauhan.netlify.app/"
            target="_blank"
            className="text-4xl text-white ml-4 duration-500 hover:text-black"
          >
            <i class="fa-solid fa-globe"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
