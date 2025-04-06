  const search = document.querySelector('#search');
  const cardSection = document.querySelector('#pokemonCards');
  const hide = document.querySelector('.none');



  async function fetching(num) {

       

    let url =  `api.php?id=${num}`;
    

    let response = await fetch (url);
    const data = await response.json();

  
    console.log(data);

    let pokemonName = data["name"];
    let pokemonType = data["types"];
    let pokemonImg = data["sprites"]["other"]["official-artwork"]["front_default"];
    
    let speciesUrl = data["species"]["url"];
    let speciesResponse = await fetch(speciesUrl);
    let speciesData = await speciesResponse.json();

    // Récupérer la génération
    let pokemonGeneration = speciesData["generation"]["name"];

    console.log(pokemonGeneration); 

    
    //console.log(pokemonName);

    pokemonsArray[num] = { 
        "name" : pokemonName, 
        "types" : pokemonType, 
        "img" : pokemonImg, 
        "generation" : pokemonGeneration
    }



}
  


  const pokemonsCount = 200;
  var pokemonsArray = {};

    document.addEventListener("DOMContentLoaded", async () => {
        

        for (let i = 1; i <= pokemonsCount; i++) {
            await fetching(i);
            

           let pokemonCards = document.createElement('div');
            pokemonCards.classList.add("pokemon");

            let pokemonName = document.createElement('p');
            pokemonName.classList.add("pokemon-name");
            pokemonName.innerText =  pokemonsArray[i]["name"].toLowerCase();

            let pokemonImg = document.createElement('img');
            pokemonImg.classList.add("image-pokemon");
            pokemonImg.src = pokemonsArray[i]["img"];

            let pokemonGeneration = document.createElement('p');
            pokemonGeneration.classList.add('pokemon-generation');
            pokemonGeneration.innerText = pokemonsArray[i]["generation"].toLowerCase()

            

            let typeDiv = document.createElement('div');
            typeDiv.classList.add('pokemon-types');

            let pokemonsType =  pokemonsArray[i]["types"];

            for (let i = 0; i < pokemonsType.length; i++) {
                let pokemonType = document.createElement('p');
                pokemonType.classList.add('pokemon-type');
                pokemonType.classList.add(pokemonsType[i]["type"]["name"]);
                pokemonType.innerText = pokemonsType[i]["type"]["name"];

                
                typeDiv.appendChild(pokemonType);
                
            }

            cardSection.appendChild(pokemonCards);
            pokemonCards.appendChild(pokemonImg);
            pokemonCards.appendChild(pokemonName);
            pokemonCards.appendChild(pokemonGeneration);
            pokemonCards.appendChild(typeDiv);


            //pour chercher
            

            search.addEventListener('input', () => {
                const type = search.value.toLowerCase();

                const names = document.querySelectorAll('.pokemon');
               

                names.forEach(name => {
                    const pokemons = name.querySelector('.pokemon-name');

                    if (type === '') {
                        name.classList.remove('none')
                    } else if (pokemons.textContent.toLowerCase().includes(type)) {
                        name.classList.remove('none')
                    } else {
                        name.classList.add('none')
                    }
                })


            });


            //filter type

            const selectPokemon = document.getElementById('pokemonSelect');
            const cards = document.querySelectorAll('.pokemon');
            const container = document.querySelectorAll('.pokemonCards');
            
            
            selectPokemon.addEventListener('change', () => {
                // console.log(cards.length)

                container.forEach( containe => {
                    containe.classList.remove('none'); 
                })

                const selectedType = document.getElementById('pokemonSelect').selectedOptions[0].value;

                cards.forEach(card => {
                    
                   const cardType = card.querySelector('.pokemon-type').textContent
                //    console.log('selectedType:', selectedType);
                //    console.log('cardType:', cardType);
                 //  console.log('ok')
                   
                    if (cardType === selectedType || selectedType === '' ) {
                        card.classList.remove('none')
                    } else {
                        card.classList.add('none')
                    }
                })

            })

            // filter generation

            const selectGeneration = document.getElementById('generation-filter');
            const cards2 = document.querySelectorAll('.pokemon');
            const container2 = document.querySelectorAll('.pokemonCards');

            selectGeneration.addEventListener('change', () => {
                

                container2.forEach( containe => {
                    containe.classList.remove('none'); 
                })

                const selectedType2 = document.getElementById('generation-filter').selectedOptions[0].value;

                cards2.forEach(card => {
                    
                   const cardType2 = card.querySelector('.pokemon-generation').textContent
              
                   
                    if (cardType2 === selectedType2 || selectedType2 === '' ) {
                        card.classList.remove('none')
                    } else {
                        card.classList.add('none')
                    }
                })

            })
            

            

               
                    
                    /*if (type === "") {
                        console.log('non');
                        pokemonCards.classList.remove('none');
                    }
            
                    if (type === pokemonName) {
                        console.log("its pikachu");
                        pokemonCards.classList.add('none');
                    } */
                    
            
    
            //});


            //

            /*search.addEventListener('input', () => {
                const type = search.value.toLowerCase(); // Récupère la valeur de recherche en minuscules
            
                const cards = document.querySelectorAll('.pokemon'); // Sélectionne toutes les cartes
            
                cards.forEach(card => {
                    const name = card.querySelector('.pokemon-name'); // Récupère le nom de chaque carte
            
                    // Si la recherche est vide, on affiche toutes les cartes
                    if (type === "") {
                        card.classList.remove('none');
                    } else if (name.textContent.toLowerCase().includes(type)) {
                        // Si le nom contient le texte recherché, on affiche la carte
                        card.classList.remove('none');
                    } else {
                        // Sinon, on cache la carte
                        card.classList.add('none');
                    }
                });
            }); */
            
        }

        
    });


    
    
    
   


