var init = function(){
    const formItem = document.getElementById('itemToAdd');
    const btnAdd = document.getElementById('btnAddItem');
    const btnRemove = document.getElementById('btnRemoveItem');
    

    btnAdd.addEventListener('click', function(evt){
        if (formItem !== ""){

        }else{
            alert("Please enter a valid item!");
        }
    });

    btnRemove.addEventListener('click', function(evt){
        let listItems = document.getElementsByTagName('li');
        for (const item in listItems) {
            if (item === formItem) {

            }
        }
    });
}

document.onload = init;