class Country {
    constructor(name, lang, greeting, colors,image) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.image=image;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"],"USA.avif");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"],"Mexico.png");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"],"Algeria.jpg")



function SwitchCountry() {
   let input=document.getElementById("CountryList").value;
  
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
       
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    console.log(country);
    document.getElementById("Button").innerText=country.name;
    document.getElementById("CountryName").innerText=country.name;
    document.getElementById("OfficialLanguage").innerText=country.lang;
    document.getElementById("HelloWorld").innerText=country.greeting;
    document.getElementById("Color3").style.background=country.colors[0];
    document.getElementById("countryImg").src=country.image;
    
    
}

  


