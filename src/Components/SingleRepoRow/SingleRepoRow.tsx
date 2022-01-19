/** @format */

import React from "react";
import { TrendingRepo } from "../../Constants/CommonConstants";
import { FiStar } from "react-icons/fi";
import { BiGitRepoForked } from "react-icons/bi";
import { HiDesktopComputer } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import "./SingleRepoRow.scss";
import Avatar from "../Avatar/Avatar";
interface RepoRowProps {
  singleRepo: TrendingRepo;
}
export default function SingleRepoRow(props: RepoRowProps) {
  return (
    <div className='repo-row-container'>
      <div className='repo-row-container__rightDiv'>
        <a className='repo-row-container__rightDiv__repoUrl'>
          <HiDesktopComputer />
          <span>
            {" "}
            {props.singleRepo.username} / {props.singleRepo.repositoryName}
          </span>
        </a>
        <span className='repo-row-container__rightDiv__description'>
          {props.singleRepo.description}
        </span>
        <div className='repo-row-container__rightDiv__generalInfo'>
          <span>{props.singleRepo.language}</span>
          <span>
            <FiStar /> {props.singleRepo.totalStars}
          </span>
          <span>
            <BiGitRepoForked /> {props.singleRepo.forks}
          </span>
          <span>
            Built by{"  "}
            {props.singleRepo.builtBy.map((user) => (
              <Avatar
                src={user.avatar}
                alt={user.username}
                url={user.url}
                style='smallImage'
              />
            ))}
          </span>
        </div>
      </div>
      <div className='repo-row-container__leftDiv'>
        <div className='repo-row-container__leftDiv__upperDiv'>
          <span className='repo-row-container__leftDiv__upperDiv__starContainer'>
            {" "}
            <FiStar /> Star
          </span>
          <span className='repo-row-container__leftDiv__upperDiv__dropdownContainer'>
            <IoMdArrowDropdown />
          </span>
        </div>
        <span className='repo-row-container__leftDiv__upperDiv__starCont'>
          {" "}
          <FiStar /> {props.singleRepo.starsSince} stars today
        </span>
      </div>
    </div>
  );
}
