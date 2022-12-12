/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import fetch from 'node-fetch';
import { server } from '../../mocks/server'; // use msw to respond to fetch requests
import StatsTodayTotal from "./StatsTodayTotal";


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers())
afterAll(() => server.close());

test("renders today's total", async () => {
  // ARRANGE
  const baseURL = 'http://localhost'; // see https://github.com/node-fetch/node-fetch/issues/481
  const response = await fetch(new URL('/today_stats', baseURL));
  const stats = await response.json();
  render(<StatsTodayTotal todayTotal={stats.todayTotal} />)

  // ACT
  const linkElement = screen.getByText(stats.todayTotal);

  // ASSERT
  expect(linkElement).toBeInTheDocument();
});