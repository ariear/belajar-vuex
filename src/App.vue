<template>
  <HelloWorld />
  <div class="bg-white mx-5 px-4 py-3 rounded-lg">
    <p class="font-['Poppins'] text-xl">Berinteraksi Dengan Vuex Di Class Parent </p>
  <p>{{ $store.state.count }}</p>
  
  <button @click="$store.getters.bgwarna">Getter Sama Seperti compputed</button>

  <div v-click-away="onclickaway">
  <div  @click="isopen = !isopen">Dropwdown</div>
  <ul class="bg-gray-300 w-max overflow-hidden transition-all" :class="isopen ? 'h-max' : 'h-0'"  >
    <p href="">items 1</p>
    <p href="">item 2</p>
    <p href="">items 3</p>
  </ul>
  </div>

  <p @click="copy" class="bg-slate-50 w-max p-3 shadow rounded-lg m-4">{{ textcontent }}</p>

  <p>{{ $store.state.like }}</p>
  <button class="block py-2 px-3 bg-blue-100 rounded-lg font-['Poppins']" @click="tambahlike">Like</button>
  <button class="py-2 px-3 bg-blue-100 rounded-lg font-['Poppins'] mt-2" :class="changebg" @click="klickubahbg">Fake Like : {{ sukapalsu }}</button>

  </div>

  <Advance />
  <Random />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Advance from './components/Advance.vue'
import Random from './components/Random.vue'
export default{
  components: {
    HelloWorld,
    Advance,
    Random
},
  data() {
    return {
      isopen: false,
      textcontent: 'Text Ini Jika Di Tekan Maka Akan Disalin Di Clipboard Anda'
    }
  },
  methods: {
    onclickaway(){
      this.isopen = false
    },
    copy(){
      navigator.clipboard.writeText(this.textcontent)
    },
    tambahlike(){
      this.$store.state.like++
    },
    klickubahbg(){
      this.$store.state.biruatauhijau = !this.$store.state.biruatauhijau  // kek gini nih
    }
  },
  computed:{
    sukapalsu(){
      return this.$store.getters.fakelike
    },
    changebg(){
      return this.$store.getters.ubahbg
    },
    clickchangebg(){
      return this.$store.state.biruatauhijau = !this.$store.state.biruatauhijau // kalo ingin berubah secara trus menerus maka pakai method / mutations aja
    }
  }
}
</script>