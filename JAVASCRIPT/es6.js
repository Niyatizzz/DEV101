const variable = 'abc'
console.log(variable)

const makeError = () => {
    try {
        const name = 'a';
        name = 'b'
    } catch (err) {
        console.error(err);
    }
}
makeError()