import { test, expect } from '@playwright/test';

test('addition of two numbers', async () => {
   const a = 5;
   const b = 10;
   const c = a + b;
   //expect(c).toBe(15);
   //expect(a+b).toBe(15);
   

    // two ways to write the same test using let you can change values of a and b and using const you cannot change the values of a and b
  /* let a = 5;
   let b = 15;
   a = 10;
   b = 35;
   expect(a + b).toBe(45);*/

  /* let x = 20;
   let y = 30;
   x = 50;
   expect(x + y).toBe(80);
   y = 100;
   expect(x + y).toBe(150);
   */

});
