import {Text} from "@chakra-ui/react";
import {useAuth} from "react-oidc-context";

import Row from "../../../../component/Row";

const SignInButton = () => {
    const auth = useAuth();
    return (
        <Row
            gap={3}
            alignItems={'center'}
            justifyContent={'end'}
            cursor={'pointer'}
            onClick={() => auth.signinRedirect()}>
            <Text fontSize={'16px'} fontFamily={'Noto Sans TC'} color={'#343434'}>{"SIGN IN"}</Text>
        </Row>
    );
};

export default SignInButton;