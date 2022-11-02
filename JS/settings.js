class Settings{

    /**
     * params 
     * params.rowsCount
     * params.colsCount
     * params.speed
     * params.winLength
     */

    init (params) {
        let defaultParams = { rowsCount: 21, colsCount: 21, speed: 2, winLegth: 50 };
        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
            throw new Error ('Неверные настройки, значения rowsCount должно быть в диапазоне 10-30')
        }
        this.rowsCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
            throw new Error ('Неверные настройки, значение colsCount должно быть в диапазоне 10 -30')
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams > 10) {
            throw new Error ('Неверные настройки, значение speed должно быть в диапазоне 1-10 ')
        }
        this.speed = defaultParams.speed;
        
        if (defaultParams.winLegth < 5 || defaultParams.winLegth > 50) {
            throw new Error('Неверные настройки, значение winLegth  должно быть в диапазоне 5-50')
        }
    }
}