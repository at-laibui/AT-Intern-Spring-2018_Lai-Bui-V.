* `null`: an empty or non-existent value but it is also ojbect.
* `undefined`: a variable has been declare. But the value of that hasn't yet been defined.
* `use strict`: a mode in js. It ensures developer's program can run on all Browers.
* `==` return true if value of 2 argument in operator equal
* `===` return true if 2 argument's value in operator equal and same data's type
* ex:

console.log(Boolean(1 == "1")); //true
console.log(Boolean(1 === "1")); //false```

* different between declaration:`var`, `const` and `let`:

- `const` : const statement values can be assigned once and they cannot be reassigned
- `var`: declared before the execution of the code, can change value when program run, used in the declared scope (function or variable globe)
- `let` : similar to var, but scope is code block on which it's used
```js
function exercise1(a,b){
  if(a===b)
    return a*6;
  return a+b;
}
sum(5,5)
function exercise2(a){
  if(a != 19){
    return (a-19)*3;
  return  19 - a;
  }
}
function exercise3{
  arr=[];
  sum = 0;
  for(var i = 0; i<str.length; i++){
    if (str.substring(i,i+1) != "*")
      sum += str.substring(i, i+1);
      console.log(sum);
  }
  for (var i = 0; i < 10; i++){
    if((sum + i) % 3 == 0){
      console.log(sum);
      arr.push(str.replace("*", i.toString())) ;
    }
  }
  return arr;
}
console.log(masked("111*2"));

function exercise4{
  arr=[];
  sum = 0;
  for(var i = 0; i<str.length; i++){
    if (str.substring(i,i+1) != "*")
      sum += parseInt(str.substring(i, i+1));
  }
  if(str.charAt(str.length-1) == "*"){
    for (var i = 0; i < 10; i++){
      if(((sum + i) % 3 == 0) && (i % 2 ==0)){
        arr.push(str.replace("*", i.toString())) ;
      }
    }
    return arr;
  }
  else if(str.charAt(str.length-1) % 2 == 0){r
      for (var i = 0; i < 10; i++){
        if((sum + i) % 3 == 0){
          arr.push(str.replace("*", i.toString())) ;
        }
      }
      return arr;
    }
  else return "rỗng " ;
}

function exercise4_ver2 {
  let arr = [], newStr = "";
    for(let j=0; j<=9; j++) {
      newStr = parseInt(str.replace("*",j));
      if(newStr%6===0)
        arr.push(newStr);
    }
  }
  return arr;
}
Test('1234567890*');
```