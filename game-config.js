/**
 * Game Configuration
 * Customize this file to configure global branding, speech options, storage, audio and palettes.
 */
export const GAME_CONFIG = {
    // Unique ID for local progress storage (e.g., 'balloonSightWordPopProgress')
    storageKey: 'balloonSightWordPopProgress',

    // Analytics & XP System Configuration
    analytics: {
        gameId: 'balloon-sight-word-pop',
        totalCampaignXp: 200, // Strict invariant: max 200 XP per campaign/run
        usePerformanceTiers: true, // 100% (0 mistakes), 80% (1 mistake), 60% (2+ mistakes)
    },

    // TTS & Voice Configuration
    tts: {
        source: 'balloon-sight-word-pop',
        language: 'en-IN', // 'en-US' provides clear English word pronunciation
        rate: 0.9,
        pitch: 1,
        volume: 1.0,
    },

    // Audio assets & sound settings
    audio: {
        bgMusic: 'assets/audio/game-music.mp3',
        levelComplete: 'assets/audio/level-complete.mp3',
        bgMusicVolume: 0.1,
        bgMusicPlaybackRate: 1.0,
        levelCompleteVolume: 0.5,
        menuDialogueVolume: 0.7,
    },

    // Gameplay limits
    round: {
        popsPerRound: 5,
    },

    // Voice Feedback Lines
    feedback: {
        correct: ['Yes!', 'Great!', 'You got it!', 'Yay!'],
        wrong: 'Try again.',
        levelComplete: [
            'Amazing! Level complete!',
            'Fantastic work!',
            'You did it! Great job!',
            'Wonderful! Next level unlocked!'
        ],
        // Pre-recorded voice dialogue audio clips (fallback to TTS if empty or unavailable)
        audioDialogues: {
            positive: [
                'assets/sparkyDialogues/positive/excellent-chat.mp3',
                'assets/sparkyDialogues/positive/great.mp3',
                'assets/sparkyDialogues/positive/nice-attempt.mp3',
                'assets/sparkyDialogues/positive/yay.mp3',
                'assets/sparkyDialogues/positive/yes.mp3',
                'assets/sparkyDialogues/positive/you-got-it.mp3',
            ],
            negative: [
                'assets/sparkyDialogues/negative/close-one.mp3',
                'assets/sparkyDialogues/negative/not-quite.mp3',
                'assets/sparkyDialogues/negative/try-again.mp3',
                'assets/sparkyDialogues/negative/almost.mp3',
            ],
            levelcomplete: [
                'assets/sparkyDialogues/levelcomplete/amazing-level-complete_.mp3',
                'assets/sparkyDialogues/levelcomplete/fantastic-work.mp3',
                'assets/sparkyDialogues/levelcomplete/wonderful-next-level-unlocked.mp3',
                'assets/sparkyDialogues/levelcomplete/you-did-it.mp3',
                'assets/sparkyDialogues/positive/yes-sir.mp3',
            ],
            menuDialogue: [
                'assets/sparkyDialogues/menuDialogue/bark.mp3',
                'assets/sparkyDialogues/menuDialogue/domo-domo.mp3',
                'assets/sparkyDialogues/menuDialogue/lets-pop.mp3',
                'assets/sparkyDialogues/menuDialogue/look-at-all-those-balloons.mp3',
                'assets/sparkyDialogues/menuDialogue/meow.mp3',
                'assets/sparkyDialogues/menuDialogue/ready-chat.mp3',
            ],
        },
    },

    // Mascot sparky labels
    sparkyLabels: {
        curious: 'Sparky is curious',
        speaking: 'Sparky is speaking',
        happy: 'Sparky is happy',
        thinking: 'Sparky is thinking',
        celebrate: 'Sparky celebrates',
        idle: 'Sparky is ready',
        correct: 'Sparky gives a thumbs up',
        kind: 'Sparky is cheering you on',
    },

    // Balloon visual color palette
    balloonPalette: [
        { base: '#ff4d6d', light: '#ff758f', knot: '#c9184a' }, // Pink
        { base: '#38bdf8', light: '#7dd3fc', knot: '#0284c7' }, // Sky Blue
        { base: '#4ade80', light: '#86efac', knot: '#16a34a' }, // Mint Green
        { base: '#fbbf24', light: '#fde047', knot: '#d97706' }, // Yellow
        { base: '#a855f7', light: '#c084fc', knot: '#7e22ce' }, // Purple
        { base: '#fb923c', light: '#fdba74', knot: '#ea580c' }, // Orange
    ],

    // Sticker Album rewards unlocked on level completion
    stickers: [
        { id: 0, asset: 'emoji_u2b50.svg', name: 'Super Reader' },
        { id: 1, asset: 'emoji_u1f308.svg', name: 'Rainbow' },
        { id: 2, asset: 'emoji_u1f680.svg', name: 'Reading Rocket' },
        { id: 3, asset: 'emoji_u1f995.svg', name: 'Word Dino' },
        { id: 4, asset: 'emoji_u1f41d.svg', name: 'Busy Bee' },
        { id: 5, asset: 'emoji_u1f43c.svg', name: 'Panda Pal' },
        { id: 6, asset: 'emoji_u1f984.svg', name: 'Word Unicorn' },
        { id: 7, asset: 'emoji_u1f419.svg', name: 'Smart Octopus' },
        { id: 8, asset: 'emoji_u2600.svg', name: 'Sunny Reader' },
        { id: 9, asset: 'emoji_u1f98b.svg', name: 'Butterfly' },
        { id: 10, asset: 'emoji_u1f422.svg', name: 'Speedy Turtle' },
        { id: 11, asset: 'emoji_u1f981.svg', name: 'Brave Lion' },
        { id: 12, asset: 'emoji_u1f433.svg', name: 'Word Whale' },
        { id: 13, asset: 'emoji_u1f916.svg', name: 'Robo Reader' },
        { id: 14, asset: 'emoji_u1f47d.svg', name: 'Star Alien' },
        { id: 15, asset: 'emoji_u1f409.svg', name: 'Dragon Master' },
        { id: 16, asset: 'emoji_u1f989.svg', name: 'Wise Owl' },
        { id: 17, asset: 'emoji_u1f98a.svg', name: 'Clever Fox' },
        { id: 18, asset: 'emoji_u1f427.svg', name: 'Cool Penguin' },
        { id: 19, asset: 'emoji_u1f988.svg', name: 'Swift Shark' },
        { id: 20, asset: 'emoji_u1f3c6.svg', name: 'Sight Word Champion' }
    ]
};
