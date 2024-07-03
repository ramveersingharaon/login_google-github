"use client";
import { githubLoginAction, googleLoginAction, signOutAction } from "@/actions";


const LoginComponents = ({ getSession }) => {
  const gitHubLoginHandler = async () => {
    await githubLoginAction();
  };
  const googleLoginHandler = async () => {
    await googleLoginAction();
  };
  const logoutHandler = async () => {
    await signOutAction();
  };

  return (
    <div>
      {" "}
      <h1>This is my Login Page</h1>
      <h1> {getSession?.user?.email}</h1>
      <div className="flex items-center justify-center flex-col gap-3">
        <form action={getSession?.user ? logoutHandler : gitHubLoginHandler}>
          <button className="border-2 border-black py-1 px-3" type="submit">
            {getSession?.user ? "SignOut" : <div className="flex items-center gap-2 text-xl"> <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="gitHubLogo" width={30} /> Login with GitHub</div>}
            </button>
        </form>
        <form action={getSession?.user ? logoutHandler : googleLoginHandler}>
          <button className="border-2 border-black py-1 px-3" type="submit">
            {getSession?.user ? null : <div className="flex items-center gap-2 text-xl"> <img src="https://www.vhv.rs/dpng/d/0-6167_google-app-icon-png-transparent-png.png" alt="logo" width={30} /> Login with Google</div>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponents;
