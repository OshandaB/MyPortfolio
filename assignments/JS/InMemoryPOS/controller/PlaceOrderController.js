$('#oId').val(generateNextOrderId());
$('#Total').text(0.00);
$('#SubTotal').text(0.00);
var date = new Date();
$('#date').val(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
loadCustomerIds();
loadItemCodes();
$('#discount').val(0.00);
$('#Balance').val(0.00);
$('#purchaseOrder').prop("disabled",true);
$('#btnCart').prop("disabled",true);
let oQty;

$('#cmbCust').on('click', function () {
    setCustomerDetails();
  enabledOrDisabledBtn();
  enabledCartBtn()
});


$('#cmbItem').on('click', function () {
    setItemDetails();
    reduceQuanty();
enabledOrDisabledBtn()
    enabledCartBtn()
});
$('#btnCart').on('click', function () {
    $('#tblCart').empty();
    addToCart();

});

$('#purchaseOrder').on('click', function () {
if (parseFloat($('#cash').val())>= parseFloat($('#SubTotal').text())){
    placeOrderB();
    clearPlaceOrderTextFields();
    $('#tblCart').empty();
    cartDetails=[];
    $('#oId').val(generateNextOrderId());

}else {
    Swal.fire(
        'Insufficient Credit!',
        'Please Check Cash.....',
        'error'
    )
}
loadOrderDetails();

});
$('#oqty').on("keydown keyup", function (e) {


    enabledOrDisabledBtn();
    enabledCartBtn();
});
$('#discount').on("keydown keyup", function (e) {

    calculateSubTotal();

});
$('#cash').on("keydown keyup", function (e) {

    calculateBalance();
enabledOrDisabledBtn()
});
// $('#discount').keyup(function (e) {
//
//
// });

function loadCustomerIds() {
    $('#cmbCust').empty();
    $('#cmbCust').append(`<option selected disabled>Select Customer</option>`);
    for (const customer of customerDB) {
        console.log(customer.id)
        $('#cmbCust').append(`<option>${customer.id}</option>`);
    }
}

function loadItemCodes() {
    $('#cmbItem').empty();
    $('#cmbItem').append(`<option selected disabled>Select Items</option>`);
    for (const items of itemDB) {

        $('#cmbItem').append(`<option>${items.code}</option>`);
    }
}

function setCustomerDetails() {
    for (const customer of customerDB) {
        if (customer.id === $('#cmbCust').val()) {
            $('#cid').val(`${customer.id}`);
            $('#cname').val(customer.name);
            $('#address').val(customer.address);
            $('#salary').val(customer.salary);
            break;
        }

    }
}

function setItemDetails() {
    for (const item of itemDB) {
        if (item.code === $('#cmbItem').val()) {
            $('#itemCode').val(`${item.code}`);
            $('#itemName').val(item.description);
            $('#paymemt').val(item.unitPrice);
            $('#qtyH').val(item.qtyOnHand);
            break;
        }

    }
}

function addToCart() {
    $('#tblCart').empty();
    if (($('#oqty').val().length!=0) && (parseInt($('#oqty').val())<=parseInt($('#qtyH').val())) ){
        let code = $('#itemCode').val();
        let name = $('#itemName').val();
        let price = parseFloat($('#paymemt').val()).toFixed(2);
        oQty = parseInt($('#oqty').val())
        let total = (price * oQty).toFixed(2);
        let exists = isExists($('#cmbItem').val());

        if (exists != null) {
            exists.quantity = exists.quantity + oQty;
            total = (price * exists.quantity).toFixed(2);
            exists.total = total;
        } else {
            var cartTm = Object.assign({}, cartTM);
            cartTm.itemCode = code;
            cartTm.itemName = name;
            cartTm.unitPrice = price;
            cartTm.quantity = oQty;
            cartTm.total = total;
            cartDetails.push(cartTm);
            // for (let i = 0; i < cartDetails.length; i++) {
            //     let row = `<tr>
            //                <td>${cartDetails[i].itemCode}</td>
            //                <td>${cartDetails[i].itemName}</td>
            //                <td>${cartDetails[i].unitPrice}</td>
            //                <td>${cartDetails[i].quantity}</td>
            //                <td>${cartDetails[i].total}</td>
            //               </tr>`;
            //     $('#tblCart').append(row);
            // }
        }
        Swal.fire(
            'Cart Alert!',
            'Cart has been added successfully..!',
            'success'
        )
        reduceQuanty();
        calculateTotal();

        loadAllItems();

        $('#oqty').val("");
    }else {
        Swal.fire(
            'Please Check Quanty!',
            'Cart Added  unSuccessfully..!',
            'error'
        )


        loadAllItems();
    }



}

function isExists(itemCode) {
    for (const item of cartDetails) {
        console.log(item + "obs")
        if (item.itemCode === itemCode) {
            console.log(item.itemCode + "obs")
            return item;
        }
    }
    return null;
}

function loadAllItems() {
    for (let i = 0; i < cartDetails.length; i++) {
        let row = `<tr>
                     <td>${cartDetails[i].itemCode}</td>
                     <td>${cartDetails[i].itemName}</td>
                     <td>${cartDetails[i].unitPrice}</td>
                     <td>${cartDetails[i].quantity}</td>
                     <td>${cartDetails[i].total}</td>
                    </tr>`;
        $('#tblCart').append(row);
    }
}
function placeOrderB() {
    let orderId = $('#oId').val();
    let orderDate = $('#date').val();
    let customerId = $('#cid').val();
    let iCode = $('#itemCode').val();
    let orQty =$(this).children(":eq(3)").text();
    let tota = $(this).children(":eq(4)").text();
    let orders = Object.assign({},order);
    orders.oid = orderId;
    orders.date =orderDate;
    orders.customerID=customerId;

    orderDB.push(orders);

    for (const tm of cartDetails) {
        let orderDetail = Object.assign({},orderDetails);
        orderDetail.oid = orderId;
        orderDetail.code = tm.itemCode;
        orderDetail.qty = tm.quantity;
        orderDetail.payment = tm.total;
        let items = searchItems( tm.itemCode);
        if (items!=null){
            items.qtyOnHand=items.qtyOnHand-tm.quantity;

        }
        orders.orderDetails.push(orderDetail);
        console.log(orderDetail.oid+" kamal");
        console.log(orderDetail.code+" kamal");
        console.log(orderDetail.qty+" kamal");
        console.log(orderDetail.payment+" kamal");


    }
    Swal.fire(
        'Order Placement successful!',
        'Order has been placed successfully..!',
        'success'
    )


generateNextOrderId();

    console.log(orderDB);

}

function reduceQuanty() {
    for (const tm of cartDetails) {
        if (tm.itemCode===$('#cmbItem').val()){
            let newQty = $('#qtyH').val()-oQty;
            $('#qtyH').val(newQty);
        }
    }
}

function calculateTotal() {
    let Total =0;

    for (let i = 0; i <cartDetails.length; i++) {
        Total=Total+parseFloat(cartDetails[i].total)

    }
    $('#Total,#SubTotal').text(Total.toFixed(2));
}
function calculateSubTotal() {
    let subTotal = parseFloat($('#Total').text());
    console.log(subTotal)
    let discount = subTotal*parseFloat($('#discount').val()*0.01);
    console.log(discount)
    let newSubTotal = subTotal-discount;
    console.log(newSubTotal)
    $('#SubTotal').text(newSubTotal.toFixed(2));
}
function calculateBalance() {
    if ($('#cash').val().length!=0 && ($('#SubTotal').text().length!=0)){
        let subTotal = parseFloat($('#SubTotal').text());
        let cash = parseFloat($('#cash').val());
        console.log(cash)
        let balance = cash-subTotal;
        $('#Balance').val(balance.toFixed(2));


    }else {

        $('#Balance').val(0.00);
    }


}
function generateNextOrderId() {
let orderId = orderDB[orderDB.length-1].oid;
    console.log("orderId"+orderId);
 if (orderId!=null){
      let strings = orderId.split("OID-");


     let id= parseInt(strings[1]);
      console.log(id);
      ++id;
    let digit = id.toString().padStart(3, '0');

     return "OID-" + digit;
 }else {
     return "OID-001";
 }
}
function enabledOrDisabledBtn() {
    if (($('#cmbCust').val() !==null) && ($('#cmbItem').val() !==null) &&  ($('#cash').val().length!=0) ){
        $('#purchaseOrder').prop("disabled",false);
    }else {
        $('#purchaseOrder').prop("disabled",true);
    }
}
function enabledCartBtn() {
    if (($('#cmbCust').val() !==null) && ($('#cmbItem').val() !==null) && ($('#oqty').val().length!=0)  ){
        $('#btnCart').prop("disabled",false);
    }else {
        $('#btnCart').prop("disabled",true);
    }
}