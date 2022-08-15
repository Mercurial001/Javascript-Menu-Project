let menu = [
    {
        id: 1,
        title: "Colt 45",
        category: "Pistol",
        price: 1000.00,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/M1911A1.png/1200px-M1911A1.png",
        description: "Shoot foolish and evil people in the head, especially corrupt leaders",
    },
    {
        id: 2,
        title: "Magnum Sniper",
        category: "Rifle",
        price: 10000.00,
        img: "https://static.turbosquid.com/Preview/001151/188/3S/3D-accuracy-international-awm-sniper-rifle_0.jpg",
        description: "This sniper rifle is poised to shoot the head of foolsih people, especially corrupt politicians",
    },
    {
        id:3,
        title: "Bane of the Corrupt",
        category: "Rifle",
        price: 2500,
        img: "https://static01.nyt.com/newsgraphics/2015/09/02/how-they-got-their-guns/ff401cbbe2ce56af38f4add2f835b87113332dd5/guns/sw_mp15T.jpg",
        description: "Pest exterminator, this can kill pest around the area"
    },
    {
        id: 4,
        title: "Pest Fragmentor",
        category: "Firepower",
        price: 5000,
        img:"https://bbts1.azureedge.net/images/p/full/2021/10/13bdecf7-f8fa-4f20-87d3-e7777c431bfe.jpg",
        description: "Blowup foolish pests infesting in the area",
    },
    {
        id: 5,
        title: "Bazooka",
        category: "Firepower",
        price: 20000,
        img:"https://m.media-amazon.com/images/I/71zRk+-abBL._AC_SL1500_.jpg",
        description: "Kill the the abominable pests!"
    },
    {
        id: 6,
        title: "Nuclear Bomb",
        category: "Firepower",
        price: 1000000,
        img:"https://i0.wp.com/www.aseantoday.com/wp-content/uploads/2020/10/Nuclear-bomb.jpg?fit=1280%2C944&ssl=1",
        description:"Blow up an entire nation with just one blow! Especially a country littered with corrupt leaders, and ran by foolish people!"
    },
    {
        id:7,
        title: "Desert Eagle",
        category: "Pistol",
        price: 2000,
        img:"https://static.turbosquid.com/Preview/001264/279/PB/_600.jpg",
        description: "A power packed pistol engineered to blow the head of foolish people so as to relieve them from their wretched existence"
    },
    {
        id:8,
        title: "Graphene 100",
        category: "Armor",
        price: 1000000,
        img:"https://qph.fs.quoracdn.net/main-qimg-cad1510d2d95bab8d232fb9b4f2ad555-lq",
        description: "Be indestructible as you gear yourself with the ever promising graphene armor! Delight in destruction as you are indestructible, putting your demise bays away."
    },
    {
        id: 9,
        title: "Proto Paragonator",
        category: "Armor",
        price: 1000000,
        img:"https://badasshelmetstore.com/wp-content/uploads/3d-max-robot-futuristic-helmet-e1415473655786.png",
        description: "Elapse your vision to the beyond and be indestructible with this prototype of the Paragonator series."
    },
    {
        id: 10,
        title: "Canker's Sword",
        category: "Melee",
        price: "5000",
        img: "https://www.renderhub.com/cosplayitemsrock/super-composite-sword-from-the-game-shadow-fight-2/super-composite-sword-from-the-game-shadow-fight-2-03.jpg",
        description: "A sword requested by Canker to displayed so that he can by it",
    }

]

let sectionCenter = document.querySelector('.section-center');
let container = document.querySelector('.button-container')




//loads items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu)
    const categories = menu.reduce(
        function
        (values, item){
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values;
    },
    ['All']);
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-section="${category}">${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    let filterBtns = document.querySelectorAll('.filter-btn');
    //filter's items
    filterBtns.forEach(function( btn ) {
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.section;
            const menuCategory = menu.filter(function (menuItem){
                if(menuItem.category === category) {
                    return menuItem
                }
            });
            if(category === 'All'){
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
})
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        //console.log(item);
        
        return `<article class="menu-item">
                    <img src=${item.img} class="photo" style="width:250px" alt=${item.title}>
                    <div class="item-info">
                        <header>
                            <h4 class="product-name">${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.description}
                        </p>
                    </div>
                </article>`
    });
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
};