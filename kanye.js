const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quote(data));
}

const quote = data => {
    const kanye = document.getElementById('quote');
    kanye.innerText = data.quote;


}