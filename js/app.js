const mainList = [{
    name: "Juan Perez",
    dni: "12345678A",
    age: 25,
    gender: "Masculino",
    date: "1998-03-15",
    email: "juan.perez@example.com",
    number: "123456789",
    address: "Calle Principal 123"
  },
  {
    name: "Ana Martinez",
    dni: "87654321B",
    age: 30,
    gender: "Femenino",
    date: "1992-07-22",
    email: "ana.martinez@example.com",
    number: "987654321",
    address: "Avenida Secundaria 456"
  },
  {
    name: "Carlos Rodriguez",
    dni: "56789012C",
    age: 28,
    gender: "Masculino",
    date: "1994-11-10",
    email: "carlos.rodriguez@example.com",
    number: "234567890",
    address: "Calle Secundaria 789"
  },
  {
    name: "Laura Gomez",
    dni: "34567890D",
    age: 22,
    gender: "Femenino",
    date: "2000-05-03",
    email: "laura.gomez@example.com",
    number: "345678901",
    address: "Avenida Principal 234"
  },
  {
    name: "Pedro Sanchez",
    dni: "23456789E",
    age: 35,
    gender: "Masculino",
    date: "1988-09-28",
    email: "pedro.sanchez@example.com",
    number: "456789012",
    address: "Calle Principal 567"
  }]

const createRegister = (array)=>{
    const register = {}
    for (const e of array) {
        const id = e.getAttribute('id')
        if(id) register[id] = e.value
    }
    return register
}

const cleanForm = (array)=>{
    for (const e of array) {
        e.value = ''
    }
}

const showRegister = (id)=>{
    const table = document.getElementById('register');
    document.getElementById('showRegister').classList.remove('d-none')
    table.innerHTML = '';
    for (const i in mainList[id]) {
        table.innerHTML += `
        <tr>
        <th>${i}</th>
        <td>${mainList[id][i]}</td>
        </tr>
        `
    };
}

const showRegisters = ()=>{
    const table = document.getElementById('registers')
    mainList.map((e,i)=>{
        table.innerHTML += `
        <tr onclick='showRegister(${i})'>
        <th>${i}</th>
        <td>${e.name}</td>
        <td>${e.dni}</td>
        </tr>
        `
    })
}

const addRegister = (event)=>{
    event.preventDefault()
    const register = createRegister(event.target)
    cleanForm(event.target)
    mainList.push(register)
    showRegisters()
}

const showForm = ()=>{
    const btn = document.getElementById('showForm')
    btn.classList.add('disabled')
    btn.setAttribute('disabled','')
    document.getElementById('form').classList.remove('d-none')
    document.getElementById('showRegister').classList.add('d-none')
}

const cancelForm =()=>{
    const btn = document.getElementById('showForm')
    btn.classList.remove('disabled')
    btn.removeAttribute('disabled')
    document.getElementById('form').classList.add('d-none')
}

showRegisters()