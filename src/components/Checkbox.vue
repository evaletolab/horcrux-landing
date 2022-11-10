<template>
    <div class="checkbox-wrapper-46">
    <input class="inp-cbx" :id="uuid" :value="value" type="checkbox" @input="onInput"/>
    <label class="cbx" :for="uuid"><span>
        <svg width="12px" height="10px" viewbox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg></span><span>{{label}}</span>
    </label>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;//random number between 0 and 16
    if (d > 0) {//Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {//Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}


@Options({
  props: {
    label: {
      default: "",
      type: String,
    },
    value:{
      default: "",
      type: String,
    }
  }
})
export default class Checkbox extends Vue
{
  label!: string;
  value!: string;
  uuid: string = generateUUID(); 

  onInput(e:any):void{
    const checked = e.target.checked;
    this.$emit('onInput', {checked, value: this.value});
  }

}
</script>

<style>
  .checkbox-wrapper-46 input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }
  .checkbox-wrapper-46 .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .checkbox-wrapper-46 .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-46 .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098A9;
    transition: all 0.2s ease;
  }
  .checkbox-wrapper-46 .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-46 .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #506EEC;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  .checkbox-wrapper-46 .cbx span:last-child {
    padding-left: 8px;
  }
  .checkbox-wrapper-46 .cbx:hover span:first-child {
    border-color: #506EEC;
  }

  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child {
    background: #506EEC;
    border-color: #506EEC;
    animation: wave-46 0.4s ease;
  }
  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }
  @keyframes wave-46 {
    50% {
      transform: scale(0.9);
    }
  }
</style>