const array1 = ["abc","fds","sfsdf","asa"];

 const a = array1[3]; // accesing an element of array;

console.log(a);
console.log(typeof array1); 

array1.pop();   //remove last element of array;
console.log(array1);

array1.push("new");   //add new Element in last of array 
console.log(array1);

array1.push(array1[2]);
console.log(array1);

console.log(array1.length);


console.log(array1.indexOf("new"));    // gives the location or index value  of element in the array;