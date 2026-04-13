const transactions=[
    {id:"T001",info:"apple.com/bill ", amount:"1200.50 USD",date:"2023-10-01"},
    {id:"T002",info:"SberbankTransfer", amount:"5000.00 RUB",date:"2023-10-01"},
    {id:"T003",info:"APPLE.COM/BILL", amount:"1200.50 USD",date:"2023-10-01"}, //krknorinak!
    {id:"T004",info:" Netflix Subscription ", amount:"15.99 USD",date:"2023-10-02"},
    {id:"T005",info:"Amazon Web Services", amount:"450.00 USD",date:"2023-10-03"},
    {id:"T006",info:"Apple.com/bill", amount:"30.00 USD",date:"2023-10-04"}
];

//Նորմալիզացում

const normalized = transactions.map(t=>{
    //amount-> number + currency
    const [value,currency]=t.amount.split(" "); 

    return{
        ...t,
        info:t.info.trim().toLowerCase(),
        amount:{
            value:parseFloat(value),
            currency: currency 
        }
    };
});

//Դեդուպլիկացիա

const unique = normalized.filter((el,i,arr)=>
    i===arr.findIndex(t=>
    t.info===el.info && 
    t.amount.value==el.amount.value && 
    t.amount.currency===el.amount.currency &&
    t.date===el.date
)
);

//Convertacia
const converted=unique.map(t=>{
    if (t.amount.currency==="RUB"){
        return{
            ...t,
            amount:{
                value:+(t.amount.value/90).toFixed(2),
                currency:"USD"
            }
        };
    }
    return t;
})

//Group by

const grouped=converted.reduce((acc,t)=>{
    if(!acc[t.info]){
        acc[t.info]=[];
    }
    acc[t.info].push(t);
    return acc;
}, {});

//Gumar

const tsaxser=converted.reduce((sum,t)=>{
    return sum + t.amount.value;
},0);




console.dir(normalized);
console.dir(unique);
console.dir(converted);
console.dir(grouped);
console.log(tsaxser.toFixed(2));
