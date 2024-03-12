import {Box} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {mainOutlet} from "../../../constant/routes";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { DEFAULT_TITLE } from "../../../constant/app";

const NavbarH1 = styled(motion.div)({
    fontFamily: 'Kalam', 
    fontWeight: 700,
    color: '#121212',
    fontSize: '22px',
    cursor: 'pointer',
    caretColor: 'transparent'
});

const Logo=()=>{
    const navigate = useNavigate();
    return(
        <Box minW={'100px'} display={'block'}>
             <NavbarH1 layoutId="main-title-container" onClick={()=>navigate(mainOutlet.HOME.path!)}>{DEFAULT_TITLE}</NavbarH1>
        </Box>
    );
};

export default Logo;