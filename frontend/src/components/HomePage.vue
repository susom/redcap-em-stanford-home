<template>
  <div>
    <HeaderComponent/>
    <ActionItems v-if="this.page === 'actions'"/>
    <HelpComponent v-if="this.page === 'help'"/>
  </div>
</template>

<script>
import ActionItems from "@/components/ActionItems.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HelpComponent from "@/components/HelpComponent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    HelpComponent,
    ActionItems
  },
  data() {
    return {
      page: 'actions',
      fullURL: window.location.href,
    }
  },
  methods: {
    loadComponent: function (name) {
      this.page = name
      location.hash = name
    },
    determineComponent: function () {
      const route = this.fullURL.toLowerCase();
      var parts = route.split("#")
      if (parts[1] !== undefined) {
        this.page = parts[1]
      }

    }
  },
  beforeMount() {
    this.determineComponent()
  },
}
</script>

<style scoped>

</style>