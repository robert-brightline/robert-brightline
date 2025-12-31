import { projectOptions } from './project-options';

describe('projectOptions', () => {
  it('should parse the project options', async () => {
    const options = await projectOptions({
      type: 'library',
      directory: 'libs/my-lib',
    });

    expect(options.directory).toEqual('libs/my-lib');
    expect(options.type).toEqual('library');
    expect(options.shortProjectName).toEqual('my-lib');
    expect(options.fullProjectName).toEqual(
      `@${options.repositoryName}/my-lib`,
    );
    expect(options.source).toContain('/library');
    expect(options.target).toEqual('libs/my-lib');
  });
});
// Test implementation goes here
