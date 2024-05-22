// contact list
const numbers = []
const contacts = []; 
let sortedContacts = contacts.map(contact => contact.toUpperCase()).sort()

const ul = document.getElementById("liist")
function render(list){
    ul.innerHTML = ""
    for (const item of list) {
        const li = document.createElement("li")
        li.textContent = item;
        ul.appendChild(li);
    }
}
function handleValue(){
    const value = event.target.value;
    const filterList =  sortedContacts.filter(contact => contact.startsWith(value))
    render(filterList)
}
render(sortedContacts)
function handleAdd(){
    const input = document.getElementById("input2")
    a = input.value.toUpperCase()
    sortedContacts.push(a)
    render(sortedContacts)
    input.value = ""
}
