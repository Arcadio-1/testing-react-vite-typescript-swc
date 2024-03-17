import React from "react";
import { cn } from "../../../lib/utils";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Profile_icon = ({ className }: Props) => {
  return (
    <svg className={cn(" h-5 w-5 fill-first", className)} viewBox="0 0 24 24">
      <path d="M12.0236 3.05273C10.1283 3.05273 8.5918 4.58919 8.5918 6.48451C8.5918 8.37983 10.1283 9.91629 12.0236 9.91629C13.9189 9.91629 15.4554 8.37983 15.4554 6.48451C15.4554 4.58919 13.9189 3.05273 12.0236 3.05273ZM7.0918 6.48451C7.0918 3.76077 9.29983 1.55273 12.0236 1.55273C14.7473 1.55273 16.9554 3.76077 16.9554 6.48451C16.9554 9.20826 14.7473 11.4163 12.0236 11.4163C9.29983 11.4163 7.0918 9.20826 7.0918 6.48451Z"></path>
      <path d="M3.97266 18.4538C3.97266 15.2586 6.56283 12.6685 9.75797 12.6685H14.2387C17.4603 12.6685 20.0697 15.284 20.0621 18.5055C20.0595 19.6406 19.3311 20.6666 18.2197 20.9987C17.48 21.2197 16.5372 21.482 15.7883 21.623C14.2945 21.9041 13.4718 21.9369 11.9806 21.9027C10.4951 21.8687 9.68255 21.7932 8.21428 21.5175C7.50121 21.3836 6.61381 21.1624 5.89619 20.9726C4.74594 20.6684 3.97266 19.6237 3.97266 18.4538ZM9.75797 14.1685C7.39126 14.1685 5.47266 16.0871 5.47266 18.4538C5.47266 18.9629 5.80667 19.3974 6.27969 19.5225C6.99037 19.7104 7.83426 19.9199 8.49116 20.0433C9.87173 20.3025 10.6026 20.3708 12.0149 20.4031C13.432 20.4356 14.1459 20.4057 15.5109 20.1488C16.1782 20.0232 17.058 19.7803 17.7903 19.5615C18.244 19.4259 18.561 19.0004 18.5621 18.502C18.5677 16.1103 16.6305 14.1685 14.2387 14.1685H9.75797Z"></path>
    </svg>
  );
};

export default Profile_icon;
