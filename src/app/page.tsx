import { Search } from "@/components/Search";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

export default async function Home() {
  return (
    <>
      <Search />
    </>
  );
}
