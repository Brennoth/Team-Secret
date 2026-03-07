(function () {

    const seasons = {
        season1: [
            { equipe: "Trem Bala", quedas: 5, abates: 50, booyah: 1, pts: 91},
            { equipe: "Equipe X", quedas: 5, abates: 43, booyah: 2, pts: 89},
            { equipe: "Equipe Russo 1", quedas: 5, abates: 45, booyah: 2, pts: 84 },
            { equipe: "Equipe Russo 2", quedas: 5, abates: 35, booyah: 0, pts: 72},
            { equipe: "LK 02", quedas: 5, abates: 25, booyah: 0, pts: 61},
            { equipe: "LK 01", quedas: 5, abates: 18, booyah: 0, pts: 40},
            { equipe: "Team Império", quedas: 5, abates: 12, booyah: 0, pts: 31},
            { equipe: "Cohab Sports", quedas: 5, abates: 12, booyah: 0, pts: 22 },
            { equipe: "Os Revoltados", quedas: 5, abates: 10, booyah: 0, pts: 17},
            { equipe: "Not Mobile", quedas: 5, abates: 6, booyah: 0, pts: 17},
            { equipe: "J6 Eceleny", quedas: 5, abates: 6, booyah: 0, pts: 14},
            { equipe: "Ghost", quedas: 5, abates: 5, booyah: 0, pts: 8 },
            // { equipe: "", quedas: 5, abates: , booyah: , pts: },
        ]
    }
    

    class Equipe{
            constructor(posição, equipe, quedas, abate, booay, pts) {
                this.posição = posição
                this.equipe = equipe
                this.quedas = quedas
                this.abate = abate
                this.booay = booay
                this.pts = pts
                const tbody = document.querySelector("#tbody")
                this.criarTr(tbody)
                
            }
            criarTr(tbody) {
                const createTr = document.createElement("tr")
                const tr = tbody.appendChild(createTr)
                this.criarPosiçãoTd(tr)
                this.criarEquipeTd(tr)
                this.criarQuedasTd(tr)
                this.criarAbatesTd(tr)
                this.criarBooayTd(tr)
                this.criarPtsTd(tr)
            }
            criarPosiçãoTd(tr) {
                const td = document.createElement("td")
                const p = document.createElement("p")
                td.setAttribute("class", "posicao")
                tr.appendChild(td)
                td.appendChild(p)
                p.innerHTML = `${this.posição}`
            }
            criarEquipeTd(tr) {
                const td = document.createElement("td")
                td.setAttribute("class", "equipe")
                tr.appendChild(td)
                td.innerHTML = `${this.equipe}`
            }
            criarQuedasTd(tr) {
                const td = document.createElement("td")
                td.setAttribute("class", "quedas")
                tr.appendChild(td)
                td.innerHTML = `${this.quedas}`
            }
            criarAbatesTd(tr) {
                const td = document.createElement("td")
                td.setAttribute("class", "abates")
                tr.appendChild(td)
                td.innerHTML = `${this.abate}`
            }
            criarBooayTd(tr) {
                const td = document.createElement("td")
                const p = document.createElement("p")
                if (this.booay > 0){
                    td.setAttribute("class", "vitoria booay")
                } else {
                    td.setAttribute("class", "vitoria")
                }
                tr.appendChild(td)
                td.appendChild(p)
                p.innerHTML = `${this.booay}`
            }
            criarPtsTd(tr) {
                const td = document.createElement("td")
                const strong = document.createElement("strong")
                td.setAttribute("class", "pts")
                tr.appendChild(td)
                td.appendChild(strong)
                strong.innerHTML = `${this.pts}`
            }

    }   
    const equipe1 = new Equipe(1, seasons.season1[0].equipe, seasons.season1[0].quedas, seasons.season1[0].abates, seasons.season1[0].booyah, seasons.season1[0].pts)
    const equipe2 = new Equipe(2, seasons.season1[1].equipe, seasons.season1[1].quedas, seasons.season1[1].abates, seasons.season1[1].booyah, seasons.season1[1].pts)
    const equipe3 = new Equipe(3, seasons.season1[2].equipe, seasons.season1[2].quedas, seasons.season1[2].abates, seasons.season1[2].booyah, seasons.season1[2].pts)
    const equipe4 = new Equipe(4, seasons.season1[3].equipe, seasons.season1[3].quedas, seasons.season1[3].abates, seasons.season1[3].booyah, seasons.season1[3].pts)
    const equipe5 = new Equipe(5, seasons.season1[4].equipe, seasons.season1[4].quedas, seasons.season1[4].abates, seasons.season1[4].booyah, seasons.season1[4].pts)
    const equipe6 = new Equipe(6, seasons.season1[5].equipe, seasons.season1[5].quedas, seasons.season1[5].abates, seasons.season1[5].booyah, seasons.season1[5].pts)
    const equipe7 = new Equipe(7, seasons.season1[6].equipe, seasons.season1[6].quedas, seasons.season1[6].abates, seasons.season1[6].booyah, seasons.season1[6].pts)
    const equipe8 = new Equipe(8, seasons.season1[7].equipe, seasons.season1[7].quedas, seasons.season1[7].abates, seasons.season1[7].booyah, seasons.season1[7].pts)
    const equipe9 = new Equipe(9, seasons.season1[8].equipe, seasons.season1[8].quedas, seasons.season1[8].abates, seasons.season1[8].booyah, seasons.season1[8].pts)
    const equipe10 = new Equipe(10, seasons.season1[9].equipe, seasons.season1[9].quedas, seasons.season1[9].abates, seasons.season1[9].booyah, seasons.season1[9].pts)
    const equipe11 = new Equipe(11, seasons.season1[10].equipe, seasons.season1[10].quedas, seasons.season1[10].abates, seasons.season1[10].booyah, seasons.season1[10].pts)
    const equipe12 =new Equipe(12, seasons.season1[11].equipe, seasons.season1[11].quedas, seasons.season1[11].abates, seasons.season1[11].booyah, seasons.season1[11].pts)

})()