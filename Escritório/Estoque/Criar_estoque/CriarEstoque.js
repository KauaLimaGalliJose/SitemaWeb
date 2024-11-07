let mRainha = document.getElementById('modelo_rainha');
let preview =  document.getElementById('modelo_imagem');

function img_modelo(){
    const fileInput = document.getElementById('ImagemInput');
 
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        
        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                preview.src = event.target.result;
                preview.style.display = 'block'; // Mostra a imagem de pré-visualização
                mRainha.style.display = 'none';
            }

            reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
        }
    });
}

function verificar(){
    let chave = true;

    while(chave == true){
        if(preview.style.display !== 'block'){
            chave = false;
            alert('Sem Imagem ');
        }
        else{
            
        }
        if(chave === true){
            break
        }
    }
}