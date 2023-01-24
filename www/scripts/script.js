var init = function(){
    const itemToAdd = document.getElementById('itemToAdd');
    const btnAdd = document.getElementById('btnAddItem');
    const btnRemove = document.getElementById('btnRemoveItem');
    const itemsList = document.getElementById('list');
    

    btnAdd.addEventListener('click', function(evt){
        if (itemToAdd.value === ""){
            alert("Please enter a valid item!");
            return ;
        }
        let newItem = document.createElement('li');
        newItem.appendChild(document.createTextNode(itemToAdd.value));
        itemsList.append(newItem);
    });

    btnRemove.addEventListener('click', function(evt){
        let node = itemsList[itemToAdd.value];
        itemsList.remove(node);
    });
}

/**
 * checks if an item is already on the list
 */
function checkIfItemExists(itemsList){
    for (const li in itemsList) {
        if (li.value === itemsList.value){
            alert("Item already on list!");
        }
    }
    return false;
}

window.onload = init;