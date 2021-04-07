function rp(messages, realValues) {
    messages = new Map(Object.entries(messages));
    const replaced = {};
    messages.forEach((value, key) => {
        const placeholders = value.match(/{[a-z,A-Z,\d]+}/gm);
        if(!placeholders) return replaced[key] = value;
        placeholders.forEach((v, i) => {
            value = value.replace(v, realValues[v.replace(/{|}/g, '').toLowerCase()] || v)
        })
        replaced[key] = value;
    })
    return replaced;
}

module.exports = rp;

