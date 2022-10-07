<template>
  <div class="home container">

    <!-- Digital identity -->
    <div class="">
        <h2>Protect your Digital Identity</h2>
        <p>
          Digital identity is a new reality, it appears complex or wird because we have no practice on that subject.
          The goal of this application is to provide a few solutions to protect your identiy without the needs of a trusted thirdparties.
        </p>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Drawer from '@/components/Drawer.vue';
import { i18n } from '../services';
@Options({
  components: {
    Drawer
  }
})
export default class Home extends Vue {
  
  drawer: any = {
    vault: false,
    print: false
  }



  mounted() {
    //
  }
}
</script>
