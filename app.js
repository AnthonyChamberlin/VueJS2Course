// Create new Vue instance to grab html element
new Vue({
    el:'#vue-app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function() {
            console.log('name logged');
        },
        logAge: function() {
            console.log('age logged');
        }
    }
});