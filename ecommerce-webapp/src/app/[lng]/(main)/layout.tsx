"use client";

import Footer from "@/components/footer";
import { Header } from "@/components/header";
import {LayoutProps} from "@/types/layoutProps";

export default function MainLayout({children, params: {
        lng
    }} : LayoutProps) {
    return (
        <div className="flex overflow-y-hidden justify-center bg-white dark:bg-neutral-800">
            <Header lng={lng}/>
            <main className="flex flex-col w-full overflow-y-auto h-screen items-center mt-16">
                <div className="max-w-[1200px] px-2 pt-2">
                    {children}
                </div>
                <Footer/>
            </main>
            
        </div>
    );
}