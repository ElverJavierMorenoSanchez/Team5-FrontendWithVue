<template>
  <div class="card card-lg">
    <div class="row">
      <h3 class="card-title text-center">
        {{ editable ? "Editar Item" : "Añadir Item" }}
      </h3>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group m-1">
            <input
              type="number"
              class="form-control mt-1"
              placeholder="Id"
              required
              v-model="id"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Nombre"
              required
              v-model="name"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Rol"
              required
              v-model="role"
            />
            <input
              type="number"
              step="0.01"
              class="form-control mt-1"
              placeholder="Promedio"
              required
              v-model="average"
            />
            <button
              class="btn btn-success btn-block text-dark form-control mt-2"
              type="submit"
            >
              {{ editable ? "Editar" : "Añadir" }}
            </button>
            <button
              class="btn btn-warning btn-block text-dark form-control mt-1"
              type="reset"
              @click="handleReset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { postItem, updateItem } from "@/utility/axios.js";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const item = computed(() => store.state.item);
const editable = computed(() => store.state.editable);

const id = ref("");
const name = ref("");
const role = ref("");
const average = ref("");

watch(item, () => {
  if (editable.value) {
    id.value = item.value.id;
    name.value = item.value.name;
    role.value = item.value.role;
    average.value = item.value.average;
  }
});

const handleSubmit = async () => {
  const newItem = {
    id: id.value,
    name: name.value,
    role: role.value,
    average: average.value,
  };

  if (editable.value) {
    const message = await updateItem(store.state.item.id, newItem);
    alert("Update success");
  } else {
    const message = await postItem(newItem);
    alert("Add success");
  }

  handleReset();
  store.dispatch("fetchData");
};

const handleReset = () => {
  store.commit("setIditable", false);
  store.commit("setItem", {});
  id.value = "";
  name.value = "";
  role.value = "";
  average.value = "";
};
</script>
