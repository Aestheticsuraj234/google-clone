import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { useRef } from "react";
import {useRouter} from 'next/router'
const Home: NextPage = () => {

  const router = useRouter()
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;

    router.push(`/search?term=${term}`);  


  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-600">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* icons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 py-2 rounded-full  hover:bg-gray-200 cursor-pointer "
          >
            <path d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" />
          </svg>

          {/* Avatar */}
          <Avatar url="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg" />
        </div>
      </header>
      {/* body */}
      <form className="flex relative  flex-col items-center justify-center flex-grow w-5/6 ">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />

        <div className="flex w-full mt-5 hover:shadow-lg rounded-full border border-gray-200 px-5 py-3 items-center  focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl ">
          {/* <SearchIcon/ */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-3  text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow "
          />
          {/* Microphone */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
          </svg>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn font-semibold">
            Google Search
          </button>
          <button onClick={search} className="btn font-semibold">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
