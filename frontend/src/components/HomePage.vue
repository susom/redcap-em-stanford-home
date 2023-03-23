<template>
  <div class="container-fluid">
    <h2>Stanford Home</h2>
    <button
        class="btn btn-primary"
        data-bs-target="#collapseTarget"
        data-bs-toggle="collapse">
      Bootstrap collapse
    </button>
    <div class="collapse py-2" id="collapseTarget">
      This is the toggle-able content!
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>