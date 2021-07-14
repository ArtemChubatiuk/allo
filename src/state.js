import {rerenderEntireTree} from "./render";

let state = {
    item1: null,
    item2: null,
    op: null,
    result: null,
    str1: "Результат",
    str2: "Ввод",
    currentNumber: "",
    fractionalPart: false
}

// + 10  - 11   * 12     / 13     = 14
/*export let keyPressed = (keyId) => {

    if (keyId == 14 || (keyId > 9 && state.item2 != null)) {
        switch (state.op) {
            case 10:
                state.result = state.item1 + state.item2;
                break;
            case 11:
                state.result = state.item1 - state.item2;
                break;
            case 12:
                state.result = state.item1 * state.item2;
                break;
            case 13:
                state.result = state.item1 / state.item2;
                break;
            case 15:
                state.fractionalPart=true;
        }

    } else if (keyId < 10) {
        if (state.item1 == null) {
            state.item1 = keyId;
            state.currentNumber = state.item1;
        } else if (state.op == null) {
            state.item1 = state.item1 * 10 + keyId;
            state.currentNumber = state.item1;
        } else if (state.item2 == null) {
            state.item2 = keyId;
            state.currentNumber = state.item2;
        } else {
            state.item2 = state.item2 * 10 + keyId;
            state.currentNumber = state.item2;
        }
    }

    else {
        state.op = keyId;
        state.fractionalPart=false;
        if(state.result != null){
            state.item1 = state.result;
            state.currentNumber = state.result;
            state.result=null;
        }
    }

    state.str2 = state.currentNumber;
    if (state.result != null && state.op != null) {
        state.str1=state.item1 + getOp(state.op) +state.item2 + "=";
        state.str2=state.result;
        state.fractionalPart=false;
        state.item1 = null;
        state.item2 = null;
        state.op = null;
    }
    else if (state.op != null) {
        if (state.item2 == null) {
            state.str1 = state.item1 + getOp(state.op);
        }
    }

    if (keyId == 20){
        state.currentNumber=null;
        state.result=null;
        state.str1="Результат";
        state.str2="Ввод";
        state.item1=null;
        state.item2=null;
        state.op=null;
    }

    rerenderEntireTree(state);
}*/

export let keyPressed = (keyId) => {


    if (keyId == 10 && !state.fractionalPart) {
        state.currentNumber = state.currentNumber + ",";
        state.fractionalPart = true;
    }
    if (keyId < 10) {
        state.currentNumber = state.currentNumber + keyId;
    }

    state.str2 = state.currentNumber;

    if (keyId > 10 && keyId < 15) {
        state.fractionalPart = false;
        if (state.item1 != null && state.currentNumber != "") {
            state.item2 = state.currentNumber;
            state.str2 = getResult(Number(state.item1), Number(state.item2), state.op);
            state.str1 = state.str2 + getOp(keyId);
            state.op = keyId;
        } else {
            state.op = keyId;
            state.str1 = state.str2 + getOp(keyId);
            state.item1 = state.currentNumber;
        }
        state.currentNumber = "";
    }

    if (keyId == 15) {
        state.item2 = state.currentNumber;
        state.currentNumber = "";
        state.str1 = state.item1 + getOp(state.op) + state.item2 + "=";
        state.str2 = getResult(Number(state.item1.replace(",",".")), Number(state.item2.replace(",",".")), state.op);
    }


    if (keyId == 20) {
        state.currentNumber = "";
        state.result = null;
        state.str1 = "Результат";
        state.str2 = "Ввод";
        state.item1 = null;
        state.item2 = null;
        state.op = null;
        state.fractionalPart = false;
    }

    rerenderEntireTree(state);
}


let getOp = (id) => {
    let char;
    switch (id) {
        case 11:
            char = "+";
            break;
        case 12:
            char = "-";
            break;
        case 13:
            char = "*";
            break;
        case 14:
            char = "/";
            break;
        case 15:
            char = "=";
            break;
    }
    return char;
}

let getResult = (a, b, op) => {
    let result;
    switch (op) {
        case 11:
            result = a + b;
            break;
        case 12:
            result = a - b;
            break;
        case 13:
            result = a * b;
            break;
        case 14:
            result = a / b;
            break;
    }
    return result;
}

export default state;