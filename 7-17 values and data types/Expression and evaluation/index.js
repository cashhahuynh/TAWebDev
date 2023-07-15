//example of returning an expression that either evauluates true or false
function nameCheck(name) {
    return name == "cash" ? "the parameter provided is \"cash\"" : "the parameter provide is not \"cash\"";
}

console.log("input is cash: " + nameCheck("cash"));
console.log("input is lucas: " + nameCheck("lucas"));