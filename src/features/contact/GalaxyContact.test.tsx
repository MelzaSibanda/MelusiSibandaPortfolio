import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, test } from 'vitest';
import { GalaxyContact } from './GalaxyContact';

afterEach(cleanup);

test('focuses the first invalid field and describes the error', async () => {
  const user = userEvent.setup();
  render(<GalaxyContact />);
  await user.click(screen.getByRole('button', { name: 'Prepare email' }));
  expect(screen.getByRole('textbox', { name: 'Name' })).toHaveFocus();
  expect(
    screen.getByRole('textbox', { name: 'Email' }),
  ).toHaveAccessibleDescription(/email must/i);
});

test('prepares a mailto draft with encoded content', async () => {
  const user = userEvent.setup();
  render(<GalaxyContact />);
  await user.type(
    screen.getByRole('textbox', { name: 'Name' }),
    'Sam Recruiter',
  );
  await user.type(
    screen.getByRole('textbox', { name: 'Email' }),
    'sam@example.org',
  );
  await user.type(
    screen.getByRole('textbox', { name: 'Message' }),
    'Hello & welcome!',
  );
  await user.click(screen.getByRole('button', { name: 'Prepare email' }));
  expect(
    screen.getByRole('link', { name: 'Open email draft' }),
  ).toHaveAttribute('href', expect.stringContaining('Hello%20%26%20welcome!'));
});
