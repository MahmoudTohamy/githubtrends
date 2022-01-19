/** @format */

import React from "react";
import { singleDevRowProps } from "../../Constants/CommonConstants";
import { RiFireLine } from "react-icons/ri";
import { HiDesktopComputer } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import "./SingleDevRow.scss";
export default function SingleDevRow(props: singleDevRowProps) {
  return (
    <div className='singleDevRow'>
      <span className='singleDevRow__rank'>{props.singleDev.rank}</span>
      <Avatar
        src={props.singleDev.avatar}
        alt={props.singleDev.name}
        url={props.singleDev.url}
        style='developerImage'
      />
      <div className='singleDevRow__generalInfo'>
        <div className='singleDevRow__generalInfo__devName'>
          <a
            href={props.singleDev.url}
            className='singleDevRow__generalInfo__devName__name'>
            {props.singleDev.name}
          </a>
          <a
            href={props.singleDev.url}
            className='singleDevRow__generalInfo__devName__userName'>
            {props.singleDev.username}
          </a>
        </div>
        <div className='singleDevRow__generalInfo__popularRepo'>
          <span className='singleDevRow__generalInfo__popularRepo__word'>
            <RiFireLine />
            POPULAR REPO
          </span>
          {props.singleDev.popularRepository.repositoryName ? (
            <a
              href={
                props.singleDev.popularRepository.url
                  ? props.singleDev.popularRepository.url
                  : ""
              }
              className='singleDevRow__generalInfo__popularRepo__repo'>
              <HiDesktopComputer />{" "}
              {props.singleDev.popularRepository.repositoryName}
            </a>
          ) : null}

          {props.singleDev.popularRepository.description ? (
            <span className='singleDevRow__generalInfo__popularRepo__description'>
              {props.singleDev.popularRepository.description}
            </span>
          ) : null}
        </div>
        <div className='singleDevRow__generalInfo__btnsDiv'>
          <button>Follow</button>
          <button>
            <AiOutlineHeart />
            Sponsor
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
