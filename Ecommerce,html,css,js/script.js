let product=document.getElementsByClassName("imageContainers");
fetch('https://fakestoreapi.com/products')
  .then(response=>response.json())
  .then(data=>{
console.log(data);
console.log(data.image);
for(let i=0;i<20;i++)
  product[i].setAttribute('src',data[i].image);
        

});