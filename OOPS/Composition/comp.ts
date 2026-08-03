class LineItems{
    private productName:string
    private quantity:number
    private unitPrice:number

    constructor(productName:string,quantity:number,unitPrice:number){
        this.productName=productName
        this.quantity=quantity
        this.unitPrice=unitPrice

    }
    getProductName():string{
        return this.productName;
    }
    getSubTotal():number{
        return (this.quantity)*(this.unitPrice);
    }
}

class Order{
    private orderId:number;
    private lineItems:LineItems[]=[]

    constructor(orderId:number){
        this.orderId=orderId;
        this.lineItems=[]
    }

    addItems(productName:string,quantity:number,unitPrice:number):void{
        const li=new LineItems(productName,quantity,unitPrice)
        this.lineItems.push(li)

    }

    removeItem(lineItem:LineItems){
        this.lineItems.filter(e=>e!==lineItem)

    }

    displayItems():void{
        for(let l of this.lineItems){
            console.log(`ProductName: ${l.getProductName()}, TotalPrice:${l.getSubTotal()}`)
        }
    }




}

const o1=new Order(1)
o1.addItems("Laptop",51,50000)

o1.addItems("Phones",30,40000)

o1.addItems("Ipads",100,100000)

o1.displayItems();