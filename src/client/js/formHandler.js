import {isValiInput} from "./validateForm";
const hostUrl =  window.location.href;
function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);
    console.log("::: Form Submitted :::", hostUrl);
    if (isValiInput(formText)) {
        postData(`${hostUrl}add`, {"formText": formText});
    }

}

const updateUI = async () => {
    const request = await fetch(`${hostUrl}results`)
    try {
        const data = await request.json()
        const results = document.getElementById('results');
        let resultsJson = data.results
        let resultArray = [`Subjectivity:${resultsJson.subjectivity}`,`Irony: ${resultsJson.irony}`, `Score Tag: ${resultsJson.score_tag}`, `Confidence :  ${resultsJson.confidence}`, `Agreement ${resultsJson.agreement}`]
        let ul = document.createElement('ul')
        results.appendChild(ul);


        for(let i = 0; i <resultArray.length; i++){
            let li = document.createElement('li');
            li.innerHTML = resultArray[i];
           ul.appendChild(li);
        }



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
