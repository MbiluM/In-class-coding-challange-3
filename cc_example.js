// Task 5

let ordr = [
    {id: 101, customer: "Alice", total: 300},
    {id: 102, customer: "Bod", total: 450},
    {id: 103, customer: "Charlie", total: 200},
];

function findOrders(order, orderId){
    return order.find(order => order.id === orderId);
}

some_order = findOrders(findOrders, 101)
console.log(```${some_order.customer}${some_order.id}$${some_order.total}```);

// Task 6
let inventory = {
    iteams: [],
    addIteam(name, quantity) {
        this.iteams.push({name, quantity});
    },
    removeLatestIteam() {
        this.iteams.pop();
    },
    removeFirstIteam() {
        this.iteams.shift();
    }
};
inventory.addIteam("Monitor", 5);
inventory.addIteam("keyboard", 0);
inventory.addIteam("Mouse", 3);
console.log(inventory.iteams);
inventory.removeLatestIteam();
console.log(inventory.iteams);
inventory.removeFirstIteam();
console.log(inventory.iteams);