window.onload = function(){
    let primaryNumber = document.querySelector(".primary-number");
    let myTable = document.querySelector(".my-table");
    async function getData(){
        const response = await fetch("https://api.rootnet.in/covid19-in/contacts");
        // const response = await fetch('helpline.json');
        const data = await response.json();
        primaryNumber.innerHTML = data.data.contacts.primary.number;
        let regional = data.data.contacts.regional;
        for(var i=0;i<regional.length;i++){
        let loc = regional[i].loc;
        let no = regional[i].number;
        let text = `
        <tr>
        <td>${loc}</td>
        <td>${no}</td>
        </tr>
        `;
        myTable.innerHTML += text;

        }
        
    }
    getData()
}