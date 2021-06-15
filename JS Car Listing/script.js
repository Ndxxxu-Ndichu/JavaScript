//Car Class: Represents a Car
class Car {
    constructor(model, owner, reg) {
        this.model = model;
        this.owner = owner;
        this.reg = reg;
    }
} 
//Store Class: local storage
class Store {
    static getCars() {
      let cars;
      if (localStorage.getItem('cars') === null) {
          cars = [];
      } else {
          cars = JSON.parse(localStorage.getItem('cars'));
      }
      return cars
    }

    static addCar(car) {
      const cars = Store.getCars();
      cars.push(car);
      localStorage.setItem('cars', JSON.stringify(cars));
    }

    static removeCar(reg) {
      const cars = Store.getCars();

      cars.forEach((car, index) =>{
          if(car.reg === reg) {
              cars.splice(index, 1);
          }
      });
      localStorage.setItem('cars', JSON.stringify(cars))
    }
}

//UI Class
class UI {
    static displayCars() {
        
        const cars = Store.getCars();

        cars.forEach((car)=> UI.addCarToList(car));
    }
    static addCarToList(car) {
        const list = document.querySelector('#car-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${car.model}</td>
        <td>${car.owner}</td>
        <td>${car.reg}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
    static deleteCar(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove()
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#car-form');
        container.insertBefore(div, form)

        //vanish in 3 seconds
        setTimeout(()=> document.querySelector('.alert').remove(), 3000);
    }



    static clearFields() {
        document.querySelector('#model').value = '';
        document.querySelector('#owner').value = '';
        document.querySelector('#reg').value = '';
    }
}

//Event Display Cars
document.addEventListener('DOMContentLoaded', UI.displayCars);


//Event: Add Car
document.querySelector('#car-form').addEventListener('submit', (e) =>
{
    //prevent default
    e.preventDefault();
    //get form values
    const model = document.querySelector('#model').value;
    const owner = document.querySelector('#owner').value;
    const reg = document.querySelector('#reg').value;

    //validate
    if(model === '' || owner === '' || reg === '') {
        UI.showAlert('Please Fill In The Fields!',  'danger')
            
        }else {
          //instantiate a car
    const car = new Car(model, owner, reg);

    //Add car to list
    UI.addCarToList(car)

    //add book to store
    Store.addCar(car)

    //success message
    UI.showAlert('Car Added', 'success')

    //clear fields
    UI.clearFields(); 
    }
    

});

//Event: Remove Car
document.querySelector('#car-list').addEventListener('click', (e)=>
{    //remove car from UI
    UI.deleteCar(e.target)

     //remove car from store
     Store.removeCar(e.target.parentElement.previousElementSibling.textContent)

    //delete message
    UI.showAlert('Car Deleted', 'info')
})
