interface Mountain{
    name: string, 
    height:number
}

let mountains:Mountain[]=[];

let m1:Mountain={name:"Kilimanjaro",height:19341};
mountains.push(m1);

let m2:Mountain={name:"Everest",height:29029};
mountains.push(m2);

let m3:Mountain={name:"Denali",height:20310};
mountains.push(m3);

let list=document.getElementById("MountainList");



for(let i=0;i<mountains.length;i++){
   list.innerHTML+=`<p>Name:${mountains[i].name}</p>`;
}

function findNameOfTallestMountain(mountains:Mountain[]):string{
    let mTallest:number=0;
    let tallestName:string="";
for(let i=0;i<mountains.length;i++){
if(mountains[i].height>mTallest){
    mTallest=mountains[i].height;
    tallestName=mountains[i].name;
}
}
 return tallestName;
}

let tallest:string=findNameOfTallestMountain(mountains);
console.log(tallest)

let output=document.getElementById("Tallest");
output.innerText="Tallest mountain is "+findNameOfTallestMountain(mountains);

//---------------------------------------------------------------------------------------------------------------------------------------------

interface Product{
    name: string, 
    price:number
}

let products:Product[]=[];

let p1:Product={name:"Apple",price:5.99};
products.push(p1);

let p2:Product={name:"Orange",price:10.99};
products.push(p2);

let p3:Product={name:"Grape",price:8.99};
products.push(p3);

console.log(products);

function calcAverageProductPrice(products:Product[]):number{
let avg:number=0;
avg=(products[0].price+products[1].price+products[2].price)/products.length;
return avg;
}

let p:number=calcAverageProductPrice(products);

let output2=document.getElementById("AvgPrice");

output2.innerText="avgPrice is : " +calcAverageProductPrice(products);
console.log(p);

//-----------------------------------------------------------------------------------------------------------------------

interface InventoryItem{
    product: Product, 
    quantity:number
}

let product1:Product={name:"motor",price:10.00};
//products.push(product1);

let product2:Product={name:"sensor",price:12.50};
//products.push(product1);

let product3:Product={name:"LED",price:1.00};
//products.push(product3);



let inventoryItemArr :InventoryItem[]=[];

let iArr1: InventoryItem={product:product1,quantity:10};
inventoryItemArr.push(iArr1);

let iArr2: InventoryItem={product:product2,quantity:4};
inventoryItemArr.push(iArr2);

let iArr3: InventoryItem={product:product3,quantity:20};
inventoryItemArr.push(iArr3);

function calcInventoryValue(inventoryItemArr :InventoryItem[]):number{
    let total:number=0;
    for(let i=0;i<inventoryItemArr.length;i++){
        total+=inventoryItemArr[i].product.price*inventoryItemArr[i].quantity;
    }
    return total;
}

let value:number=calcInventoryValue(inventoryItemArr);

document.getElementById("Total")?.innerText="total price : "+value;
console.log(value);
