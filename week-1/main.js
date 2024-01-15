const fs = require('fs');

function readFileFunc() {
    return new Promise(function (resolve, reject) {
        fs.readFile('note.txt', 'utf-8', function (err, data) { // reading a file is asynchronous
            resolve(data);
        });
    });
}

const printData = (data) => {
    console.log(data);
};

const main = async () => {
    let value = await readFileFunc().then(printData);
    // printData(value);
}

main()



