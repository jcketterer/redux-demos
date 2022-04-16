//IMPURE
function addToArrImpure(arr, value) {
  arr.push(value)
  return arr
}

//PURE
function addToArrPure(arr, value) {
  return [...arr, value]
}

//IMPURE
function addToObjImpure(obj, key, value) {
  obj[key] = value
  return obj
}

//PURE
function addToObjPure(obj, key, value) {
  return { ...obj, [key]: value }
}

//IMPURE
function doubleImpure(nums) {
  nums.forEach((num, i) => (nums[i] *= 2))
  return nums
}

//PURE
function doublePure(nums) {
  return nums.map(n => n * 2)
}
