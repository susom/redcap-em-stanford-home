<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" @click="$parent.loadComponent('actions')">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$parent.loadComponent('help')">Help</a>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>

</style>