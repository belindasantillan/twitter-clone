import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  BellIcon,
  BookmarkIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline/";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal());
    dispatch(closeLoginModal());
  }

  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
      <nav className="h-full relative xl:py-1.5">
        <div className="flex justify-center items-center py-3 xl:justify-start xl:p-3">
          <Image
            src={"/assets/twitter-logo.png"}
            alt=""
            width={34}
            height={34}
          />
        </div>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] text-xl font-bold mt-2 cursor-not-allowed">
          Tweet
        </button>
        {user.username && (
          <div
            onClick={handleSignOut}
            className=" hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
          absolute bottom-0 flex justify-center items-center xl:placeholder:p-3 space-x-3"
          >
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user.photoUrl}
            />
            <div className="hidden xl:inline">
              <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
              <h1 className="text-gray-500">
                @{user.username}
              </h1>
            </div>
            <DotsHorizontalIcon className="h-5 hidden xl:inline" />
          </div>
        )}
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
      <Icon className="h-7 cursor-not-allowed" />
      <span className="hidden xl:inline cursor-not-allowed">{text}</span>
    </li>
  );
}
