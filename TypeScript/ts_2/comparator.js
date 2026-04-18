"use strict";
;
function sortre(a, comp) {
    let n = a.length;
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (comp.compare(a[j], a[j + 1]) > 0) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}
var ar = [{ id: 301, name: "Abhijit" }, { id: 302, name: "Edwin" }];
var comp = { compare: (obj1, obj2) => obj1.id - obj2.id };
var sortedUsers = sortre(ar, comp);
console.log(sortedUsers);
