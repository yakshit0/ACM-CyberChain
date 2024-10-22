//Parameter 'id' uses person's name to find nested array
 
const directory = [['Rohit',80340.77],['Vansh',59000.24],['Kiran',36400.41],['Tejas',62390.67],['Rita',38087.89]]

function deposit(id,amount){
    let acc = directory.find(x => x.includes(id))
    acc[1] += amount;
    console.log(`New balance is ${acc[1]}`)
}

function withdraw(id,amount){
    let acc = directory.find(x => x.includes(id))

    const myPromise = new Promise((resolve, reject) => {
        let success = acc[1]>=amount;

        if (success) {
            resolve(acc[1]-=amount);
        } else {
            reject("Operation failed due to insufficient balance");
        }});
        
    myPromise
    .then((result) => {
        console.log(`New balance is ${result}`)
    })
    .catch((error) => {
        console.log(error);
    })
}

function check(id){
    let acc = directory.find(x => x.includes(id))
    console.log(`Balance is ${acc[1]}`)
}