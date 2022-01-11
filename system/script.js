function decks()
{

	let decks = window.document.getElementById("res");

	decks.innerHTML = `<div class="info1">

            <div id="deckArea">

                <p>LogBait</p> <hr>

                <img src="image/cartas/barril-de-goblins.png">
                <img src="image/cartas/cavaleiro.png">
                <img src="image/cartas/gangue.png">
                <img src="image/cartas/foguete.png"> <br>
                <img src="image/cartas/princesa.png">
                <img src="image/cartas/torre-inferno.png">
                <img src="image/cartas/tronco.png">
                <img src="image/cartas/espirito-de-gelo.png">

                
            </div>

        </div>`
}

function cartas()
{
	let decks = window.document.getElementById("res");

	decks.innerHTML = `
	<div class="info1">

	    <div id="deckArea">
	    	<h2>Ainda sem Conteúdo D:</h2>
	    </div>

	</div>




	    `
}