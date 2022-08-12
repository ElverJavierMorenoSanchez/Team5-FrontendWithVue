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
              placeholder="ID"
              required
              v-model="EmployeeId"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Nombre del empleado"
              required
              v-model="EmployeeName"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Departamento"
              required
              v-model="Department"
            />

            <input
              type="date"
              class="form-control mt-1"
              placeholder="Fecha de incorporación"
              required
              v-model="DateOfJoining"
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Nombre de la foto"
              required
              v-model="PhotoFileName"
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

const EmployeeId = ref("");
const EmployeeName = ref("");
const Department = ref("");
const DateOfJoining = ref("");
const PhotoFileName = ref("");

watch(item, () => {
  if (editable.value) {
    EmployeeId.value = item.value.EmployeeId;
    EmployeeName.value = item.value.EmployeeName;
    Department.value = item.value.Department;
    DateOfJoining.value = item.value.DateOfJoining;
    PhotoFileName.value = item.value.PhotoFileName;
  }
});

const handleSubmit = async () => {
  const newItem = {
    EmployeeId: EmployeeId.value,
    EmployeeName: EmployeeName.value,
    Department: Department.value,
    DateOfJoining: DateOfJoining.value,
    PhotoFileName: PhotoFileName.value,
  };

  if (editable.value) {
    const message = await updateItem(store.state.item.EmployeeId, newItem);
    alert(message);
  } else {
    const message = await postItem(newItem);
    alert(message);
  }

  handleReset();
  store.dispatch("fetchData");
};

const handleReset = () => {
  store.commit("setIditable", false);
  store.commit("setItem", {});
  EmployeeId.value = "";
  EmployeeName.value = "";
  Department.value = "";
  DateOfJoining.value = "";
  PhotoFileName.value = "";
};
</script>
