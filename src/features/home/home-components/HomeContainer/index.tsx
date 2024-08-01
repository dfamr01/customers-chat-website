import { Box, Button, Paper, styled } from "@mui/material";
import { ScreensRoutes } from "../../../../shared/router/routes";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../../../public/android-chrome-512x512.png";
// import logo from "../../../../../public/android-chrome-192x192.png";
interface AppProps {}

interface ButtonOwnProps {
  to: string;
}

const ButtonAgent = styled(Button)<ButtonOwnProps>`
  /* background-color: #bb4ce22e; */
  margin-bottom: 10px;
`;

const Logo = styled("img")`
  /* background-color: #bb4ce22e; */
  margin-bottom: 10px;
  width: 200px;
`;

const ButtonClient = styled(Button)<{ to: string }>`
  /* background-color: #e24c4c2e; */
`;

export const PaperWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px;
`;

const HomeContainer: React.FC<AppProps> = () => {
  return (
    <PaperWrapper>
      <Box>
        <Logo
          // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={logo}
          alt="logo"
          loading="lazy"
        />
      </Box>
      <ButtonAgent
        // @ts-expect-error - Property 'to' does not exist on type 'IntrinsicAttributes & ButtonProps & { children?: ReactNode; }'.
        component={RouterLink}
        to={ScreensRoutes.Login}
        variant="contained"
        color="secondary"
      >
        Customer
      </ButtonAgent>
      <ButtonClient
        // @ts-expect-error - Property 'to' does not exist on type 'IntrinsicAttributes & ButtonProps & { children?: ReactNode; }'.
        component={RouterLink}
        to={ScreensRoutes.CustomerService}
        variant="contained"
      >
        Chat Representative
      </ButtonClient>
    </PaperWrapper>
  );
};

export default HomeContainer;
