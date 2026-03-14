import { merge } from "../src/merge"

describe("merge arrays", () => {

  test("should merge 3 arrays correctly", () => {

    const collection_1 = [1,4,7]
    const collection_2 = [2,5,8]
    const collection_3 = [9,6,3]

    const result = merge(collection_1, collection_2, collection_3)

    expect(result).toEqual([1,2,3,4,5,6,7,8,9])

  })

  test("should handle empty arrays", () => {

    const result = merge([], [], [])

    expect(result).toEqual([])

  })

})