//Using an object, without declaring it, is not allowed:

"use strict";
x = { p1: 10, p2: 20 };

//deleting a variable (or object) is not allowed
"use strict";
let y = 3.14;
delete y;

//Writing to a get-only property is not allowed:

"use strict";
const obj = { get x() { return 0 } };

obj.x = 3.14;


//The word eval cannot be used as a variable:

"use strict";
let eval = 3.14; 