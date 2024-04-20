import inquirer from 'inquirer';
class ArrayManipulator {
    array;
    constructor() {
        this.array = [];
    }
    async addItemWithInquirer() {
        const { newItem } = await inquirer.prompt([
            {
                type: 'input',
                name: 'newItem',
                message: 'Enter the item to add:'
            }
        ]);
        this.array.push(newItem);
        console.log(`${newItem} added to the array.`);
    }
    displayArray() {
        console.log("Current array:", this.array);
    }
}
// Example usage
async function main() {
    const arrayManipulator = new ArrayManipulator();
    // Add items using Inquirer
    await arrayManipulator.addItemWithInquirer();
    await arrayManipulator.addItemWithInquirer();
    arrayManipulator.displayArray();
}
main();
