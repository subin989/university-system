import { NextPage } from "next";
import { Stack, Typography } from "@mui/material";
import SignupForm from "../../user/SignupForm";
import { PATH_USER } from "../../routes/paths";
import Link from "next/link";

const Signup: NextPage = ({}) => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-200">
      <h1 className="w-full p-8 text-4xl font-bold text-blue-500 text-center">
        Commence Your Study
      </h1>

      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 p-4 md:p-8">
          <div className="flex flex-col justify-center items-center h-full">
            <SignupForm />

            <Link href={PATH_USER.login} className="mt-4 text-blue-500">
              Already have an account? <span>Login</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center m-4 p-8">
          <img
            src="/images/signup.jpg"
            alt="Login Image"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
