const changeMe = {
    myValue: 1,
};

export const changeMyConstant = (newValue : number) => {
    changeMe.myValue = newValue;
};

export const logMyConstant = () => {
    console.log(changeMe.myValue);
};