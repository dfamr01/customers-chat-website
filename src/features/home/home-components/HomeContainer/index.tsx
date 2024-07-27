import { Button, Paper, styled, Typography } from "@mui/material";
import { ScreensRoutes } from "../../../../shared/router/routes";
import { Link as RouterLink } from "react-router-dom";

interface AppProps {}

const ButtonAgent = styled(Button)`
  background-color: #bb4ce22e;
  margin-bottom: 10px;
`;

const ButtonClient = styled(Button)`
  background-color: #e24c4c2e;
`;
const ButtonCaption = styled(Typography)`
  color: black;
  font-size: 1rem;
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
      <ButtonAgent
        component={RouterLink}
        to={ScreensRoutes.Login}
        variant="contained"
      >
        <ButtonCaption variant="button">Customer</ButtonCaption>
      </ButtonAgent>
      <ButtonClient
        component={RouterLink}
        to={ScreensRoutes.CustomerService}
        variant="contained"
        onClick={() => console.log("Chatss")}
      >
        <ButtonCaption variant="button">Chat Representative</ButtonCaption>
      </ButtonClient>
    </PaperWrapper>
  );
};

export default HomeContainer;
