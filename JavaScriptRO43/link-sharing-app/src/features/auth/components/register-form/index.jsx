import { Button, Text, TextField } from "../../../../common";
import Container from "./index.styled";
import EmailIcon from "../../../../assets/ph_envelope-simple-fill.svg?react";
import LockIcon from "../../../../assets/ph_lock-key-fill.svg?react";
import { Link, useNavigate } from "react-router";
import React from "react";
import Api from "../../../../api";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = React.useState({
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    // Tip: Prevent page to refresh
    event.preventDefault();

    const values = Object.entries(form); // [["email", "myemai@gmail.com"],["password", "myPassword"],["confirmPassword","myPassword"]]

    const emailRegex = /[a-z0-9_.-]+@+[a-z0-9.-]+\.[a-z]{2,3}/gi;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,15}$/;

    let currentErrors = errors;
    // Tip: Loop over values to check if there are empty values
    values.forEach(([key, value]) => {
      if (!value) {
        currentErrors[key] = "The field is required."; // Tip: Add the error in the current errors object
      } else {
        currentErrors[key] = "";
      }
    });
    setErrors({ ...errors, ...currentErrors }); // Tip: Merge errors with current errors
    if (Object.values(currentErrors).some((value) => value)) {
      // Tip: exit the function
      return;
    }

    if (!emailRegex.test(form.email)) {
      setErrors({ ...errors, email: "The email is invalid." });
      // Tip: exit the function
      return;
    }
    if (form.password !== form.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "The passwords don't match." });
      // Tip: exit the function
      return;
    }
    if (!passwordRegex.test(form.password)) {
      setErrors({
        ...errors,
        password:
          "The password must contain at least 8 chars, special chars and one uppercase letter.",
      });
      // Tip: exit the function
      return;
    }

    // Tip: isLoading will be true and used to disable the submit button
    setIsLoading(true);

    // Tip: Call Api.user.register() method
    const newUser = await Api.user.register({
      email: form.email,
      password: form.password,
    });

    if (newUser) {
      localStorage.setItem("id_token", newUser.idToken); // Tip: Save the id token to check if the user is logged in or not
      await navigate("/"); // Tip: "/" means the links page
      toast("Your account has been created.", { type: "success" });
    } else {
      toast("The email is already used.", { type: "error" });
    }

    setIsLoading(false);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <span className="container__group">
        <Text
          as="label"
          for="email"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Email address
        </Text>
        <TextField
          id="email"
          isIconVisible={true}
          iconChildren={<EmailIcon />}
          placeholder="e.g. alex@email.com"
          isErrorVisible={errors.email}
          errorChildren={errors.email}
          onChange={(event) => handleChange("email", event.target.value)}
        />
      </span>
      <span className="container__group">
        <Text
          as="label"
          for="create__password"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Create password
        </Text>
        <TextField
          id="create__password"
          type="password"
          isIconVisible={true}
          iconChildren={<LockIcon />}
          placeholder="At least 8 characters"
          isErrorVisible={errors.password}
          errorChildren={errors.password}
          onChange={(event) => handleChange("password", event.target.value)}
        />
      </span>
      <span className="container__group">
        <Text
          as="label"
          for="confirm__password"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Confirm password
        </Text>
        <TextField
          id="confirm__password"
          type="password"
          isIconVisible={true}
          iconChildren={<LockIcon />}
          placeholder="At least 8 characters"
          isErrorVisible={errors.confirmPassword}
          errorChildren={errors.confirmPassword}
          onChange={(event) =>
            handleChange("confirmPassword", event.target.value)
          }
        />
      </span>
      <Text size="sm">Password must contain at least 8 characters</Text>
      <Button variant="fill" type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Create new account"}
      </Button>
      <span className="container__cta">
        <Text>Already have an account?</Text>
        <Link to="/auth/login">
          <Text as="span" style={{ color: "var(--app-color-1)" }}>
            Login
          </Text>
        </Link>
      </span>
    </Container>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
