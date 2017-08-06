class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem);
    }

    add(event) {
        event.preventDefault();
        this._negociacoes.add(this._criaNegociacao());
        console.log(this._negociacoes);
        this._limpaFormulario();
        //let dataBR = DateHelper.dateToString(negociacao.data);
        this._negociacoesView.update(this._negociacoes);
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);
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
        this._inputQuantidade.value = 3;
        this._inputValor.value = 7.8;
        this._inputData.focus();
    }
}