/**
 * Common Sight Words Vocabulary (Dolch / Fry high-frequency sight words for Grade K–2)
 */
export const COMMON_SIGHT_WORDS = [
    'I', 'A', 'AM', 'AN', 'AT', 'BE', 'BY', 'DO', 'GO', 'HE', 'IN', 'IS', 'IT', 'ME', 'MY', 'NO', 'OF', 'ON', 'OR', 'SO', 'TO', 'UP', 'US', 'WE',
    'ALL', 'AND', 'ARE', 'ASK', 'BIG', 'BOY', 'BUT', 'CAN', 'CAT', 'DAY', 'DID', 'FOR', 'GET', 'HAD', 'HAS', 'HER', 'HIM', 'HIS', 'HOW', 'MAN',
    'NEW', 'NOT', 'NOW', 'OFF', 'OLD', 'ONE', 'OUR', 'OUT', 'PAN', 'RAN', 'RED', 'RUN', 'SAW', 'SAY', 'SEE', 'SHE', 'THE', 'TOO', 'TWO', 'WAS',
    'WAY', 'WHO', 'WHY', 'YES', 'YOU',
    'AWAY', 'BOOK', 'CAME', 'COME', 'DOWN', 'FIND', 'FROM', 'GIVE', 'GOOD', 'HAVE', 'HELP', 'HERE', 'HOME', 'JUMP', 'LIKE', 'LOOK', 'MAKE', 'MANY',
    'PLAY', 'SAID', 'SOME', 'STOP', 'TAKE', 'THAT', 'THEM', 'THEN', 'THEY', 'THIS', 'TIME', 'TOOK', 'VERY', 'WANT', 'WENT', 'WERE', 'WHAT', 'WHEN',
    'WILL', 'WITH', 'YOUR',
    'COULD', 'FIRST', 'LITTLE', 'ROUND', 'THERE', 'WHERE', 'WHICH', 'WOULD'
];

/**
 * Level Configurations — Balloon Sight Word Pop (Grade K–2)
 * 20 Progressive Levels starting with simpler, visually different options
 * before introducing similar lookalike words (e.g., THE / THIS / THAT).
 */
export const LEVELS_CONFIG = [
    {
        level: 1,
        label: 'I, A, GO, TO',
        words: ['I', 'A', 'GO', 'TO', 'NO'],
        balloonCount: 3,
        useLookalikes: false,
        description: 'First short words with visually distinct shapes'
    },
    {
        level: 2,
        label: 'ME, WE, HE',
        words: ['ME', 'WE', 'HE', 'BE'],
        balloonCount: 3,
        useLookalikes: false,
        description: '2-letter words with distinct beginnings'
    },
    {
        level: 3,
        label: 'IS, IN, AT',
        words: ['IS', 'IN', 'IT', 'AT', 'ON'],
        balloonCount: 3,
        useLookalikes: false,
        description: 'Short everyday words'
    },
    {
        level: 4,
        label: 'AM, MY, UP',
        words: ['AM', 'MY', 'UP', 'DO', 'SO', 'BY'],
        balloonCount: 4,
        useLookalikes: false,
        description: 'Diverse 2-letter words'
    },
    {
        level: 5,
        label: 'THE, YOU, CAN',
        words: ['THE', 'YOU', 'AND', 'CAN', 'SEE'],
        balloonCount: 4,
        useLookalikes: false,
        description: 'Core 3-letter sight words'
    },
    {
        level: 6,
        label: 'BIG, RED, RUN',
        words: ['BIG', 'RED', 'RUN', 'NOT', 'FOR', 'GET'],
        balloonCount: 4,
        useLookalikes: false,
        description: 'Action & descriptive words'
    },
    {
        level: 7,
        label: 'LOOK & LIKE',
        words: ['LOOK', 'LIKE', 'HAVE', 'COME', 'PLAY'],
        balloonCount: 4,
        useLookalikes: false,
        description: 'Distinct 4-letter words'
    },
    {
        level: 8,
        label: '-AN Family',
        words: ['CAN', 'MAN', 'PAN', 'RAN'],
        balloonCount: 4,
        useLookalikes: true,
        description: 'Rhyming words with shared -AN ending'
    },
    {
        level: 9,
        label: 'TH Family',
        words: ['THE', 'THIS', 'THAT', 'THEY', 'THEN'],
        balloonCount: 4,
        useLookalikes: true,
        description: 'Words starting with TH (THE, THIS, THAT)'
    },
    {
        level: 10,
        label: 'WHO, WHAT, WHERE',
        words: ['WHO', 'WHAT', 'WHEN', 'WHERE', 'WHY'],
        balloonCount: 4,
        useLookalikes: true,
        description: 'Question words with shared WH-'
    },
    {
        level: 11,
        label: 'Pronoun Power',
        words: ['I', 'YOU', 'HE', 'SHE', 'WE', 'THEY'],
        balloonCount: 4,
        useLookalikes: false,
        description: 'Common pronouns across lengths'
    },
    {
        level: 12,
        label: 'IN, ON, OF, OFF',
        words: ['IN', 'ON', 'OF', 'OFF', 'NO', 'SO'],
        balloonCount: 4,
        useLookalikes: true,
        description: 'Fine visual discrimination of short words'
    },
    {
        level: 13,
        label: 'SAID, SEE, SAW',
        words: ['SAID', 'SEE', 'SAW', 'SAY', 'SO'],
        balloonCount: 4,
        useLookalikes: true,
        description: 'Sight words starting with S'
    },
    {
        level: 14,
        label: 'COME, SOME, MAKE',
        words: ['COME', 'SOME', 'HOME', 'MAKE', 'TAKE'],
        balloonCount: 5,
        useLookalikes: true,
        description: 'Sight words with similar vowel patterns'
    },
    {
        level: 15,
        label: 'HERE & THERE',
        words: ['HERE', 'THERE', 'WHERE', 'WERE'],
        balloonCount: 5,
        useLookalikes: true,
        description: 'Confusable location words'
    },
    {
        level: 16,
        label: 'WITH, WILL, WENT',
        words: ['WITH', 'WILL', 'WENT', 'WAS', 'WANT'],
        balloonCount: 5,
        useLookalikes: true,
        description: 'Lookalikes starting with W'
    },
    {
        level: 17,
        label: 'LITTLE & DOWN',
        words: ['LITTLE', 'GOOD', 'HELP', 'JUMP', 'DOWN', 'AWAY'],
        balloonCount: 5,
        useLookalikes: false,
        description: 'Longer sight words'
    },
    {
        level: 18,
        label: 'Speedy Words',
        words: ['THE', 'THIS', 'THAT', 'YOU', 'CAN', 'SEE', 'HAVE', 'SAID', 'WITH'],
        balloonCount: 5,
        useLookalikes: true,
        description: 'Fast review of top sight words'
    },
    {
        level: 19,
        label: 'Master Lookalikes',
        words: ['THE', 'THEY', 'THIS', 'THAT', 'THERE', 'WHERE', 'WHEN', 'WHAT'],
        balloonCount: 6,
        useLookalikes: true,
        description: 'Challenging lookalike discrimination'
    },
    {
        level: 20,
        label: 'Sight Word Champion',
        words: ['I', 'AM', 'THE', 'IS', 'YOU', 'MY', 'WE', 'CAN', 'THIS', 'THAT', 'LIKE', 'LOOK', 'SAID', 'WITH', 'HAVE', 'PLAY'],
        balloonCount: 6,
        useLookalikes: true,
        description: 'Grand champion review of all sight words'
    }
];
