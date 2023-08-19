document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let inputNameValue = event.target.elements["name"].value;
    let inputPhoneValue = event.target.elements["phone"].value;
    let inputMailValue = event.target.elements["mail"].value;
    
    console.log(inputNameValue)
    console.log(inputPhoneValue)
    console.log(inputMailValue)
});
