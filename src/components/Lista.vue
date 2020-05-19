<template>
  <div>
    <ul class="list-group">
      <li v-for="(fruta, index) in arrayOrdenado" :key="fruta.nombre" @click="aumentar(index)"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{index}} - {{fruta.nombre}}
        <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
  </div>
</template>

<script>

    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "Lista",
        computed: {
            ...mapState(['frutas']),
            arrayOrdenado(){
              // eslint-disable-next-line vue/no-side-effects-in-computed-properties
              return this.frutas.sort( (a, b) => b.cantidad - a.cantidad )
            }
        },
        methods: {
          ...mapMutations(['aumentar', 'reiniciar'])
        }
    };
</script>

<style scoped>

</style>