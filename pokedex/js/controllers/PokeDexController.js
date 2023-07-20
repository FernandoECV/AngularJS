angular.module('pokedexApp')
.controller('PokeDexController', PokeDexController);

// PokeDexController.$inject = ['PokeApiFactory']

function PokeDexController(PokeApiFactory){
    var vm = this;
    vm.searchText = '';
    vm.pkmList = [
        {name: 'bulbasaur', number: '001'},
        {name: 'pikachu', number: '025'},
        {name: 'mew', number: '151'},
        {name: 'chikorita', number: '152'},
        {name: 'celebi', number: '251'},
    ];

    // if(PokeApiFactory.pkmList.length){
    //    vm.pkmList = PokeApiFactory.pkmList;
    // }else{
    //     PokeApiFactory.listAll()
    //         .then(pkmList => {
    //             vm.pkmList = pkmList;
    //         })
    // }
}