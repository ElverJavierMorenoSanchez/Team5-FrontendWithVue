<template>
  <tr>
    <th scope="row">{{ item.EmployeeId }}</th>
    <td>{{ item.EmployeeName }}</td>
    <td>{{ item.Department }}</td>
    <td>{{ item.DateOfJoining }}</td>
    <td>{{ item.PhotoFileName }}</td>
    <td>
      <div class="row justify-content-evenly">
        <button class="btn btn-success col-5" @click="handleEdit(item)">
          <i class="bi bi-pencil-square"></i>
        </button>
        <button
          class="btn btn-danger col-5"
          @click="handleDelete(item.EmployeeId)"
        >
          <i class="bi bi-trash3-fill"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import { useStore } from "vuex";
import { deleteItem } from "../utility/axios.js";

defineProps({
  item: {},
});

const store = useStore();

const handleEdit = (item) => {
  store.commit("setIditable", true);
  store.commit("setItem", item);
};

const handleDelete = async (id) => {
  const band = confirm("Estas seguro que quieres eliminar");
  if (band) {
    const del = await deleteItem(id);
    store.dispatch("fetchData");
  }
};
</script>
