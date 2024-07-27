import WithSideBar from "../../../shared/layouts/WithSideBar";
import CustomerServiceChatContainer from "../customer-service-components/CustomerServiceContainer";
// import WithSideBar from "../../../shared/layouts/WithSideBar";
const CustomerServiceScreen = () => {
  return (
    <WithSideBar>
      <h1>Customer Service</h1>
      <CustomerServiceChatContainer />
    </WithSideBar>
  );
};

export default CustomerServiceScreen;
