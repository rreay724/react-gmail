import {
  MenuIcon,
  SearchIcon,
  QuestionMarkCircleIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { ViewGridIcon } from "@heroicons/react/solid";
import { UserContext, useUser } from "../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user } = useContext(UserContext);
  const { signOut } = useUser();
  let nav = useNavigate();

  const logOut = () => {
    signOut();
    nav("/login");
  };
  return (
    <div className="h-16 bg-black-default items-center grid grid-cols-2 border-b border-gray-700">
      <div className="flex ml-5 items-center justify-start">
        <div className="flex mr-10 space-x-2 ">
          <MenuIcon className="w-6 text-white" />
          <img src="/Gmail-Logo.png" alt="" className="h-7" />
          <h2 className="text-gray-300 text-xl">Gmail</h2>
        </div>
        <div className="ml-14 flex-grow">
          <div className="bg-black-light rounded-lg items-center flex-grow flex  text-white">
            <SearchIcon className="w-9 mx-3 cursor-pointer hover:bg-gray-500 rounded-full p-2" />

            <input
              className="bg-transparent rounded-lg h-12 placeholder-white outline-none focus:placeholder-gray-400"
              placeholder="Search mail"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-5 mr-3" onClick={logOut}>
        <QuestionMarkCircleIcon className="text-white w-6" />
        <CogIcon className="text-white w-6" />
        <ViewGridIcon className="text-white w-6" />
        <img src={user?.imageUrl} className="rounded-full w-9 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
