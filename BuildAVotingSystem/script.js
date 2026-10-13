const poll = new Map();

const normalizeOption = option => option.trim();

const addOption = option => {
    option = normalizeOption(option);
    if(!option) return 'Option cannot be empty.';
    if(poll.has(option)) return `Option "${option}" already exists.`;
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
};

const vote = (option, voterId) => {
    option = normalizeOption(option);
    if(poll.has(option)){
        const po = poll.get(option);
        if(po.has(voterId)) return `Voter ${voterId} has already voted for "${option}".`;
        po.add(voterId);
        return `Voter ${voterId} voted for "${option}".`;
    }
    return `Option "${option}" does not exist.`;
}

const displayResults = () => 'Poll Results:\n' + [...poll].map(([o, v]) =>`${o}: ${v.size} votes`).join('\n');

console.log(addOption('Turkey'));
console.log(addOption('Morocco'));
console.log(addOption('Spain'));

console.log(vote('Turkey', 'tizio'));
console.log(vote('Turkey', 'caio'));
console.log(vote('Morocco', 'sempronio'));

console.log(displayResults());


