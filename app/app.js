(function () {
    "use strict";
    angular
        .module("sorteio", [])
        .controller("sorteioControl", function ($scope) {
            
        /* ***************    INIT VARIÁVEIS    *********************************** */
        $scope.contador = 'Sortear 3º Prêmio'
        $scope.terceiro =[{cupom:"", nome:""}];
        $scope.terceiro =[{cupom:"", nome:""}];
        $scope.segundo =[{cupom:"", nome:""}];
        $scope.primeiro =[{cupom:"", nome:""}];
        var conta = 0;
        var exelJ = [];
                               

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */  
            
        $scope.uploadExel = function(){
                                                 
            var myFile = document.getElementById('file');
            var input = myFile;
            var reader = new FileReader();
            reader.onload = function(){
                var fileData = reader.result;
                var workbook = XLSX.read(fileData, {type: 'binary'});
                workbook.SheetNames.forEach(function(Planilha1){
                    var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[Planilha1]);
                    exelJ = rowObject;
                    $scope.participantes = rowObject;                        
                });
                    
                for(var i =0; i < exelJ.length; i++){
                    var data = exelJ[i];
                    $('#myTable tbody:last-child').append("<tr><td>"+data.cupom+"</td><td>"+data.nome+"</td></tr>");

                }                    
            }
            reader.readAsBinaryString(input.files[0]);
            $scope.aki = true
        };


        $scope.pagina = function(){
            $scope.pg = true;
        };
           
                        
        $scope.sortear = function (){
            $scope.mostrar = true
                
            $scope.rodar();
            
            if(conta == 0){
                $scope.contador = "Sortear 2º Prêmio";
                $scope.terceiro = $scope.ganhador;
                $scope.playAudio();                    
            }else if (conta == 1){
                $scope.contador = "Sortear 1º Prêmio";
                $scope.segundo = $scope.ganhador;
                $scope.playAudio();                
            }else if(conta == 2){
                $scope.contador = "Finalizar Sorteio";
                $scope.primeiro = $scope.ganhador;
                $scope.playAudio();
            }else{
                $scope.fim = "Obrigado a todos que participaram!";
                $scope.mostrar = false;
                $scope.esconder = true;
            }
            conta = conta + 1               
        }
            
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
            
        $scope.rodar = function(){
            $scope.ganhador = $scope.participantes[Math.floor(Math.random()*$scope.participantes.length)];
            $scope.verifica();
        }

        $scope.verifica = function(){                

            if($scope.ganhador.nome == null ){
                $scope.passa = "passei no zero";
                $scope.rodar();
                    
            }else{
                $scope.passau = "passei no primeiro";
                $scope.verificarr();                    
            }

        }

        $scope.verificarr = function(){                

            if($scope.ganhador.cupom == $scope.terceiro.cupom || $scope.ganhador.cupom == $scope.segundo.cupom || $scope.ganhador.cupom == $scope.primeiro.cupom){
                $scope.passauu = "passei no segundo";
                $scope.rodar();                    
            }else{
                $scope.passauuu = "passei no terceiro";

            }
        }

        $scope.playAudio = function() {
            var audio = new Audio('Aplauso01.mp3');
            audio.play();
        };
            
    });        

})();