import { Button } from "@mui/material";
import useAuth from "../../user/useAuth";
import { NextPage } from "next";
import Layout from "../../layouts/Layout";
import useEffectUpdate from "../../hooks/useEffectUpdate";
import { useSnackbar } from "notistack";

const UserPage: NextPage = ({}) => {
  const {
    user,
    logout,
    request: {
      logout: { status, error },
    },
  } = useAuth();

  const { enqueueSnackbar } = useSnackbar();

  useEffectUpdate(() => {
    if (status === "failed" && error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  }, [error]);

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-white">{user?.email}</h1>
      <Button
        onClick={logout}
        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
      >
        Logout
      </Button>
    </div>
  );
};

UserPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UserPage;
