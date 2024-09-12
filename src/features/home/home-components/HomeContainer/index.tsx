import { Box, Button, Paper, styled } from "@mui/material";
import { ScreensRoutes } from "../../../../shared/router/routes";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../../../public/android-chrome-512x512.png";
import { userService } from "../../../users/users-services/users.service";
import { useEffect, useState } from "react";
// import logo from "../../../../../public/android-chrome-192x192.png";
interface AppProps { }

interface ButtonOwnProps {
  to: string;
}

const ButtonAgent = styled(Button) <ButtonOwnProps>`
  /* background-color: #bb4ce22e; */
  margin-bottom: 10px;
`;

const Logo = styled("img")`
  /* background-color: #bb4ce22e; */
  margin-bottom: 10px;
  width: 200px;
`;

const ButtonClient = styled(Button) <{ to: string }>`
  /* background-color: #e24c4c2e; */
`;

export const PaperWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px;
`;

const mockUpdatePolicy = {
  "rules": [
    {
      "id": 1,
      "type": "exists",
      "displayName": "A Exists 1111",
      "priority": 1,
      "condition": "A"
    },
    {
      "id": 2,
      "type": "exists",
      "displayName": "B Exists 22222",
      "priority": 2,
      "condition": "B"
    },
    {
      "id": 3,
      "type": "exists",
      "displayName": "C Exists",
      "priority": 3,
      "condition": "C"
    },
    {
      "id": 4,
      "type": "exists",
      "displayName": "D Exists",
      "priority": 4,
      "condition": "D"
    }
  ]
}

const RULES = "ABC"
const HomeContainer: React.FC<AppProps> = ({ periodCheckMS = 1000, rules = RULES }) => {
  const [policyData, setDataPolicy] = useState({});
  // const [policyHash, setPolicyHash] = useState("");

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const policy = await userService.getPolicy()
        setDataPolicy(policy)
      } catch (err) {
        console.error("🚀 ~ fetchPolicy ~ err:", err)

      }
    }

    const checkHasPolicyModified = async () => {
      try {
        const hash = await userService.getPolicyHash();
        setDataPolicy((current) => {
          if (current.hash != hash) {
            fetchPolicy();
          }
          return current;
        })
      } catch (err) {
        console.log("🚀 ~ checkHasPolicyModified ~ err:", err)

      }


    }
    fetchPolicy();
    let intervalId = setInterval(checkHasPolicyModified, periodCheckMS)
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = null;
      }
    }
  }, [])

  const updatePolicy = () => {
    userService.updatePolicy(mockUpdatePolicy)
  }

  return (
    <PaperWrapper>

      <button onClick={updatePolicy}>
        update
      </button>
      <div>
        {
          JSON.stringify(policyData.policy)
        }
      </div>
    </PaperWrapper>
  );
};

export default HomeContainer;
