<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm" cellspacing="0">
      <thead>
        <tr>
          <th class="th-sm">Id</th>
          <th class="th-sm">Nombre</th>
          <th class="th-sm">Rol</th>
          <th class="th-sm">Promedio</th>
          <th class="th-sm">Opciones</th>
        </tr>
      </thead>
      <tbody id="items">
        <Item v-if="item.id && !editable" :item="item" />
        <Item v-else v-for="item of items" :key="item.id" :item="item" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import Item from "./Item.vue";

const store = useStore();
const items = computed(() => store.state.items);
const item = computed(() => store.state.item);
const editable = computed(() => store.state.editable);
</script>
