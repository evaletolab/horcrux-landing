<template>
  <div class="home container">

    <!-- Digital identity -->
    <div class="">
        <h2>Protect your Digital Identity</h2>
        <p>
          Digital identity is a new reality, it appears complex or wird because we have no practice on that subject.
          The goal of this application is to provide a few solutions to protect your identiy without the needs of a trusted thirdparties.
        </p>
        <input v-model="email" placeholder="enter email" type="email" required />
        <input @click="submit" value="submit" type="submit"  v-bind:disabled="!validateEmail()" />
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Drawer from '@/components/Drawer.vue';
import { i18n } from '../services';
import axios from 'axios';

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
  email = "";


  mounted() {
    //
  }
  
  validateEmail(): boolean {
    const re = /^\S+@\S+$/
    return re.test(this.email);
  }

  async submit(){
    console.log("got email", this.email);
    try{
      const response = await axios.post('/request-subscription', {email:this.email});
      console.log(response); 
    }catch(e:any){
      console.error(e);
    }
  }
}
</script>
