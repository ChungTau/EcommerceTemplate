import Image from "next/image";
import defaultImage from '/public/images/mega-menu-card.png';
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
interface MegaMenuCardProps {
    href?: string;
    name: string;
    src?: string | StaticImageData;
    description: string;
}

export function MegaMenuCard({description, name, src = (defaultImage as StaticImageData), href="#"}:MegaMenuCardProps){
    return(
        <div className="col-span-full md:col-span-4">
            <div className="flex flex-col bg-gray-50 p-6 dark:bg-zinc-600">
                <span className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">{name}</span>

                <a className="mt-4 group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={href}>
                <div className="aspect-w-16 aspect-h-9">
                    <Image height={500} width={500} className="w-full object-cover rounded-lg" src={src} alt="Image Description"/>
                </div>
                <div className="mt-2">
                    <p className="text-gray-800 dark:text-gray-200">{description}</p>
                    <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                    Learn more
                    <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </p>
                </div>
                </a>
            </div>
        </div>
    );
}