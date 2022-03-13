<template>
  <div class="py-2 px-3 m-4 bg-white rounded-lg">
      <p class="font-['Poppins'] text-xl m-3">Belajar Map Helper</p>
      <p>{{ like }}</p>
      <p>{{ kelas }}</p>
      <p>{{ fakelike }}</p>
      
      <button @click="setpanjang" class="py-2 px-3 bg-blue-200 rounded-lg font-['Poppins']">Tambah Panjang</button>
          <p>{{ panjang }}</p>

        <button @click="getuser" class="font-['Poppins'] py-2 px-3 bg-green-400 rounded-md">Get User</button>

        <p>{{ username }}</p>
        <button @click="changename">Ubah User</button>
  </div>
</template>

<script>
import { mapState , mapGetters , mapMutations , mapActions} from "vuex"
export default {
    computed: {
        ...mapState(['like','panjang']),
        ...mapState({
            kelas : 'nama'      /// jika ingin memberikan nama 
        }),
        ...mapGetters(['fakelike']),

        // memanggil state di modules
        ...mapState({
            username: state => state.user.username      // <- user itu yang sudah di daftarkan di modules
        }),
    },
    methods: {
        ...mapMutations(['setpanjang']),
        ...mapActions(['getuser']),
        ...mapMutations({
            changename: 'user/changename'       // <- memanggil mutations modules user
        })
    },
}
</script>