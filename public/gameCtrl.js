angular.module('blackJack').controller('gameCtrl', ['$scope', 'Deck', 'Player', 'Game', function($scope, Deck, Player, Game) {
	$scope.deck = new Deck
	$scope.deck.makeSuits()
	$scope.player = new Player
	$scope.game = new Game
	$scope.game.addDeck($scope.deck)
	$scope.game.addPlayer($scope.player)
	$scope.game.startGame()
	


}
]) 




