const runMe = async () => {
    const { changeMyConstant } = await import('./file1');
    const { logMyConstantDelegate } = await import('./file2');

    changeMyConstant(2);
    logMyConstantDelegate();
};

void runMe();