function twoSum(nums, target) {
  // Write your code here
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  console.log("test");
  return [];
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
