interface DataEntry {
    name: 'John' | 'Sparky' | 'Nova' | 'Manuel' | 'Caesar' | 'Gill' | 'Billy' | 'Silly';
    type: 'dog' | 'cat' | 'fish' | 'bug' | 'bird';
};

const data1: Array<DataEntry> = [
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

const data2: Array<DataEntry> = [
    {
        "name": "John",
        "type": "dog"
    },
        {
        "name": "Sparky",
        "type": "dog"
    },
    {
        "name": "Silly",
        "type": "bug"
    },
        {
        "name": "Billy",
        "type": "bird"
    }
]

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

// 1 - group by type
const elements = groupByType(data1);
console.log(elements);

// 2 - data intersection
const intersection = (ar1: Array<DataEntry>, ar2: Array<DataEntry>): Array<DataEntry>  => {
    return ar1.reduce((acc: Array<DataEntry>, el1: DataEntry): Array<DataEntry>  => {
        const result: DataEntry | void =  ar2.find((el2: DataEntry): any => el2.name === el1.name && el2.type === el1.type);
        if (result) {
            acc.push(result);
        }

        return acc;
    }, [] as Array<DataEntry>);
};

console.log( intersection(data1, data2));

// 3 - generate a csv
const CSVFormater = (content: Array<Array<string>>): string => {
    const result = content.map((line: Array<string>): string => line.join(','));

    return result.join('\n')
};

const CSVGeneartor = (ar: Array<DataEntry>): string => {
    if (ar.length === 0) {
        return '';
    }

    const header = Object.keys(ar[0]);
    const content = [];
    content.push(header);
    ar.forEach((el: DataEntry): void => {
        content.push(Object.values(el));
    });

    return CSVFormater(content);
}

console.log( '---', CSVGeneartor(data1));