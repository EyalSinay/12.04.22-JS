/*
const stepShape = N => {
    if (N < 1) {
        console.log("It's must to be a positive integer.");
    } else {
        let hashtag = "#";
        for (let i = 1; i <= N; i++) {
            console.log("'" + hashtag.repeat(i) + " ".repeat(N - i) + "'");
        }
    }
}

stepShape(4);
*/


// Ninja:
const stepShapeNinja = N => {
    if (N < 1) {
        console.log("It's must to be a positive integer.");
    } else {
        let hashtag = "#";
        let myString = "'";
        for (let i = 1; i <= N; i++) {
            for (let j = 1; j <= N; j++) {
                if (j <= i) {
                    myString += hashtag;
                } else {
                    myString += " ";
                }
            }
            console.log(myString + "'");
            myString = "'"
        }
    }
}

stepShapeNinja(4);
