import { UserContext, useUser } from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import { InboxIcon, UserGroupIcon, TagIcon } from "@heroicons/react/solid";
import { EmailListItem } from "../components/index";
import { useNavigate } from "react-router-dom";

function Emails() {
  const { emailList } = useContext(UserContext);
  const { user } = useContext(UserContext);
  let nav = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("USER", user);
  //     if (!user) {
  //       nav("/login");
  //     }
  //   }, 0);
  // }, [user]);

  console.log("EMAIL LIST: ", emailList);
  return (
    <div className="w-full min-h-screen bg-[#000000] text-gray-400">
      <div className=" h-12 bg-black-default sticky top-0"></div>
      <div className="overflow-y-scroll">
        <div className="h-14 bg-black-light flex items-center space-x-48 pl-5 text-sm">
          <div className="text-gray-400 flex items-center hover:text-white cursor-pointer ">
            <InboxIcon className="w-5 h-5 mr-3" />
            <p>Primary</p>
          </div>
          <div className="text-gray-400 flex items-center hover:text-white cursor-pointer">
            <UserGroupIcon className="w-5 h-5 mr-3" />
            <p>Social</p>
          </div>
          <div className="text-gray-400 flex items-center hover:text-white cursor-pointer">
            <TagIcon className="w-5 h-5 mr-3" />
            <p>Promotions</p>
          </div>
        </div>
        {emailList
          ? emailList?.messages.map((email) => (
              <EmailListItem key={email.id} id={email.id} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Emails;
