import SignupModal from "./modals/SignupModal";
import LoginModal from "./modals/LoginModal";

export default function BottomBanner() {
  return (
    <div className="flex xl:space-x-[200px] justify-center items-center fixed w-full h-[80px] bg-[#1d9df0] bottom-0">
      <div className="hidden xl:inline text-white">
        <h1 className="text-2xl font-bold">Don't miss what's happening</h1>
        <span className="text-[18px] font-normal">
          People on twitter are first to know.
        </span>
      </div>
      <div className="space-x-3">
        <LoginModal />
        <SignupModal />
      </div>
    </div>
  );
}
