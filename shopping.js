const shoppingList = [
    {
        id: 1,
        name: "lettuce",
        brand: "Kroger-brand",
        price: 1.59,
        quantity: 2,
        needToday: true,
        dateAdded: "April 14, 2021"
    },
    {
        id: 2,
        name: "Cheerios",
        brand: "General Mills",
        price: 3.75,
        quantity: 1,
        needToday: true,
        dateAdded: "April 12, 2021"
    },
    {
        id: 3,
        name: "Beer",
        brand: "Modelo",
        price: 17.99,
        quantity: 5,
        needToday: true,
        dateAdded: "April 10, 2021"
    }
]

const apples = {
    name: "apples",
    brand: "Granny Smith",
    price: 3.25,
    quantity: 7,
    needToday: false
}

const iceCream = {
    name: "Mint Chip",
    brand: "Breyer's",
    price: 4.50,
    quantity: 1,
    needToday: true
}

const wine = {
    name: "Wine",
    brand: "Winking Owl",
    price: 16.00,
    quantity: 2,
    needToday: true
}

const addItem = (groceryItem) => {
    const lastIndex = shoppingList.length - 1
    const currentLastItem = shoppingList[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1

    groceryItem.id = idForNewItem

    const today = new Date()
    groceryItem.dateAdded = today

    shoppingList.push(groceryItem)
}

addItem(apples)
addItem(iceCream)
addItem(wine)

for (const item of shoppingList) {
    if (item.price > 8.00) {
        console.log(`This ${item.name} stuff might be too expensive!`)
    }
}

console.log(shoppingList)