interface DataEntry {
    name: 'John' | 'Sparky' | 'Nova' | 'Manuel' | 'Caesar' | 'Gill';
    type: 'dog' | 'cat' | 'fish';
};

const data:Array<DataEntry> = [
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

interface OutputEntry {
    type: string;
    animals: Array<string>;
}
    

const groupByType = (ar: Array<DataEntry>) => {
    return ar.reduce((acc:Array<OutputEntry>, element:DataEntry): Array<OutputEntry> => {
        const position = acc.findIndex((entry:OutputEntry) => entry.type === element.type);
        if (position === -1) {
            acc.push({
                type: element.type,
                animals: [element.name]
            })
        } else {
            acc[position].animals.push(element.name);
        };
        return acc;
    }, [] as Array<OutputEntry>);
}

const elements = groupByType(data);
console.log(elements);