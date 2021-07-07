const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('feito com o for:', nomes[i], i);
}

//simplificada de fazer for - array
nomes.forEach(function(nome, i) {
    console.log('feito com o foreach: ', nome, i);
})
