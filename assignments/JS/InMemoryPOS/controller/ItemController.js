getAllItems();
$('#saveItem').click(function () {
    if (checkAllItems()){
        saveItems();
    }else{
        alert("Error");
    }
});
$('#updateItem').click(function () {
    let itemCode = $('#code').val();

    updateItems(itemCode);
});


$('#deleteItem').click(function () {
    let itemCode = $('#code').val();

    let response = deleteItems(itemCode);
    if (response) {
        Swal.fire({
            position: 'top-up',
            icon: 'success',
            title: 'Item has been Deleted successfully..!',
            showConfirmButton: false,
            timer: 2000
        });
        clearItemTextFields();
        getAllItems();
    } else {
        Swal.fire({
            position: 'top-up',
            icon: 'error',
            title: 'Delete Not Successfull!!',
            showConfirmButton: false,
            timer: 2000
        })
        clearItemTextFields();
    }

});
$('#clearItem').click(function () {
    clearItemTextFields();
});
$("#btnItemSearch").click(function () {
    let id = $('#txtItemSrh').val();
    itemDB.find(function (item) {
        if (item.code == id) {
            console.log(id)
            $('#code').val(item.code);
            $('#name').val(item.description);
            $('#price').val(item.unitPrice);
            $('#qty').val(item.qtyOnHand);
        }


    });
});

function saveItems() {
    let itemCode = $('#code').val();
    if (searchItems(itemCode)==undefined){
        let itemName = $('#name').val();
        let price = $('#price').val();
        let qty = $('#qty').val();

        let newItem = Object.assign({}, item);

        newItem.code = itemCode;
        newItem.description = itemName;
        newItem.unitPrice = price;
        newItem.qtyOnHand = qty;

        itemDB.push(newItem);
        console.log(itemDB);
        // clearTextField();
        clearItemTextFields();
        getAllItems();
        loadItemCodes();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item has been saved successfully..!',
            showConfirmButton: true,
            timer: 2000
        })
    }else {
        clearItemTextFields();
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'This Item doesn\'t exist..!',
        })
    }

}

function updateItems(code) {
    if (searchItems(code) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this Items.?");
        if (consent) {
            let item = searchItems(code);
            let itemName = $('#name').val();
            let price = $('#price').val();
            let qty = $('#qty').val();
            item.description = itemName;
            item.unitPrice = price;
            item.qtyOnHand = qty;
            Swal.fire({
                position: 'top-right',
                icon: 'success',
                title: 'Item has been Updated successfully..!',
                showConfirmButton: false,
                timer: 2000
            });
            clearItemTextFields();
            getAllItems();
        }
    }
}

function searchItems(code) {
    return itemDB.find(function (item) {
        return item.code == code;

    })

}

function deleteItems(itemCode) {
    let consent = confirm("Do you really want to delete this Items.?");
    if (consent) {
        for (let i = 0; i < itemDB.length; i++) {
            if (itemDB[i].code === itemCode) {
                itemDB.splice(i, 1);
                return true;
            }
        }
        return false;
    }

}
function getAllItems() {

    $("#tblItems").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let itemCode = itemDB[i].code;
        let itemName = itemDB[i].description;
        let price = itemDB[i].unitPrice;
        let qty = itemDB[i].qtyOnHand;

        let rows = `<tr>
        <td>${itemCode}</td>
        <td>${itemName}</td>
        <td>${price}</td>
        <td>${qty}</td>
           </tr>`;
        $("#tblItems").append(rows);
  setTextFields();
        doubleClickItem();

    }
}
function setTextFields() {
    $('#tblItems>tr').click(function () {
        // alert("hi");
        $('#code').val($(this).children(":eq(0)").text());
        $('#name').val($(this).children(":eq(1)").text());
        $('#price').val($(this).children(":eq(2)").text());
        $('#qty').val($(this).children(":eq(3)").text());
        console.log($(this).children(":eq(0)").text())

    });
}
doubleClickItem();
function doubleClickItem() {
    $('#tblItems>tr').dblclick(function () {
        // alert("hi");
        let consent =
            Swal.fire({
                position: 'center',
                icon: 'Warning',
                title: 'Do you really want to Delete this customer.?',
                showConfirmButton: true,
                timer: 2000
            });
        if (consent){
            $(this).remove();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Removed Successfully',
                showConfirmButton: false,
                timer: 2000
            });
        }


    });
}


