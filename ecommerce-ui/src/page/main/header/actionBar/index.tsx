import { useAuth } from "react-oidc-context";
import Row from "../../../../component/Row";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SignInButton from "./SignInButton";
import ActionMenu from "./ActionMenu";

const ActionBar = () => {
    const auth = useAuth();

    const ActionBarItemBeforeAuth = () => {
        if(!auth.isLoading){
            if(auth.isAuthenticated){
                return(<ActionMenu/>);
            }else{
                return(
                    <SignInButton/>
                );
            }
        }else{
            return null;
        }
    };

    return (
        <Row alignItems={'center'} justifyContent={'right'}>
            <ColorModeSwitcher/>
            <ActionBarItemBeforeAuth/>
        </Row>
    );
};

export default ActionBar;