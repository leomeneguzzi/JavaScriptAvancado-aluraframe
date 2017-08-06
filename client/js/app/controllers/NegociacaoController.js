class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
    }

    add(event) {
        event.preventDefault();
        this._negociacoes.add(this._criaNegociacao());
        console.log(this._negociacoes);
        this._limpaFormulario();
        //let dataBR = DateHelper.dateToString(negociacao.data);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.stringToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '2012-05-03';
        this._inputQuantidade = 3;
        this._inputValor = 7.8;
        this._inputData.focus();
    }
}