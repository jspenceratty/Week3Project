//1
    //create array ages with values: 3, 9, 23, 64, 2, 8, 28, 93
    var ages = [3, 9, 23, 64, 2, 8, 28, 93];

    //subtract first element from last element without directly using the last element's known index number; print result to console
    console.log(ages[ages.length-1]-ages[0]);

    //add a new age to the array and repeat the above step to ensure it is dynamic
    ages.push(104);

    console.log(ages[ages.length-1]-ages[0]);

    //use a loop to iterate through the array and calculate the average age; print result to console
    var totalAges = 0;
    for (age of ages) {
        totalAges = totalAges + parseInt(age);
    }

    var averageAge = totalAges / ages.length;

    console.log(averageAge);

//2
    //create array names with values:  ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
    var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

    //use a loop to iterate through the array and calculate the average number of letters per name; print result to console
    var totalLetters = 0;
    for (numberOfLetters of names) {
        totalLetters = totalLetters + parseInt(numberOfLetters.length);
    }

    var averageLength = totalLetters/names.length;

    console.log(averageLength);

    //use a loop to iterate through the array and concatenate all names together separated by spaces; print the result to the console
    var namesTogether = '';
    for (name of names) {
        namesTogether += name + ' ' ;
    }

    console.log(namesTogether);

//3
    //access last element of an array
    //use <arrayname>[<arrayname>.length - 1]
    //example: console.log(names[names.length -1]);

//4
    //access first element of an array
    //use <arrayname>[0]
    //example: console.log(names[0]);

//5
    //new array nameLengths; loop to iterate over names and add length of each name to the nameLengths array
    var nameLengths=[];
    for (numberOfLetters of names) {
        nameLengths.push(numberOfLetters.length);
    }

//6
    //write loop to calculate sum of elements in nameLengths; print result to console
    var totalNameLength = 0;
    for (lengthOfEach of nameLengths) {
        totalNameLength += parseInt(lengthOfEach);
    }
    console.log(totalNameLength);

//7
    //write function with 2 parameters (word and n) and returns the word concatenated to itself n times
    function wordReturnedByN(word, n) {
        var finalReturn = '';
        for (let i = 0; i < n; i++) {
            finalReturn += word;
        }
        return finalReturn;
    }

//8
    //write function, 2 parameters (firstName and lastName) and returns full name (with space)
    function fullName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }

//9
    //write function that takes an array of numbers and returns true if the sum of all numbers in array is > 100
    function sumOfArrayOver100(arrayOfNumbers) {
        let sum = arrayOfNumbers.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        if (sum > 100) {
            return true
        }
    }

//10
    //write function takes an array of numbers and returns average of elements
    function averageOfArray(arrayOfNumbers) {
        let sum = arrayOfNumbers.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        return sum / arrayOfNumbers.length;
    }

//11
    //function with 2 arrays, return true if average of first is > average of second
    function average1GreaterThan2(firstArray, secondArray) {
        let sum1 = firstArray.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        var average1 = sum1/firstArray.length;

        let sum2 = secondArray.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        var average2 = sum2/secondArray.length;
        
        if (average1 > average2) {return true}
    }

//12
    //function willBuyDrink with boolean isHotOutside, number moneyInPocket, returns true if hot and money > 10.50
    function willBuyDrink(isHotOutside, moneyInPocket) {
        if (isHotOutside == true) {
            if (moneyInPocket > 10.50) {
                return true;
            }
        }
    }

//13
    //Create a function that solves a problem
    //Gets the difference (in days) between two dates
    //Reason: don't have to repeat the same code in multiple areas
    //Use when figuring whether a time frame has expired
    function dateDifference (firstDate, secondDate) {
        date1 = new Date(firstDate);
        date2 = new Date(secondDate);
        const differentTime = Math.abs(date2 - date1);  //get the absolute value of the substraction between two dates (milliseconds)
        const differentDays = Math.ceil(differentTime / (1000*60*60*24)); //divide by milliseconds in each day and return the smallest integer >= number
        return differentDays;
    }

 