import {MdLanguage} from "react-icons/md";
import {ButtonTheme} from "../ButtonTheme";
import { LanguageSelector } from "./LanguageSelector";

export function LangSwitcher() {
    return (
        
            <div className="hs-dropdown relative inline-flex">
                <ButtonTheme>
                <button
                    id="hs-dropdown-basic"
                    type="button"
                    className="hs-dropdown-toggle ">
                    <MdLanguage/>
                </button>
                </ButtonTheme>
                
                <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-32 hidden z-10 mt-2 min-w-32 bg-white shadow-md rounded-lg p-2 dark:bg-zinc-700 dark:divide-zinc-600 dark:border dark:border-zinc-700 "
                    aria-labelledby="hs-dropdown-basic">
                    <LanguageSelector/>
                </div>
            </div>
        
    );
};
