module.exports = function toReadable(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let words = ''
    if (number === 0) words = 'zero'
    if (number >= 100) words = `${units[parseFloat(number.toString()[0])]} hundred `
    if (number % 100 >= 20) words += `${tens[parseFloat((number % 100).toString()[0])]} `
    if (number % 100 < 20 && number % 100 >= 10) words += `${units[number % 100]} `
    else if (number % 10 <= 9) words += `${units[number % 10]}`
    return words.trim()
}

