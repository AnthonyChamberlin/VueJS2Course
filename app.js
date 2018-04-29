var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return 'Welcome to App One';
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function() {
            one.title = "Title overidden by Vue App Two"
        }
    },
    computed: {
        greet: function() {
            return 'Welcome to App Two';
        }
    }
});

two.title = 'changed from outside';
