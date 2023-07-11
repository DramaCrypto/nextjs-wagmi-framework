export default {
    cactus: {
        1: '0x700536E06A8fab06F65aD99406f87cE4a337733e',
        11155111: '0x02F6910CA1EBa7E3E6C20B16556509A65bbEaD9d'
    },
    multiCall: {
        1: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
        5: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
        11155111: '0xFb5909ec4d5a3C8aeD6e389851a7Fc1fFd663428',
        56: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B',
        97: '0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576',
    },
} as const satisfies Record<string, Record<number, `0x${string}`>>
