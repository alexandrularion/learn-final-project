import { Button, Text, TextField } from "../../../../common";
import Container from "./index.styled";
import EmailIcon from "../../../../assets/ph_envelope-simple-fill.svg?react";
import LockIcon from "../../../../assets/ph_lock-key-fill.svg?react";
import { Link, useNavigate } from "react-router";
import React from "react";
import { toast } from "react-toastify";
import Api from "../../../../api";

const LoginForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: null,
    password: null,
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    // Tip: Prevent page to refresh
    event.preventDefault();

    const values = Object.entries(form); // [["email", "myemai@gmail.com"],["password", "myPassword"]]

    const emailRegex = /[a-z0-9_.-]+@+[a-z0-9.-]+\.[a-z]{2,3}/gi;

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

    // Tip: isLoading will be true and used to disable the submit button
    setIsLoading(true);

    // Tip: Call Api.user.login() method
    const user = await Api.user.login({
      email: form.email,
      password: form.password,
    });

    if (user) {
      localStorage.setItem("id_token", user.idToken); // Tip: Save the id token to check if the user is logged in or not
      await navigate("/"); // Tip: "/" means the links page
      toast("Your have been logged in succesfully.", { type: "success" });
    } else {
      toast("Invalid email or password.", { type: "error" });
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
          for="password"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Password
        </Text>
        <TextField
          id="password"
          type="password"
          isIconVisible={true}
          iconChildren={<LockIcon />}
          placeholder="Enter your password"
          isErrorVisible={errors.password}
          errorChildren={errors.password}
          onChange={(event) => handleChange("password", event.target.value)}
        />
      </span>
      <Button variant="fill" type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </Button>
      <span className="container__cta">
        <Text>Don’t have an account?</Text>
        <Link to="/auth/register">
          <Text as="span" style={{ color: "var(--app-color-1)" }}>
            Create account
          </Text>
        </Link>
      </span>
    </Container>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
