import CallToAction from "../components/Shared/call-to-action";
import FooterCurve from "../components/Shared/footer-curve";
import NewSection from "../components/Shared/NewSection";
import { Button } from "../components/ui/button";
import { ArrowRight, ChevronRightIcon, SunsetIcon } from "lucide-react";
import React from "react";
import { CoolMode } from "../components/magic-ui/PopButton";
export default function Home() {
  return (
    <main className="h-full pb-8">
      <section className="h-full lg:h-[98vh] pt-16 md:pt-0 flex item-center justify-center flex-col md:flex-row  w-full bg-gray-950 rounded-b-3xl  md:px-16">
        <div className="flex flex-1 flex-col justify-center gap-4 md:gap-8  md:p-0 h-full">
          <div className=" space-y-4 mt-3 p-4">
            <h2 className="text-3xl max-w-md md:text-6xl font-bold text-white">
              Up skill with
              <span className="block mt-3 bg-gradient-to-r from-sky-500 to-purple-400 bg-clip-text text-transparent">
                SKILL SARTHI !
              </span>
            </h2>

            <p className="text-neutral-300 text-sm md:text-sm font-semibold">
              Learning new skills doesn’t have to be boring now! With our fun
              and simple paths, you can level up fast, crush your goals while
              enjoying the journey along the way.
            </p>
          </div>
          <div className="flex gap-2 pl-4">
            <CoolMode>
              <Button className="flex gap-1 bg-gray-950 border border-gray-700 text-black items-center">
                <p>Check out</p>
                <div className="flex ">
                  <ChevronRightIcon size={14} className="text-black" />
                  <ChevronRightIcon size={14} className="text-black" />
                  <ChevronRightIcon size={14} className="text-black" />
                </div>
              </Button>
            </CoolMode>
            <Button className="bg-white/20 border-2 border-white backdrop-blur-sm">
              Gallery
            </Button>
          </div>
        </div>
        <div className="flex flex-1 justify-end ">
          <img
            src="/img.png"
            height={500}
            width={500}
            className="object-contain"
          />
        </div>
      </section>

      <section className="p-4 md:p-8 h-full w-full ">
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-400">
          Ready to
            <span className="bg-gradient-to-r from-sky-500 to-purple-400 bg-clip-text text-transparent">
              {" "}
              level{" "}
            </span>
            up? Create
            <span className="bg-gradient-to-r from-sky-500 to-purple-400 bg-clip-text text-transparent">
              {" "}
              resumes,{" "}
            </span>
             chat with AI, book mentorship sessions, play games, and host meetings—all in one platform!
          </h4>
        </div>
      </section>

      <section className="py-12">
        <div className="w-fit relative mx-auto">
          <div className="h-0.5 w-16 bg-gray-100 rounded-lg absolute -left-6" />
          <h3 className="text-4xl nd:text-4xl font-bold">
            Why{"  "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
              choose
            </span>{" "}
            us?
          </h3>
          <div className="h-0.5 w-16 bg-gray-200 rounded-lg absolute -right-6" />
        </div>
        <div className="flex max-w-7xl mx-auto flex-wrap justify-center gap-8 p-4 mt-12">
          <div className="sm:w-72 sm:h-96 w-full h-96 rounded-2xl bg-gray-950  border-gray-700shadow-xl hover:scale-105 transition-all duration-500 border border-neutral-600/30">
            <p className="text-9xl  "> 01</p>
            <p className="text-lg font-bold ml-2 mt-4">
              Expert-Crafted Learning{" "}
            </p>

            <p className="text-sm m-2 tracking-tight opacity-40">
              Our team of accomplished engineera, with impressive coding
              profiles across various programming platforms, hails from top tech
              companies like Google, Amazon, Meta, and Microsoft. They also
              boast a proven track record of successful teaching.
            </p>
          </div>
          <div className="sm:w-72 sm:h-96 w-full h-96 rounded-2xl bg-gray-950  border-gray-700 shadow-xl hover:scale-105 transition-all duration-500 border border-neutral-600/30 md:mt-12 lg:mt-12">
            <p className="text-9xl  "> 02</p>

            <p className="text-lg font-bold ml-2 mt-4">
              Structured Learning Path
            </p>

            <p className="text-sm m-2 tracking-tight opacity-40">
              Master Data Structures & Algorithms (DSA), System Design, core
              subjects, and practical projects - all through premium blog posts
              and in-depth video solutions.
            </p>
          </div>
          <div className="sm:w-72 sm:h-96 w-full h-96 rounded-2xl bg-gray-950  border-gray-700 shadow-xl hover:scale-105 transition-all duration-500 border border-neutral-600/30 md:mt-4 lg:mt-24">
            <p className="text-9xl  "> 03</p>

            <p className="text-lg font-bold ml-2 mt-4">
              Unmatched Content <br /> Depth
            </p>

            <p className="text-sm m-2 tracking-tight opacity-40">
              We prioritize quality content; offering in-depth explanationa and
              a wider range of solved problems ing both free and paid courses.
              Our focus is on developing problem- elvine skill through intuitive
              video explanations
            </p>
          </div>
        </div>
      </section>

      <NewSection />

      <CallToAction />
      <FooterCurve />
    </main>
  );
}
