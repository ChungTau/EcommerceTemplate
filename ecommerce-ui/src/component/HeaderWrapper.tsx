import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const HeaderWrapper = styled(Box)({
    position: 'relative',
    maxWidth: '1300px',
    margin: 'auto',
    padding: '0.4rem 2.4rem 0 2.4rem',
    '@media (max-width:960px)':{
        padding: '0.4rem 2.0rem 0 2.0rem',
    },
    '@media (max-width:600px)':{
        padding: '0.4rem 0.8rem 0 0.8rem',
    }
});