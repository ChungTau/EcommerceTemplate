import {Box, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {mainOutlet} from "../../../constant/routes";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { DEFAULT_TITLE } from "../../../constant/app";

function scrollToTop() {
    window.scrollTo(0,0);
}

const NavbarTitle = styled(Text)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '--c': 'rgb(10, 255, 157)',
    WebkitMask: 'linear-gradient(#000 0 0) content-box',
    transition: '1.2s',
    textAlign: 'left',
    flexGrow:0,
    '@media (max-width:600px)':{
        textAlign: 'center',
        flexGrow: 1
    },
    ':hover':{
        '--_p': '100%',
        color: 'var(--c)'
    }
});

const NavbarH1 = styled(motion.h1)({
    fontFamily: 'Kalam', 
    fontWeight: 700,
    color: '#121212',
    fontSize: '22px',
    
});

const Logo=()=>{
    const navigate = useNavigate();
    return(
        <Box minW={'100px'} display={'block'}>
             <NavbarTitle ml={2} onClick={scrollToTop}>
           
                <NavbarH1 layoutId="main-title-container" onClick={()=>navigate(mainOutlet.HOME.path!)} >{DEFAULT_TITLE}</NavbarH1>
            </NavbarTitle>
        </Box>
    );
};

export default Logo;