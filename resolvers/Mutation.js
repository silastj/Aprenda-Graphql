const { usuarios, proximoId} =
    require('../schema/data/db')

    module.exports ={
        // quando for muitos atributos pode simplificar
        // { nome, email , idade} resumindo com  args
        novoUsuario(_, args){
            // quando for muitos atributos pode simplificar
            // nome, email, idade, resumindo ...args

            // verificando se existe algum email cadastrado
            //return de true ou false
            const emailExistente = usuarios
            .some(u => u.email === args.email)
            //condição da existencia do email
            if(emailExistente){
                throw new Error('Email cadastrado')
            }  

            const novo ={
                id: proximoId(),
                ...args,
                perfil_id:1,
                status: 'ATIVO'
            }

            usuarios.push(novo)
            return novo
        },
        excluirUsuario(_, { id }){
            const i = usuarios
                .findIndex(u => u.id === id )
            if( i < 0) return null
            const excluidos =
                usuarios.splice(i, 1)
            return excluidos ? excluidos[0] : null
        }
    }