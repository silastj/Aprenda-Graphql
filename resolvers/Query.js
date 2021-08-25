const { perfis, usuarios } = require('../schema/data/db')

module.exports = {
    ola(){
        return 'Bom dia!'
    },
    horaAtual(){
        return `${new Date()}`
    },
    horaInicial(){
        return new Date
    },
    user(){
        return {
            id: 1,
            nome: 'Silas',
            email:'silastj@hotmail.com',
            idade:37,
            salario_real: 2000,
            vip: false
        }
    },
    produtoEmDestaque(){
        return{
            nome: "Honda HRV",
            preco: 70000.00,
            desconto: 0.15
        }
    },
    numerosMegaSena() {
        // return [10,20,30,40,50,60]
        const crescente = (a,b) => a -b
        return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 - 1))
        .sort(crescente)
    }
    ,usuarios(){
        return usuarios
    }
    //recebendo argumentos ou parametros pode substituir o args para { id } e na linha abaixo comparar apenas com id
    ,usuario(_, args){
        const selec = usuarios.filter(u => u.id == args.id)
        return selec ? selec[0] : null
    },
    perfis(){
        return perfis
    },
    perfil(_, {id}){
        const per = perfis.filter(p => p.id === p.id)
        return per ? per[0] : null
    }
}