class Cake {
    name;
    price;

    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }

    purchase = function()
    {
        alert("Usted ha adquirido: " + this.name);
    }
}