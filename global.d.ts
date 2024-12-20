import en from './messages/en.json';
 
type Messages = typeof en;
 
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {
    // Add at least one member to avoid TypeScript error
    _: never;
  }
}