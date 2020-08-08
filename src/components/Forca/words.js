var programming_languages = [
    "python",
    "java",
    "ruby",
    "css"
]

function randomWord(){
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }