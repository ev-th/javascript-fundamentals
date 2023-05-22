class ShoppingBasket {
    constructor() {
        this.items = []
    }

    getTotalPrice() {
        let total = 0

        this.items.forEach((item) => {
            total += item.price
        })

        return total
    }

    addItem(item) {
        this.items.push(item)
    }
}

module.exports = ShoppingBasket;