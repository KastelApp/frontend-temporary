async function redirect() {
    return [
        {
            source: '/discord',
            destination: 'https://discord.gg/f5HgvkRbVP',
            permanent: true,
        },
        {
            source: '/github',
            destination: 'https://github.com/KastelApp',
            permanent: true,
        },
    ]
}

module.exports = redirect