let maxvalue = 20
let minvalyue = 0
let test = 0
let lenghttable
class personne {
    id = 10000
    constructor() {
        this.nom
        this.prenom
        this.datebirth
        this.email
        this.password
        this.dateInscription
        this.user = {}
        this.users = []
    }
    ajoute(nom, prenom, datebirth, email, password, datInscription) {
        let emailExists = false;
        this.users.forEach(utilisateur => {
            console.log(utilisateur.email , email)
            if (utilisateur.email == email) {
                emailExists = true;
                return true
            }
        })
        if(emailExists){
            return true
        }
        console.log(email)


        this.user = {}
        this.user.id = this.id
        this.user.nom = nom
        this.user.prenom = prenom
        this.user.dateInscription = datInscription
        this.user.datebirth = datebirth
        this.user.email = email
        this.user.password = password
        this.users.push(this.user)
        this.id++
        if (test == 0) {
            test++
            let btn = document.createElement('button')
            let input = document.createElement('input')
            let div = document.createElement('div')
            input.type = 'number'
            input.id = 'userid'
            input.placeholder = 'ENTRE ID USER : '
            input.classList = "form-control w-75 mx-auto d-block"
            input.min = 10000
            input.required
            btn.id = 'submit'
            btn.type = 'button'
            btn.classList = "btn btn-outline-info btn-sm"
            btn.setAttribute('onclick', "affecher()")
            btn.setAttribute('onmouseleave', "style.color='#0dcaf0'")
            btn.setAttribute('onmouseover', "style.color='white'")
            btn.innerText = 'affecher'
            div.classList = "mt-4 pt-1  mx-auto d-flex justify-content-between"
            div.append(input)
            div.append(btn)
            document.querySelector('#containers2').append(div)
        }
        return false
    }
    getInformation(id) {
        let boolien = false
        let users
        for (let user of this.users) {
            if (user.id === id) {
                boolien = true
                users = user
            }
        }
        if (boolien == true) {
            document.querySelector('#containers').innerHTML = ''
            let containe = document.querySelector('#containers')
            let table = document.createElement('table')
            let thead = document.createElement('thead')
            let tbody = document.createElement('tbody')
            let tr1 = document.createElement('tr')
            let th1 = document.createElement('th')
            let th2 = document.createElement('th')
            let th3 = document.createElement('th')
            let th4 = document.createElement('th')
            let th5 = document.createElement('th')
            let th6 = document.createElement('th')
            table.classList = 'table teble-stripe mx-auto table-bordered w-200'
            let titres = ['NOM', 'PRENOM', 'DATE NAISSANCE', 'EMAIL', 'PASSSWORD', 'OPERATION']
            th1.innerText = titres[0]
            th2.innerText = titres[1]
            th3.innerText = titres[2]
            th4.innerText = titres[3]
            th5.innerText = titres[4]
            th6.innerText = titres[5]
            tr1.append(th1)
            tr1.append(th2)
            tr1.append(th3)
            tr1.append(th4)
            tr1.append(th5)
            tr1.append(th6)
            tbody.id = 'tbody'
            let tr2 = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            let td4 = document.createElement('td')
            let td5 = document.createElement('td')
            let td6 = document.createElement('td')
            td6.classList = 'd-flex justify-content-between'
            let btn1 = document.createElement('button')
            let btn2 = document.createElement('button')
            btn1.innerText = 'modefier'
            btn2.innerText = 'suppremier'
            btn1.classList = 'btn btn-success'
            btn2.classList = 'btn btn-danger'
            btn1.setAttribute('onclick', 'modefier()')
            btn2.setAttribute('onclick', 'suppremier()')
            td1.innerText = users.nom
            td2.innerText = users.prenom
            td3.innerText = users.datebirth
            td4.innerText = users.email
            td5.innerText = users.password
            td1.id = 'nommod'
            td2.id = 'prenommod'
            td3.id = 'datemod'
            td4.id = 'emailmod'
            td5.id = 'passmod'
            td6.id = 'operation'
            td6.append(btn1)
            td6.append(btn2)
            tr2.append(td1)
            tr2.append(td2)
            tr2.append(td3)
            tr2.append(td4)
            tr2.append(td5)
            tr2.append(td6)
            thead.append(tr1)
            tbody.append(tr2)
            table.append(thead)
            table.append(tbody)
            document.querySelector('#containers').append(table)
            return users.id
        } else if (boolien == false) {
            document.querySelector('#containers').innerHTML = ''
            setTimeout(function () {
                let h1 = document.createElement('h1')
                h1.style.color = 'orange'
                h1.innerText = 'ID FOLSE ENTRE CRECTE ID .'
                h1.classList = 'alert alert-warning fs-2 text-center alert-sm mt-3 mx-auto w-75'
                document.querySelector('#containers').append(h1)
            }, 500)
        }
    }
    setInformation(id, fname, lname, dateb, email, passwod) {
        for (let user of this.users) {
            if (user.id === id) {
                user.nom = lname
                user.prenom = fname
                user.datebirth = dateb
                user.email = email
                user.password = passwod
            }
        }
    }
    remove(id) {
        this.users.forEach((user, index) => {
            if (user.id === id) {
                this.users.splice(index, 1)
            }
        });
    }
    get_all_user() {
        let tout_users = document.querySelector('#tout_users')
        tout_users.innerHTML = ''
        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')
        let caption = document.createElement('caption')
        let tr1 = document.createElement('tr')
        let th1 = document.createElement('th')
        let th2 = document.createElement('th')
        let th3 = document.createElement('th')
        let th4 = document.createElement('th')

        let titres = ['ID', 'NOM', 'PRENOM', 'DATE D\'ANSCRIPTION']
        th1.innerText = titres[0]
        th2.innerText = titres[1]
        th3.innerText = titres[2]
        th4.innerText = titres[3]
        table.classList = 'table teble-stripe mx-auto table-bordered w-75'
        tr1.append(th1)
        tr1.append(th2)
        caption.innerText = 'TABLE UTILISATURES'
        caption.classList = 'h1 text-white text-center'
        caption.align = 'top'
        caption.id = 'next'
        tr1.append(th3)
        tr1.append(th4)
        thead.append(tr1)
        tbody.id = 'tbodyuser'
        table.append(caption)
        table.append(thead)
        table.append(tbody)
        document.querySelector('#tout_users').append(table)
        lenghttable = this.users.length
        for (let user = minvalyue; user < maxvalue; user++) {
            if (user < this.users.length) {
                let tr2 = document.createElement('tr')
                let td1 = document.createElement('td')
                let td2 = document.createElement('td')
                let td3 = document.createElement('td')
                let td4 = document.createElement('td')
                td1.innerText = this.users[user].id
                td2.innerText = this.users[user].nom
                td3.innerText = this.users[user].prenom
                td4.innerText = this.users[user].dateInscription
                tr2.append(td1)
                tr2.append(td2)
                tr2.append(td3)
                tr2.append(td4)
                document.querySelector('#tbodyuser').append(tr2)
            }
        }
    }
}
let myclass1
let bool = true
function ajouter() {
    let requiest
    let prenom = ''
    let nom = ''
    let pass = ''
    let email = ''
    let cheked = 0
    let element = document.querySelectorAll('.VLFC')
    element.forEach((inpu, cle) => {
        if (inpu.value == '') {
            document.querySelector('#error' + (cle + 1)).innerText = 'choix obligatoire *'
            document.querySelector('#error' + (cle + 1)).style.color = 'red'
        } else {
            document.querySelector('#error' + (cle + 1)).innerText = ''
            document.querySelector('#error' + (cle + 1)).style.color = 'red'
            cheked++

        }
    })
    if (cheked < 5) {
        return
    }

    let patern_email = /\w+@[a-z]{3,7}\.[a-z]{3,9}/
    let patern_nom = /[a-zA-Z]{3,50}/
    let patern_password = /[a-zA-Z0-9.]{8,50}.*/
    nom = document.querySelector('#nom').value
    prenom = document.querySelector('#prenom').value
    pass = document.querySelector('#pass').value
    email = document.querySelector('#email').value
    cheked = 1
    if (!patern_email.test(email)) {
        document.querySelector('#error4').innerText = 'Vérifier votre email *'
    } else {
        document.querySelector('#error4').innerText = ''
        cheked++
    }
    if (!patern_nom.test(nom)) {
        document.querySelector('#error1').innerText = 'Vérifier votre nom *'
    } else {
        document.querySelector('#error1').innerText = ''
        cheked++
    }
    if (!patern_nom.test(prenom)) {
        document.querySelector('#error2').innerText = 'Vérifier votre prenom *'
    } else {
        document.querySelector('#error2').innerText = ''
        cheked++
    }
    if (!patern_password.test(pass)) {
        document.querySelector('#error5').innerText = 'Vérifier vote mot de pass  Minimum 8 caractères*'
    } else {
        document.querySelector('#error5').innerText = ''
        cheked++
    }


    if (cheked === 5) {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear()
        let datInscription = day + '/' + month + '/' + year
        let dateb = document.querySelector('#date').value
        if (bool) {
            myclass1 = new personne()
            bool = false
        }
        requiest = myclass1.ajoute(nom, prenom, dateb, email, pass, datInscription)
        if (!requiest) {
            myclass1.get_all_user()
            add_menu()
            document.querySelector('#error4').innerText = ''
        }else{
            document.querySelector('#error4').innerText = 'Cet utilisateur déjà existe. Entrez un nouveau compte.'
        }

    }
}
let IDUSER
function affecher() {
    let iduser = document.querySelector('#userid')
    iduser = Number(iduser.value)
    let value_id = myclass1.getInformation(iduser)
    if (value_id != undefined) {
        IDUSER = value_id
    }
}
function modefier() {
    let input = document.querySelector('#userid')
    input.setAttribute('disabled', 'true')
    let nommod1 = document.querySelector('#nommod')
    let prenommod2 = document.querySelector('#prenommod')
    let datebmod3 = document.querySelector('#datemod')
    let emailmod4 = document.querySelector('#emailmod')
    let passmod5 = document.querySelector('#passmod')
    let opration6 = document.querySelector('#operation')
    nommod1.innerHTML = `<input type="text" class="form-control "   value="${nommod1.innerText}" id="nommod2">`
    prenommod2.innerHTML = `<input type="text"class="form-control "   value="${prenommod2.innerText}"  id="prenommod2">`
    datebmod3.innerHTML = `<input type="date"class="form-control "   value="${datebmod3.innerText}"  id="datemod2">`
    emailmod4.innerHTML = `<input type="email" class="form-control  "  value="${emailmod4.innerText}"  id="emailmod2">`
    passmod5.innerHTML = `<input type="text" class="form-control  "  value="${passmod5.innerText}"  id="passmod2">`
    opration6.innerHTML = `<input type="button" class="btn btn-md w-50 btn-success" onclick='Confirmer()' value='Confirmer' ><input type="button" class="btn btn-md w-50" onclick='Anneler()' value='Anneler' >`
}
function Confirmer() {
    let nom = document.querySelector('#nommod2').value
    let prenom = document.querySelector('#prenommod2').value
    let dateb = document.querySelector('#datemod2').value
    let email = document.querySelector('#emailmod2').value
    let pass = document.querySelector('#passmod2').value
    document.querySelector('#userid').removeAttribute('disabled', 'false')
    myclass1.setInformation(IDUSER, nom, prenom, dateb, email, pass)
    myclass1.getInformation(IDUSER)
    myclass1.get_all_user()
}
function suppremier() {
    myclass1.remove(IDUSER)
    document.querySelector('#containers').innerHTML = ''
    myclass1.get_all_user()
    add_menu()
}
function Anneler() {
    myclass1.getInformation(IDUSER)
}
let menus = document.querySelector('#menunavigation')
let conture = 0
function add_menu() {
    let nexte = document.createElement('button')
    let previous = document.createElement('button')
    let a1 = document.createElement('a')
    let a2 = document.createElement('a')
    a1.innerText = '>>'
    a1.classList = 'nav-link'
    a2.classList = 'nav-link'
    a2.innerText = '<<'
    previous.id = 'previous'
    a1.href = '#next'
    a2.href = '#previous'
    nexte.append(a1)
    previous.append(a2)
    if (minvalyue >= 20 && lenghttable > maxvalue) {
        menus.innerHTML = ''
        nexte.setAttribute('onclick', 'increment()')
        previous.setAttribute('onclick', 'decrement()')
        menus.append(previous)
        menus.append(nexte)
    } else if (lenghttable >= 20 || maxvalue >= lenghttable && lenghttable >= 20) {
        if (maxvalue >= lenghttable && maxvalue > 20) {
            menus.innerHTML = ''
            previous.setAttribute('onclick', 'decrement()')
            menus.append(previous)
        } else if (lenghttable > 20) {
            menus.innerHTML = ''
            nexte.setAttribute('onclick', 'increment()')
            menus.append(nexte)
        }
    } else {
        menus.innerHTML = ''
    }
}
function increment() {
    minvalyue += 20
    maxvalue += 20
    myclass1.get_all_user()
    conture++
    add_menu()
} function decrement() {
    minvalyue -= 20
    maxvalue -= 20
    myclass1.get_all_user()
    conture--
    add_menu()
}
