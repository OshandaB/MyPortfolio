let btnSave = $("#save");
getAllCustomer();

$("#save").click(function () {
    if (checkAll()){
        saveCustomer();
    }else{
        alert("Error");
    }

});


$("#update").click(function () {
    let customerId = $('#floatingInput').val();
    updateCustomer(customerId);
});


$("#delete").click(function () {
    let customerId = $('#floatingInput').val();
    deleteCustomer(customerId);
});
$("#clear").click(function () {
    clearTextField();
});
$("#btnSearch").click(function () {
    let id = $('#search').val();
    customerDB.find(function (customerM) {
        if (customerM.id == id) {
            console.log(id)
            $('#floatingInput').val(customerM.id);
            $('#flotingName').val(customerM.name);
            $('#floatingAddress').val(customerM.address);
            $('#floatingSalary').val(customerM.salary);
        }


    });
});

function setTextFields() {    let customerId = $('#floatingInput').val();

    $('#custTable>tr').click(function () {
        // alert("hi");
        $('#floatingInput').val($(this).children(":eq(0)").text());
        $('#flotingName').val($(this).children(":eq(1)").text());
        $('#floatingAddress').val($(this).children(":eq(2)").text());
        $('#floatingSalary').val($(this).children(":eq(3)").text());
        console.log($(this).children(":eq(0)").text())

    });
}

function saveCustomer() {
    let customerId = $('#floatingInput').val();
    if (searchCustomer(customerId.trim()) == undefined) {

        let customerName = $('#flotingName').val();
        let customerAdddress = $('#floatingAddress').val();
        let customerSalary = $('#floatingSalary').val();

        let newCustomer = Object.assign({}, customerM);

        newCustomer.id = customerId;
        newCustomer.name = customerName;
        newCustomer.address = customerAdddress;
        newCustomer.salary = customerSalary;
        console.log(newCustomer+"amal");
        customerDB.push(newCustomer);

        clearTextField();
        getAllCustomer();
        loadCustomerIds();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Customer has been saved successfully..!',
            showConfirmButton: true,
            timer: 2000
        })
    }else {
        clearTextField();
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'This customer doesn\'t exist..!',
        })
    }
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
            let customerName = $('#flotingName').val();
            let customerAdddress = $('#floatingAddress').val();
            let customerSalary = $('#floatingSalary').val();
            customer.name = customerName;
            customer.address = customerAdddress;
            customer.salary = customerSalary;
            clearTextField();
            getAllCustomer()
            Swal.fire({
                position: 'top-right',
                icon: 'success',
                title: 'Customer has been Updated successfully..!',
                showConfirmButton: false,
                timer: 2000
            })
        }

    }
}

function deleteCustomer(customerId) {
    let consent =
        Swal.fire({
        position: 'center',
        icon: 'Warning',
        title: 'Do you really want to Delete this customer.?',
        showConfirmButton: true,
        timer: 2000
    });
    if (consent) {
        for (let i = 0; i < customerDB.length; i++) {
            if (customerDB[i].id === customerId) {
                customerDB.splice(i, 1);
                // alert("Delete Successfully!!");
                clearTextField();
                getAllCustomer()
                Swal.fire({
                    position: 'top-up',
                    icon: 'success',
                    title: 'Customer has been Deleted successfully..!',
                    showConfirmButton: false,
                    timer: 2000
                })
                return true;
            }
        }

    }
    return false;
}


function searchCustomer(id) {
    return customerDB.find(function (customerM) {
        console.log(customerM.id == id)
        console.log(id)
        return customerM.id == id;

    });
}


function getAllCustomer() {
    $('#custTable').empty();
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;


        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${salary}</td>
                    </tr>`;

        $('#custTable').append(row);
        setTextFields();
        doubleclick();

    }
}


doubleclick();
function doubleclick() {
    $('#custTable>tr').dblclick(function () {
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
        }


    });
}