let dashboard = document.querySelector('#dashbord');
dashboard.style.display = 'block';
let customer = document.querySelector('#customer');
customer.style.display = 'none';
let item = document.querySelector('#item');
item.style.display = 'none';
let placeOrder = document.querySelector('#placeOrder');
placeOrder.style.display = 'none';
let orderDetail = document.querySelector('#orderDetail');
orderDetail.style.display = 'none';
let clickHome = document.getElementsByClassName('home').item(0);
let clickHome1 = document.getElementsByClassName('home').item(1);
let clickHome2 = document.getElementsByClassName('home').item(2);
let clickHome3 = document.getElementsByClassName('home').item(3);
let clickHome4 = document.getElementsByClassName('home').item(4);

let clickCust = document.getElementsByClassName('cust').item(0);
let clickCust1 = document.getElementsByClassName('cust').item(1);
let clickCust2 = document.getElementsByClassName('cust').item(2);
let clickCust3 = document.getElementsByClassName('cust').item(3);
let clickCust4 = document.getElementsByClassName('cust').item(4);
let clickItem = document.getElementsByClassName('item').item(0);
let clickItem1 = document.getElementsByClassName('item').item(1);
let clickItem2 = document.getElementsByClassName('item').item(2);
let clickItem3 = document.getElementsByClassName('item').item(3);
let clickItem4 = document.getElementsByClassName('item').item(4);
let clickPlace = document.getElementsByClassName('placeOrder').item(0);
let clickPlace1 = document.getElementsByClassName('placeOrder').item(1);
let clickPlace2 = document.getElementsByClassName('placeOrder').item(2);
let clickPlace3 = document.getElementsByClassName('placeOrder').item(3);
let clickPlace4 = document.getElementsByClassName('placeOrder').item(4);
let clickDetails = document.getElementsByClassName('oDetail').item(0);
let clickDetails1 = document.getElementsByClassName('oDetail').item(1);
let clickDetails2 = document.getElementsByClassName('oDetail').item(2);
let clickDetails3 = document.getElementsByClassName('oDetail').item(3);
let clickDetails4 = document.getElementsByClassName('oDetail').item(4);

let ho = document.querySelector('#ho');
let cu = document.querySelector('#cu');
let it = document.querySelector('#it');
let po = document.querySelector('#plao');
let od = document.querySelector('#oD');
// laptop
//
clickHome.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'dashboard');
    dashboard.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
clickHome1.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'dashboard');
    dashboard.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
clickHome2.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'dashboard');
    dashboard.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
clickHome3.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'dashboard');
    dashboard.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
clickHome4.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'dashboard');
    dashboard.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
clickCust.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'customer');

    dashboard.style.display = 'none';
    customer.style.display = 'block';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
clickCust1.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'customer');
    dashboard.style.display = 'none';
    customer.style.display = 'block';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
clickCust2.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'customer');
    dashboard.style.display = 'none';
    customer.style.display = 'block';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
clickCust3.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'customer');
    dashboard.style.display = 'none';
    customer.style.display = 'block';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';
});
clickCust4.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'customer');
    dashboard.style.display = 'none';
    customer.style.display = 'block';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';
});

clickItem.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'item');
    dashboard.style.display = 'none';
    item.style.display = 'block';
    customer.style.display = 'none';

    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';
});
clickItem1.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'item');
    dashboard.style.display = 'none';
    item.style.display = 'block';
    customer.style.display = 'none';

    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';
});
clickItem2.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'item');
    dashboard.style.display = 'none';
    item.style.display = 'block';
    customer.style.display = 'none';

    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';
});
clickItem3.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'item');
    dashboard.style.display = 'none';
    item.style.display = 'block';
    customer.style.display = 'none';

    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';
});
clickItem4.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'item');
    dashboard.style.display = 'none';
    item.style.display = 'block';
    customer.style.display = 'none';

    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';
});
clickPlace.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'placeOrder');
    dashboard.style.display = 'none';
    placeOrder.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';

    orderDetail.style.display = 'none';
});
clickPlace1.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'placeOrder');
    dashboard.style.display = 'none';
    placeOrder.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';

    orderDetail.style.display = 'none';
});
clickPlace2.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'placeOrder');
    dashboard.style.display = 'none';
    placeOrder.style.display = 'block';
    customer.style.display = 'none';

    item.style.display = 'none';
    orderDetail.style.display = 'none';
});
clickPlace3.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'placeOrder');
    dashboard.style.display = 'none';
    placeOrder.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';

    orderDetail.style.display = 'none';
});
clickPlace4.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'placeOrder');
    dashboard.style.display = 'none';
    placeOrder.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';

    orderDetail.style.display = 'none';
});
clickDetails.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'orderDetail');
    dashboard.style.display = 'none';
    orderDetail.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';

});
clickDetails1.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'orderDetail');
    dashboard.style.display = 'none';
    orderDetail.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';

});
clickDetails2.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'orderDetail');
    dashboard.style.display = 'none';
    orderDetail.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';

});
clickDetails3.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'orderDetail');
    dashboard.style.display = 'none';
    orderDetail.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';

});
clickDetails4.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'orderDetail');
    dashboard.style.display = 'none';
    orderDetail.style.display = 'block';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';

});
// mobile
ho.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'dashboard');
    customer.style.display = 'none';
    dashboard.style.display = 'block';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
cu.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'customer');
    dashboard.style.display = 'none';
    customer.style.display = 'block';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
it.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'item');
    dashboard.style.display = 'none';
    customer.style.display = 'none';
    item.style.display = 'block';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'none';

});
po.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'placeOrder');
    dashboard.style.display = 'none';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'block';
    orderDetail.style.display = 'none';

});
od.addEventListener("click", function () {
    sessionStorage.setItem('lastActiveSection', 'orderDetail');
    dashboard.style.display = 'none';
    customer.style.display = 'none';
    item.style.display = 'none';
    placeOrder.style.display = 'none';
    orderDetail.style.display = 'block';

});
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the ID of the last active section from session storage
    const lastActiveSection = sessionStorage.getItem('lastActiveSection');

    // Hide all sections
    const sections = document.querySelectorAll('section');
    // dashboard.style.display='block';

    // dashboard.style.display='none';
    // customer.style.display='none';
    // item.style.display='none';
    // placeOrder.style.display='none';
    // orderDetail.style.display='none';


    if (lastActiveSection) {
        sections.forEach(section => {

            section.style.display = 'none';

        });
        const activeSection = document.querySelector(`#${lastActiveSection}`);
        if (activeSection) {
            activeSection.style.display = 'block';
        } else {
            dashboard.style.display = 'block';
        }
    }
});

