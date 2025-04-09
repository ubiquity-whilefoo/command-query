import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["build/index.ts", ".github/empty-string-checker.ts"],
  project: ["src/**/*.ts"],
  ignore: [
    "**/__mocks__/**",
    "**/__fixtures__/**",
    "src/types/database.ts",
    "src/types/config.ts",
    "dist/**",
    "eslint.config.mjs"
  ],
  ignoreExportsUsedInFile: true,
  // eslint can also be safely ignored as per the docs: https://knip.dev/guides/handling-issues#eslint--jest
  ignoreDependencies: [
    "eslint-config-prettier",
    "eslint-plugin-prettier",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
    "ts-node",
    "@types/jest",
    "@mswjs/data",
    "husky"
  ],
  eslint: true,
};

export default config;
