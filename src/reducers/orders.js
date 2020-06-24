const hardCodedOrders = [
        {ID: "2324324", Date: "26.04.2019", Status: "Ready", Description: "Lorem ipsum 1"},
        {ID: "2754324", Date: "27.03.2019", Status: "In Progress", Description: "Lorem ipsum 2"},
        {ID: "2324564", Date: "23.06.2018", Status: "In Progress", Description: "Lorem ipsum 3"},
]

const orders = (state = [], action) => {
    //
    switch(action.type){
        case 'GET_ORDERS':
            return hardCodedOrders;
        default:
            return [{ID: "Nothing", Date: "Nothing", Status: "Nothing", Description: "Nothing"}];
    }
};

export default orders;