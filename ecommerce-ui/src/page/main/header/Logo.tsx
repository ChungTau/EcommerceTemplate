import {Flex, Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {mainOutlet} from "../../../constant/routes";

const Logo=()=>{
    const navigate = useNavigate();
    return(
        <Flex flex={2}>
            <Image src={'/image/logo-chiikawa.png'} h="42px" onClick={()=>navigate(mainOutlet.HOME.path!)} cursor={'pointer'} />
        </Flex>
    );
};

export default Logo;