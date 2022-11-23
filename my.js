const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () =>{
menu.classList.toggle('hidden')
})

const item1 = document.getElementById('lemonItem');
const modal1 = document.getElementById('modal1');
const exitIcons = document.querySelectorAll('.exitIcon');
const item2 = document.getElementById('orangeItem');
const modal2 = document.getElementById('modal2');
const item3 = document.getElementById('grapeItem');
const modal3 = document.getElementById('modal3');
const cartAnchor = document.getElementById('cartAnchor');
const modal4 = document.getElementById('cartModal');
const modalArr = [modal1, modal2, modal3, modal4];
const minusIcons = document.querySelectorAll('.minusSymbol');
const plusIcons = document.querySelectorAll('.plusSymbol');
const itemsAdded1 = document.querySelector('.itemsAddedDisplay1');
const itemsAdded2 = document.querySelector('.itemsAddedDisplay2');
const itemsAdded3 = document.querySelector('.itemsAddedDisplay3');
const itemsAddedArr = [itemsAdded1, itemsAdded2, itemsAdded3];
const addToCart1 = document.querySelector('.addToCart1');
const addToCart2 = document.querySelector('.addToCart2');
const addToCart3 = document.querySelector('.addToCart3');
const addToCartArr = [addToCart1, addToCart2, addToCart3];
const checkOutList = document.getElementById('addedProductList');
const removeAllBtn = document.querySelector('.removeAll');
let i = 0;
const lemonPrice = 3.00;
const orangePrice = 2.50;
const grapePrice = 5.00;
let totalLemonPrice;
let totalOrangePrice;
let totalGrapePrice;
const checkOutBtn = document.getElementById('checkOutBtn')
const totalAmount = document.getElementById('totalAmount');
let total;

item1.addEventListener('click', () =>{
    console.log('modal1')
    modal1.classList.toggle('hidden');
})

item2.addEventListener('click', () =>{
    console.log('modal2')
    modal2.classList.toggle('hidden');
})

item3.addEventListener('click', () =>{
    console.log('modal3')
    modal3.classList.toggle('hidden');
})

cartAnchor.addEventListener('click', () =>{
    console.log('cartModal')
    modal4.classList.toggle('hidden');
})

exitIcons.forEach((icon) =>{
    icon.addEventListener('click', () =>{
       modalArr.forEach((modal) =>{
       modal.classList.add('hidden')
       })
    })
})

function addFunc() {
        plusIcons.forEach((plusIcon) =>{
            plusIcon.addEventListener('click', () =>{
                itemsAddedArr.forEach((itemAdded) =>{
                    itemAdded.innerHTML++
                })
            })
        })

        minusIcons.forEach((minusIcon) =>{
            minusIcon.addEventListener('click', () =>{
                itemsAddedArr.forEach((itemSubtracted) =>{
                    itemSubtracted.innerHTML--

                    if (itemSubtracted.innerHTML === "-1"){
                        itemSubtracted.innerHTML = 0;
                    }
                })
            })
        })

        addToCart1.addEventListener('click', () =>{
            let lemonLi = document.createElement('li');
            lemonLi.innerHTML = `Lemons Added: ${itemsAdded1.innerHTML}`;
            checkOutList.appendChild(lemonLi);
            console.log('Added To Cart!');
            
            for (let i = 0; i <= itemsAdded1.innerHTML; i++){
              totalLemonPrice = lemonPrice * i
              console.log(totalLemonPrice, i) 
            }

            if (itemsAdded1.innerHTML == 0){
                alert('You Have To Add an Item!');
                checkOutList.lastChild.remove()
            }
        })

        addToCart2.addEventListener('click', () =>{
            let orangeLi = document.createElement('li');
            orangeLi.innerHTML = `Oranges Added: ${itemsAdded2.innerHTML}`;
            checkOutList.appendChild(orangeLi);
            console.log('Added To Cart!');

            for (let i = 0; i <= itemsAdded2.innerHTML; i++){
                totalOrangePrice = orangePrice * i
                console.log(totalOrangePrice, i) 
            }

            

            if (itemsAdded2.innerHTML == 0){
                alert('You Have To Add an Item!');
                checkOutList.lastChild.remove();
            }
        })

        addToCart3.addEventListener('click', () =>{
            let grapeLi = document.createElement('li');
            grapeLi.innerHTML = `Grapes Added: ${itemsAdded3.innerHTML}`;
            checkOutList.appendChild(grapeLi);
            console.log('Added To Cart!');

            for (let i = 0; i <= itemsAdded3.innerHTML; i++){
                totalGrapePrice = grapePrice * i
                console.log(totalGrapePrice, i) 
              }

            if (itemsAdded3.innerHTML == 0){
                alert('You Have To Add an Item!');
                checkOutList.lastChild.remove();
            }
        })

        addToCartArr.forEach((addToCart) =>{
            addToCart.addEventListener('click', () =>{
                itemsAddedArr.forEach((itemAdded) =>{
                    itemAdded.innerHTML = 0;
                })
            })
        })

        checkOutBtn.addEventListener('click', () =>{
            checkOutList.innerHTML = "";
            totalAmount.innerHTML = totalLemonPrice + totalOrangePrice + totalGrapePrice;
        })

        removeAllBtn.addEventListener('click', () =>{
            if (i == 0){
                removeAllBtn.innerHTML = "Are You Sure?"
                i++
            } else if (i == 1) {
                checkOutList.innerHTML = "";
                totalAmount.innerHTML = "";
                removeAllBtn.innerHTML = "Remove All"
                i = 0;
            }

            totalLemonPrice = 0;
            totalOrangePrice = 0;
            totalGrapePrice = 0;
        })
    }

addFunc()