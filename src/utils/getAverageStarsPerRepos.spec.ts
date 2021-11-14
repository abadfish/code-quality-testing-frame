import getAverageStarsPerRepos from "./getAverageStarsPerRepos";

describe("Can return a ratio of stars to repos", () => {
  const repoList: Repository[] = [];
  test("Returns 0 when the repoList's length is 0", 
  () => {
    const result = getAverageStarsPerRepos(repoList)
    expect(result).toBe(0)
  })
})