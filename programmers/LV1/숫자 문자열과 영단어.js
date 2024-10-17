function solution(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for (let i=0; i<words.length; i++) {
        if (s.includes(words[i])) {
        s = s.replaceAll(words[i], words.indexOf(words[i]))    
        }
    }
    return Number(s);
}
