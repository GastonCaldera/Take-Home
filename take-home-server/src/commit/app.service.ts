import { Injectable } from '@nestjs/common';
import config from 'src/config';

@Injectable()
export class AppService {
  async getCommit(commitDto): Promise<string> {
    try {
      const { owner, repo } = commitDto;
      const commitsHistory = await config.octokit.request(
        `GET /repos/${owner}/${repo}/commits`,
        {
          owner: owner,
          repo: repo,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        },
      );
      return 'Hello World!';
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
