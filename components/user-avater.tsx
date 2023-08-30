import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string;
  classname?: string;
}

export const UserAvatar = ({ src, classname }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage
        src={src}
        className={cn("h-7 w-7 md:h-10 md:w-10", classname)}
      />
    </Avatar>
  );
};
