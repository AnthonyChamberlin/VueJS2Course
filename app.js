Vue.component('greeting', {
    template: '<p>Hey there, my name is {{ name }}.<button class="btn-primary" @click="changeName">Change Title</button></p>',
    data: function() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = "Mario";
        }
    }
});

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    }
});
