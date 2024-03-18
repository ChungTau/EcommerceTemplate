'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import { ButtonTheme } from '../ButtonTheme';

export function ThemeSwitcher() {
    const [mounted,
        setMounted] = useState(false)
    const {setTheme, resolvedTheme} = useTheme()

    useEffect(() => setMounted(true), []);

    if(!mounted){
        return(<div>
            
        </div>);
    }

    return (
        <ButtonTheme>
            <button
                type="button"
                title="Switch to dark mode"
                className={`${resolvedTheme === 'light'
                ? 'block'
                : 'hidden'} items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-blue-200`}
                onClick={() => setTheme('dark')}>
                <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            </button>
            <button
                type="button"
                title="Switch to light mode"
                className={`${resolvedTheme === 'dark'
                ? 'block'
                : 'hidden'} items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-blue-200`}
                onClick={() => setTheme('light')}>
                <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8a2 2 0 1 0 4 4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </button>
            </ButtonTheme>
    );
};
