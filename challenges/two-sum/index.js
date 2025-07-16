function twoSum(nums, target) {
  const findIndices = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (findIndices[complement] !== undefined) {
      return [findIndices[complement], i];
    }
    findIndices[num] = i;
  }
  console.log("test", findIndices);
}

function runTests() { 
  const testCases = [
    {
      nums: [2, 7, 11, 15],
      target: 9,
      expected: [0, 1],
    },
    {
      nums: [3, 2, 4],
      target: 6,
      expected: [1, 2],
    },
    {
      nums: [3, 3],
      target: 6,
      expected: [0, 1],
    },
  ];

  testCases.forEach(({ nums, target, expected }, index) => {
    const result = twoSum(nums, target);
    const pass =
      (result[0] === expected[0] && result[1] === expected[1]) ||
      (result[0] === expected[1] && result[1] === expected[0]);

    console.log(`Test Case ${index + 1}:`, pass ? "✅ Passed" : "❌ Failed");
    console.log(`Input: nums = [${nums}], target = ${target}`);
    console.log(`Expected: [${expected}], Got: [${result}]\n`);
  });
}

runTests();
