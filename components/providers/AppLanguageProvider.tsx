"use client";

import { LanguageProvider } from "../../hooks/use-language";
import type { ReactNode } from "react";

export function AppLanguageProvider({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
