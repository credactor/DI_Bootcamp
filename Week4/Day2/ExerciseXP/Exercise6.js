// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }
  text = ""
  Object.entries(details).forEach((key, value) => {
    text = text + key[0] + " " + key[1] + " ";
    })
  console.log (text)