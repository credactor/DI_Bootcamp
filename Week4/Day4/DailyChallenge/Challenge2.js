function isInputLetter(event) {
    return (event.charCode > 64 && 
        event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)
}