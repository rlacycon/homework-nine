function startGame() {
    var user = prompt("Welcome! This is a Pokémon adventure. Please start by entering your name: ");
    alert("Hello " + user + "! Today you embark on a Pokémon journey. Are you ready? Click OK to begin.");

    var starterPokemon = prompt("Professor Oak offers you three Pokémon to choose as your starter: Bulbasaur, Charmander, or Squirtle. Which one will you choose?");
    
    function leaveLab() {
        var rivalEncounter = prompt("You decide to leave the lab and begin your journey. Suddenly, your rival appears and challenges you to a battle with their Pokémon. Do you ACCEPT or DECLINE?");
        
        if (rivalEncounter.toUpperCase() === "ACCEPT") {

            if (starterPokemon.toUpperCase() === "BULBASAUR") {
                alert("You send out Bulbasaur and win the battle against your rival's Pokémon!");
            } else if (starterPokemon.toUpperCase() === "CHARMANDER") {
                alert("You send out Charmander and win the battle against your rival's Pokémon!");
            } else if (starterPokemon.toUpperCase() === "SQUIRTLE") {
                alert("You send out Squirtle and win the battle against your rival's Pokémon!");
            }
            alert("You emerge victorious and continue your journey as a Pokémon Trainer. Congratulations!");
        } else if (rivalEncounter.toUpperCase() === "DECLINE") {
            alert("You choose to decline the battle. Your rival laughs at you and leaves, but you continue on your journey undeterred.");
        } else {
            alert("Not an option. Please try again.");
        }
    }

    function chooseLab() {
        var labChoice = prompt("You choose your starter Pokémon and decide to stay in the lab for further training. Do you want to practice BATTLES or CATCHING Pokémon?");

        if (labChoice.toUpperCase() === "BATTLES") {
            alert("You spend hours practicing battles with your Pokémon, honing your skills for future challenges.");
            alert("After rigorous training, you feel confident in your abilities as a Pokémon Trainer.");
        } else if (labChoice.toUpperCase() === "CATCHING") {
            alert("You venture outside the lab to practice catching Pokémon in the wild, expanding your team.");
            alert("You successfully catch several Pokémon and add them to your team.");
        } else {
            alert("Invalid choice. Please try again.");
        }
    }

    function interactStranger() {
        var strangerResponse = prompt("While on your journey, you encounter a stranger in need of help. Do you HELP or IGNORE them?");
        
        if (strangerResponse.toUpperCase() === "HELP") {
            alert("You help the stranger, and they give you a valuable item as a token of gratitude.");
        } else if (strangerResponse.toUpperCase() === "IGNORE") {
            alert("You ignore the stranger and continue on your journey without any significant event.");
        } else {
            alert("Invalid choice. Please try again.");
        }
    }

    function exploreArea() {
        var exploreChoice = prompt("You stumble upon a mysterious area during your adventure. Do you INVESTIGATE further or LEAVE?");
        
        if (exploreChoice.toUpperCase() === "INVESTIGATE") {
            alert("You investigate further and discover a rare Pokémon hiding in the area.");
        } else if (exploreChoice.toUpperCase() === "LEAVE") {
            alert("You decide to leave the area, unaware of what you missed out on.");
        } else {
            alert("Invalid choice. Please try again.");
        }
    }

    if (starterPokemon.toUpperCase() === "BULBASAUR" || starterPokemon.toUpperCase() === "CHARMANDER" || starterPokemon.toUpperCase() === "SQUIRTLE") {
        alert("You chose " + starterPokemon + " as your starter Pokémon. A wise choice!");

        var labOrLeave = prompt("Now that you have your Pokémon, do you want to LEAVE the lab immediately or choose to STAY and train?");

        if (labOrLeave.toUpperCase() === "LEAVE") {
            leaveLab();
        } else if (labOrLeave.toUpperCase() === "STAY") {
            chooseLab();
        } else {
            alert("Invalid choice. Please try again.");
        }

        interactStranger();
        exploreArea();
    } else {
        alert("Invalid Pokémon choice. Please restart and choose one of the provided options: Bulbasaur, Charmander, or Squirtle.");
    }
}

document.getElementById('startGame').addEventListener('click', startGame);
