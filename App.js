
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
                    <a href="#" class= "btn btn-danger" name="delete">Delete</a>
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

    deleteProduct(element){
        if (element.name === 'delete') {
            // buscar elementos padres
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Product Deleted Successfully','info')
        }

    }
    // cssClass, to see if it is success or error 
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));   
        //Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');

        container.insertBefore(div, app);
        // Quitar mensaje despues de 3 seg 
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
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

        if (name ==='' || price==='' || year==='') {
            // return, agregar para que no continua con las demas funciones
            return ui.showMessage('Complete Fields Please','danger')
        }
        ui.addProduct(product)
        // tambien podemos resetear la carta desde aqui
        // ui.resetForm();
        // Mostrar el mensaje una vez que agregamos la nueva tarjeta 
        ui.showMessage('Product Added Succesfully', 'success');


        //Cancela el comportamiento por Default
        e.preventDefault()
});


document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI()
    ui.deleteProduct(e.target)
})
