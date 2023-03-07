import { Injectable } from '@nestjs/common';
import config from '../config/index';
import { Response } from '../entity/response';

@Injectable()
export class CommitService {
  async getCommit(commitDto): Promise<Response> {
    const { owner, repo, skip, limit } = commitDto;
    const commitsHistory = await config.octokit.request(
      `GET /repos/${owner}/${repo}/commits`,
      {
        owner: owner,
        repo: repo,
        per_page: limit,
        page: skip,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );
    return {
      s: 200,
      m: 'list all commit history successfully',
      d: commitsHistory.data.map((record) => {
        return {
          author: record.commit.author.name,
          message: record.commit.message,
          date: record.commit.author.date,
        };
      }),
    };
  }
  async test(): Promise<string> {
    return 'hola mundo';
  }
}
