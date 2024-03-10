import { Center, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "react-oidc-context";

function ProfilePage(){
    const auth = useAuth();
    return(
        <div>
            <Center>Profile Page
            </Center>
            <Flex flexDirection={'column'}>
                <Text>{auth.isAuthenticated?auth.user?.profile.preferred_username:"Hello World!"}</Text>
            </Flex>
        </div>
    );
};

export default ProfilePage;