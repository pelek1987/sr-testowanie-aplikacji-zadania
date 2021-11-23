export const sum = (a = 0, b = 0) => {
    if(typeof a !== "number" || typeof b !== "number") {
        throw new Error("Numbers must be given");
    }
    return a + b;
}
