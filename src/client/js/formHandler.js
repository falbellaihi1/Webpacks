import {isValiInput} from "./validateForm";

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText);
    console.log("::: Form Submitted :::");
    if (isValiInput(formText)) {
        postData('/add', {"formText": formText});
    }

}

const updateUI = async () => {
    const request = await fetch('/results')
    try {
        const data = await request.json()
        document.getElementById('results').innerHTML = JSON.stringify(data.results);

    } catch (e) {
        console.log(e);

    }

}
const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        await response.json();
        updateUI();

    } catch (error) {
        console.log("error", error);
    }
};
export {handleSubmit}
