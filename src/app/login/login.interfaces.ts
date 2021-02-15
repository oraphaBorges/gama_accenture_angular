export interface LoginCredenciais{
    usuario:string,
    senha:string
}
export interface LoginResponse{
    conta: {
        id: number, 
        numero: string, 
        saldo: number, 
        tipo: string, 
        descricao: string
    }
    contaCredito: {
        id: number, 
        numero: string, 
        saldo: number, 
        tipo: string, 
        descricao:string
    }
    dataFim: Date,
    dataInicio: Date,
    token: string,
    usuario:{
        cpf: string
        id: number
        login: string
        nome: string
        redefinirSenha: string
        senha: string
        senhaTemporaria: string
    }
} 