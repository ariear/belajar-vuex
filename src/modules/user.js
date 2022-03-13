export default{
    namespaced: true,
    state : {
        username: 'Arie',
        kota: '',
    },
    mutations: {
        changename(state){
    state.username = 'Eko Kurniawang'
        }
    }
}