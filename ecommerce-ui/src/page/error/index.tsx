import { Button, Center, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ErrorPage(){
    const navigate = useNavigate();
    return(
        
            <Center gap={4} p={4} display={'flex'} flexDirection={'column'} w={'100vw'} h={'100vh'}><Image src="./image/error404.png"/>
            <Button bgColor={'#cdcdcd'} color={'#212121'} w={'100%'} maxW={'400px'} onClick={()=>navigate("/home")}>GO TO HOMEPAGE</Button>
            </Center>
        
    );
};

export default ErrorPage;