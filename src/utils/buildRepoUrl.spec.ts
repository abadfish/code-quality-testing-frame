import buildRepoUrl from "./buildRepoUrl";

describe("Can build the correct url", () => {
  // ARRANGE
  const username = "";
  test("Returns empty string when the username's length is 0", 
  () => {
    // ACT
    const result = buildRepoUrl(username)
    // ASSERT
    expect(result).toBeNull()
  })
})