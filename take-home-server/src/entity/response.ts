class Commit {
  author: string;
  message: string;
  date: string;
}

export class Response {
  s: Number;
  m: string;
  d: {
    more: boolean;
    commits: Array<Commit> | string;
  };
}
