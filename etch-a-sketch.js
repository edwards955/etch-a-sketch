const container = document.querySelector('#container');
createGrid(4);

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.toggle('row');
        for (let j = 0; j < num; j++) {
            const cell = document.createElement('div');
            cell.classList.toggle('cell');
            cell.addEventListener('mouseover', () => {
                cell.style['background-color'] = 'black';
            } )
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}