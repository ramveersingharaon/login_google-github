import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const getSession = await auth();
 
  if (!getSession?.user) redirect("/login");
  
  return (
    <div className="w-full my-6">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-3xl">This is my Home Page</h1>
      </div>
    </div>
  );
}
