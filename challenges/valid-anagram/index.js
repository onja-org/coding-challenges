function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    const m = new Map();

    for (let char of s1) {
        m.set(char, (m.get(char) || 0) + 1);
    }

    for (let char of s2) {
        if (!m.has(char)) {
            return false;
        }
        m.set(char, m.get(char) - 1);
        if (m.get(char) === 0) {
            m.delete(char);
        }
    }

    return true;
}

console.log(isAnagram("listenu\n2665", "silent\nu2665")); // true

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