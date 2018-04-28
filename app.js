// Create new Vue instance to grab html element
new Vue({
    el:'#vue-app',
    data: {
        name: 'Ant',
        job: 'Developer'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});