let home = document.getElementById("home");
let shop = document.getElementById("shop");
let blog= document.getElementById("blog");
let about = document.getElementById("about");
let contact = document.getElementById("contact");


let lineHome = document.getElementById('line-home');
let lineShop = document.getElementById('line-shop');
let linenBlog = document.getElementById('line-blog');
let lineAbout = document.getElementById('line-about');
let lineContact = document.getElementById('line-contact');



shop.addEventListener('mouseover',()=>{
    lineShop.style.display = 'block';
});

shop.addEventListener('mouseleave',()=>{
    lineShop.style.display = 'none';
});



home.addEventListener('mouseover',()=>{
    lineHome.style.display = 'block';
});

home.addEventListener('mouseleave',()=>{
    lineHome.style.display = 'none';
});



blog.addEventListener('mouseover',()=>{
    linenBlog.style.display = 'block';
});

blog.addEventListener('mouseleave',()=>{
    linenBlog.style.display = 'none';
});



about.addEventListener('mouseover',()=>{
    lineAbout.style.display = 'block';
});

about.addEventListener('mouseleave',()=>{
    lineAbout.style.display = 'none';
});



contact.addEventListener('mouseover',()=>{
    lineContact.style.display = 'block';
});

contact.addEventListener('mouseleave',()=>{
    lineContact.style.display = 'none';
});









