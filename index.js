function getUrl() {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id');
    const path = window.location.hash.replace('#', '');
    const origin = window.location.origin;
    const name = window.location.pathname;
    return origin + name + '/goodbye' + path + '?id=' + id;
}

function tfTracker(hooks) {
    hooks.ready(function () {
        window.addEventListener('beforeunload', function () {
            fetch(getUrl())
                .then(res => res.json())
                .then(console.log)
                .catch(console.error)
            return  false;
        });
    })
}
