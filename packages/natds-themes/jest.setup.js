/**
 * @todo create adr for `jest-file-snapshot` use decision
 */
const { toMatchFile } = require('jest-file-snapshot');
// import { toMatchFile } from 'jest-file-snapshot';

expect.extend({ toMatchFile });

const currentDate = new Date('2020-05-02T11:01:58.135Z');

global.Date = class extends Date {
  constructor() {
    return currentDate;
  }
};
