<template>
     <button @click="tambahpanjang">Tambah Panjang</button>
    <div class="h-[40px] bg-blue-200 rounded-lg transition-all" :class="setpanjang"></div>
</template>

<script>
export default {
    data() {
        return {
            panjang: 0
        }
    },
    methods: {
        tambahpanjang(){
             this.panjang += 10
         }
    },
 computed: {
      setpanjang(){
             return `w-[${this.panjang}%]`
          }
      }
}
</script>