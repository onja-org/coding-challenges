function isAnagram(s, t) {
      // Write your code here
    let ss = s.split("").sort();
    let tt = t.split("").sort();

    console.log("ss.length", ss)
    console.log("tt.length", tt)

    if (ss.length === tt.length && JSON.stringify(ss) === JSON.stringify(tt)) {
        return true;
    } else {
        return false;
    }

    console.log("test");
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