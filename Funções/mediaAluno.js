

function retorna_status_aluno (nota_1, nota_2){

    let media = (nota_1 + nota_2)/2
    let status
    
   

    if(media > 6){
        status = 'Aprovado'
        
    }else{
        status = 'Reprovado'
        
    }
   
    return status 
    
}

let status_aluno1 = retorna_status_aluno(7,8)
console.log('Aluno 1 '  + status_aluno1) 

let status_aluno2 = retorna_status_aluno(5,4)
console.log('Aluno 2 '  +status_aluno2)
