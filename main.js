const localStorageKey = "BOOKSHELF"

const title = document.getElementById("inputBookTitle")
const author = document.getElementById("inputBookAuthor")
const year = document.getElementById("inputBookYear")
const isComplete = document.getElementById("inputBookIsComplete")
const submitButton = document.getElementById("bookSubmit")

const searchTitle = document.getElementById("searchBookTitle")
const searchButtom = document.getElementById("searchSubmit")

const incompleteTitle = document.getElementById("incompleteBookshelfTitle")
const incompleteList = document.getElementById("incompleteBookshelfList")

const completeTitle = document.getElementById("completeBookshelfTitle")
const completeList = document.getElementById("completeBookshelfList")

let books = []
let filteredBooks = []

// Event Listeners
window.addEventListener("load", function() {
    reloadList()
})

isComplete.addEventListener("change", function() {
    updateSubmitButtonTitle()
})

submitButton.addEventListener("click", function() {
    if (!inputValidation()) return

    const isNewBook = submitButton.value == ""
    const book = {
        id: isNewBook ? +new Date() : submitButton.value,
        title: title.value.trim(),
        author: author.value.trim(),
        year: year.value,
        isComplete: isComplete.checked
    }

    if (isNewBook) {
        createBook(book)
    } else {
        updateBook(submitButton.value, book)
    }

    reloadList()
    clearForm()
})

searchButtom.addEventListener("click", function(e) {
    e.preventDefault()

    const searchText = searchTitle.value.trim().toLowerCase()

    if (searchText == "") {
        filteredBooks = books
    } else {
        filteredBooks = books.filter(book => book.title.toLowerCase().indexOf(searchText) > -1)
    }

    showBooks(filteredBooks)
})

// Methods
function reloadList() {
    books = getBooks()
    searchTitle.value = ""
    showBooks(books)
}

function getBooks() {
    return JSON.parse(localStorage.getItem(localStorageKey)) || []
}

function setBooks() {
    localStorage.setItem(localStorageKey, JSON.stringify(books))
}

function showBooks(books) {
    incompleteList.innerHTML = ""
    completeList.innerHTML = ""

    books.forEach(book => {
        if (book.isComplete) {
            completeList.innerHTML += generateBookItemView(book)
        } else {
            incompleteList.innerHTML += generateBookItemView(book)
        }
    })
}

function generateBookItemView(book) {
    const bookStatusTitle = book.isComplete ? "Belum selesai di Baca" : "Selesai dibaca"
    let generatedView = `
        <article class="book_item">
            <h3>${book.title}</h3>
            <p>Penulis: ${book.author}</p>
            <p>Tahun: ${book.year}</p>

            <div class="action">
            <button class="green" onclick="move('${book.id}')">${bookStatusTitle}</button>
            <button class="orange" onclick="edit('${book.id}')">Edit buku</button>
            <button class="red" onclick="deleteBook('${book.id}')">Hapus buku</button>
            </div>
        </article>
    `
    return generatedView
}

function clearForm() {
    title.value = ""
    author.value = ""
    year.value = ""
    isComplete.checked = false
    submitButton.value = ""

    updateSubmitButtonTitle()
}

function updateSubmitButtonTitle() {
    if (submitButton.value == "") {
        const bookshelfTitle = isComplete.checked ? completeTitle.textContent : incompleteTitle.textContent
        submitButton.innerHTML = `Masukkan Buku ke rak <span>${bookshelfTitle}</span>`
    }
}

function inputValidation() {
    return title.value != "" && author.value != "" && year.value != ""
}

function getBookIndex(id) {
    return books.findIndex(book => book.id == id)
}

// Item Interactions
function move(id) {
    const book = readBook(id)
    book.isComplete = !book.isComplete
    updateBook(id, book)
    reloadList()
}

function edit(id) {
    const book = readBook(id)
    title.value = book.title
    author.value = book.author
    year.value = book.year
    isComplete.checked = book.isComplete

    submitButton.innerHTML = "Edit Buku"
    submitButton.value = book.id

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// CRUD Methods
function createBook(book) {
    books.unshift(book)
    setBooks()
}

function readBook(id) {
    return books.filter(book => book.id == id)[0] || []
}

function updateBook(id, book) {
    const bookIndex = getBookIndex(id)
    books[bookIndex] = book
    setBooks()
}

function deleteBook(id) {
    const book = readBook(id)
    const confirmation = confirm(`Yakin akan menghapus buku berjudul '${book.title}'?`)

    if (confirmation) {
        const bookIndex = getBookIndex(id)
        books.splice(bookIndex, 1)
        setBooks()
        reloadList()
        alert(`Buku ${book.title} telah dihapus!`)
    }
}