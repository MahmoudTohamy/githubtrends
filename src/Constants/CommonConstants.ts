/** @format */

import exp from "constants";
import { type } from "os";
type StringOrNull = string | null;
export interface BuiltBy {
  username: string;
  url: string;
  avatar: string;
}
export interface TrendingRepo {
  rank: Number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: StringOrNull;
  languageColor: StringOrNull;
  totalStars: Number;
  forks: Number;
  starsSince: Number;
  since: string;
  builtBy: BuiltBy[];
}

export interface PopularRepository {
  repositoryName: StringOrNull;
  description: StringOrNull;
  url: StringOrNull;
}
export interface TrendingDev {
  rank: Number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: PopularRepository;
}
export interface listProps {
  trendingRepo: TrendingRepo[];
  trendingDeveloper: TrendingDev[];
}
export interface singleDevRowProps {
  singleDev: TrendingDev;
}
