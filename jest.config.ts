/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
import type {Config} from '@jest/types';

const jestConfig: Config.InitialOptions = {
  rootDir: "./",
  testPathIgnorePatterns: [
    // ignore any built files for package
    "./dist"
  ],
};
export default jestConfig;
