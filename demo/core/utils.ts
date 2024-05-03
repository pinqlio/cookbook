const isLetter = ( str : string ) => {
    if ( str.length === 0 ) return true
    return /[A-Za-z0-9]/.test(str)
}
export {isLetter}

const generateToken = () => {
    return Math.random().toString(36).substr(2) + Math.floor(Date.now() / 100 )
}
export { generateToken}