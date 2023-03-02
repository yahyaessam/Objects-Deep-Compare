# Objects-Deep-Compare

## using recursive function

```javascript
const person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35,
    "hoppies":{
      "first":"fishing",
      "second":"football"
    }
};

const person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "hoppies":{
      "first":"fishing",
      "second":"football"
    },
    "age": 35,
};
 
const isDeepCompare = (object1, object2) => {

  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !isDeepCompare(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object) => {
  return object != null && typeof object === "object";
};

console.log(isDeepEqual(person1, person2)); //true


```
