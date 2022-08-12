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
              type="text"
              class="form-control mt-1"
              placeholder="Name"
              required
              v-model="name"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Author"
              required
              v-model="author"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Gender"
              required
              v-model="gender"
            />
            <input
              type="number"
              step="0.01"
              class="form-control mt-1"
              placeholder="Price"
              required
              v-model="price"
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

const name = ref("");
const author = ref("");
const gender = ref("");
const price = ref("");

watch(item, () => {
  if (editable.value) {
    name.value = item.value.name;
    author.value = item.value.author;
    gender.value = item.value.gender;
    price.value = item.value.price;
  }
});

const handleSubmit = async () => {
  const newItem = {
    name: name.value,
    author: author.value,
    gender: gender.value,
    price: price.value,
  };

  if (editable.value) {
    const message = await updateItem(store.state.item.ID, newItem);
    alert(message.message);
  } else {
    const message = await postItem(newItem);
    alert(message.message);
  }

  handleReset();
  store.dispatch("fetchData");
};

const handleReset = () => {
  store.commit("setIditable", false);
  store.commit("setItem", {});
  name.value = "";
  author.value = "";
  gender.value = "";
  price.value = "";
};
</script>
