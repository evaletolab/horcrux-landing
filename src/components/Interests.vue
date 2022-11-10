<template>
  <div class="checkboxes">
    <checkbox 
      v-for="interest in interests" 
      :value="interest" 
      :label="interest" 
      @onInput="onInput" 
      :key="interest"
      class="checkbox" />
  </div>
</template>


<script lang="ts">
import Checkbox from '@/components/Checkbox.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    Checkbox,
  }
})
export default class Interests extends Vue {

  interests = ["tirelire numérique", "plan d'épargne", "trésorerie PME" ];
  // checkbox state saved in bitfield
  bitfield = 0;

  onInput({checked, value}: {checked: boolean, value: string}){
    const index = this.interests.indexOf(value);
    if(checked){
      this.bitfield |= (1 << index);
    }else{
      this.bitfield &= ~(1 << index);
    }
  }
}
</script>

<style>
.checkboxes{
  margin: 100px;
  text-align: left;
}
.checkbox
{
  margin-bottom: 10px;
}
</style>