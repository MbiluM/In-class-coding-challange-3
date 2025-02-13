// Task 5

let order = [
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
    items: [],
    addItem(name, quantity) {
        //adds items to array
        this.items.push({name, quantity});
    },
    removeLatestIteam() {
        this.items.pop();
    },//this method removes latest item
    removeFirstIteam() {
        this.items.shift();
    } //this method removes first item
};
inventory.addItem("Monitor", 5); //adding item
inventory.addItem("keyboard", 10); //adding item
inventory.addItem("Mouse", 3); //adding item
console.log(inventory.items); //viewing all items
// inventory.removeLatestItem(); //removing latest
// console.log(inventory.items); //viewing items remaining 
// inventory.removeFirstItem(); //removing 1st item
// console.log(inventory.items); //view items

// task 7
let employee = [
    {name: "Alice", position: "Developer", salary: 70000},
    {name: "Bod", position: "Designer", salary: 60000},
    {name: "Charlie", position: "Manager", salary: 90000},
]
function findEmployee (employee, name) {
    return employee.find(employee => employee.name === name); 
};
console.log(findEmployee, "Charlie")

// task 8
let orders1 = [
    {id: 1, customer: "Alice"},
    {id: 2, customer: "Bob"}
];

let order2 = [
    {id: 3, customer: "Charlie"},
    {id: 4, customer: "David"}
];

function combineOrder(order1, order2) {
    return [...order, ...order2]
}
console.log(combineOrder(order1, order2));
