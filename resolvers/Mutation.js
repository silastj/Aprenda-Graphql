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
        },
        alterarUsuario(_, args) {
            const i = usuarios  
                .findIndex(u => u.id === args.id)
                if(i < 0) return null
                
                usuarios[i].nome = args.nome
                usuarios[i].email = args.email
                if(args.idade){
                    usuarios[i].idade = args.idade
                }

                return usuarios[i]

        }
        //MODO SIMPLIFICADO

        // alterarUsuario(_, args) {
        //     const i = usuarios  
        //         .findIndex(u => u.id === args.id)
        //         if(i < 0) return null
        //         const usuario = {
        //             ...usuarios[i],
        //             ...args
        //         }
        //         usuarios.splice(i,1,usuario)
        //         return usuarios[i]
        // }

        //MODO SIMPLIFICADO
    }