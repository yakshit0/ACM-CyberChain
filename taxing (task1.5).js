const taxlist = [[1,17.5],[2,9],[3,35],[4,20]]
const pricelist = [[1,860],[2,1500],[3,475],[4,255]]

function taxincluder(type){
    taxrate = taxlist.find(x => x.includes(type))
    price = pricelist.find(x => x.includes(type))

    let total = price[1]*(1 + taxrate[1]/100)
    console.log(`Price of item of type ${price[0]} is ${total}`);
    
}