import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { CommitModule } from './commit.module';
import { CommitService } from './commit.service';
import { INestApplication } from '@nestjs/common';

describe('CommitController', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CommitModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  it('/commit (Post)', async () => {
    const response = await request(app.getHttpServer())
      .post('/commit')
      .send({ owner: 'gastoncaldera', repo: 'take-home', skip: 1, limit: 10 });
    expect(response.status).toBe(200);
    expect(response.body.m).toBe('list all commit history successfully');
    expect(response.body.d.length).toBeGreaterThanOrEqual(1);
    expect(response.body.d.length).not.toBeGreaterThan(10);
  });

  it('/commit (Post) send no found', async () => {
    const response = await request(app.getHttpServer())
      .post('/commit')
      .send({ owner: 'notFound', repo: 'notFound', skip: 1, limit: 10 });
    expect(response.status).toBe(404);
    expect(response.body.m).toBe('Not Found');
    expect(response.body.d).toBe('');
  });

  afterAll(async () => {
    await app.close();
  });
});
