angular.module('myApp').component('myComponent',{
    templateUrl: 'myComponent.html',
    controller: MyComponentController,
    bindings: {
        text: '<',
        myFunc: '='
    },
    transclude: true
})

function MyComponentController(){
    var vm  = this;
    vm.onChange = function() {
        console.log('Function from Component', vm.text);
        vm.myFunc(vm.text);    
    }
}