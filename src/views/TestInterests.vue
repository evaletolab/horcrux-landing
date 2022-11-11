<template>
    <interests :interests="interests"  @onInterestsUpdate="onInterestsUpdate"/>
</template>

<script lang="ts">
import Interests from "@/components/Interests.vue";
import { Options, Vue } from "vue-class-component";

@Options({
    components: {
        Interests,
    }
})
export default class TestInterest extends Vue
{
  interests = ["tirelire numérique", "plan d'épargne", "trésorerie PME" ];

  onInterestsUpdate(e: {selectedInterests: string[]}){
    console.log("selected interests", e.selectedInterests);
  }
}
</script>