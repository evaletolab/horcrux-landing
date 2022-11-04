<template>
  <div class="home">
    <div class="left-container">
      <div class="piggybank">
        <img src="@/assets/piggybank.png"/>
      </div>
      <div class="">
          <p>
            Nous proposons au grand public l’accès aux deux 
            principales monnaies numériques <b>sans intermédiaire</b>. 
            <b>Seul vous</b>, et les personnes de votre choix y 
            auront accès.
          </p>
      </div>
    </div>
    <div class="right-container">
      <div class="content">
        <h1>piggybank.swiss</h1>
        <p>C'est l’accès aux monnaies numériques pour tous, avec 
          des petits montants, de manière simple et sécurisée pour un objectif à long terme. 
          Nous vous aidons à monter votre propre plan d’épargne 
          numérique. 
        </p>

        <ul>
          <li><a href="#">Une solution innovante</a></li>
          <li><a href="#">Un service 100% Suisse</a></li>
          <li><a href="#">Confiance & sécurité</a></li>
          <li><a href="#">Calculer votre participation</a></li>
        </ul>

        <div class="action">

            <input v-model="email" placeholder="enter email" type="email" required />
            <button class="large" @click="submit"  v-bind:disabled="!validateEmail()" >JE SUIS INTERRESSE.E</button>
        </div>
      </div>
    </div>    
  </div>

</template>
<style scoped lang="scss">
  .home{
    display: flex;
    height: 100vh;
    text-align: left;
    overflow: hidden;
    overflow-y: auto;
    @media (max-width:1024px) {
      flex-direction: column;
    }

    .right-container,
    .left-container {
      width: 50vw;
    }

    @media (max-width:1024px) {
      flex-direction: column;
      .right-container,
      .left-container {
        width: 100vw;
      }
    }

    .left-container {
      max-width: 1024px;
      color: white;   
      background: var(--color-primary);

      display: flex;
      flex-direction: column;
      justify-content: flex-end;      

      padding: 40px;

      .piggybank{
        text-align: center;
        margin: auto;
        img{
          width: 50%;
        }
      }
    }
    .right-container {
      display: flex;
      flex-direction: column;
      justify-content: center;      
      padding: 40px;
      h1{
        font-weight: 600;
        margin-bottom: 30px;
      }

      div.content{
        max-width: 700px;

        div.action{
          width: 300px;
        }
      }
    }

    ul{
      list-style: none;
      margin-bottom: 50px;
    }

    button.large{
      font-size: 1.4rem;
      height: 4.5rem;
      line-height: 4.5rem;
      padding: 0 2rem;      
    }
  }
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
