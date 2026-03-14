
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
    
  let i = 0
  let j = 0
  let k = collection_3.length - 1

  const result: number[] = []

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    let min = Infinity

    if (i < collection_1.length) {
      min = Math.min(min, collection_1[i])
    }

    if (j < collection_2.length) {
      min = Math.min(min, collection_2[j])
    }

    if (k >= 0) {
      min = Math.min(min, collection_3[k])
    }

    result.push(min)

    if (i < collection_1.length && collection_1[i] === min) {
      i++
    } else if (j < collection_2.length && collection_2[j] === min) {
      j++
    } else {
      k--
    }
  }

  return result
}