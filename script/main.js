//Funcion de Encriptar texto
function encriptar(text){
    resultado = "";

    var map = { "a": "ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};
    for (i = 0; i < text.length; i++) {
        var l = text[i];

        if(map[l]){
            resultado += map[l];
        } else {
            resultado += l;
        }  
    }
    return resultado;
}

//Funcion de desencriptar texto
function desencriptar (text){
    
    resultado = "";

    for (i = 0; i < text.length; i++) {

        var l = text[i];

        if(l == 'a' && text[i+1] == 'i'){
            resultado += l;
            i += 1;
        } else if(l == 'e' && text[i+1] == 'n' && text[i+2] == 't' && text[i+3] == 'e' && text[i+4] == 'r'){
            resultado += l;
            i += 4;
        } else if(l == 'i' && text[i+1] == 'm' && text[i+2] == 'e' && text[i+3] == 's'){
            resultado += l;
            i += 3;
        } else if(l == 'o' && text[i+1] == 'b' && text[i+2] == 'e' && text[i+3] == 'r'){
            resultado += l;
            i += 3;
        } else if(l == 'u' && text[i+1] == 'f' && text[i+2] == 'a' && text[i+3] == 't'){
            resultado += l;
            i += 3;
        } else {
            resultado += l;
        }
    }
    return resultado;
}

//Funcion que permite habilitar en pantalla el "display: block" o "display: none" al dar clic en los botones Encriptar o Desencriptar
function procesarTexto (type){ 
    var text = document.getElementById("input").value;
    document.getElementById("input").value = "";
    text = text.trim();
    
    if(text == ""){
        
        document.getElementById('nodata').style.display = 'block';
        document.getElementById('data').style.display = 'none';

        return
    }
    
    var result = (type ==1) ? encriptar(text) : desencriptar(text);
    console.log (result);
    
    document.getElementById("resultt").innerText = result;
    document.getElementById('nodata').style.display = 'none';
    document.getElementById('data').style.display = 'block';
}

//Funcion que copia el texto encriptado o desencriptado
function copiarTexto() {
    var aux = document.createElement("textarea");
    aux.innerHTML = document.getElementById("resultt").innerText;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("El texto ha sido copiado");
}