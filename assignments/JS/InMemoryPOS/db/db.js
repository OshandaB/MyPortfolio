var customerDB = [
    {id:"C00-001",name:"Oshanda Banuka",address:"Mathara",salary:100000},
    {id:"C00-002",name:"Dasun Shanaka",address:"Panadura",salary:200000},
    {id:"C00-003",name:"Kusal Mendis",address:"Panadura",salary:300000}
];
var itemDB = [
    {code:"I00-001",description:"Lux",qtyOnHand: 100,unitPrice: 145.00},
    {code:"I00-002",description:"Sunlight",qtyOnHand: 150,unitPrice: 345.00},
    {code:"I00-003",description:"Light Boy",qtyOnHand: 400,unitPrice: 245.00}
];
var orderDB = [
    {oid:"OID-001", date:"2023/10/06", customerID:"C00-001",
        orderDetails:[
            {oid:"OID-001", code:"I00-001", qty:10, payment:145.00},
            {oid:"OID-001", code:"I00-002", qty:2, payment:345.00}
        ]
    }
];
var cartDetails=[];