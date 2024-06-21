const cartItem = document.querySelector('.cart-items');
const AddBtn = document.querySelectorAll('.btn');


let allTotal = 0;
AddBtn.forEach(btn => {
    btn.addEventListener('click', function(ev) {
        const mainEl = ev.target.closest('.single-item');

        const itemName = mainEl.querySelector('h3').innerText;
        let price = mainEl.querySelector('.price').innerText;
        const quantity = mainEl.querySelector('input').value;
    
        if (parseInt(quantity) > 0) {
            price = price.substring(1);
            price = parseInt(price);
            
            let totalCost = price * parseInt(quantity);
            
            allTotal += totalCost;

            cartItem.innerHTML += `<div class="cart-single-item">
                <h3>${itemName}</h3>
                <p>${price}$ x ${quantity} = <span>${totalCost}</span>$</p>
                 <button class="delete">Remove</button>
            </div>`;

            document.querySelector('.total').innerText = `Total : $${allTotal}`;

            btn.innerText = 'Added';
            btn.setAttribute('disabled', 'true');


            const remove = document.querySelectorAll('.delete');
            remove.forEach(btn => {
                btn.addEventListener('click', function(ev){
                    const mainEl = ev.target.closest('.cart-single-item');
                    mainEl.remove();

                    let price = mainEl.querySelector('p span').innerText;
                    let name = mainEl.querySelector('h3').innerText;
                    let vegetables = document.querySelectorAll('.single-item');

                    price = parseInt(price);
                    allTotal -= price;  

                    document.querySelector('.total').innerText = `Total : $${allTotal}`; 

                    vegetables.forEach(function(vege){
                        if (vege.querySelector('h3').innerText === name) {
                            vege.querySelector('input').value = 0;
                            const vegeBtn = vege.querySelector('.btn');
                            vegeBtn.removeAttribute('disabled');
                            vegeBtn.innerText = 'Add';
                        }
                       
                    });

                    

                    
                    
                    
                 });
            });


            
        } else {
            alert('Odaberi količinu');
        }
    });
});

 



