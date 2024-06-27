let myMap:Map<string,string[]>=new Map();

myMap.set("apple",[]);

myMap.set("microsoft",[])

myMap.get("apple")?.push("1234");
myMap.get("microsoft")?.push("1234");

myMap.get("apple")?.push("54434");


console.log(myMap)


//Map(2) { 'apple' => [ '1234', '54434' ], 'microsoft' => [ '1234' ] }