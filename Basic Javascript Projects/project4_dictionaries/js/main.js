function my_Dictionary() { // this displays the function that we need to use
    var Cards = { // this displays the variable
        spell_name: "Wrath of god", // this is one of the KVP that can be displayed
        casting_cost: "2 colorless mana and two white mana", // another KVP for the variable namedd Cards
        spell_type: "sorcery", // third KVP for the Variable cards
        Expansion: " Alpha, Beta, Unlimited, Revised, 4th, 5th, 6th, 7th, 8th, 9th 10th edition, Battle Royale, portal, commander 2013, From the Vault: Annihilation, Eternal masters, Amonkhet Invocations, Double Masters, Amonkhet Remastered" //last KVP
    };
    delete Cards.Expansion; // this operator let's you delete one of the kvp so it will only display undefined when clicked
    document.getElementById("Dictionary").innerHTML = Cards.Expansion; // tag that  calls the dicionary cards and its kvp expansion
}