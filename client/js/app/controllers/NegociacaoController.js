class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._negociacoes = new Bind(new Negociacoes(),
            new NegociacoesView($('#negociacoesView')), 'add', 'delete');

        this._mensagem = new Bind(new Mensagem(),
            new MensagemView($("#mensagemView")), 'texto');
    }

    add(event) {
        event.preventDefault();
        this._negociacoes.add(this._criaNegociacao());
        console.log(this._negociacoes);
        this._limpaFormulario();
        //let dataBR = DateHelper.dateToString(negociacao.data);
        this._mensagem.texto = "Negociação adicionada com sucesso!";
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

    delete() {
        this._negociacoes.delete();
        this._mensagem.texto = "Negociações apagadas";
    }

    importNegociacoes() {
        let negociacaoService = new NegociacaoService();
        negociacaoService.importNegociacoes((err, negociacoes) => {
            if (err) {
                this._mensagem.texto = err;
                return;
            }
            negociacoes.forEach(negociacao => {
                this._negociacoes.add(negociacao);
                this._mensagem.texto = 'deu bom porra';
            });

        });
    }
}