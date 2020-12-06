var cars={
    Audi:['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7'],
    BMW:['320d', '520d', 'GT-630d', 'X1', 'X4'],
    Jeep:['Compass', 'Wrangler'],
    MercedesBenz:['C-200', 'C-220', 'E250', 'GLA-200', 'GLC-220d', 'S-350'],
    Maruti:['800', 'A-Star', 'Alto','Baleno','Brezza','Celerio','Ciaz','Eeco','Ertiga','Esteem','Gypsy','Ignis','Omni','Ritz','S-Cross','SX4','Swift','Swift-Dzire','Wagon-R','XL6','Zen'],
    Chevrolet:['Aveo', 'Beat', 'Captiva', 'Cruze', 'Enjoy', 'Optra','Sail','Spark','Tavera'],
    Datsun:['GO'],
    Fiat:['Avventura', 'Linea', 'Punto'],
    Ford:['Aspire', 'Classic', 'EcoSport','Endeavour','Fiesta','Figo','Freestyle','Fusion','Ikon'],
    Honda:['Accord', 'Amaze', 'BR-V', 'Brio', 'CR-V', 'City','Civic','Jazz','Mobilio','WR-V'],
    Hyundai:['Accent','Creta','EON','Elantra','Getz','Santa','Santro','Sonata','Venue','Verna','Xcent','i10','i20'],
    Mahindra:['Bolero','KUV-100','Marazzo','NuvoSport','Quanto','Rexton','Scorpio','Supro','TUV-300','Thar','Verito','XUV300','XUV500','Xylo'],
    Nissan:['Kicks', 'Micra', 'Sunny', 'Terrano'],
    Renault:['Captur', 'Duster', 'Fluence', 'KWID', 'Lodgy', 'Logan','Pulse','Scala','Triber'],
    Skoda:['Fabia', 'Laura', 'Octavia','Rapid'],
    Tata:['Aria', 'Bolt', 'Harrier', 'Hexa', 'Indica', 'Indigo','Manza','Nano','Nexon','Safari','Sumo','Tiago','Tigor','Venture','Zest'],
    Toyota:['Camry', 'Corolla', 'Etios', 'Fortuner','Glanza','Innova','Yaris'],
    Volkswagen:['Ameo', 'Jetta', 'Passat', 'Polo', 'Vento']


}

// getting the main and sub menus
var main= document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');

//Trigger the event when menu change occurs

main.addEventListener('change',function(){
//getting a selected option
var selected_option = cars[this.value];

//removing the sub menu options using while loop
while(sub.options.length > 0){
sub.options.remove(0);
}
//convert the selected object into array and create a options for each array elements
//using Option constructor it will craete a html element with the given value and innertext
Array.from(selected_option).forEach(function(el){

    let option = new Option(el, el);

    //append the child option in sub menu
    sub.appendChild(option);
});

});
