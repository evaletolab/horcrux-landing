<template>
  <div class="home">
    <div class="left-container">
      <div class="header">
        <h1>piggybank.swiss</h1>
        <p>Votre plan d’épargne en monnaies numériques</p>
      </div>
        
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
        <h1>Avec des petits montants, de manière simple et sécurisée
        </h1>
        <p>
          Nous vous aidons à assurer la sécurité et la pérennité 
          de l’accès à votre capital, à vous, votre famille, votre entreprise. 
          <b>Piggybank.swiss</b>, c’est votre tirelire numérique. 
        </p>

        <ul>
          <li><a href="#">Pour les particuliers, un moyen d'épargner</a></li>
          <li><a href="#">Pour les petites entreprises, une solution pour votre trésorerie</a></li>
          <li><a href="#">Un service 100% Suisse</a></li>
          <li><a href="#">Confiance, sécurité & 100% anonyme</a></li>
          <li><a href="#">Un investissement pour du long terme</a></li>
        </ul>

        <div class="action">
            <p>
              Partagez-nous votre intérêt, les 100 premiers bénéfécieront 
              d'un rabais de 50% sur les frais de services pendant 24 mois
            </p>
            <div class="form">
              <input v-model="email" placeholder="Votre adresse email" type="email" required />
              <button class="large" @click="submit"  v-bind:disabled="!validateEmail()" >OK</button>
            </div>
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
      .header{
        h1{
          font-weight: 600;
          margin-bottom: 15px;
          line-height: 1.1;
          font-size: 4.3rem;          
        }
      }
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
      color: var(--color-primary);

      h1{
        font-weight: 600;
        margin-bottom: 20px;
        line-height: 1.1;
        font-size: 4.1rem;
      }

      div.content{
        max-width: 700px;
        p{
          margin-bottom: 40px;
        }

        div.action{
          margin-top: 100px;
          p{
            margin-bottom: 10px;
          }
          .form{
            display: flex;
            width: 400px;
            input{
              font-size: 1.4rem;
              height: 4.5rem;
              line-height: 4.5rem;
              padding: 0 2rem;
              border-radius: 4px 0 0 4px;
              border-right: 0;
            }
            button{
              font-size: 1.4rem;
              height: 4.5rem;
              line-height: 4.5rem;
              padding: 0 2rem;
              border-radius: 0 4px 4px 0;
            }
          }
        }
      }
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
