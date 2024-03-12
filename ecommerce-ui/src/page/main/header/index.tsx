import {Flex} from "@chakra-ui/react";
import Logo from "./Logo";
import PageNavigator from "./PageNavigator";

import {HeaderWrapper} from "../../../component/HeaderWrapper";
import SignInButton from "./SignInButton";

const Header = () => {
    return (
        <HeaderWrapper
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={999}
            bgColor={'white'}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)">
            <Flex gap={10} h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Logo/>
                <PageNavigator/>
                <SignInButton/>
            </Flex>
        </HeaderWrapper>
    );
};

export default Header;
