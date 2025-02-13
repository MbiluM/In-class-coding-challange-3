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
