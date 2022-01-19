/** @format */

import React from "react";
import "./Avatar.scss";
interface AvatarProps {
  src: string;
  alt: string;
  style: string;
  url: string;
}
export default function Avatar(props: AvatarProps) {
  return (
    <a href={props.url}>
      <img
        src={props.src}
        alt={props.alt}
        className={`avatar-styles ${props.style}`}
      />
    </a>
  );
}
