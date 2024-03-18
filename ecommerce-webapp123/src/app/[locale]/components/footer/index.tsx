import { APP_TITLE } from "@/config/app";
import { MediaIconButton } from "./MediaIconButton";
import { IoLogoGithub, IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
export function Footer(){
    return(
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto mb-10">
  
  <div className="text-center">
    <div>
      <a className="flex-none text-xl font-semibold font-kalam text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">{APP_TITLE}</a>
    </div>


    <div className="mt-3">
      <p className="text-gray-500">© Copy right 2024 - 2025</p>
      <p className="text-gray-500">{`All rights reserved. Powered by the ${APP_TITLE}`} </p>
    </div>

    <div className="mt-3 space-x-2">
      <MediaIconButton href="#" icon={IoLogoFacebook}/>
      <MediaIconButton href="#" icon={IoLogoGithub}/>
      <MediaIconButton href="#" icon={AiFillInstagram}/>
    </div>
  </div>
</footer>
    );
};