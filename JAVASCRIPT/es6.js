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

// web storage api

//not part of dom, refers to the window api

// window.alert() same as alret()

// modules - introduced in es6
// export import files

export default function playGuitar() {
    return 'playing guitar!';
}

export const shredding = () => {
    return 'shredding';
}

export const plucking = () => {
    return 'plucking strings';
}

// export{shredding, plucking};

//importing

//import playguitat from "./es6.js;" - like this

//fetch api requires callbacks, promises, async/wait

//callbacks

function firstfunc(parameters, callback) {
    //do task
    callback();
}