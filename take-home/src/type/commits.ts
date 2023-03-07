export interface CommitType {
  author: string;
  message: string;
  date: string;
}

export interface TableInfoType {
  more: boolean;
  commits: Array<CommitType>;
}
