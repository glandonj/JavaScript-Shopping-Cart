let items = [];

function AddItem(name, price){
    addedItem = {
        Name: name,
        Price: price
    };
    items.push(addedItem);

}

function DisplayCart(){
    let sum = 0;
    items.forEach((i) => {
        console.log(`Item: ${i.Name} Price: $${Number(i.Price).toFixed(2)}`);
        sum += i.Price;
    });
    console.log(`\nThe total w/out tax is $${Number(sum).toFixed(2)}`);
    console.log(`\nTax is $${Number(sum*0.06).toFixed(2)}`);
    console.log(`\nGrand total: $${Number(sum * 1.06).toFixed(2)}`);
}