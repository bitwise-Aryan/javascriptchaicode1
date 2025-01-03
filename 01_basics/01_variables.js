const accountId=144553
//const=constant ye change nhi hota
//accountId=2 ,will give error


// we can declare const in only one Way, that is const accID

//and variable using let,var
/*but we prefer not to use var because
of issue in bloack and functional scope

what is scope?

int a;
{   

    var: Variables declared with var have function scope, which means they are accessible throughout the entire function, regardless of block boundaries.
    let: Variables declared with let have block scope, meaning they are only accessible within the block they are declared in (e.g., within {}).
    javascript
    Copy code

    int a;
    same cpp wala scope;
}
*/

let accountEmail="aryansingh19july@gmail.com"
//let can be changed

var accountPassword="12345"

/*we may declare variable without using let
 or var,but should be avoided*/ 
accountCity="Ranchi"
let acc;
//wil have value undefined

console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountCity,acc])

// accountId=123
