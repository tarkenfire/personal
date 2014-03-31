/*
Michael Mancuso
SDI
Project 4
*/



var utilLibrary = function (){
//string functions
    function titleCase(input)
    {
        var holder = input;
                                //"word" + any number of non-whitespace chars + do global search. Replace with one upped, remining chars lowered.
        return holder.replace(/\w\S*/g,
                           function(string)
                           {
                                return string.charAt(0).toUpperCase() +
                                string.substr(1).toLowerCase();
                            }
                            );
    }

    function isPhoneNumber(input)
    {
        //3-3-4
        var phoneRegex = new RegExp("((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$");
        return phoneRegex.test(input);
    };

    function isEmail(input)
    {
        // any letter/numbers (or hyphen/underscore.dot) + any other number-letter + @ + any letters + TLD between 2-4 letters 
        var emailRegex = new RegExp("^[a-zA-Z0-9\_\-]+[a-zA-Z0-9\.\_\-]*@([a-zA-Z0-9\_\-]+\.)+([a-zA-Z]{2,4})$");
        return emailRegex.test(input);
    };

    function isURL(input)
    {
        //http/s/ftp + :// lit + letters + . + 2-3 char letters
        var urlRegex = new RegExp("^(http|https|ftp)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}$");
        return urlRegex.test(input);
    };

    function swapDelimiters(input, delOne, delTwo)
    {
        var holder = input;
        var regex = new RegExp(delOne, "g");
        return input.replace(regex, delTwo);
    };

    //number functions
    function formatCurrency(input)
    {
        return input.toFixed(2);    
    };

    function fuzzyMatch(num1, num2)
    {
        var compare;
        if (num1 == num2) {compare = 0;}
        else if (num1 > num2) {compare = 1;}
        else {compare = -1;}
    
        var percentage = Math.abs(((num1 / num2) - 1)  * 100);
    
        return [compare, percentage];
    };

    function dateDiffInHours(date1, date2) //REMAKE passing objects (dates)
    {
        if (date1 instanceof Date && date2 instanceof Date) //REMAKE Logic from project 2
        {
            var diff = Math.abs(date1 - date2);
            return Math.floor(diff / 3600000) //3.6 mil miliseconds in an hour.
        }
        else
        {
            return "error";
        }
    };

    function parseNumber(string) //throws TypeError
    {
        var holder = Number(string);
        
        if (isNaN(holder))
        {
            try
            {
                throw new TypeError;
            }
            catch(e)
            {
                console.log("Input is either not a number or has non-number characters in it.");    
            }
            return "ERROR";
        }
        else
        {
            return holder;
        }
    };  

    //array functions
    function smallestValueInArray(array, compareNumber)
    {
        var holder = array;
        var biggerNumbers = new Array();
        
        for (var i = 0, l = holder.length; i < l; i++ )
        {
            var item = holder[i];
            if (typeof item == "number")//REMAKE - Nested Conditional from Project 3
            {
                if (item > compareNumber )
                {
                    biggerNumbers.push(item);
                }
            }
        };
        if (biggerNumbers.length == 0)
        {
            return compareNumber;
        }
        else
        {
            biggerNumbers.sort(function(a,b){return a - b}); //sort ascending numerically.
            return biggerNumbers[0];
        };
    };

    function numberOfNumbers(array) //REMAKE array argument from project 3
    {
        var count = 0;
        var total = 0;
        var arrayHolder = array;
    
        for (var i = 0, l = array.length; i<l; i++)
        {
            var item = arrayHolder[i];
            if (typeof item == "number")
            {
                count++;
                total += item;
            };
        };
        return [count, total];
    };

    function keySort(key, array)
    {
        var holder = array;
        holder.sort(
                        function(a,b)
                        {
                            return a.a - b.a;
                        }
                            );
        
        return holder;
    };
    
    return{
        titleCase:titleCase,
        isEmail:isEmail,
        isURL:isURL,
        isPhoneNumber:isPhoneNumber,
        swapDelimiters:swapDelimiters,
        formatCurrency:formatCurrency,
        fuzzyMatch:fuzzyMatch,
        dateDiffInHours:dateDiffInHours,
        parseNumber:parseNumber,
        smallestValueInArray:smallestValueInArray,
        numberOfNumbers:numberOfNumbers,
        keySort:keySort
    };
};


function main() {

    var lib = new utilLibrary();

    //url test
    console.log("Url tests");
    console.log(lib.isURL("http://www.meh.com")); // default url
    console.log(lib.isURL("ftp://www.avianalliance.com")); //ftp url (the ftp on my server, actually.)
    console.log(lib.isURL("muff://www.muff.sof")); //fake url

    console.log("-------------------------------");

    //email test
    console.log("Email tests");
    console.log(lib.isEmail("tarkenfire@fullsail.edu"));
    console.log(lib.isEmail("This is not an email."));

    console.log("-------------------------------");

    //phone test
    console.log("Phone tests.");
    console.log(lib.isPhoneNumber("123-456-7890"));
    console.log(lib.isPhoneNumber("1234567890"));
    
    console.log("-------------------------------");

    //currency format
    console.log("Format Currency");
    console.log(lib.formatCurrency(102.3032));
    console.log(lib.formatCurrency(123.4));
    console.log(lib.formatCurrency(122));

    console.log("-------------------------------");

    //smallest in array
    console.log("Smallest value in array over given number");
    console.log(lib.smallestValueInArray([1, 2, 3, 4, 5, 6, 7], 4));
    console.log(lib.smallestValueInArray([1, 2, 3], 5));

    console.log("-------------------------------");

    //parse number
    console.log("Parse number");
    console.log(lib.parseNumber("23"));
    console.log(lib.parseNumber("hi"));
    console.log(lib.parseNumber("23 hi"));
    
    console.log("-------------------------------");

    //title case
    console.log("Title case");
    console.log(lib.titleCase("This sentence should be in title case."));
    console.log(lib.titleCase("tHIS sENTENCE sHOULD bE iN tITLE cASE."))

    console.log("-------------------------------");

    //swap delims
    console.log("Swap delimeters");
    console.log(lib.swapDelimiters("a/b/c", "/", ","));

    console.log("-------------------------------");

    //date diff
    console.log("Date difference, in hours");
    console.log(lib.dateDiffInHours(new Date(), new Date("August 21, 2012 8:00:00")));

    console.log("-------------------------------");

    //fuzzy match
    console.log("Fuzzy Match");
    var fuzzyResults = lib.fuzzyMatch(12, 24);
    var resultString;
    
    if (fuzzyResults[0] == -1) {resultString = "smaller than";}
    else if (fuzzyResults[0] == 0) {resultString ="equal to";}
    else {resultString = "greater than"}
    
    console.log("The first number is " + resultString + " the second number by " + fuzzyResults[1] + " per cent.");

    console.log("-------------------------------");

    //key sort
    console.log("Key sort");
    console.log(lib.keySort("a", [{a:2},{a:3},{a:1}]));
    
    console.log("-------------------------------");
    
    //key sort
    console.log("Number of numbers in array");
    var results = lib.numberOfNumbers([1,2,3,4,"A", {a:1}]);
    console.log("There are " + results[0] + " numbers, totaling to a final number of: " + results[1]);
}

//main execution
if (true)
{
    main();
}