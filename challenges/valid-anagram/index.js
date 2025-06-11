function isAnagram(s, t) {
    // if they don't have the same length then return false else continue the computation
    if (s.length == t.length) {
        // transform the strings to arrays
        const sArray = s.split("")
        const tArray = t.split("")
        const sArrWoDup = [...new Set(sArray)] // remove duplicates

        const result = sArrWoDup.map(char => {
            // check if each item has the same length
            const charInSLength = sArray.filter(currChar => currChar == char).length
            const charInTLength = tArray.filter(currChar => currChar == char).length
            if (charInSLength == charInTLength) {
                return true
            }
        })

        return result.every(item => item == true)
    } else {
        return false
    }
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