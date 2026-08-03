class Product{
    private name:string
    private price:number

    constructor(name:string,price:number){
        this.name=name;
        this.price=price
    }

    getProductName():string{
        return this.name
    }

    geetProductPrice():number{
        return this.price
    }
}

class Catalog{
    private products:Product[]=[];

    addProduct(product:Product):void{
        this.products.push(product)
    }
    findByName(prdname:string):Product | undefined{
        for(const p of this.products){
            if(String(p.getProductName)===prdname){
                return p;

            }
        }
        return undefined

    }
    getProductCount():number{
        return Number(this.products.length)
    }
}

class Cart{
    
    private items:Product[]=[]

    addItem(item:Product):void{
        this.items.push(item)

    }

    clearCart():void{
        this.items=[];

    }

    getTotal():number{
        let a=0;
        for(let i of this.items){
            a=a+i.geetProductPrice();
        }
        return a;
        
    }

    getAllItems(){
               for(let i of this.items){
                    console.log(`Prod name is ${i.getProductName()} and price is ${i.geetProductPrice()}`)

        }

    }

}

class Customer {
    private name: string;
    private cart: Cart;

    constructor(name: string, cart: Cart) {
        this.name = name;
        this.cart = cart;
    }

    checkout(): void {
        console.log("Total is ",this.cart.getTotal())
        console.log(this.cart.clearCart())
    }

    getName(): string { return this.name; }
    getCart(): Cart { return this.cart; }
}

const p1=new Product("Dishwasher",34);
const p2=new Product("Soap",33)
const p3=new Product("Laptop",34000)

const cart1=new Cart();
const cust1=new Customer("Shivam",cart1)

cart1.addItem(p1)
cart1.addItem(p3)

console.log("Cart total is :", cart1.getTotal())
cart1.getAllItems();
