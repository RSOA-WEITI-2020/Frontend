const hardCodedOrders = [
        {ID: "2324324", Date: "26.04.2019", Status: "Ready"},
        {ID: "2754324", Date: "27.03.2019", Status: "In Progress"},
        {ID: "2324564", Date: "23.06.2018", Status: "In Progress"},
]

const orders = (state = [], action) => {
    //
    switch(action.type){
        case 'GET_ORDERS':
            return hardCodedOrders;
        default:
            return [];
    }
};

export default orders;