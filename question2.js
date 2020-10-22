// Function to check if XOR of all numbers 
// in range [L, R] is Even or Odd 
  
function isEvenOrOdd( L,  R) 
{  
    var oddCount = (R - L) / 2; 
  
    if (R % 2 == 1 || L % 2 == 1) 
        oddCount++; 
  
    if (oddCount % 2 == 0) 
         console.log("Even"); 
    else
         console.log("Odd"); 
} 

// Example 
isEvenOrOdd(12,21)