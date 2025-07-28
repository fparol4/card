import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default {
  rootDir: ".",
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  coverageProvider: "babel",
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["js", "json", "ts"],
  testMatch: ["<rootDir>/src/__tests__/**/*.(spec|test).ts"],
  collectCoverageFrom: ["<rootDir>/src/corecard/**/*.{ts,js}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/client/*",
    "<rootDir>/src/__tests__/*",
    "<rootDir>/src/shared/*",
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  transformIgnorePatterns: ["/node_modules/"],
};
