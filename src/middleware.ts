import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export type LocaleKey = (typeof routing.locales)[number];

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|en)/:path*"],
};