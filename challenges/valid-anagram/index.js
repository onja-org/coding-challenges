function isAnagram(s, t) {
      // Write your code here
      console.log("test");

      // Need to sort the values, 
      // if they match then they are anagram

      const sortedStrings = (word) => {
        const splittedWord = word.toLowerCase().split("");
        return splittedWord.sort().join("")
      }

      return sortedStrings(s) == sortedStrings(t)
}

function runAnagramTests() {
    const testCases = [
    { s: "anagram", t: "nagaram", expected: true },
    { s: "rat", t: "car", expected: false },
    { 
        s: "pneumonoultramicroscopicsilicovolcanoconiosis",
        t: "ultramicroscopicsilicovolcanoconiosispneumono",
        expected: true
    },
    { 
        s: "pneumonoultramicroscopicsilicovolcanoconiosis",
        t: "ultramicroscopicsilicovolcanoconiosispneumonx", // note the 'x' at end
        expected: false
    },
    {
        s: "a".repeat(10000),
        t: "a".repeat(9999) + "b", // one character off
        expected: false
    },
    {
        s: "abc".repeat(10000),
        t: "bca".repeat(10000),
        expected: true
    }
    ];

    testCases.forEach(({ s, t, expected }, index) => {
    const result = isAnagram(s, t);
    const pass = result === expected;

    console.log(`Test Case ${index + 1}:`, pass ? '✅ Passed' : '❌ Failed');
    console.log(`Input Lengths: s = ${s.length}, t = ${t.length}`);
    console.log(`Expected: ${expected}, Got: ${result}\n`);
    });
}

runAnagramTests();