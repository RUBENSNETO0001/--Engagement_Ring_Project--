function confirmacao(event){
    event.preventDefault();
    let random = Math.floor(Math.random() * 3);
    let nome = document.getElementById("input_nome").value;

    if(nome === "amor" || nome === "Amor"){
        document.getElementById('camada01').style.display = 'none';
        document.getElementById('camada02').style.display = 'block';
    }
    else if(nome === ''){alert("Coloque um nome para prosseguir!");}
    else{
        if(random === 0){alert("Tem certeza?");}
        else if(random === 1){alert("Você tem certeza?");}
        else{alert ("vou da uma dica \"amor\"o kk");}
    }
    return false;
}