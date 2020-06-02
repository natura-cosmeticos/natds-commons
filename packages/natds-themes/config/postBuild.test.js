const buildSpy = jest.fn();

jest.doMock('./shared/config', () => ({
  __esModule: true,
  postBuildTasks: [buildSpy],
}));

const { postBuild } = require('./postBuild');

describe('postBuild', () => {
  it('should run the postBuild tasks', () => {
    postBuild();

    expect(buildSpy).toHaveBeenCalled();
  });
});
