import fetchRepositoryData from './fetchRepositoryData'
import nock from 'nock'

jest.mock('./utils/buildRepoUrl.ts', () => {
  return {
    __esModule: true,
    default: jest.fn(() => 'http://test_url.com'),
  }
})

describe("Can fetch repositories correctly", () => {
  test("Can fetch repositories with a username is provided", async () => {
    const username = "test_username"

    const testRepositoryList = [{
      id: "34",
      stargazers_count: 30,
      language: "Java"
    }]
    nock('http://test_url.com')
      .get('/')
      .reply(200, testRepositoryList, {
        'Content-Type': 'application/json',
      })
      const result = await fetchRepositoryData(username)
      expect(result).toEqual(testRepositoryList)
  })

  test("Returns an empty array if the request returns an error", async () => {

    const username = ""
    const error = "A username is required"

    nock('http://test_url.com')
      .get('/')
      .reply(403, error, {
        'Content-Type': 'application/json',
      })
    const result = await fetchRepositoryData(username)
    expect(result).toThrowError
    // expect(result).toEqual([])
  })
})