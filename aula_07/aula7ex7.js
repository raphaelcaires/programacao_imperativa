//closures = fechamento
//arrow function 
const iniciarSistema=(nome)=> {
    const bomDia=()=>{
        console.log('Bom dia',nome)}
    const tomarRemedio=()=>{
        console.log('Tome o seu remédio!!!!!',nome); }
    
bomDia();
tomarRemedio();
}

iniciarSistema('Matheus');
function bomDia(){
    console.log("boa tarde");
}
bomDia();
