"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaticNav } from "./Static-nav";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
export const FloatingNav = ({ className }) => {
  const [visible, setVisible] = useState(true);
  const { user, error, isLoading } = useUser();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex w-full z-[9999999999] fixed top-0 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-b-3xl bg-white/05 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 items-center justify-between",
            className
          )}
        >
          <StaticNav color={"red-600"} />

          <div className="flex items-center space-x-4">
            {/* Check if user is available */}
            {user ? (
              <div className="flex items-center space-x-4">
                {/* Show user profile picture */}
                <img
                  src={user.picture}
                  alt={`${user.name}'s profile picture`}
                  className="w-8 h-8 rounded-full"
                />
                {/* Log out button */}
                <Link href="/api/auth/logout">
                  <button className="bg-sky-600 px-5 py-2 rounded-full font-bold">
                    Log Out
                  </button>
                </Link>
              </div>
            ) : (
              <Link
                href="/api/auth/login"
                className="bg-sky-800 px-5 py-2 rounded-full font-bold hover:bg-sky-600 transition duration-300"
              >
                Log In
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
