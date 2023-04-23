async function getUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';

try{
    const response = await fetch(url)
    const users = await (response.json())

    const corpoTabela = document.getElementById("tBody")
    corpoTabela.innerHTML = '';
    
    users.forEach (user => {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = user.id;
        tr.appendChild(tdId);

        const tdNome = document.createElement('td');
        tdNome.textContent = user.name;
        tr.appendChild(tdNome);

        const tdEmail = document.createElement('td');
        tdEmail.textContent = user.email;
        tr.appendChild(tdEmail);
        
        const tdEndereco = document.createElement('td');
        tdEndereco.textContent = `${user.address.street}  ${user.address.suite}`;
        tr.appendChild(tdEndereco);

        const tdCidade = document.createElement('td');
        tdCidade.textContent = user.address.city;
        tr.appendChild(tdCidade);

        const tdTelefone = document.createElement('td');
        tdTelefone.textContent = user.phone;
        tr.appendChild(tdTelefone);

        const tdEmpresa = document.createElement('td');
        tdEmpresa.textContent = user.company.name;
        tr.appendChild(tdEmpresa);

        corpoTabela.appendChild(tr);
    });
} catch(error){
    console.error(error);
}
}

getUsers();



