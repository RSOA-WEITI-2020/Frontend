const viewOrder = (state , action) => {
    //
    switch(action.type){
        case 'CHANGE_CURRENT_ORDER':
            return action.value;
        default:
            return {value: 'Stasiek'};
    }
};



export default viewOrder;