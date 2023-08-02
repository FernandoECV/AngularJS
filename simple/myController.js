angular.module('myApp').controller('myController', myController);

function myController() {
    var vm = this;
    vm.myTitle = 'Treinaweb';
    
    vm.print = function(value){
        console.log('Function from Controller: ', value);
    }

    vm.$onInit = function() {
        console.log('Iniciando Componente')
    }    
    
    
}