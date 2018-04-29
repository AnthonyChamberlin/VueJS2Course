<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Your first vue file!'
    }
  },
  methods: {
    greeting: function() {
      return 'Welcome to your first vue app'
    }
  }
}
</script>

<style>
  body {
    font-family: 'Avenir';
    color: #202020;
    text-align: center;
  }
</style>
