"use strict";
;
const data = [
    {
        "name": "John",
        "type": "dog"
    },
    {
        "name": "Sparky",
        "type": "dog"
    },
    {
        "name": "Nova",
        "type": "cat"
    },
    {
        "name": "Manuel",
        "type": "dog"
    },
    {
        "name": "Caesar",
        "type": "cat"
    },
    {
        "name": "Gill",
        "type": "fish"
    }
];
const groupByType = (ar) => {
    return ar.reduce((acc, element) => {
        const position = acc.findIndex((entry) => entry.type === element.type);
        if (position === -1) {
            acc.push({
                type: element.type,
                animals: [element.name]
            });
        }
        else {
            acc[position].animals.push(element.name);
        }
        ;
        return acc;
    }, []);
};
const elements = groupByType(data);
console.log(elements);
