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
  props:{
    interests:{
      default:[],
      type: Array,
    }
  },
  components: {
    Checkbox,
  }
})
export default class Interests extends Vue {
  interests: string[] = [];
  selectedInterests:string[] = [];

  onInput({checked, value}: {checked: boolean, value: string}){
    if(checked){
      this.selectedInterests.push(value);
    }else{
      const index = this.selectedInterests.indexOf(value);
      if(index > -1){
        this.selectedInterests.splice(index, 1);
      }
    }

    this.$emit("onInterestsUpdate", { selectedInterests: this.selectedInterests.slice()});
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