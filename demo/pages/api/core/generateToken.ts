const Token = () => {
    return Math.random().toString(36) + Math.floor(Date.now() / 1000)
}

export { Token }