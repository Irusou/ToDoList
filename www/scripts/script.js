var init = function(){
    const itemToAdd = document.getElementById('itemToAdd');
    const btnAdd = document.getElementById('btnAddItem');
    const itemList = document.getElementById('itemList');

    btnAdd.addEventListener('click', function(evt){
        if (itemToAdd.value === ""){
            alert("Please enter a valid item!");
            return ;
        }
        var li = document.createElement('li');
        li.classList.add('li-styling');
        li.innerText = itemToAdd.value;
        itemList.append(li);
        itemToAdd.value = "";
        li.addEventListener('click', function(evt){
            li.style.textDecoration = "line-through";
        });
        li.addEventListener('dblclick', function(evt){
            itemList.removeChild(li);
        });
    });
}

window.onload = init;