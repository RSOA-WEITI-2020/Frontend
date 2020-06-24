export const signIn = () =>{
    return (dispatch) => {
        //
        dispatch({type: 'SIGN_IN'})
    };
};

export const signOut = () =>{
    return (dispatch) => {
        //
        dispatch({type: 'SIGN_OUT'})
    };
};