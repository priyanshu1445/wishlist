const product = [
    {
        id:0,
        image:'hand-bag.jpg',
        title: 'handbag',
        price:500,
    },


    {
        id:1,
        image:'school-bag.jpg',
        title: 'school bag',
        price:800,
    },


    {
        id:2,
        image:'shoes.jpg',
        title: 'shoes',
        price:6000,
    },
    

    {
        id:3,
        image:'t-shirt.jpg',
        title: 'T-shirt',
        price:900,
    },


    {
        id:4,
        image:'watch.jpg',
        title: 'Watch',
        price:3000,
    }
];


const categories = [ ...new Set(product.map((item)=>
{
    return item
}))]

let i = 0;
document.getElementById('root').innerHTML = categories.map((item, i) => {
    var { image, title, price } = item;

    return `
        <div class='box'>
            <div class='image-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${i})'>Add To Cart</button>
            </div>
        </div>
    `;
}).join('');




var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}


function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart() {
    let j = 0 , total=0;

    document.getElementById('count').innerHTML = cart.length;


    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$" + 0+".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items, index) => {
            var { image, title, price } = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$" + total +".00";

            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}' />
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
    }
}
