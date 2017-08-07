class NegociacaoService {
    importNegociacoes(cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log(`deu bom`);
                    cb(null, JSON.parse(xhr.responseText)
                        .map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor)));
                } else {
                    console.log(`Erro: ${xhr.status}`);
                    console.log(xhr.responseText);
                    cb('deu ruim porra', null);
                }
            }
        };

        xhr.send();
    }
}