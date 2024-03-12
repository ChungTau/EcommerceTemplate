import {Avatar, Menu, MenuButton, MenuGroup, MenuItem, MenuList} from "@chakra-ui/react";
import {FaCircleUser} from "react-icons/fa6";
import {RouteConfig, userOutlet} from '../../../../constant/routes';
import {useNavigate} from "react-router-dom";
import {useAuth} from "react-oidc-context";

const menuItemStyle = {
    bg: 'transparent',
    _hover: {
      bg: `#000000CC`,
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

const ActionMenu = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const handleLogout = () => {
        if (!auth.isAuthenticated) {
            return null;
        }

        navigate('/');
        auth.removeUser();
        auth.signoutRedirect({post_logout_redirect_uri: process.env.REACT_APP_PROJECT_URL});
    };

    return (
        <Menu>
            <MenuButton
                as={Avatar}
                color={'#212121'}
                bgColor={'transparent'}
                w={'26px'}
                icon={< FaCircleUser size = {
                26
            } />}
                size="sm"
                cursor={'pointer'}
                aria-label="Courses"
                fontWeight="normal"/>
            <MenuList mr={-4} mt={2} borderColor="transparent" bg={`#000000CC`} backdropFilter="blur(4px)">
            {Object.values(userOutlet).length>0&&<MenuGroup {...menuGroupStyle} title="User">
                {Object.entries(userOutlet).map(([key, route]) => createMenuItem(route, handleNavigation))}
          </MenuGroup>}
          <MenuItem {...menuItemStyle} onClick={() => handleLogout()}>
            Log out
          </MenuItem>
            </MenuList>
        </Menu>
    )
};

export default ActionMenu;