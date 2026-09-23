import { COMMON_SIGHT_WORDS } from './level-config.js';

/**
 * Visually similar or easily confused sight words for lookalike practice
 */
export const WORD_LOOKALIKES = {
    'THE': ['THIS', 'THAT', 'THEY', 'THEN'],
    'THIS': ['THAT', 'THE', 'THEN', 'THEY', 'HIS'],
    'THAT': ['THIS', 'THE', 'WHAT', 'AT'],
    'THEY': ['THE', 'THEN', 'THERE', 'DAY'],
    'THEN': ['WHEN', 'THEM', 'THE', 'THEY'],
    'CAN': ['MAN', 'PAN', 'RAN', 'AND', 'CAT'],
    'MAN': ['CAN', 'PAN', 'RAN', 'MEN'],
    'RAN': ['CAN', 'MAN', 'PAN', 'RUN'],
    'PAN': ['CAN', 'MAN', 'PLAN', 'PEN'],
    'WE': ['ME', 'HE', 'BE', 'MY'],
    'HE': ['WE', 'ME', 'BE', 'SHE'],
    'ME': ['WE', 'HE', 'BE', 'MY'],
    'BE': ['WE', 'HE', 'ME', 'BY'],
    'MY': ['BY', 'ME', 'MAY', 'WE'],
    'BY': ['MY', 'BE', 'BOY'],
    'IS': ['IN', 'IT', 'AS', 'US', 'HIS'],
    'IN': ['ON', 'IS', 'IT', 'AN'],
    'IT': ['IS', 'IN', 'AT', 'TO'],
    'AT': ['IT', 'AS', 'AN', 'THAT'],
    'ON': ['NO', 'IN', 'OF', 'OR'],
    'NO': ['ON', 'SO', 'TO', 'GO', 'DO'],
    'GO': ['NO', 'SO', 'TO', 'DO'],
    'SO': ['NO', 'GO', 'TO', 'DO'],
    'TO': ['DO', 'SO', 'NO', 'GO', 'TOO'],
    'DO': ['TO', 'GO', 'NO', 'SO'],
    'LOOK': ['LIKE', 'BOOK', 'TOOK', 'GOOD'],
    'LIKE': ['LOOK', 'LIME', 'LIVE', 'LITTLE'],
    'HAVE': ['HERE', 'GIVE', 'HAD', 'HAS'],
    'HERE': ['WHERE', 'THERE', 'HAVE', 'HER'],
    'THERE': ['WHERE', 'HERE', 'THEIR', 'THEY'],
    'WHERE': ['THERE', 'HERE', 'WERE', 'WHEN'],
    'WERE': ['WHERE', 'HERE', 'ARE', 'WENT'],
    'WHEN': ['THEN', 'WENT', 'WHAT', 'WHERE'],
    'WHAT': ['THAT', 'WHEN', 'WITH', 'WHO'],
    'WHO': ['HOW', 'WHY', 'WAS', 'WHAT'],
    'WHY': ['WHO', 'MY', 'BY', 'WAY'],
    'WITH': ['WHAT', 'WISH', 'WILL'],
    'WILL': ['WITH', 'WELL', 'ALL', 'BILL'],
    'WENT': ['WANT', 'WHEN', 'WERE'],
    'WANT': ['WENT', 'WHAT'],
    'COME': ['SOME', 'HOME', 'CAME'],
    'SOME': ['COME', 'SAME', 'SO'],
    'OF': ['OFF', 'IF', 'ON', 'FOR'],
    'OFF': ['OF', 'FOR', 'OUT'],
    'SEE': ['SAID', 'SHE', 'SAW', 'SEA'],
    'SAID': ['SEE', 'SAD', 'SAY'],
    'SAW': ['SEE', 'SAY', 'WAS'],
    'SAY': ['SEE', 'SAW', 'DAY', 'MAY'],
    'SHE': ['HE', 'SEE', 'THE'],
    'YOU': ['YOUR', 'OUR', 'OUT', 'YES'],
    'PLAY': ['AWAY', 'PRAY', 'DAY'],
    'AWAY': ['PLAY', 'WAY', 'A'],
    'LITTLE': ['LIKE', 'LOOK'],
    'AM': ['AN', 'AS', 'AT', 'I'],
    'I': ['A', 'IN', 'IT', 'AM']
};

/**
 * Generate smart distractors for sight word recognition
 * @param {string} target - The correct target word
 * @param {number} count - Total balloons count (including target)
 * @param {string[]} pool - Current level word pool
 * @param {boolean} useLookalikes - Whether to introduce visually similar words
 * @param {Object} mistakeHistory - Adaptive mistake history
 */
function generateSightWordDistractors(target, count, pool, useLookalikes, mistakeHistory = {}) {
    const set = new Set([target]);

    // 1. Adaptive reinforcement: prioritize words previously missed
    Object.keys(mistakeHistory).forEach(word => {
        if (word !== target && pool.includes(word) && set.size < count) {
            set.add(word);
        }
    });

    if (useLookalikes) {
        // 2a. Lookalike mode: prioritize visually similar lookalikes (e.g. THE -> THIS, THAT)
        const lookalikes = WORD_LOOKALIKES[target] || [];
        for (const word of lookalikes) {
            if (set.size >= count) break;
            if (pool.includes(word)) {
                set.add(word);
            }
        }
        // If still need options, check lookalikes from general sight word vocabulary
        for (const word of lookalikes) {
            if (set.size >= count) break;
            if (COMMON_SIGHT_WORDS.includes(word)) {
                set.add(word);
            }
        }
    } else {
        // 2b. Simpler mode: prioritize visually different words (different first letter and length)
        const visuallyDistinct = pool.filter(w => w !== target && w[0] !== target[0] && w.length !== target.length);
        const shuffledDistinct = [...visuallyDistinct].sort(() => Math.random() - 0.5);
        for (const word of shuffledDistinct) {
            if (set.size >= count) break;
            set.add(word);
        }

        // Next, different first letter of same length
        const diffFirst = pool.filter(w => w !== target && w[0] !== target[0] && !set.has(w));
        const shuffledDiffFirst = [...diffFirst].sort(() => Math.random() - 0.5);
        for (const word of shuffledDiffFirst) {
            if (set.size >= count) break;
            set.add(word);
        }
    }

    // 3. Fill remaining from current level pool
    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
    for (const word of shuffledPool) {
        if (set.size >= count) break;
        set.add(word);
    }

    // 4. Fallback to common sight words pool if level pool is smaller than required count
    if (set.size < count) {
        const shuffledAll = [...COMMON_SIGHT_WORDS].sort(() => Math.random() - 0.5);
        for (const word of shuffledAll) {
            if (set.size >= count) break;
            set.add(word);
        }
    }

    return Array.from(set).sort(() => Math.random() - 0.5);
}

export class GameLogic {
    /**
     * Generate a new challenge question for the given level
     * @param {Object} levelDef - Level configuration entry from level-config.js
     * @param {Object} options - { currentLevel, mistakeHistory, previousTarget }
     * @returns {Object} Question definition:
     *   - target: identifier/value of the correct answer
     *   - promptDisplay: string to display on the challenge card
     *   - promptSubtext: text above prompt ("POP WORD")
     *   - speechText: text for TTS speech ("Pop THE")
     *   - options: array of balloon options [{ value, display, isCorrect }]
     */
    static generateQuestion(levelDef, options = {}) {
        const mistakeHistory = options.mistakeHistory || {};
        const previousTarget = options.previousTarget || null;
        const pool = levelDef.words || COMMON_SIGHT_WORDS;

        // Pick random target word within level pool (avoid immediate repeat if pool > 1)
        let targetWord = pool[Math.floor(Math.random() * pool.length)];
        if (pool.length > 1 && targetWord === previousTarget) {
            const altPool = pool.filter(w => w !== previousTarget);
            targetWord = altPool[Math.floor(Math.random() * altPool.length)];
        }

        const balloonCount = Math.min(Math.max(levelDef.balloonCount || 4, 3), 6);
        const useLookalikes = levelDef.useLookalikes ?? true;

        const words = generateSightWordDistractors(targetWord, balloonCount, pool, useLookalikes, mistakeHistory);

        const balloonOptions = words.map(word => ({
            value: word,
            display: word,
            isCorrect: word === targetWord,
        }));

        return {
            target: targetWord,
            promptDisplay: targetWord,
            promptSubtext: 'POP WORD',
            speechText: `Pop ${targetWord}`,
            options: balloonOptions,
        };
    }

    /**
     * Check if a tapped balloon is correct
     * @param {*} tappedValue
     * @param {*} targetValue
     * @returns {boolean}
     */
    static checkAnswer(tappedValue, targetValue) {
        return tappedValue === targetValue;
    }

    /**
     * Record mistake for adaptive distractor generation
     */
    static recordMistake(mistakeHistory, tappedValue) {
        mistakeHistory[tappedValue] = (mistakeHistory[tappedValue] || 0) + 1;
    }
}
