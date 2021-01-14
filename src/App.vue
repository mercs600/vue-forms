<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/vanilla-forms">
        Vanilla-forms
      </router-link> |
      <router-link to="/vue-inputs">
        Vue inputs
      </router-link> |
      <router-link to="/ui">
        UiInput
      </router-link> |
      <router-link to="/ui-form-field">
        UiFormField
      </router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
