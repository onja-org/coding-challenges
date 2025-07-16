function twoSum(ns, n) {
  const m = new Map();
  // [7,3,2] 9
  for (let i = 0; i < ns.length; i++) {
    const c = n - ns[i];
    // 1 9 - 7 = 2
    // 2 9 - 3 = 6
    // 3 9 - 2 = 7

    // Third will be true because m contains 7
    if (m.has(c)) {
      // if true get from m the value of key c
      // return value of key c and current index of the loop
      return [m.get(c), i];
    }
    // 1 set map(7, 0)
    // 2 set map (3, 1)
    m.set(ns[i], i);
  }
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

//   runTests();
