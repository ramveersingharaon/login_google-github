import { auth } from "@/auth";
import Header from "./header";

const CommonLayout = async ({ children }) => {
  const getSession = await auth();
  console.log("This user is comming from commonlayout ",getSession)
  return (
    <div>
      <Header getSession={getSession} />
      {children}
    </div>
  );
};

export default CommonLayout;
