function endingWord(n: number): string {
    if (n === 1 || (n > 20 && n % 10 === 1 && n % 100 !== 11)) {
        return 'а'
    } else if ((n > 1 && n < 5) || (n > 20 && n % 10 > 1 && n % 10 < 5)) {
        return 'и'
    } else if (
        n === 0 ||
        (n > 1 && n < 20) ||
        n % 10 === 0 ||
        n % 100 >= 11 ||
        n % 10 >= 5 ||
        n % 100 >= 10
    ) {
        return ''
    }
    return ''
}

export { endingWord }
