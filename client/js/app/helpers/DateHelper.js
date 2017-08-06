class DateHelper {

    constructor() {
        throw new Error("Classe não instanciável.");
    }

    static stringToDate(date) {

        if (!/\d{4}-\d{2}-\d{2}/.test(date)) throw new Error("Invalid date");

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
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}