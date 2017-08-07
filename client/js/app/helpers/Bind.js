class Bind {
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, (model) => {
            return view.update(model);
        });
        view.update(model);
        return proxy;
    }
}