document.getElementById('add-item').addEventListener('click', addItem);

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName === '' || itemQuantity === '') {
        alert('Please enter both item name and quantity');
        return;
    }

    const shoppingList = document.getElementById('shopping-list');
    
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'shopping-list-item';

    // Create item name and quantity text
    const itemText = document.createElement('span');
    itemText.textContent = `${itemName} - ${itemQuantity}`;

    // Create Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editItem(listItem, itemText));

    // Create Remove Button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeItem(listItem));

    // Append elements to the list item
    listItem.appendChild(itemText);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    // Add the list item to the shopping list
    shoppingList.appendChild(listItem);

    // Clear input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
}

function editItem(listItem, itemText) {
    const newName = prompt('Enter new item name:', itemText.textContent.split(' - ')[0]);
    const newQuantity = prompt('Enter new quantity:', itemText.textContent.split(' - ')[1]);

    if (newName !== null && newQuantity !== null) {
        itemText.textContent = `${newName} - ${newQuantity}`;
    }
}

function removeItem(listItem) {
    listItem.remove();
}
