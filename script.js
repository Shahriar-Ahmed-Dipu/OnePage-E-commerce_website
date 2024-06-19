// let btnidOne=document.getElementById('cart-btn-one');
// // let totalPrice =document.getElementById('total-price');
// let sumPrice = 0;
// let itemCounter = 0;
// let FristProduct =document.getElementById('first');




// btnidOne.addEventListener('click',function() {
//     let firstPrice = document.getElementById ('first-price');
//     let firstPriceValue =parseFloat(firstPrice.innerText); 

// // let output = document.getElementById('Parchase-area');
// itemCounter++;
// let total=sumPrice + firstPriceValue;
// sumPrice=total;
// let newLineOne =document.createElement('div');
// newLineOne.innerText = itemCounter +'.' +FristProduct.innerText;
// totalPrice.before(newLineOne);

// totalPrice.innerText = 'Total Price: ' + sumPrice;
// })



// //Second Product
// let secondProduct =document.getElementById('second');
// let btnidTwo = document.getElementById('cart-btn-two');
// let secondPrice = document.getElementById('second-price')
// let secondPriceValue = parseFloat(secondPrice.innerText);

// btnidTwo.addEventListener('click', function(){
//     // Add Product Name
//     itemCounter++;
//     let newLineTwo = document.createElement('div');
//     newLineTwo.innerText = itemCounter +'.' + secondProduct.innerText;
//     totalPrice.before( newLineTwo);


// //Add Product Price
//      let total =sumPrice+  secondPriceValue;
//      sumPrice =total; 
//      totalPrice.innerText = 'Total Price: ' + sumPrice;
// });





// //Third Product
// let thirdProduct =document.getElementById('third');
// let btnidThree = document.getElementById('cart-btn-three');
// let thirdPrice = document.getElementById('third-price')
// let thirdPriceValue = parseFloat(thirdPrice.innerText);

// btnidThree.addEventListener('click', function(){
//     // Add Product Name

//     let newLineThree = document.createElement('div');
//     newLineThree.innerText = thirdProduct.innerText;
//     totalPrice.before(newLineThree);


// //Add Product Price
//      let total =sumPrice+  thirdPriceValue;
//      sumPrice =total; 
//      totalPrice.innerText = 'Total Price: ' + sumPrice;
// });





// //Fourth Product
// let fourthProduct =document.getElementById('fourth');
// let btnidfour = document.getElementById('cart-btn-four');
// let fourthPrice = document.getElementById('fourth-price')
// let fourthPriceValue = parseFloat(fourthPrice.innerText);

// btnidfour.addEventListener('click', function(){
//     // Add Product Name

//     let newLineFour = document.createElement('div');
//     newLineFour.innerText = fourthProduct.innerText;
//     totalPrice.before(newLineFour);


// //Add Product Price
//      let total =sumPrice+  fourthPriceValue;
//      sumPrice =total; 
//      totalPrice.innerText = 'Total Price: ' + sumPrice;
// });


// //Fifth Product
// let fifthProduct =document.getElementById('fifth');
// let btnidfive = document.getElementById('cart-btn-five');
// let fifthPrice = document.getElementById('fifth-price')
// let fifthPriceValue = parseFloat(fifthPrice.innerText);

// btnidfive.addEventListener('click', function(){
//     // Add Product Name

//     let newLineFive = document.createElement('div');
//     newLineFive.innerText = fifthProduct.innerText;
//     totalPrice.before(newLineFive);


// //Add Product Price
//      let total =sumPrice+  fifthPriceValue;
//      sumPrice =total; 
//      totalPrice.innerText = 'Total Price: ' + sumPrice;
// });



// //sixth Product
// let sixthProduct =document.getElementById('sixth');
// let btnidSix = document.getElementById('cart-btn-six');
// let sixthPrice = document.getElementById('sixth-price')
// let sixthPriceValue = parseFloat(sixthPrice.innerText);

// btnidSix.addEventListener('click', function(){
//     // Add Product Name

//     let newLineSix = document.createElement('div');
//     newLineSix.innerText = sixthProduct.innerText;
//     totalPrice.before(newLineSix);


// //Add Product Price
//      let total =sumPrice+  sixthPriceValue;
//      sumPrice =total; 
//      totalPrice.innerText = 'Total Price: ' + sumPrice;
// });

// //seventh Product
// let seventhProduct =document.getElementById('seventh');
// let btnidSeven = document.getElementById('cart-btn-seven');
// let seventhPrice = document.getElementById('seventh-price')
// let seventhPriceValue = parseFloat(seventhPrice.innerText);

// btnidSeven.addEventListener('click', function(){
//     // Add Product Name

//     let newLineSeven = document.createElement('div');
//     newLineSeven.innerText = seventhProduct.innerText;
//     totalPrice.before(newLineSeven);


// //Add Product Price
//      let total =sumPrice+  seventhPriceValue;
//      sumPrice =total; 
//      totalPrice.innerText = 'Total Price: ' + sumPrice;
// });


// //eighth Product
// let eighthProduct =document.getElementById('eighth');
// let btnidEight = document.getElementById('cart-btn-eight');
// let eighthPrice = document.getElementById('eighth-price')
// let eighthPriceValue = parseFloat(eighthPrice.innerText);

// btnidEight.addEventListener('click', function(){
//     // Add Product Name

//     let newLineEight = document.createElement('div');
//     newLineEight.innerText = eighthProduct.innerText;
//     totalPrice.before(newLineEight);


// //Add Product Price
//      let total =sumPrice+  eighthPriceValue;
//      sumPrice =total; 
//      totalPrice.innerText = 'Total Price: ' + sumPrice;
// });

// //eighth Product
// let ninethProduct =document.getElementById('nineth');
// let btnidNine = document.getElementById('cart-btn-nine');
// let ninethPrice = document.getElementById('nineth-price')
// let ninethPriceValue = parseFloat(ninethPrice.innerText);

// btnidNine.addEventListener('click', function(){
//     // Add Product Name

//     let newLineNineth = document.createElement('div');
//     newLineNineth.innerText = ninethProduct.innerText;
//     totalPrice.before(newLineNineth);


// //Add Product Price
//      let total =sumPrice+  ninethPriceValue;
//      sumPrice =total; 
//      totalPrice.innerText = 'Total Price: ' + sumPrice;
// });

// // let newLine = document.createElement('div');
// // newLine.innerText = first.innerText;;
// // totalPrice.parentNode.insertBefore(newLine, totalPrice);
// // totalPrice.innerText = 'Total Price: ' + sumPrice;
// let cuponInputId = document.getElementById('cuponInput');
// let cuponInputIdValue = cuponInputId.value;







let btnApply = document.getElementById('btn-apply');
let discountId = document.getElementById('discount');
let discountTotalId=document.getElementById('discountTotal');

let itemCounter = 0;
let sumPrice =0;
let totalPrice =document.getElementById('total-price');
let cuponInputId = document.getElementById('cuponInput');
cuponInputId.value= '';
let cuponInputIdValue = '';
let cuponApplied = false;
let purchaseBtnId = document.getElementById('purchase-btn');
let popupId = document.getElementById('popup');
let overlayId = document.getElementById('overlay');
let popupmainId = document.getElementById('popupmain');
let homebtnId = document.getElementById('homebtn');




let newLineElements = [];

    function eCom(productId,productPriceId,btnId){
        let productIdName = document.getElementById(productId);//one
        let btnIdName = document.getElementById(btnId);//two
        let productPrice = document.getElementById(productPriceId);//three
        let productPriceValue = parseFloat(productPrice.innerText);
       
        
        btnIdName .addEventListener('click', function(){
            itemCounter++;
            let newLine = document.createElement('div');
            newLine.innerText = itemCounter +'.' + productIdName.innerText;
    
            totalPrice.before(newLine);
            newLineElements.push(newLine); 
        
        //Add Product Price
             let total =sumPrice+  productPriceValue;
             sumPrice =total; 
             totalPrice.innerText = 'Total Price: ' + sumPrice;
             
    if(cuponApplied===true){
        let discountCal = Math.round(sumPrice * 0.2);
           discountId.innerText ='Discount:' +  discountCal;

          
        let calculateTotal =  sumPrice - discountCal;
       console.log(calculateTotal)
       discountTotalId.innerText ='Total:' + calculateTotal;
    }
    
             
            //  discountTotalId.innerText ='Total:' + sumPrice;
             
            
           
        })


    }
    













    cuponInputId.addEventListener('input', function(event){
         cuponInputIdValue=event.target.value;
    })
    btnApply.addEventListener('click', function(){

        if ( sumPrice >=200 && cuponInputIdValue === 'SELL200' ){
            btnApply.disabled=false;
            let discountCal = Math.round(sumPrice * 0.2);
           discountId.innerText ='Discount:' +  discountCal;

          
        let calculateTotal =  sumPrice - discountCal;
       discountTotalId.innerText ='Total:' + calculateTotal;
       cuponApplied = true;
       cuponInputId.style.border='2px solid  #pf72585';
       btnApply.innerText ='Applied';
       btnApply.style.backgroundColor='#f72585';
    }
    else{
        
        cuponInputId.style.border='2px solid red';
       discountId.innerText ='Discount:' + 0;
       discountTotalId.innerText ='Total:' + sumPrice;
       cuponApplied = false;
    }
    })
    








    
popupId.hidden = true;
purchaseBtnId.addEventListener('mouseover', function() {
    if(sumPrice===0){
     
    }else{
        purchaseBtnId.style.backgroundColor="#f72585";

    }})
    purchaseBtnId.addEventListener('mouseout', function() {
        if(sumPrice===0){
         
        }else{
            purchaseBtnId.style.backgroundColor="";
    
        }})

    
purchaseBtnId.addEventListener('click', function() {
   if(sumPrice===0){
    
   }else{
    purchaseBtnId.style.backgroundColor="hover:#f72585";
    popupId.hidden = false;


    const tailwindClasses = [
        'fixed',
        'h-full',
        'w-full',
        'opacity-60',
        'bg-gray-200',
        'brightness-50'
    ];
    
    const popupClasses = [
        'w-full',
        'mx-auto',
        'fixed',
        'flex',
        'justify-center',
        'top-[20%]',
    ];
    
    popupmainId.classList.add(...popupClasses);
    overlayId.classList.add(...tailwindClasses);
   }
});

homebtnId.addEventListener('click',function(){
    popupId.hidden = true;
    popupmainId.removeAttribute('class');
    overlayId.removeAttribute('class');
     discountId.innerText ='Discount:' + 0;
     discountTotalId.innerText ='Total:' + 0;
     totalPrice.innerText = 'Total Price: ' + 0;
     cuponInputId.value= '';
     cuponInputIdValue = '';
     cuponApplied = false;

})
homebtnId.addEventListener('click', function() {
    itemCounter = 0;
    sumPrice = 0;
    totalPrice.innerText = 'Total Price: ' + sumPrice;
    cuponInputId.value = '';
    cuponInputIdValue = '';
    cuponApplied = false;
    btnApply.disabled = false;
    cuponInputId.style.border = '';
    btnApply.innerText = 'Apply';
    btnApply.style.backgroundColor = '';
    discountId.innerText = 'Discount: 0';
    discountTotalId.innerText = 'Total: 0';
    popupId.hidden = true;
    popupmainId.removeAttribute('class');
    overlayId.removeAttribute('class');
    newLineElements.forEach (
        elements =>(elements.remove())
    )
    
})

    // Adding products to the cart
eCom('first', 'first-price', 'cart-btn-one');
eCom('second', 'second-price', 'cart-btn-two');  
eCom('third', 'third-price', 'cart-btn-three');
eCom('fourth', 'fourth-price', 'cart-btn-four');
eCom('fifth', 'fifth-price', 'cart-btn-five');
eCom('sixth', 'sixth-price', 'cart-btn-six');
eCom('seventh', 'seventh-price', 'cart-btn-seven');
eCom('eighth', 'eighth-price', 'cart-btn-eight');
eCom('nineth', 'nineth-price', 'cart-btn-nine');
    

