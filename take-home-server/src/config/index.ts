import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

const config = {
  octokit: octokit,
  port: process.env.PORT || 3000,
};

export default config;
