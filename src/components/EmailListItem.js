import { useEffect, useState, useContext } from "react";
import { UserContext, useUser } from "../context/userContext";
import {
  InboxIcon,
  StarIcon,
  ArchiveIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import Moment from "moment";
import { useNavigate } from "react-router-dom";

function EmailListItem({ id }) {
  const { token, user } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [date, setDate] = useState();
  const [from, setFrom] = useState("<test>");
  const [subject, setSubject] = useState();
  const [trimmedFrom, setTrimmedFrom] = useState();
  const [formattedDate, setFormattedDate] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const fetchEmails = async () => {
      const emailItem = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/${user?.googleId}/messages/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}
          `,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      ).then((res) => res.json());
      setEmail(emailItem);
    };

    if (token) {
      fetchEmails();
    }
  }, []);

  useEffect(() => {
    email?.payload.headers.forEach((header) => {
      {
        header.name === "From" && setFrom(header.value);
      }
      if (header.name === "From") {
        setFrom(header?.value);
      }
      if (header.name === "Subject") {
        setSubject(header?.value);
      }

      if (header.name === "Date") {
        setDate(header?.value);
      }

      setFormattedDate(Moment(date).format("MM/DD/YYYY"));
    });
  });

  useEffect(() => {
    if (from.charAt(0) === "<") {
      setTrimmedFrom(from);
    } else {
      setTrimmedFrom(from.split("<")[0]);
    }
  }, [from]);

  console.log("EMAIL", email);

  return (
    <div
      onClick={() => {
        nav("/email", { state: { id: id } });
      }}
      className="flex flex-cols-2 w-full h-10 pl-4 items-center border-b border-gray-700 text-sm cursor-pointer hover:border hover:border-gray-600 hover:shadow-lg"
    >
      <div className="flex items-center space-x-4">
        <p>▢</p>
        <StarIcon className="h-5" />
        <BookmarkIcon className="h-5" />
        <p className="truncate w-48 text-black-fontLight ">{trimmedFrom}</p>
      </div>
      <div className="ml-24 flex w-[55rem]">
        <p className="truncate text-black-fontLight ">{subject}</p>
        <p className=" text-black-extraLight truncate">{email?.snippet}</p>
      </div>
      <p className="ml-10 text-black-extraLight mr-5">{formattedDate}</p>
    </div>
  );
}

export default EmailListItem;
