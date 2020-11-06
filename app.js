(function () {
    "use strict";
    angular
        .module("sorteio", [])
        .controller("sorteioControl", function ($scope) {
            
          /* ***************    INIT VARIÁVEIS    *********************************** */
           $scope.contador = 'Sortear 3º Prêmio'
           var conta = 0;
           var participantes = [];
          

          /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */  
            
            
            $scope.participantes = [
                                
            ];

            $scope.uploadExel = function(){

                var myFile = document.getElementById('file');
                var input = myFile;
                var reader = new FileReader();
                reader.onload = function(){
                    var fileData = reader.result;
                    var workbook = XLSX.read(fileData, {type: 'binary'});
                    workbook.SheetNames.forEach(function(sheetName){
                        var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                        $scope.participantes = rowObject;                        
                    });
                    
                    
                };

                reader.readAsBinaryString(input.files[0]);

            };

           
            $scope.sortear = function () {
                                
                $scope.mostrar = true;
                $scope.ganhador = $scope.participantes[Math.floor(Math.random()*$scope.participantes.length)];
                
                if(conta == 0){
                    $scope.contador = "Sortear 2º Prêmio";
                    $scope.terceiro = $scope.ganhador;                    
                }else if (conta == 1){
                    $scope.contador = "Sortear 1º Prêmio";
                    $scope.segundo = $scope.ganhador;                
                }else if(conta == 2){
                    $scope.contador = "Finalizar Sorteio";
                    $scope.primeiro = $scope.ganhador;
                }else{
                    $scope.fim = "Obrigado a todos que participaram!";
                    $scope.mostrar = false;
                    $scope.esconder = true;
                }
                conta = conta + 1;
            };

            /* ***************    FUNÇÕES INSTERNAS    ******************************** */

           
    });        

})();