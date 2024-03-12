import styled from "@emotion/styled";
import { HTMLMotionProps, Variants, motion } from "framer-motion";
import { useCallback} from "react";
import { DEFAULT_TITLE } from "../constant/app";
import { useLoading } from "../provider/LoadingProvider";

interface LoaderProps extends HTMLMotionProps<"div"> {
    delay?: number;
    duration?: number;
}

const LoaderContainer = styled(motion.div)({
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Kalam',
    overflow: 'hidden',
    minWidth: '100vw'
});

const LoaderInner = styled(motion.h1)({
    display: 'flex',
    overflow: 'hidden',
    fontSize: '72px',
    fontWeight: 700,
    color: '#121212',
    '@media (max-width: 600px)': {
        fontSize: '32px'
    }
});

const child: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 4,
            stiffness: 400
        } // You can adjust the duration as needed.
    },
    hidden: {
        opacity: 0,
        y: 20
    }
};

function Loader({
    delay = 0.1,
    duration = 0.1
}: LoaderProps) {
    const letters = Array.from(DEFAULT_TITLE);
    const {loading, setLoading } = useLoading();
    // Function to set loading state once animation completes
    const onAnimationComplete = useCallback(() => {
        setLoading(true);
    }, [setLoading]);



    const container: Variants = {
        hidden: {
            opacity: 1
        },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: duration,
                delayChildren: i * delay
            }
        }),
        exit: {
            opacity: 0
        }
    };

    return (
        <LoaderContainer
            className="loader"
            initial='hidden'
            animate={!loading
                ? "visible"
                : "hidden"}>
            <LoaderInner
                
                layoutId="main-title-container"
                variants={container}
                onAnimationComplete={onAnimationComplete}>
                {letters.map((letter, index) => (
                    <motion.span variants={child} key={index}>
                        {letter === " " ? "\u00A0\u00A0\u00A0" : letter}
                    </motion.span>
                ))}
            </LoaderInner>
        </LoaderContainer>
    );
}

export default Loader;
