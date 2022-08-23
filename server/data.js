
let faker = require('faker');
const fs = require("fs");

let generateData = () => {
    let data = []
    for (let id = 0; id < 20; id++) {
        data.push({
            "id": id,
            "name":faker.commerce.productName(),
            "description":faker.commerce.productDescription(),
            "price":faker.commerce.price(),
            "quality":faker.datatype.number(100),
            "image":faker.random.image()
        });
    }
    return { "data": data }
}

const generatedData = generateData();

fs.writeFileSync("server/dataProducts.json", JSON.stringify(generatedData, null, "\t"));
