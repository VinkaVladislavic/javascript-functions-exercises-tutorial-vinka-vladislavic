const rapid = (parameterString) => {
    let consonants = [];
    const lowerCaseString = parameterString.toLowerCase();
    for (let i=0; i<parameterString.length; i++) {
        if (!'aeiou'.includes(parameterString[i])) {
            consonants.push(parameterString[i].toUpperCase());
        }
    } 
    return consonants.join('');
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
