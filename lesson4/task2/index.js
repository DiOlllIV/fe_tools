const store = (function() {
    let storage = {};
    return {

        addItem: function(key, value) {
            Object.assign(storage, {
                [key]: value
            })
        },
        clear: function() {
            storage = {};
        }
    }
})();

function func() {
    let a = 17;
    console.log(a);
};