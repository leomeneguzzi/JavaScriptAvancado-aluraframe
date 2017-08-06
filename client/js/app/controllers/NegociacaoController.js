class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    add(event) {
        event.preventDefault();
        let data = new Date(...
            this._inputData.value
            .split("-")
            .map((item, i) => {
                if (i == 1) return item - 1;
                return item;
            })
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}