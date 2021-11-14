import getAllLanguages from './getAllLanguages';

describe("Can return an array of languages", () => {
  const repoList: Repository[] = [];
  test("Returns empty string when the repoList's length is 0",
  () => {
    const result = getAllLanguages(repoList)
    expect(result).toEqual([])
  })

})