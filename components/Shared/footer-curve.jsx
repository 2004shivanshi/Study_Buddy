import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, InstagramIcon, LinkedinIcon, X } from "lucide-react";

import { Input } from "../ui/input";

export default function FooterCurve() {
  return (
    <section className="h-full relative z-20 md:h-fit  mt-8 w-full flex flex-col justify-center items-center p-4   ">
      <div className="h-24 w-[500px] hidden py-4 px-6 md:flex  rounded-3xl  bg-gray-950 border border-neutral-400 z-10 relative">
        <div className="h-fit relative  w-full self-end bg-pink-400 border rounded-[20px] overflow-hidden z-20">
          {/* <Input
            placeholder="Search"
            className="h-14 w-full px-4 rounded-2xl z-20 border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-950 focus-visible:outline-0 focus-vi
            sible:outline-offset-0"
          /> */}

          <h1 className="h-14 w-full px-4 py-4 rounded-2xl z-20 border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-950 focus-visible:outline-0 focus-vi
            sible:outline-offset-0">skillsarthi33@gmail.com</h1>
          <button
            type="button"
            className=" text-center  w-48 rounded-2xl  h-12 absolute top-1/2 -translate-y-1/2 right-1 b font-sans bg-gray-950  text-black text-xl font-semibold group"
          >
            <div className="bg-blue-400 rounded-2xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></path>
                <path
                  fill="#fff"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2">Connect</p>
          </button>
        </div>
        {/* hide top border things         */}
        <div className="h-12 w-[520px] -z-10 absolute -left-3 -top-2 bg-gray-950" />
        {/* left-curve */}
        <div className="h-8 w-6 bg-gray-950  top-10 -left-6 absolute">
          <div className="h-[25px] w-full bg-gray-950 mt-[7px] lg:mt-[7.5px] rounded-tr-3xl border-t border-r border-neutral-400" />
        </div>
        {/* right-curve */}
        <div className="h-8 w-6 bg-gray-950  top-10 -right-6 absolute">
          <div className="h-[25px] w-full bg-gray-950 mt-[7px] lg:mt-[7.5px] rounded-tl-3xl border-t border-l border-neutral-400" />
        </div>
      </div>
      <div className="border h-full p-8 flex flex-col md:flex-row justify-center md:justify-between border-neutral-400 md:h-96 w-full rounded-3xl -mt-12">
        {/* <div className=" flex items-center mt-6 justify-center h-full md:w-80 bg-slate-400 rounded-xl">
          <img
            src="https://media.istockphoto.com/id/1311934969/photo/contact-us.webp?b=1&s=170667a&w=0&k=20&c=2sJEN1Hhg6heUi1ZxKs6pJDwcyLYXPc4pUGd3hEjOjE="
            className="rounded-xl h-80"
            alt=""
          />
        </div> */}
        <div className="flex flex-col items-start">
  <div className="text-center">
    <p className="text-4xl">
      You can <span className="text-orange-500">find everything</span>{" "}
      <br />
      you need, right here
    </p>
  </div>

  <div className="flex flex-row mt-10 ml-24">
    <div className="flex flex-col items-start mr-20">
      <ul className="text-start text-xl space-y-2">
        <li>Company</li>
        <li>Why Us</li>
        <li>About</li>
        <li>Privacy Policy</li>
        <li>Terms</li>
      </ul>
    </div>

    <div className="flex flex-col items-start mr-20">
      <ul className="text-start text-xl space-y-2">
        <li>Product</li>
        <li>Tracking</li>
        <li>Credit</li>
        <li>Filing</li>
        <li>Analytics</li>
      </ul>
    </div>

    <div className="flex flex-col items-start">
  <div className="flex flex-row items-start mb-4 ml-36"> 
    <InstagramIcon className="text-5xl mx-2" />
    <LinkedinIcon className="text-5xl mx-2" />
    <X className="text-5xl mx-2" />
  </div>
  
  <button className="px-10 mt-4 ml-32   py-2 bg-red-500 text-white rounded-2xl"> <a href="/team">Our Team</a></button> 
</div>

  
  </div>
</div>


        <div className=" h-full md:w-80  flex items-center justify-center  mt-6 relative z-20">
          <div className="w-60 hidden md:block rounded-xl h-16 bg-gray-950 absolute top-2 -left-4 -z-10 border" />
          <div className="h-fit w-fit rounded-2xl bg-red-300 space-y-4 px-4 pb-4 relative">
            <div className="h-12 w-12 absolute z-20 -right-7 bottom-12 border bg-gray-950 rounded-full flex items-center justify-center">
              <ArrowRight size={28} className="rotate-45" />
            </div>
            <div className="h-32 aspect-[14/9] relative bg-slate-600 rounded-xl">
              <img
                src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1725216836~exp=1725217436~hmac=086b67e53aa33d6fede78b73ef748805177e1c0f0c3a0a52fde912ac3334460f"
                className="rounded-xl "
                alt=""
              />
            </div>
            <p>Grow with guidance</p>
            <Button> <a href="/mentorship">Talk to expert</a> </Button>
            <div className="w-40 rounded-xl h-40 hidden md:block bg-gray-950 absolute -bottom-6 -right-8 -z-10 border" />
          </div>
        </div>
      </div>
    </section>
  );
}
