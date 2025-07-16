function isPalindrome(s) {
 const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Essential palindrome tests with additional edge cases
function testPalindrome(isPalindrome) {
    const tests = [
        // Problem examples
        ["A man, a plan, a canal: Panama", true],
        ["race a car", false],
        [" ", true],
        
        // Edge cases
        ["", true],
        ["a", true],
        ["ab", false],
        
        // Case sensitivity
        ["Aa", true],
        ["Madam", true],
        
        // Numbers
        ["12321", true],
        ["A1B2b1a", true],
        ["12ab21", false],
        
        // Special characters
        ["No 'x' in Nixon", true],
        ["Was it a car or a cat I saw?", true],
        ["!@#$%^&*()", true],
        
        // Common failures
        ["hello", false],
        ["palindrome", false],
        
        // Algorithm-specific tests
        ["abccba", true],        // Even length palindrome
        ["abcba", true],         // Odd length palindrome
        ["abcdcba", true],       // Fails only in middle
        ["abcdefg", false],      // Fails immediately
        
        
        // Boundary cases
        ["aa", true],            // Two identical
        ["aab", false],          // Almost palindrome
        ["aba", true],           // Shortest odd palindrome
        
        // Complex mixed content
        ["A Santa at NASA", true], // Spaces and mixed case
        ["Was it a rat I saw?", true], // Question mark
        ["No lemons, no melon", true]  // Comma handling
    ];
    
    console.log("Running palindrome tests...\n");
    
    let passed = 0;
    let totalTime = 0;
    
    tests.forEach(([input, expected], i) => {
        try {
            const start = performance.now();
            const result = isPalindrome(input);
            const end = performance.now();
            const time = end - start;
            totalTime += time;
            
            const success = result === expected;
            
            if (success) {
                passed++;
                console.log(`✅ Test ${i + 1}: "${input}" → ${result} (${time.toFixed(2)}ms)`);
            } else {
                console.log(`❌ Test ${i + 1}: "${input}" → Expected: ${expected}, Got: ${result}`);
                // Show cleaned string for debugging
                const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
                console.log(`   Cleaned: "${cleaned}"`);
            }
        } catch (error) {
            console.log(`💥 Test ${i + 1}: "${input}" → Error: ${error.message}`);
        }
    });
    
    console.log(`\nPassed: ${passed}/${tests.length}`);
    console.log(`Average time: ${(totalTime / tests.length).toFixed(2)}ms`);
    
    return passed === tests.length;
}

// Error handling tests
function testErrorHandling(isPalindrome) {
    console.log("\nTesting error handling...");
    
    const errorTests = [
        [null, "null input"],
        [undefined, "undefined input"],
        [123, "number input"],
        [[], "array input"],
        [{}, "object input"]
    ];
    
    errorTests.forEach(([input, description]) => {
        try {
            const result = isPalindrome(input);
            console.log(`⚠️  ${description}: No error thrown, returned ${result}`);
        } catch (error) {
            console.log(`✅ ${description}: Properly handled - ${error.message}`);
        }
    });
}

// Performance test with large input
function testPerformance(isPalindrome) {
    console.log("\nPerformance test...");
    
    const longPalindrome = "a".repeat(50000) + "b".repeat(50000) + "a".repeat(50000);
    const longNonPalindrome = "a".repeat(50000) + "b".repeat(50000) + "c".repeat(50000);
    
    try {
        const start1 = performance.now();
        const result1 = isPalindrome(longPalindrome);
        const end1 = performance.now();
        
        const start2 = performance.now();
        const result2 = isPalindrome(longNonPalindrome);
        const end2 = performance.now();
        
        console.log(`Long palindrome (150k chars): ${result1} - ${(end1 - start1).toFixed(2)}ms`);
        console.log(`Long non-palindrome (150k chars): ${result2} - ${(end2 - start2).toFixed(2)}ms`);
    } catch (error) {
        console.log(`Performance test failed: ${error.message}`);
    }
}

// Run all tests
function runAllTests(isPalindrome) {
    const basicPassed = testPalindrome(isPalindrome);
    testErrorHandling(isPalindrome);
    testPerformance(isPalindrome);
    
    return basicPassed;
}

// Usage: 
testPalindrome(isPalindrome);
runAllTests(isPalindrome);