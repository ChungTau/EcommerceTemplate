import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import {
  HStack,
  Button,
  Menu,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { IoMenu} from 'react-icons/io5';
import { RouteConfig, mainOutlet, userOutlet, routes } from '../../../constant/routes';

const menuItemStyle = {
  bg: 'transparent',
  _hover: {
    bg: `rgba(56,56,56, 0.3)`,
    color: 'white',
  },
  color: 'white',
  fontSize: '14px',
};

const menuGroupStyle = {
  marginX: '0.8rem',
  fontWeight: 600,
  color: 'gray.100',
};

const createMenuItem = (route: RouteConfig, handleNavigation: (path: string) => void) => (
  <MenuItem {...menuItemStyle} icon={route.icon && <route.icon />} onClick={() => handleNavigation(route.path || '#')} key={route.name}>
    {route.name}
  </MenuItem>
);

type HandleNavigationFunction = (path: string) => void;

interface MenuProps {
    handleNavigation: HandleNavigationFunction;
    isAuthenticated: boolean;
}



const ActionBar = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleSignIn = () => {
    if (!auth.isAuthenticated) {
      let originPath = window.location.pathname;
      auth.signinRedirect({
        redirect_uri: process.env.REACT_APP_PROJECT_URL?.concat(originPath),
      });
    }
  
    if (auth.isAuthenticated) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  const handleLogout = () => {
    if(!auth.isAuthenticated){
      return null;
    }
    
    navigate('/');
    auth.removeUser();
    auth.signoutRedirect({post_logout_redirect_uri: process.env.REACT_APP_PROJECT_URL});
  };

  const MobileMenu: React.FC<MenuProps> = ({ handleNavigation, isAuthenticated }) => (
    <>
      <MenuGroup {...menuGroupStyle} title="Page">
        {Object.entries(mainOutlet).map(([key, route]) => (isAuthenticated || !route.isProtected) && createMenuItem(route, handleNavigation))}
      </MenuGroup>
      <MenuDivider my={4} borderBottomColor={'white'} />
      {isAuthenticated ? (
        <>
          <MenuGroup {...menuGroupStyle} title="User">
            {Object.entries(userOutlet).map(([key, route]) => createMenuItem(route, handleNavigation))}
          </MenuGroup>
          <MenuItem {...menuItemStyle} onClick={() => handleLogout()}>
            Log out
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem {...menuItemStyle} onClick={() => handleSignIn()}>
            Sign In
          </MenuItem>
        </>
      )}
    </>
  );

  const WholeMenu = () => { 
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          color="white"
          _active={{ bgColor: 'blackAlpha.400' }}
          _hover={{ bgColor: 'blackAlpha.200' }}
          aria-label="Options"
          bgColor="blackAlpha.400"
          icon={<IoMenu />}
          variant="primary"
        />
        <MenuList mt={2} px={4} zIndex={11} borderColor="transparent" bg={`rgba(56,56,56, 0.7)`} backdropFilter="blur(4px)">
          <MobileMenu handleNavigation={handleNavigation} isAuthenticated={auth.isAuthenticated}/>
        </MenuList>
      </Menu>
    );
  };

  return (
    <HStack flex={2} justifyContent="end">
      {isMobile ? 
        WholeMenu()
      : (
        auth.isAuthenticated ? WholeMenu() :<Flex gap={2} flexDir="row">
        <Button
          color="white"
          bgColor="#a4395e"
          _hover={{ bgColor: '#74393e' }}
          onClick={() => handleSignIn()}
        >
          {routes.SIGNIN.name}
        </Button>
      </Flex>
      )}
    </HStack>
  );
};

export default ActionBar;
