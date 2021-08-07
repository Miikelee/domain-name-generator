let pronoun = ['the','our','super', 'epic','exotic','ultra'];
let adj = ['great', 'big','asian','brazilian','mega','flawless' ];
let noun = ['jogger','racoon','food','shoes', 'resturant','island'];
let end = ['.com','.org','.cl','.ve','.net','.es']

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            console.log(pronoun[i]+adj[j]+noun[k]+end[Math.floor(Math.random() * end.length)])
        }
    }
}
console.log("Fin del generador de dominios")

