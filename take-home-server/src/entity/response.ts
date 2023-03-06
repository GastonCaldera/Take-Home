class Commit {
  author: string;
  message: string;
  date: string;
}

export class Response {
  s: Number;
  m: string;
  d: Array<Commit>;
}
