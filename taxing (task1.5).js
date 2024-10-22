const taxlist = [[1,17.5],[2,9],[3,35],[4,20]]
const pricelist = [[1,860],[2,1500],[3,475],[4,255]]

let tax = 0.0;

function taxcalculator(type){
    taxrate = taxlist.find(x => x.includes(type))
    price = pricelist.find(x => x.includes(type))

    tax = price[1]*taxrate[1]/100
    console.log(`Tax on item of type ${price[0]} is ${tax}`)
}

function totalprice(type){
    taxcalculator(type);
    let total = price[1] + tax
    console.log(`Total price of item of type ${price[0]} is ${total}`);
}