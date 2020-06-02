let pages = [
    {
        title: "Meowge",
        text: [],
        fight: false,
    },
    {
        title: "Chapter I - Real Meowgic",
        text: [],
        fight: false
    },
    {
        title: "",
        fight: "training",
        text: [
            "Welcome to your first lesson of Runemoewgic, neophyte.",
            '',
            "We are supposed to spend the first hour or so explaining the why we can use magic, but that's boring.",
            "",
            "To cast a spell, simply write the correct rune sequence, then simply cast it.",
            "",
            "Let's see, how about we start with FU, the rune of FIRE.",
            "",
            "Go to your spellbook, write FU, and cast that spell to destroy the golem.",
        ]
    },
    {
        title: "",
        fight: false,
        text: [
            "Excellent work neophyte, that was a textbook example of taking too long.",
            "",
            "In any case, let's review some facts from the textbook.",
            "",
            "Fact number one: There are four elements. Actually five but don't quote me on that.",
            "",
            "Fact number two: FIRE, EARTH, WATER, WIND. Their runes are FU, TI, GA and VE. Wrong.",

        ]
    },
    {
        title: "",
        fight: "training",
        text: [
            "Fact number three: only elemental runes makes your spell stronger. Wrong again, of course.",
            "",
            "Fact number four: the only way to start a full spell is with an elemental rune. Look at that, they got something right.",
            "Fact number five: Every one rune spell should do between two and twelve damage points.",
            "Well, that's enough wrong data for now. For now, just focus on destroying the golem with the other runes.",
            "",
            "Remember; FU TI GA VE. Then cast away."
        ]
    },
    {
        title: "",
        fight: false,
        text: [
            "I knew you could do it, neophyte",
            "",
            "So further on the power side of the spell, every elemental rune adds between one and six points of damage.",
            "",
            "Don't ask me to convert points of damage into joules, the formula is in your textbook somewhere.",
            "",
            "However, the element of the spell is established by the first rune only. Exceptions aside.",
        ]
    },
    {
        title: '',
        fight: false,
        text: [
            "In any case, while all runes have a somewhat random list of established incompatibilities, the elemental runes are compatible with almost all runes.",
            "",
            "A rune will only provide the full force of it's magical power if the rune preceding is not incompatible.",
            "",
            "For example, GA and FU, WATER and FIRE, are incompatible, and won't work with each other at all.",
        ]
    },
    {
        title: "",
        fight: "training2",
        text: [
            "So if you were to cast, say, FU-GA, the FU rune would work, but the GA rune would fizzle and not add anything to the spell. The same goes for GA-FU.",
            "",
            "The full incompatibility list is as follows:",
            "",
            "EARTH: VE and FU", 
            "FIRE: GA and TI", 
            "WATER: FU and VE", 
            "WIND: TI and FU",
            "",
            "Here's an additional Rune Slot to try some of your new spells now. If done right you should be adding, in average, about 3.5 points of damage to your spell.",
        ]
    },
    {
        title: "",
        fight: false,
        text: [
            "Great work neophyte, you're getting better.",
            "",
            "So back to incompatibilities, we are intelligent meowges, so we found out that even if two runes are incompatible, we can make them work together.",
            "",
            "That is, using another compatible rune as a link.",
            "",
            "Going back to FU-GA, to make that spell work you would need to add another rune in the middle to work as a link.",
        ]
    },
    {
        title: "",
        fight: false,
        text: [
            "Any rune would work, even incompatible runes. Take for example, FU-GA-GA, the first and the last would function, and the link would fizzle, but still work as a link.",
            "",
            "But that would be wasteful, and meowges are everything except wasteful.",
            "",
            "So instead of using an incompatible rune, we are going refactor this into a working spell.",
        ],
    },
    {
        title: "",
        fight: false,
        text: [
            "For example, the EARTH rune, is compatible with the FIRE rune, and the WATER rune is compatible with the EARTH rune. As such, FU-TI-GA, is a fully working spell.",
            "",
            "If instead of using the EARTH rune we wanted, for mysterious reasons, to use the WIND rune, that would be a little more complicated, but still possible.",
            "",
            "VE is incompatible with FU, but compatible with GA. So, to make this work, we change the order to GA-VE-FU."
        ]
    },
    {
        title: "",
        fight: "training3",
        text: [
            "Which would be a spell with the same power level of FU-TI-GA, although it distills into a bolt of a different element.",
            "",
            "And that's why I wanted you to remember FU-TI-GA-VE, that's the order of elemental rune compatibilities, FIRE, EARTH, WATER, WIND.",
            "",
            "Now it's time to put in practice some of this, why don't you fight against a more powerful golem? Go, neophyte.",
        ]
    },
    {
        title: "",
        fight: "training4",
        text: [
            "Welcome to your final lesson, neophyte.",
            "",
            "Today you will prove to us that you know how to defend yourself.",
            "",
            "Remember: FU for FIRE, VE for WIND, GA for WATER, EARTH with TI.",
            "",
            "Come on now, we're waiting..."
        ]
    },
    {
        title: "",
        fight: false,
        text: [
            "Congratulations, mage.",
            "",
            "Your first mission as a formal member of this magisterium is to retrieve the infamous ORB OF ZOT",
            '',
            "It's located on the lowest floor of the dungeon below.",
            "Good luck."
        ]
    },
]

export default pages
