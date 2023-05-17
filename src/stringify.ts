const obj = {
  name: "Bob",
  age: 29,
  address: {
    street: "Street 1",
    number: 3,
  },
  vehicles: [
    {
      vehicle1: {
        brand: "toyota",
        model: "corolla",
      },
    },
    {
      vehicle2: {
        brand: "mazda",
        model: "rx7",
      },
    },
  ],
  isResident: true,
  married: false,
  children: null,
};

const myStringify = (obj: Record<string, any>): string => {
  const lastKey = Object.keys(obj).pop();
  let result = "{";
  for (const key in obj) {
    const keyString = `"${key}"`;
    let valueString = "";
    if (obj[key] === null) {
      valueString = `${obj[key]}`;
    } else if (typeof obj[key] === "boolean") {
      valueString = `${obj[key]}`;
    } else if (typeof obj[key] === "number") {
      valueString = `${obj[key]}`;
    } else if (typeof obj[key] === "string") {
      valueString = `"${obj[key]}"`;
    } else if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        valueString = `${myStringifyArray(obj[key])}`;
      } else {
        valueString = `${myStringify(obj[key])}`;
      }
    }
    result = [...result.split(""), keyString, `: `, valueString].join("");
    if (key !== lastKey) {
      result = [...result.split(""), ","].join("");
    }
  }
  result = [...result.split(""), `}`].join("");
  return result;
};

function myStringifyArray(arr: any[]): string {
  let result = "[";
  const lastArrayItem = arr[arr.length - 1];
  for (const index in arr) {
    const item = arr[index];
    let valueString = "";
    if (item === null) {
      valueString = `${item}`;
    } else if (typeof item === "boolean") {
      valueString = `${item}`;
    } else if (typeof item === "number") {
      valueString = `${item}`;
    } else if (typeof item === "string") {
      valueString = `"${item}"`;
    } else if (typeof item === "object") {
      if (Array.isArray(item)) {
        valueString = `${myStringifyArray(item)}`;
      } else {
        valueString = `${myStringify(item)}`;
      }
    }
    result = [...result.split(""), valueString].join("");
    if (item !== lastArrayItem) {
      result = [...result.split(""), ","].join("");
    }
  }
  result = [...result.split(""), `]`].join("");
  return result;
}

console.log("myStringify(obj) :>> ", myStringify(obj));
