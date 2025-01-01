const accountId = 144553;
let accountEmail = "priya@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//accountId = 2;  //not allowed

accountEmail = "hv@df.com";
accountPassword = "234453";
accountCity = "bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/




console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 144553      │
// │ 1       │ 'hv@df.com' │
// │ 2       │ '234453'    │
// │ 3       │ 'bengaluru' │
// │ 4       │ undefined   │
// └─────────┴─────────────┘