import { NextPage } from "next";
import LoginForm from "../../user/LoginForm";
import Link from "next/link";
import { PATH_USER } from "../../routes/paths";

const LoginPage: NextPage = ({}) => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-200">
      <h1 className="w-full p-8 text-4xl font-bold text-blue-500 text-center">
        Commence Your Study
      </h1>

      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 flex justify-center items-center m-4 p-8">
          <img
            src="/images/login.jpg"
            alt="Login Image"
            className="max-w-full"
          />
        </div>

        <div className="flex-1 p-4 md:p-8">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-xl mb-4">Welcome back!</h2>

            <LoginForm />

            <Link href={PATH_USER.signup} className="mt-4 text-blue-500">
              Don't have an account? <span>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
