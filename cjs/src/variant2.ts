const runMe = async () => {
    const { logMyConstantDelegate } = await import('./file2');
    const { changeMyConstant } = await import('./file1');

    changeMyConstant(2);
    logMyConstantDelegate();
};

void runMe();