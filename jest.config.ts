import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default {
  rootDir: ".",
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: false,
  coverageProvider: "babel",
  coverageDirectory: "coverage",
  testRegex: ".*\.(spec|test|integration\.spec)\\.ts$",
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["js", "json", "ts"],
  collectCoverageFrom: ["src/corecard/**/*.{ts,js}"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  transformIgnorePatterns: ["/node_modules/"],
};
