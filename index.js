function tfTracker(hooks) {
    hooks.ready(function () {
        window.addEventListener('beforeunload', function () {
            fetch(location.href + '/goodbye')
                .then(res => res.json())
                .then(console.log)
                .catch(console.error)
            return  false;
        });
    })
}
