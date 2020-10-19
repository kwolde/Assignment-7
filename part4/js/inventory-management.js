/*eslint-env browser*/
function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all products");
    window.console.log("update - Update a product");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function display(inventory) {
    for (i in inventory) {
        window.console.log(inventory[i][0] + "\t" + inventory[i][1] + "\t(" + inventory[i][2] + ")\t" + "$" + inventory[i][3]);
    }
}

function update(inventory) {
    var sku = window.prompt("Enter the SKU of the product whose stock quantity you want to update:");
    for (i in inventory) {
        if (inventory[i][0] == sku) {
            // valid entry
            // prompt for new quantity
            var valid = false;
            var quantity;
            do {
                quantity = window.prompt("Enter a new stock quantity for " + inventory[i][1]);
                if (isNaN(quantity)) {
                    window.alert("Please enter a valid numeric value to update the stock quantity");
                } else {
                    valid = true;
                } 
            } while(!valid);
            inventory[i][2] = quantity;
            return;
        }
    }
    // Only get to here if the sku entered did not exist
    window.alert("No product found with SKU: " + sku);
}

function main() {
    var inventory = [[4824, "Shirt ", 10, 15.99],
                    [6343, "Jeans ", 22, 39.99],
                    [3223, "Socks ", 36, 9.99],
                    [2233, "Hat   ", 12, 14.99],
                    [9382, "Jacket", 5, 49.99]];

    displayMenu()
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}

main();