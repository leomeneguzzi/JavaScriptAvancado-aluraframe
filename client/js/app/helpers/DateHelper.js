class DateHelper {

    constructor() {
        throw new Error("Classe não instanciável.");
    }

    static stringToDate(date) {
        return new Date(...
            date
            .split("-")
            .map((item, i) => {
                if (i == 1) return item - 1;
                return item;
            })
        );
    }

    static dateToString(date) {
        return date.getDate() + '/' +
            (date.getMonth() + 1) + '/' +
            date.getFullYear();
    }
}