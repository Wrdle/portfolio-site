import Link from "next/link";
import React from "react";

export default function SocialLinkIcon({children, href}) {
  return (
    (<Link href={href}>
      {React.cloneElement(children, {
        className:
          "text-[42px] inline-flex w-auto px-3 py-2 text-zinc-400 items-center hover:text-zinc-200",
      })}
    </Link>)
  );
};