const names = ["Raj", "Jiyani", "Prakash"];
console.log(names.map(name => {
    return name.toLowerCase();
}));

const startWithR = names.filter(name => name.startsWith("R"));
console.log(startWithR);

const allHasLenthMoreThan4 = names.every(name => name.length > 4);
console.log(allHasLenthMoreThan4);

const anyHasLengthLessThan4 = names.some(name => name.length < 4);
console.log(anyHasLengthLessThan4);

let newNames = names.concat(["Mahesh"])
console.log(newNames);

newNames = names.join(":");
console.log(newNames);

console.log(names.slice(1,2));
console.log(names.indexOf("Jiyani"));

//return the index where object added
console.log(names.push("addRaj"));
//removes last added record and returns that removed record.
console.log(names);
console.log(names.pop());
console.log(names);
let sortedNames = names.sort((s1,s2) => {
    if (s1 > s2) {
        return 1;
    }

    if (s1 < s2) {
        return -1;
    }
    return 0;
});
console.log(sortedNames);

var arr = ["orange", "mango", "banana", "sugar", "tea"];  
// replace object and posiable to remove also
// first parameter is starting point and second is number of objects
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed);
newNames = names.unshift("AddedAtStartAndReturnNewArrayLenth");
console.log(names)
console.log([1,2,3].reduce((i1,i2) => i1+i2)); //6