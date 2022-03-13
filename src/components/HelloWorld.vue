<template>
<div class="bg-white m-5 rounded-lg px-3 py-3">
  <p class="font-['Poppins'] m-3 text-lg">Memanggil State Dan Mutations Di Class Parent</p>
  <div class="flex">
  <p v-for="(n , index) in $store.state.nama" :key="index" @click="hapuscontent(index)" class="ml-3 py-2 px-3 bg-slate-200">{{ n }}</p>
  </div>
  <form @submit.prevent="tambahcontent">
  <input type="text" v-model="tambahkelas" placeholder="Kelas Baru" class="bg-blue-100 py-2 px-4 m-3 rounded shadow">
  </form>
  <p>{{ $store.state.count }}</p>
  <button @click="handleclick" class="bg-blue-100 py-2 px-4 m-3 rounded shadow">Increment</button>

  <p>{{ $store.state.password }}</p>
  <button @click="generaterandpassword" class="bg-blue-100 py-2 px-4 m-3 rounded shadow">Generate New Password</button>


<p v-for="(n, index) in $store.state.datauser" :key="index">{{ n.name }}</p>
<button @click="userfake" class="bg-blue-100 py-2 px-4 m-3 rounded shadow">Generate User Fake</button>
</div>
</template>

<script>

export default {
  data() {
    return {
      tambahkelas: ''
    }
  },
  methods: {
    handleclick(){
      this.$store.commit("increment")
    },
    hapuscontent(index){
      this.$store.state.nama.splice(index, 1)
    },
    tambahcontent(e){
      this.$store.state.nama.push(e.target[0].value)
    },
    generaterandpassword(){
      this.$store.commit("generaterandompassword")
    },
    userfake(){
      this.$store.dispatch('getuser')
    }
  },
  // mounted() {
  //   this.$store.dispatch('getuser')  // bisa juga mounted
  // },
}
</script>