<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group input-group-lg m-auto mb-5 w-50">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar elemento"
        v-model="query"
      />
      <button class="btn btn-success" type="submit">Buscar</button>
    </div>
  </form>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watch } from "vue";

const store = useStore();
const query = ref("");

const handleSubmit = () => {
  store.commit("setIditable", false);
  store.dispatch("fetchItem", query.value);
};

watch(query, () => {
  if (!query.value) {
    handleSubmit();
  }
});
</script>
