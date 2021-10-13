
class Product{
    constructor(name, price, year){
        this.name = name 
        this.price = price
        this.year = year
    }
}

//Interfaz que accede al DOM para alterarlo
class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class= "btn btn-danger">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element)
        //Una vez que agreguemos el producto, lo reseteamos para limpiar la carta
        this.resetForm()
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }   

    deleteProduct(){

    }
    showMessage(){

    }
}

//DOM eventos  "Document Object Model"
document.getElementById('product-form')
    
    .addEventListener('submit', function(e){
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        // console.log(name, price, year)
        // Crear un objeto unico
        const product = new Product(name, price, year)

        //Creando instancia para acceder a metodos de UI
        const ui = new UI();
        ui.addProduct(product)
        // tambien podemos resetear la carta desde aqui
        // ui.resetForm();

        //Cancela el comportamiento por Default
        e.preventDefault()
});

