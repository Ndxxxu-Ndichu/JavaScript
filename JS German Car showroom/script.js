const vehicle = [
    {
        id : 1,
        title : "Mercedes-Benz A class",
        category : "Mercedes-Benz",
        price : 3400000,
        img : "./img/mercedes-A-class.jpeg",
        desc: `The A-Class with plug-in-hybrid technology combines the dynamism and efficiency of an electric motor with the range of a combustion engine, generating a system output of up to 118 [160] /5,500 kW [hp] at rpm[1] and peak torque of 250 / 1,620 - 4,000 Nm at rpm[1]. The electric motor provides for additional output when accelerating or powers the vehicle on its own for up to XX kilometres in the city, allowing you to do a large part of your daily driving with zero local emissions.`
    },
    {
        id : 2,
        title : "mercedes-Benz AMG GT", 
        category : "Mercedes-Benz",
        price : 3800000,
        img : "./img/mercedes-AMG-GT.jpg",
        desc : `The GT features a hand-built twin-turbo V-8. 
        Those who prefer a more refined grand tourer will appreciate the 523-hp GT and 550-hp GT C, 
        and those with sportier desires will gravitate toward the 577-hp GT R and GT R Pro. 
        Most models are available in coupe and softtop-roadster forms, 
        but the track-focused Pro and almighty 720-hp Black Series are hardtop only.`
    },
    
    {
        id : 3,
        title : "Audi A4", 
        category : "Audi",
        price : 1800000,
        img : "./img/audi-A4.jpg",
        desc : `The Audi A4 has 1 Petrol Engine on offer. The Petrol engine is 1998 cc . It is available with the Automatic transmission. Depending upon the variant and fuel type the A4 has a mileage of 17.42 kmpl. The A4 is a 5 seater and has length of 4762mm, width of 1847mm and a wheelbase of 2819mm.`
    },
    {
        id : 4,
        title : "Audi A8", 
        category : "Audi",
        price : "3700000",
        img : "./img/audi-A8.jpg",
        desc : `The 2021 Audi A8 is a large luxury sedan that sits atop the German automaker's lineup. The A8 was redesigned in 2019 and carries on into 2021 with just a few minor adjustments to options and features. Like other flagship luxury sedans, the Audi A8 is impressively spacious, comfortable and well appointed. It also offers Audi's latest technology features as well as an available plug-in hybrid version.`
    },
    {
        id : 5,
        title : "BMW i8", 
        category : "BMW",
        price : "15000000", 
        img : "./img/bmw-i8.png",
        desc : `Six years after its market launch, the i8 Coupe (and the newer Roadster) are ending their product life cycles with the 2020 model year. Both all-wheel-drive models are powered by a combination of hybrid synchronous electric motor and BMW TwinPower Turbo technology, a 228-hp, 1.5-litre three-cylinder gas engine.`
    },
    {
        id : 6,
        title : "BMW X7", 
        category : "BMW",
        price : "4000000",
        img : "./img/bmw-x7.jpeg",
        desc : `The 2021 BMW X7 is the brand's biggest people mover and brings an undeniably upscale aura and impressive levels of performance. Behind the three-row SUV's borderline-bloated kidney grille are three excellent turbocharged engine options. While the standard straight-six is perfectly adequate with its 335 horsepower, there's a lusty V-8 that makes either 523 or 612 horsepower.`
    },
    {
        id : 7,
        title : "Volkswagen ID4", 
        category : "Volkswagen",
        price :  "3000000",
        img : "./img/volkswagen-id4.jpg",
        desc : `While it doesn't look like the famed Microbus-inspired ID. Buzz, the ID.4 is no less important to VW's goal of rolling out a robust lineup of electric vehicles. The company claims the ID.4 will be able to drive up to 260 miles between charges and its SUV shape and attractive styling should make it a desirable EV.`
    },
    {
        id : 8,
        title : "Volkswagen Tiguan", 
        category : "Volkswagen",
        price : "2800000",
        img : "./img/volkswagen-tiguan.jpg",
        desc : `It offers more athletic handling than many of its rivals, and its cabin has a restrained vibe with plenty of trendy technology features. While the Tiguan hasn't proved to be particularly quick at our test track, the turbocharged four-cylinder engine performs dutifully, sounds expensive, and will pass muster with most buyers`
    },
    {
        id : 9,
        title : "Porsche 718 Cayman", 
        category : "Porsche",
        price : "6000000" ,
        img : "./img/porsche-718-cayman.jpg",
        desc : `This coupe and its convertible sibling—the 718 Boxster, which we review separately—provide unrivaled driver engagement among sports cars. The Cayman's otherworldly chassis provides an open line of communication between the driver, the car, and the road. To create the 718, Porsche knits together strong brakes, an unflappable suspension, and a steering system rich with feedback.`
    },
    {
        id : 10,
        title : "Porsche 911 Carrera", 
        category : "Porsche",
        price : "10000000",
        img : "./img/porsche-911-carera.jpg",
        desc : `From its rear-mounted flat-six engine to its otherworldly handling, the Porsche 911 has preserved the essential elements that made it an icon. Its familiar circular headlights, Coke bottle shape, and sloping rump make it virtually impossible to mistake a 911 for any other sports car.`
    },
   
]

const sectionCentre = document.querySelector(".section-center")
  const container = document.querySelector(".btn-container")

  //load items
  window.addEventListener("DOMContentLoaded", function (){
      displayVehicleItems(vehicle)
      displayMenuButtons()
  });

  function displayVehicleItems(vehicleItems){
      let displayVehicles = vehicleItems.map(function (item) {

        return ` <article class="vehicle-item">
        <img src=${item.img} class="photo" alt="Mercedes-Benz">
        <div class="vehicle-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="pricer">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
      });
      displayVehicles = displayVehicles.join("");
      sectionCentre.innerHTML = displayVehicles
  }

  function displayMenuButtons(){
      const categories = vehicle.reduce(function(values, item){
          if (!values.includes(item.category)) {
              values.push(item.category)
          }
          return values
      },['all'])
      const categoryBtns = categories.map(function(category){
          return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`

      }).join("");
      container.innerHTML = categoryBtns;
      const filterBtns = document.querySelectorAll(".filter-btn")
      filterBtns.forEach(function(btn) {
          btn.addEventListener('click', function(e){
              const category = e.currentTarget.dataset.id;
              const vehcileCategory = vehicle.filter(function(vehicleItem){
                  if (vehicleItem.category === category) {
                      return vehicleItem
                  }
              })
              if (category === 'all') {
                  displayVehicleItems(vehicle)
              } else {
                  displayVehicleItems(vehcileCategory)

              }
          })
      })
  }