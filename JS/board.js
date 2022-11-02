class Board{
    constructor() {
        this.boardEl = document.getElementById('game');
    }
    init(settings, snake) {
        this.settings = settings;
        this.snake = snake;
    }
    renderBoard() {
        this.boardEl.innerHTML = '';
        for (let row = 0; row < this.settings.rowsCount; row++){
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++){
                let td = document.createElement('td');
                tr.appendChild(td);
            }
        } 
    }
}