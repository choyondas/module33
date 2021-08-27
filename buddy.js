const buddyInfo = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data));

}
buddyInfo();
const displayBuddy = data => {
    const result = data.results;
    const buddyresult = document.getElementById('buddy');
    for (const buddy of result) {
        console.log(buddy)
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
        buddyresult.appendChild(p);
    }



}