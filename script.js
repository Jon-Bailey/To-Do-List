const input = document.getElementById('input'); //input field
const list = document.getElementById('list'); //area where list items are added
const submit = document.getElementById('submit'); // submit button

//function that creates a line item and button and adds it to the list.
const addToDo = () => {
    const item = document.createElement('li');
    item.classList.add('item');
    const remove = document.createElement('button')
    remove.classList.add('icon-trash');
    item.innerText = input.value;
    list.appendChild(item);
    item.appendChild(remove);
//when clicked remove item from list
    remove.addEventListener('click', function() {
    this.parentElement.style.display = 'none';
    });
}

//when submit is clicked, run the addToDo function.
submit.addEventListener('click', function() {
    addToDo();
});

/*input.addEventListener('keyup', function() {
    if (Event.key === 13) {
        addToDo();
    }
});*/
