class Negociacoes {
    constructor(funcao) {
        this._negociacoes = [];
        this._funcao = funcao;
    }
    add(negociacao) {
        this._negociacoes.push(negociacao);
        this._funcao(this);
    }
    get negociacoes() {
        return [].concat(this._negociacoes);
    }
    delete() {
        this._negociacoes = [];
        this._funcao(this);
    }
}