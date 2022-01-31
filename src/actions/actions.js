// with payload passed as a parameter
export const increment = (number) => {
    return {
        type: "INCREMENT",
        payload: number
    };
}

export const decrement = (number) => {
    return {
        type: 'DECREMENT', //action Name
        payload: number
    }
}

// default adding 1 without payload
export const incrementOne = () => {
    return {
        type: "INCREMENT-ONE",

    };
}

export const decrementOne = () => {
    return {
        type: 'DECREMENT-ONE', //action Name

    }
}
