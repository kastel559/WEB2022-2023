function pow(a, b) {
    let c = a;
    for(let i = 1; i < b; i++) {
        c *= a;
    }
    return c;
}
alert(pow(3, 2))
alert(pow(3, 3))