function renderList(currData) {
    console.log(currData);
    const contentDiv = document.getElementById('not-urgent');
    contentDiv.innerHTML = '';
    const urgentDiv = document.getElementById('urgent');
    urgentDiv.innerHTML = '';
    currData.forEach(item => {
        const newItem = document.createElement('div');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${item.task}`;
        if (item.done == 1) {
            checkbox.checked = true;
        }

        const label = document.createElement('label');
        label.textContent = `${item.task}`;
        label.htmlFor = `checkbox-${item.task}`;

        newItem.appendChild(checkbox);
        newItem.appendChild(label);

        if (item.done == 1){
            newItem.style.textDecoration = 'line-through';
        }
            if (item.urgent == 0){
            contentDiv.appendChild(newItem);
        }
        else {
            urgentDiv.appendChild(newItem);
        }
    });
    checkboxUpdate();
}

function checkboxUpdate() {
    const checkboxArr = document.querySelectorAll('#urgent input[type="checkbox"], #not-urgent input[type="checkbox"]');
    checkboxArr.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            renderList(currentData());
            console.log('rendered');
        });
    });
}

function currentData() {
    const urgentCheckboxes = document.querySelectorAll('#urgent input[type="checkbox"]');
    const regCheckboxes = document.querySelectorAll('#not-urgent input[type="checkbox"]');
    const newData = [];

    urgentCheckboxes.forEach(cb => {
        const task = cb.nextElementSibling.textContent;
        const urgent = 1;
        var done = 0;
        if (cb.checked) {
            done = 1;
        }
        newData.push({task, urgent, done});
    })

    regCheckboxes.forEach(cb => {
        const task = cb.nextElementSibling.textContent;
        const urgent = 0;
        var done = 0;
        if (cb.checked) {
            done = 1;
        }
        newData.push({task, urgent, done});
    })

    return newData;
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        renderList(data);
        console.log("Initial load")
    })
    .catch(error => console.error('Error fetching JSON:', error));