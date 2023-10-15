loadOrderDetails();
$('#orderSrh').click(function () {
    alert("hi")
    // $('#tblOrderDetails').empty();
    let ordId = $('#txtOSearch').val();
    orderDB.find(function (orderDetails) {
        console.log(orderDetails.oid+"   banu");
        console.log(ordId+"  ob");


            // let orderDetails = order.orderDetails;
            // let cId = order.customerID;
            for (let i = 0; i < orderDetails.length; i++) {
                if (orderDetails.oid === ordId) {
                let id = orderDetails[i].oid;
                let code = orderDetails[i].itemCode;
                let qty =orderDetails[i].qty;
                let payment = orderDetails[i].payment;
                // let  cId = orderDB[i].customerID;


                let row = `<tr>
                     <td>${id}</td>
                     <td>${code}</td>
                     <td>${qty}</td>
                     <td>${payment}</td>
                 
                    </tr>`;

                $('#tblOrderDetails').append(row);
            }


          // loadOrderDetails();
        }


    });
});
function loadOrderDetails() {
    $('#tblOrderDetails').empty();
    let orderDetails = order.orderDetails;
    let cId = order.customerID;
    for (let i = 0; i < orderDetails.length; i++) {
        let id = orderDetails[i].oid;
        let code = orderDetails[i].code;
        let qty = orderDetails[i].qty;
        let payment = orderDetails[i].payment;
        // let  cId = orderDB[i].customerID;


        let row = `<tr>
                     <td>${id}</td>
                     <td>${code}</td>
                     <td>${qty}</td>
                     <td>${payment}</td>
                     <td>${cId}</td>
                    </tr>`;

        $('#tblOrderDetails').append(row);


    }
}