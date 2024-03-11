import { Flex, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import PageNavigator from "./PageNavigator";
import ActionBar from "./ActionBar";

import { HeaderWrapper } from "../../../component/HeaderWrapper";

const MotionHeader = motion(chakra.header);

const Header = () => {
    return (
        <MotionHeader
            initial={{ opacity:0}} 
            animate={{ opacity: 1 } }
            transition={{ ease: "easeIn",duration:0.4, delay: 0.05 }}
            position="fixed"
            top={0}
            left={0} 
            right={0} 
            zIndex={999} 
            bgColor={'white'} 
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
            <HeaderWrapper >
            <Flex gap={10} h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Logo />
                <PageNavigator />
                <ActionBar/>
            </Flex>
            </HeaderWrapper>
        </MotionHeader>
    );
};

export default Header;
