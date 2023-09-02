import React, { FC } from "react";
import { Form } from "react-final-form";
import { TextField } from "mui-rff";
import { Button, Stack, Typography } from "@mui/material";
import useAuth from "./useAuth";
import { useSnackbar } from "notistack";
import useEffectUpdate from "../hooks/useEffectUpdate";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    signup,
    request: {
      signup: { status, error, passwordErrors, emailErrors },
    },
  } = useAuth();

  const onSubmit = async (values: FormData) => signup(values);

  const validate = async (values: FormData) => {
    const { email, password, confirmPassword } = values;

    if (!email) {
      return { email: "Required field" };
    }
    if (!password) {
      return { password: "Required field" };
    }
    if (!confirmPassword) {
      return { confirmPassword: "Required field" };
    }
    if (confirmPassword !== password) {
      return { confirmPassword: "Passwords must match" };
    }

    return;
  };

  useEffectUpdate(() => {
    if (status === "failed") {
      passwordErrors?.map((passwordError: string) => {
        enqueueSnackbar(passwordError, { variant: "error" });
      });

      emailErrors?.map((emailError: string) => {
        enqueueSnackbar(emailError, { variant: "error" });
      });

      if (error) {
        enqueueSnackbar(error, { variant: "error" });
      }
    }
  }, [error, passwordErrors, emailErrors]);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Stack
            className="w-96 p-7 border rounded-lg shadow-md bg-white"
            spacing={3}
          >
            <Typography variant="h5" className="text-center">
              Create an Account
            </Typography>

            <TextField
              label="Email"
              name="email"
              type="email"
              size="small"
              variant="outlined"
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              size="small"
              variant="outlined"
            />

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              size="small"
              variant="outlined"
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              className="bg-blue-500 text-white text-sm md:text-base hover:bg-blue-700"
            >
              Sign up
            </Button>
          </Stack>
        </form>
      )}
    />
  );
};

export default Signup;

