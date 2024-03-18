'use client';

import { PageProps } from "@/types/LocaleProps";

import { Footer } from "../components/footer";
import { Header } from "../components/header";


export default function MainLayout({ children, params }:PageProps) {
  return (
    <div className="flex overflow-y-hidden justify-center mt-16">
      <Header params={params}/>
      <main className="flex flex-col w-full overflow-y-auto h-screen items-center">
        <div className="max-w-[1200px] px-2">
        {children}
        </div>
        <Footer/>
      </main>
      
    </div>
  );
};
