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
  testRegex: ".*\\.spec\\.ts$",
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["js", "json", "ts"],
  collectCoverageFrom: [
    "src/app/**/*.{ts,js}",
    "src/shared/utils/*.{ts,js}",
    "!src/app/exceptions/*.{ts,js}",
    "!src/**/*.module.{ts,js}",
    "!src/**/*.(interface|dto|entity|enum|types).{ts,js}",
    "!src/main.{ts,js}",
    "!**/*.spec.{ts,js}",
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  transformIgnorePatterns: ["/node_modules/"],
};
