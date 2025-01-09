
        const addItemButton = document.getElementById('add-btn');
        const clearButton = document.getElementById('clear-btn');
        const list = document.getElementById('list');
        const itemInput = document.getElementById('item');

        addItemButton.addEventListener('click', () => {
            const itemText = itemInput.value.trim();
            if (itemText !== '') {
                const listItem = document.createElement('li');
                listItem.className = 'grocery-item';
                listItem.innerHTML = `${itemText} <button onclick="this.parentElement.remove()">Delete</button>`;
                list.appendChild(listItem);
                itemInput.value = '';
            }
        });

        clearButton.addEventListener('click', () => {
            list.innerHTML = '';
        });
    