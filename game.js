var tabela = document.querySelector('table');
var mensagens = document.querySelector('#mensagens');
var Game = {
    iniciar(){
        this.campos = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
        this.jogadorAtual = 'X';
        this.jogoFinalizado = false;
        this.rodadas = 0;
        this.renderizar();
    },
    jogoAcabou(){
        var linhas = 3,colunas = 3, totalLinhas = 0,totalColunas = 0,campos = this.campos;
        for(var i = 0;i < linhas;i++){
            totalLinhas = 0;
            totalColunas = 0;
            for(var j = 0;j < colunas;j++){
                if(campos[i][j] === 'X'){
                    totalLinhas++;
                }
                if(campos[i][j] === 'O'){
                    totalLinhas--;
                }
                if(campos[j][i] === 'X'){
                    totalColunas++;
                }
                if(campos[j][i] === 'O'){
                    totalColunas--;
                }
                if(totalLinhas === 3 || totalColunas === 3){
                    return 'X';
                }
                if(totalLinhas === -3 || totalColunas === -3){
                    return 'O';
                }
                if(campos[0][0] ===  'O' && campos[1][1] === 'O' && campos[2][2] === 'O'){
                    return 'O';
                }
                if(campos[0][0] === 'X' && campos[1][1] === 'X' && campos[2][2] === 'X'){
                    return 'X';
                }
                if(campos[0][2] === 'X' &&  campos[1][1]=== 'X' && campos[2][0] === 'X'){
                    return 'X';
                }
                if(campos[0][2] === 'O' && campos[1][1]=== 'O' && campos[2][0] === 'O'){
                    return 'O';
                }  
            }
        }
        if(this.rodadas == (linhas * colunas)){
            return 'Empate!'
        }
    },
    proximoJogador(){
        this.jogadorAtual = this.jogadorAtual == 'X' ? 'O': 'X';
    },
    marcarCampos(indiceLinha,indiceColuna){
        if(!this.jogoAcabou() && this.campos[indiceLinha][indiceColuna] === ''){
            this.campos[indiceLinha][indiceColuna] = this.jogadorAtual;
            this.rodadas++;
            this.proximoJogador();
            this.renderizar();
        }
    },
    renderizar(){
        var modelo = '';
        var vencedor = this.jogoAcabou();
        mensagens.innerText = vencedor ? `Vencedor: ${vencedor}`:`Jogador atual: ${this.jogadorAtual}`;
        if(vencedor){
            this.jogoFinalizado = true;
        }
        this.campos.forEach((linha,indiceLinha)=>{
            modelo += '<tr>';
            linha.forEach((coluna,indiceColuna)=>{
                modelo += `<td onclick="Game.marcarCampos(${indiceLinha},${indiceColuna})">${coluna}</td>`;
            });
            modelo += '</tr>';
        });
        tabela.innerHTML = modelo;
    }

}
Game.iniciar();