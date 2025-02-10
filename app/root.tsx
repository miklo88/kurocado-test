/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
/* eslint unicorn/filename-case: 0 */
/* eslint import/no-default-export: 0 */
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import React from 'react';

// @see https://remix.run/docs/en/main/styling/tailwind
import styles from './tailwind.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
];

export function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <title>Kurocado Studio Remix starter boilerplate</title>
      </head>
      <body
        className='selection:bg-lime-200 selection:text-[#f52891cc]'
        data-testid='root-body-test-id'
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): React.ReactNode {
  return <Outlet />;
}
