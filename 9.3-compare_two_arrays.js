const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compArr = (arr1, arr2) => {
    const newArr = [];
    for (let val1 of arr1) {
        for (let val2 of arr2) {
            if (val2 === val1 && !newArr.includes(val2)) {
                newArr.push(val2);
            }
        }
    }
    if (newArr.length < 1) {
        return false;
    }
    return newArr;
}

console.log(compArr(food, food1));

// In this task, the for is better, because we need to know the loop number every loop