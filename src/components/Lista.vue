<template>
  <div>
    <ul class="list-group">
      <li v-for="fruta in frutas" :key="fruta.nombre"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{fruta.nombre}}
        <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

    import {mapState} from 'vuex';

    export default {
        name: "Lista",
        computed: {
            ...mapState(['frutas'])
        }
    };
</script>

<style scoped>

</style>