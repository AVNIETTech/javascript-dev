// Introduction to JavaScript Math Functions;

1)Math.round()

  The Math.round() fun returns the value of a number rounded to the nearest integer.

console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6
console.log(Math.round(1.009), Math.round(1.009), Math.round(1.009));
    // expected output: 1 1 1


2) Math.sqrt()

   The Math.sqrt() fun returns the square root of a number, that is

fun calcHypotenuse(a, b) {
    returns(Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));
// expected output: 5

console.log(calcHypotenuse(5, 12));
// expected output: 13

console.log(calcHypotenuse(0, 0));
// expected output: 0
console.log(calcHypotenuse(5, 3));
// expected output: 5.830951894845301

    3) Math.pow()
The Math.pow() fun  returns the base to the exponent power, that is, baseexponent.

console.log(Math.pow(7, 3));
    // expected output: 343

    console.log(Math.pow(4, 0.5));
    // expected output: 2

    console.log(Math.pow(7, -2));
    // expected output: 0.02040816326530612
    //                  (1/49)

    console.log(Math.pow(-7, 0.5));
    // expected output: NaN
    console.log(Math.pow(10, 0.9));
    // expected output: 7.943282347242816

  
    4)Math.abs()

    The Math.abs() fun returns the absolute value of a number
        fun difference(a, b) {
            returns Math.abs(a - b);
        }

        console.log(difference(3, 5));
        // expected output: 2

        console.log(difference(5, 3));
        // expected output: 2

        console.log(difference(1.23456, 7.89012));
        // expected output: 6.6555599999999995
        console.log(difference(0.999, -1,59));
        // expected output: 1.999

       5)Math.floor()

        The Math.floor() fun  returns the largest integer less than or equal to a given number.
            console.log(Math.floor(5.95));
            // expected output: 5

            console.log(Math.floor(5.05));
            // expected output: 5

            console.log(Math.floor(5));
            // expected output: 5

            console.log(Math.floor(-5.05));
            // expected output: -6
            console.log(Math.floor(45.405));
    // expected output:  45 

           6)Math.sin() 

            The Math.sin() fun return the sine of a number
                fun getCircleY(radians, radius) {
                    return Math.sin(radians) * radius;
                }

                console.log(getCircleY(1, 10));
                // expected output: 8.414709848078965

                console.log(getCircleY(2, 10));
                // expected output: 9.092974268256818

                console.log(getCircleY(Math.PI, 10));
                // expected output: 1.2246467991473533e-15
                console.log(getCircleY(Math.E, 5));
                // expected output: 2.053906452514544

               7)Math.cos()

                The Math.cos() sta func returns the cosine of the specified angle, which must be specified in radians. This value is  length adjacentlength hypotenuse .
                    fun getCircleX(radians, radius) {
                        return Math.cos(radians) * radius;
                    }

                    console.log(getCircleX(1, 10));
                    // expected output: 5.403023058681398

                    console.log(getCircleX(2, 10));
                    // expected output: -4.161468365471424

                    console.log(getCircleX(Math.PI, 10));
                    // expected output: -10
                    console.log(getCircleX(Math.E, 60));
                   // expected output: -54.70403488721791

              8)Math.random()

              Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
                   function getRandomInt(max) {
                   return Math.floor(Math.random() * Math.floor(max));
                 }

                 console.log(getRandomInt(3));
                 // expected output: 0, 1 or 2

                  console.log(getRandomInt(1));
                 // expected output: 0

                console.log(Math.random());
               // expected output: a number between 0 and 1
               console.log(Math.random(66.9));
               // expected output:0.836301535592153

               9)Math.acos()

               The Math.acos( ) fun inthe  JavaScript is used to returns the arccosine of a number inthe  radians
             // Calculates angle of a right-angle triangle in radians
                    fun  calcAngle(adjacent, hypotenuse) {
                    return Math.acos(adjacent / hypotenuse);
                  }

                 console.log(calcAngle(8, 10));
                 // expected output: 0.6435011087932843

               console.log(calcAngle(5, 3));
               // expected output: NaN
               console.log(calcAngle(83, 9));
              // expected output: NaN
               console.log(calcAngle(10, 91));
            // expected output: 1.4606838371708948

               10)Math.asin()

               The Math.asin( ) function in JavaScript is used to return the arcsine of a number in radians
                   // Calculates angle of a right-angle triangle in radians
                   function calcAngle(opposite, hypotenuse) {
                       return Math.asin(opposite / hypotenuse);
                   }

                   console.log(calcAngle(6, 10));
                // expected output: 0.6435011087932844

                   console.log(calcAngle(5, 3));
                // expected output: NaN

                   console.log(calcAngle(3, 3));
                // expected output: 1.5707963267948966