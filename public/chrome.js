document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter your desired new text")
        axios.post('/update-item', { text: userInput }).then(function() {
            //do something interesting in the next video
        }).catch(function() {
            console.log("Please try again later.")
        })
    }
})