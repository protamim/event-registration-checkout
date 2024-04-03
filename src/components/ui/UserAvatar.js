import { userAvatar } from "@/assets";
import Image from "next/image";

const UserAvatar = () => {
  return (
    <>
      <div className="rounded-full w-14 h-14">
        <Image
          src={userAvatar}
          width={120}
          height={120}
          alt="user avatar"
          className="max-w-full rounded-full"
        />
      </div>
    </>
  );
};

export default UserAvatar;
