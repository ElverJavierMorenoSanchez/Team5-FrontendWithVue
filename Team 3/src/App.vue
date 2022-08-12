<template>
  <div class="container-sm mt-5">
    <h2>Team 5: FrontEnd with Vue</h2>
    <SearchItem />
    <div class="row">
      <AddItem class="col-xl-3" style="height: 350px" />
      <DataTable class="col-xl-9" style="height: 70vh" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
import DataTable from "./components/DataTable.vue";
import AddItem from "./components/AddItem.vue";
import SearchItem from "./components/SearchItem.vue";

const store = useStore();
onMounted(async () => {
  store.dispatch("fetchData");
});
</script>

<style scoped>
h2 {
  align-self: center;
  justify-self: center;
  margin: 20px 0 50px 0;
}
</style>
