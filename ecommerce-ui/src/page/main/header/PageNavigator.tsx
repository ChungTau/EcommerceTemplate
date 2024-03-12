import {HStack, Link as ChakraLink, Text, useBreakpointValue, Flex} from "@chakra-ui/react";
import {Link as RouterLink} from 'react-router-dom';
import {mainOutlet} from "../../../constant/routes";
import {APP_NAME} from "../../../config/app";
import { useAuth } from "react-oidc-context";

const PageNavigator = () => {
    const auth = useAuth();
    const pages = Object.values(mainOutlet);
    const isMobile = useBreakpointValue({ base: true, md: false });
    return ( 
        <Flex justifyContent={isMobile?'center':'left'} flex={8}> 
            <HStack as="nav" spacing="5">
                {!isMobile
                    ? pages.map((route) => {
                        if(route.isProtected && !auth.isAuthenticated){
                            return null;
                        }else{
                            return (
                                <ChakraLink
                                    as={RouterLink}
                                    to={route.path || '#'}
                                    key={route.name}
                                    px={3}
                                    py={2}
                                    rounded={'md'}
                                    _hover={{
                                    textDecoration: 'none',
                                    bg: 'whiteAlpha.200'
                                }}>
                                    <Text fontWeight={500} color={'#343434'}>{route.name}</Text>
                                </ChakraLink>
                            );
                        }
                    })
                    : <Text>{APP_NAME}</Text>}
            </HStack> 
        </Flex>
    );
}

export default PageNavigator;