(function () {
    "use strict";
    angular
        .module("sorteio", [])
        .controller("sorteioControl", function ($scope) {
            
          /* ***************    INIT VARIÁVEIS    *********************************** */
           $scope.contador = 'Sortear 3º Prêmio'
           var conta = 0;

          /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */  
            
            
            $scope.participantes = [
                {cupom: '5089', nome: 'Danilo Ramalho Silva de Araujo Dantas'},
                {cupom: '5048', nome: 'Raul Nascimento'},
                {cupom: '5135', nome: 'Lucas Pereira'},
                {cupom: '5545', nome: 'Amanda Carvalho Cariri'},
                {cupom: '5243', nome: 'Vlamir Lucas Pereira'},
                {cupom: '5014', nome: 'Tamires Regina de souza Oliveira'},
                {cupom: '4027', nome: 'Matheus Dantas Silva'},
                {cupom: '1520', nome: 'Rafael de Oliveira Neto'},
                {cupom: '1824', nome: 'Catarina Silvestre Macedo'}
                
            ];

           
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