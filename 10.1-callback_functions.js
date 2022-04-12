// 1:
const isString = (str, callBackFunction) => {
    if (typeof str === "string") {
        callBackFunction(str);
    }
}

const cLog = string => {
    console.log(string);
}

const myName = "Eyal";
isString(myName, cLog);


// 2:
const firstWordUpperCase = (str, callBackFunction) => {
    const splitStr = str.split(' ');
    let newSentence = splitStr[0].toUpperCase();
    for (let i = 1; i < splitStr.length; i++){
        if(i < splitStr.length){
            newSentence += " ";
        }
        newSentence += splitStr[i];
    }
    const sentenceDash = callBackFunction(newSentence);

    console.log(sentenceDash);
}

const createDashes = str => {
    return str.replaceAll(" ", "-");
}

const mySentence = "my name is Eyal";
firstWordUpperCase(mySentence, createDashes);


// 3:
firstWordUpperCase(mySentence, str => str += ", and it's a nice name.");


// 4:
const repeatSentenceWithDash = (str, numToRepeat, callBackFunction) => {
    let newStr = str + " ";
    newStr = newStr.repeat(numToRepeat-1);
    newStr += str;
    return callBackFunction(newStr);
}

console.log(repeatSentenceWithDash(mySentence, 3, createDashes));