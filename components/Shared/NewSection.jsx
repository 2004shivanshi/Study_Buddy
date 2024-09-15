import React from "react";
import { Button } from "../ui/button";

export default function NewSection() {
  return (
    <section className="lg:w-fit h-full mx-auto flex flex-col gap-12 p-4 w-full ">
      <div className="flex flex-wrap gap-12 flex-col lg:flex-row  w-full">
        <div className="space-y-6">
          <h3 className="max-w-sm text-4xl font-bold">
            Why we are diffrent than other?
          </h3>
          <p className="max-w-sm text-sm text-neutral-400">
          Our platform offers personalized, AI-driven learning with gamification, integrated tools, and career mentorship, providing an immersive, job-ready experience.
          </p>
          <Button>Get Started</Button>
        </div>

        <div className="h-60 lg:aspect-square w-full lg:w-fit bg-gray-950 border border-gray-700 rounded-xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-xl h-10 mt-2 ml-2"
            alt=""
          />

          <p className="text-lg font-bold ml-2 mt-4">Best Tutor </p>

          <p className="text-sm m-2 tracking-tight opacity-40">
          We have the best tutor, the AI-powered mentor providing personalized guidance, real-time feedback, and customized learning paths for student success.
          </p>
        </div>
        <div className="h-60 lg:aspect-square w-full lg:w-fit bg-gray-950 border border-gray-700 rounded-xl">
          <img
            src="https://plus.unsplash.com/premium_vector-1711987806081-f2228e240180?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-xl h-10 w-16 mt-2 ml-2"
            alt=""
          />
          <p className="text-lg font-bold ml-2 mt-4">Best Curriculum </p>

          <p className="text-sm m-2 tracking-tight opacity-40">
          The curriculum is adaptive, personalized, and skill-based, offering engaging content, practical exercises, and real-world applications for students.
          </p>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row gap-12 justify-center lg:justify-end w-full">
        <div className="h-60 lg:aspect-square w-full md:w-60 lg:w-fit  bg-gray-950 border border-gray-700 rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-xl h-10 mt-2 ml-2"
            alt=""
          />
          <p className="text-lg font-bold ml-2 mt-4">Certificate </p>

          <p className="text-sm m-2 tracking-tight opacity-40">
          Upon completion, students receive industry-recognized certifications, validating their skills and boosting career prospects through credible achievements.
          </p>
        </div>
        <div className="h-60 lg:aspect-square w-full md:w-60 lg:w-fit  bg-gray-950 border border-gray-700 rounded-xl">
          <img
            src="https://th.bing.com/th/id/OIP.uCpewbBBr7qksW_IM73gSQHaEA?rs=1&pid=ImgDetMain"
            className="rounded-xl h-10 mt-2 ml-2"
            alt=""
          />
          <p className="text-lg font-bold ml-2 mt-4">Best Guide </p>

          <p className="text-sm m-2 tracking-tight opacity-40">
          The best guide through personalized learning, instant support, and clear explanations tailored to your needs, ensuring progress and understanding.
          </p>
        </div>
        <div className="h-60 lg:aspect-square w-full md:w-60 lg:w-fit  bg-gray-950 border border-gray-700 rounded-xl">
          <img
            src="https://www.thecodinghub.com/wp-content/uploads/2023/05/CodingGamesForKidsFree-980x551.png"
            className="rounded-xl h-10 mt-2 ml-2"
            alt=""
          />
          <p className="text-lg font-bold ml-2 mt-4">Creative Thinking  </p>

          <p className="text-sm m-2 tracking-tight opacity-40">
          We foster creative thinking through interactive challenges, brainstorming sessions, project-based learning, and diverse problem-solving activities that inspire innovation.
          </p>
        </div>
      </div>
    </section>
  );
}