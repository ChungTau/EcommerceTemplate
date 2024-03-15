"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


export default function PageTransition({children}:{children:React.ReactNode}) {
    const pathName = usePathname();
    return (
        <motion.div
            key={pathName}
            initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            {children}
          </motion.div>
    );
}