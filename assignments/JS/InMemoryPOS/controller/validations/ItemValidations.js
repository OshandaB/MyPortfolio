const ITEM_CODE_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_NAME_REGEX = /^[A-Za-z ]{3,20}$/;
const ITEM_qty_REGEX = /^[0-9]{1,}$/;
const ITEM_PRICE_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

let i_vArray = new Array();
i_vArray.push({field:$('#code'),regEx:ITEM_CODE_REGEX});
i_vArray.push({field:$('#name'),regEx:ITEM_NAME_REGEX});
i_vArray.push({field:$('#price'),regEx:ITEM_PRICE_REGEX});
i_vArray.push({field:$('#qty'),regEx:ITEM_qty_REGEX});


function clearItemTextFields() {
    $('#code').val("");
    $('#name').val("");
    $('#price').val("");
    $('#qty').val("");
    $("#code,#name,#price,#qty").css("border", "1px solid #ced4da");
    $('#code').focus();
    setItemBtn();
}
setItemBtn();

$("#code,#name,#price,#qty").on("keydown keyup",function ( e) {
    let indexNo = i_vArray.indexOf(i_vArray.find((i)=>i.field.attr("id")==e.target.id));

    if (e.key=="Tab"){
        e.preventDefault();
    }
    checkValidations(i_vArray[indexNo]);
    setItemBtn();
    if (e.key=="Enter"){
       if(e.target.id != i_vArray[i_vArray.length-1].field.attr("id")){
           if(checkValidations(i_vArray[indexNo])){
               i_vArray[indexNo + 1].field.focus();

           }
       }else {
           if (checkValidations(i_vArray[indexNo])) {
               saveItems();
           }
       }
    }

});
function checkAllItems() {
    for (let i = 0; i < i_vArray.length; i++) {
        if (!checkValidations(i_vArray[i]))
            return false;
    }
    return true;
}
function setItemBtn() {
   $('#deleteItem').prop("disabled",true);
    $('#updateItem').prop("disabled",true);

    if (checkAllItems()){
        $('#saveItem').prop("disabled", false);
    }else {
        $('#saveItem').prop("disabled", true);
    }
    let id = $("#code").val();
    if (searchItems(id) === undefined) {
        $('#deleteItem').prop("disabled", true);
        $('#updateItem').prop("disabled", true);
    } else {
        $('#deleteItem').prop("disabled", false);
        $('#updateItem').prop("disabled", false);
    }
}
