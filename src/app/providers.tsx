"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { ReactNode } from "react";
import { env } from "./env.mjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

export function Providers({ children, messages, locale }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <PostHogProvider client={posthog}>{children}</PostHogProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
}
