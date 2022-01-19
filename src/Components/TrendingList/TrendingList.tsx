/** @format */

import React from "react";
import "./TrendingList.scss";
import ListHeader from "../ListHeader/ListHeader";
import SingleRepoRow from "../SingleRepoRow/SingleRepoRow";
import { listProps } from "../../Constants/CommonConstants";
import SingleDevRow from "../SingleDevRow/SingleDevRow";

export default function TrendingList(props: listProps) {
  return (
    <div className='trending-list-container'>
      <ListHeader />
      {window.location.pathname === "/"
        ? props.trendingRepo.map((singleRepo) => (
            <SingleRepoRow singleRepo={singleRepo} />
          ))
        : props.trendingDeveloper.map((singleDev) => (
            <SingleDevRow singleDev={singleDev} />
          ))}
    </div>
  );
}
