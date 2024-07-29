import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveUserDetails } from "../../../../shared/store/user-store/user-slice";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { ScreensRoutes as ScreenRoute } from "../../../../shared/router/routes";
import callController from "../../../customer-service/customer-service-controller/customer-service.controller";
import { LoginFormData } from "../../../../shared/interfaces/shared.interface";
import { validator } from "../../../../shared/utils/utils";

const LoginContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<LoginFormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const [addresses, setAddresses] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    fetchAddresses();
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const fetchAddresses = async () => {
    try {
      const result = await callController.getAddresses();
      setAddresses(result);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const isValid =
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      validator.isEmailValid(formData.email) &&
      formData.address.trim() !== "";
    setIsFormValid(isValid);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(saveUserDetails(formData));
      callController.createCall(formData);
      // Reset form after saving
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      });
      navigate(ScreenRoute.Chat);
    }
  };

  return (
    <LoginForm
      formData={formData}
      addresses={addresses}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isFormValid={isFormValid}
    />
  );
};

export default LoginContainer;
