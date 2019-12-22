const data1 = [
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


const generateCsvData = (ar) => {
    return ar.reduce((acc, el) => {
        if (acc.length === 0) {
            acc.push(Object.keys(el).map(head => head.toUpperCase()));
        }
        acc.push(Object.values(el));
        return acc;
    }, [])
}

const generateCsvFile = (ar) => {
    let content = '';
    ar.forEach(line => {
        content += line.join(',') + '\n';
    });
    return content;
}

function download(filename, text) {
    if (typeof document === 'undefined') {
        console.log('this function can be run only in browser');
        return;
    }
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}


const array2Data = generateCsvData(data1);
const content = generateCsvFile(array2Data);
download('mycontent', content);
console.log(content);