import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "react-oidc-context";
import { FaCircleUser } from "react-icons/fa6";

const SignInButton = () => {
    const auth = useAuth();
    return (
        <Flex gap={3} alignItems={'center'} justifyContent={'end'} cursor={'pointer'} flexDir={'row'}>
            <Avatar size={'sm'} src={auth.user?.profile.picture} icon={<FaCircleUser size={24}/>}/>
            <Text fontFamily={'Noto Sans TC'} color={'#343434'}>{"Sign In"}</Text>
        </Flex>
    );
};

export default SignInButton;