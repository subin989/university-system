import React, { FC } from "react";
import { Form } from "react-final-form";
import { TextField } from "mui-rff";
import { Button, Stack } from "@mui/material";
import useAuth from "./useAuth";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import useEffectUpdate from "../hooks/useEffectUpdate";

const initialValues = {
  email: "",
  password: "",
};

// ----------------------------------------------------------------------

interface FormData {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    login,
    request: {
      login: { status, error },
    },
  } = useAuth();

  const onSubmit = async (values: FormData) => login(values);

  const validate = async (values: FormData) => {
    if (!values.email) {
      return { email: "Email is required field" };
    }

    if (!values.password) {
      return { password: "Password is required field" };
    }

    return;
  };

  useEffectUpdate(() => {
    if (status === "failed" && error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  }, [error]);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Stack
            direction="column"
            spacing={3}
            className="w-96 p-7 border rounded-lg shadow-md bg-white"
          >
            <Typography variant="h5 ">Log in</Typography>

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

            <Button
              type="submit"
              variant="contained"
              size="large"
              className="bg-blue-500 text-white text-sm md:text-base hover:bg-blue-700"
            >
              Log in
            </Button>
          </Stack>
        </form>
      )}
    />
  );
};

export default LoginForm;
