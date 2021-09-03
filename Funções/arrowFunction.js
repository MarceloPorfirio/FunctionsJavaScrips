//método mais simplificado de usar

const retorna_media = (nota_1 , nota_2) =>(nota_1 + nota_2)/2


let media_aluno = retorna_media(7,8)
let status

    if(media_aluno > 6){

        status = 'Aprovado'
        media = media_aluno
    }else{
        status = 'Reprovado'
        media = media_aluno
    }


let status_aluno1 = retorna_media( 8,9)
console.log('O aluno foi ' + status_aluno1 +', com média de ' + media)
//console.log('A media é ' + media + ', o aluno foi' + status)

let status_aluno2 = retorna_media( 6,7)
console.log('O aluno foi ' + status_aluno2 +', com média de ' + media)