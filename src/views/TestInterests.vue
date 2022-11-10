<template>
    <interests />
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
}
</script>