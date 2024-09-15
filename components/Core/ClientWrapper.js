"use client";

import { Provider } from "react-redux";
import store from "../../redux/store";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import SessionWrapper from "@/components/SessionWrapper";
import { FloatingNav } from "@/components/Core/Navbar";
import { IssueButton } from "@/components/Core/IssueButton";
import { Mobilenav } from "../Shared/MobileNav";

export default function ClientWrapper({ children }) {
  return (
    <Provider store={store}>
      <SessionWrapper>
        <IssueButton />
        <div className="hidden md:flex">
          <FloatingNav />
        </div>
        <div className="md:hidden flex items-center justify-between  py-2">
          <h2 className="px-3">Logo</h2>
          <Mobilenav />
        </div>
        <main className="h-full w-full">{children}</main>
      </SessionWrapper>
    </Provider>
  );
}
