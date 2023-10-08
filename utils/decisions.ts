const decisions = {
    init: {
        id: 1,
        description: 'init',
        options: [
            'b', 'c', 'd'
        ],
    },
    b: {
        id: 2,
        description: 'Run the fuck away',
        options: [
            'e', 'c', 'd'
        ],
    },
    c: {
        id: 3,
        description: 'Call the cops',
        options: [
            'e', 'b', 'd'
        ],
    },
    d: {
        id: 4,
        description: "Prentend that this didn't happen",
        options: [
            'e', 'b', 'c'
        ],
    },
    e: {
        id: 5,
        description: 'Cry for help',
        options: [
            'b', 'c', 'd'
        ],
    },
};

export default decisions;
