window.addEventListener('load', () => {
    const itemInput = document.querySelector('#item-input');
    const addItem = document.querySelector('#item-submit');
    const itemLists = document.querySelector('#items');

    addItem.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log('its working')

        const item = itemInput.value

        if(!item) {
            alert('boss type something na...');
            return
        }

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item');


        const itemcontent = document.createElement('div');
        itemcontent.classList.add('item-content')

        const itemCheck = document.createElement('input');
        itemCheck.classList.add('item-completed');
        itemCheck.type = 'checkbox';
        itemcontent.appendChild(itemCheck);

        const itemText = document.createElement('input');
        itemText.classList.add('text');
        itemText.type = 'text';
        itemText.value = item;
        itemText.setAttribute('readonly', 'readonly');
        itemcontent.appendChild(itemText);

        itemContainer.appendChild(itemcontent);


        const itemActions = document.createElement('div');
        itemActions.classList.add('item-actions');

        const itemEdit = document.createElement('button');
        itemEdit.classList.add('edit');
        itemEdit.innerHTML = 'Edit';
        itemActions.appendChild(itemEdit);

        const itemDelete = document.createElement('button');
        itemDelete.classList.add('delete');
        itemDelete.innerHTML = 'Delete';
        itemActions.appendChild(itemDelete);

        itemContainer.appendChild(itemActions);

        itemLists.appendChild(itemContainer);

        itemInput.value = '';

        itemEdit.addEventListener('click', () => {
            if (itemEdit.innerText.toLowerCase() === 'edit') {
                itemText.removeAttribute('readonly')
                itemText.focus();
                itemEdit.classList.add('save');
                itemEdit.innerText = 'Save';
                // itemcontent.removeChild(itemCheck);
                
            } else {
                itemText.setAttribute('readonly', 'readonly');
                itemEdit.classList.add('edit');
                itemEdit.innerText = 'Edit';
                // itemcontent.appendChild(itemCheck);
            }

            
        });

        itemDelete.addEventListener('click', () => {
            itemLists.removeChild(itemContainer)
        })
    })
});