const { perfis } = require('../schema/data/db')

module.exports = {
    salario(usuario){
        return usuario.salario_real
    },
    perfil(usuario){
        const selec = perfis.filter(u => u.id == usuario.perfil_id)
        return selec ? selec[0] : null
    }
}
