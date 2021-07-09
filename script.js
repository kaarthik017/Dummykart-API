function displayProducts(data){
    let container = document.createElement('div');
    container.setAttribute('class','container');

    let row = document.createElement('div');
    row.setAttribute('class','row')
    
    data.forEach(product => {
    let col = document.createElement('div');
    col.setAttribute('class','col-12 col-sm-8 col-md-6 col-lg-4');

    let card = document.createElement('div');
    card.setAttribute('class','card');

    let img = document.createElement('img')
    img.setAttribute('class','card-img')
    img.src = product.image;
 
    let dummyDiv = document.createElement('div');
    dummyDiv.setAttribute('class','card-img-overlay d-flex justify-content-end')

    

    let cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body');

    let cardTitle = document.createElement('h4');
    cardTitle.setAttribute('class','card-title');
    cardTitle.innerHTML = product.title;

    let cardSubtitle = document.createElement('h6');
    cardSubtitle.setAttribute('class','card-subtitle mb-2 text-muted');
    cardSubtitle.innerHTML = 'Category: '+ product.category;

    let description = document.createElement('p');
    description.setAttribute('class','card-text');
    description.innerHTML = product.description.slice(0,470);
    
    var cardFooter = document.createElement('div');
    cardFooter.setAttribute('class','card-footer');

    let alignment = document.createElement('div');
    alignment.setAttribute('class','buy d-flex justify-content-between align-items-center');
    
    
    let price = document.createElement('div');
    price.setAttribute('class','price text-success');
    let price_heading = document.createElement('h5');
    price_heading.setAttribute('class','mt-4')
    price_heading.innerHTML = '$'+product.price

    price.appendChild(price_heading)

    let cart = document.createElement('a');
    //cart.setAttribute('class','btn');
    cart.innerHTML = 'Add to Cart'
    let icon = document.createElement('i');
    icon.setAttribute('class','fas fa-shopping-cart')

    cart.appendChild(icon);
    alignment.append(price,cart);
    cardFooter.append(alignment);
    cardBody.append(cardTitle,cardSubtitle,description)
    card.append(img,dummyDiv,cardBody,cardFooter)
    col.append(card)
    row.append(col);
       

    });
    container.append(row);    
    document.body.append(container)
}

 async function fakeProducts(){
    try {
        let products = await fetch('https://fakestoreapi.com/products')
        let products_data = await products.json();
        displayProducts(products_data)

    } catch (error) {
        console.log(error);
    }
}

fakeProducts();