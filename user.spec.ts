import { test, expect } from '@playwright/test';
import { UserApi } from '../api/userApi';

test('Get User API', async ({ request }) => {
  const userApi = new UserApi(request);
  const response = await userApi.getUser(1);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('name');
});

test('Post Details API', async ({ request }) => {
  const userApi = new UserApi(request);
  const response = await userApi.postDetails();
  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body).toHaveProperty('id');
  expect(body.title).toBe('Playwright API Testing');
});