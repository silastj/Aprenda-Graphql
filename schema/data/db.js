let id = 1
function proximoId(){
    return id++
}

const perfis = [{
    id:1,
    nome:'Comum'
},{
    id:2,
    nome:'Administrador'
}]

const usuarios = [{
    id:proximoId(),
    nome: 'Ana',
    email: 'ana@ana.com.br',
    idade:15,
    perfil_id:1,
    status: 'ATIVO'

},{
    id:proximoId(),
    nome: 'Maria',
    email: 'maria@maria.com.br',
    idade:16,
    perfil_id:2,
    status: 'BLOQUEADO'
},
{
    id:proximoId(),
    nome: 'Joana',
    email: 'joana@joana.com.br',
    idade:17,
    perfil_id:1,
    status: 'INATIVO'
}]

const funcionarios = [{
    id:1,
    nome: 'Ana2',
    email: 'ana2@ana.com.br',
    idade:152
},{
    id:2,
    nome: 'Maria2',
    email: 'maria2@maria.com.br',
    idade:162
},
{
    id:3,
    nome: 'Joana2',
    email: 'joana2@joana.com.br',
    idade:172
}]

module.exports ={ perfis, usuarios, funcionarios, proximoId}