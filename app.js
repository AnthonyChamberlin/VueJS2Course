// Create new Vue instance to grab html element
new Vue({
    el:'#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: {
        
    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});