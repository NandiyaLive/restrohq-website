"use client";

import { NextThemeProvider } from "./next-theme";

const Providers = ({ children }) => {
  return (
      <NextThemeProvider>{children}</NextThemeProvider>
  );
};

export default Providers;
