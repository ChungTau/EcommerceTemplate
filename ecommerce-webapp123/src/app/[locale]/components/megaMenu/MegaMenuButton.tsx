interface MegaMenuButtonProps{
    name: string
}

export default function MegaMenuButton({name}: MegaMenuButtonProps){
    return(
        <button
                type="button"
                className=" select-none transition-all flex justify-center items-center w-full text-gray-500 hover:text-zinc-800 font-medium dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                {name}
                <svg
                    className="flex-shrink-0 ms-2 size-4 hidden sm:flex"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
    );
}