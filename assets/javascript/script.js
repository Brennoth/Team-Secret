

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
            {data: "01/01/2026"}
            // { equipe: "", quedas: 5, abates: , booyah: , pts: },
        ],
        season2: [
            { equipe: "aaa", quedas: 5, abates: 2, booyah: 1, pts: 1 },
            {data: "15/11/2023"}
        ]
    }

    const jogadores = {
        season1: [
            {jogador: "bn.op", kill: 20, equipe: "Trem Bala"},
            {jogador: "bn.op", kill: 20, equipe: "Trem Bala"},
            {jogador: "bn.op", kill: 20, equipe: "Trem Bala"},
            {jogador: "bn.op", kill: 20, equipe: "Trem Bala"},
            {jogador: "bn.op", kill: 20, equipe: "Trem Bala"},
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            {jogador: "bn.op", kill: 20, equipe: "Trem Bala"},
            {jogador: "bn.op", kill: 20, equipe: "Trem Bala"},
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            { jogador: "bn.op", kill: 20, equipe: "Trem Bala" },
            {jogador: "bn.op", kill: 20, equipe: "Trem Bala"},
        ],
        season2: [
            {jogador: "nickAleatorio", kill: 5, equipe: "flamengo" },
            {jogador: "nickAleatorio", kill: 10, equipe: "vasco"},
        ]
    }
    
    /*cria o tbody*/
    class Equipe{
            constructor(posição, equipe, quedas, abate, booyah, pts, data, season) {
                this.posição = posição
                this.equipe = equipe
                this.quedas = quedas
                this.abate = abate
                this.booyah = booyah
                this.pts = pts
                this.data = data
                this.season = season
                const tbody = document.querySelector("#tbody")
                this.criarTr(tbody)
                this.mudarData(data) 
                this.mudarNomeSeason(season)
            }
            criarTr(tbody) {
                const createTr = document.createElement("tr")
                const tr = tbody.appendChild(createTr)
                this.criarPosiçãoTd(tr)
                this.criarEquipeTd(tr)
                this.criarQuedasTd(tr)
                this.criarAbatesTd(tr)
                this.criarBooyahTd(tr)
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
            criarBooyahTd(tr) {
                const td = document.createElement("td")
                const p = document.createElement("p")
                if (this.booyah > 0){
                    td.setAttribute("class", "vitoria booay")
                } else {
                    td.setAttribute("class", "vitoria")
                }
                tr.appendChild(td)
                td.appendChild(p)
                p.innerHTML = `${this.booyah}`
            }
            criarPtsTd(tr) {
                const td = document.createElement("td")
                const strong = document.createElement("strong")
                td.setAttribute("class", "pts")
                tr.appendChild(td)
                td.appendChild(strong)
                strong.innerHTML = `${this.pts}`
            }
            mudarData(data) {
                const spanData = document.querySelector("#data")
                spanData.innerHTML = `${data}`
            }
            mudarNomeSeason(nomeSeason) {
                const season = document.querySelector("#rankingSeason")
                season.innerHTML = `SEASON ${nomeSeason.slice(-1)}`
            }

    }   
    

    class Jogador{
        constructor(posição, nomeJogador, equipe) {
            this.posição = posição
            this.nomeJogador = nomeJogador
            this.equipe = equipe
        }
    }
    const criarRankJogador = {
        start(posicao, nomeJogador, kill, equipe) {
            this.criaContainerJogador(posicao, nomeJogador, kill, equipe)
        },
        criaContainerJogador(posicao, nomeJogador, kill, equipe) {
            const top_kills_grid = document.querySelector(".top_kills_grid")
            const containerJogador = document.createElement("div")
            containerJogador.setAttribute("class", "kill_card")
            if (posicao == 1) {
                containerJogador.setAttribute("class", "kill_card rank-1")
            } if (posicao == 2) {
                containerJogador.setAttribute("class", "kill_card rank-2")
            } if (posicao == 3) {
                containerJogador.setAttribute("class", "kill_card rank-3")
            }
            top_kills_grid.appendChild(containerJogador)
            this.criaPosição(containerJogador, posicao, nomeJogador, kill, equipe)
        },
        criaPosição(containerJogador, posicao, nomeJogador, kill, equipe) {
            const p = document.createElement("p")
            p.setAttribute("class", "badge")
            p.textContent = posicao
            containerJogador.appendChild(p)
            this.criarNomeEquipe(containerJogador, posicao, nomeJogador, kill, equipe)
        },
        criarNomeEquipe(containerJogador, posicao, nomeJogador, kill, equipe){
            const divPlayerInfo = document.createElement("div")
            divPlayerInfo.setAttribute("class", "player_info")
            containerJogador.appendChild(divPlayerInfo)


            const nick = document.createElement("h4")
            nick.textContent = nomeJogador
            divPlayerInfo.appendChild(nick)

            const nomeEquipe = document.createElement("p")
            nomeEquipe.textContent = equipe
            divPlayerInfo.appendChild(nomeEquipe)

            this.criarKill(containerJogador, posicao, nomeJogador, kill, equipe)
        },
        criarKill(containerJogador, posicao, nomeJogador, kill, equipe) {
            const divKill = document.createElement("div")
            divKill.setAttribute("class", "kill_stats")
            containerJogador.appendChild(divKill)


            const nomeKills = document.createElement("span")
            nomeKills.setAttribute("class", "lbl")
            nomeKills.textContent = "Kills"
            divKill.appendChild(nomeKills)

            const kills = document.createElement("span")
            kills.setAttribute("class", "num")
            kills.textContent = kill
            divKill.appendChild(kills)
        }
    }
    // criarRankJogador.start()


    /*chama as fuções quando muda la no select*/
    const mudarSeason = {
        start() {
            const select = document.querySelector(".container_select")
            select.addEventListener("change", function() {
                const seasonEscolhida = this.value
                mudarSeason.carregarSeason(seasonEscolhida)
                mudarSeason.carregarRankJogador(seasonEscolhida)
            })
        },
        carregarSeason(nomeSeason){
            const tbody = document.querySelector("#tbody")
            tbody.innerHTML = ""

            for (let season in seasons) {
            
                if (nomeSeason == season) {

                    const equipes = seasons[nomeSeason]

                    equipes.forEach((valor, index) => {
                        if (!valor.equipe) {
                            const spanData = document.querySelector("#data")
                            spanData.innerHTML = valor.data
                            return
                        }
                        new Equipe(index + 1, valor.equipe, valor.quedas, valor.abates, valor.booyah, valor.pts, valor.data, nomeSeason)

                    });

                }
            }
        },
        carregarRankJogador(nomeSeason) {
            const top_kills_grid = document.querySelector(".top_kills_grid")
            top_kills_grid.innerHTML = ""

            for (let season in jogadores) {
                if (nomeSeason == season) {
                    const objJogadores = jogadores[nomeSeason]

                    objJogadores.forEach((valor, index) => {
                        new Jogador(index + 1, valor.jogador, valor.kill, valor.equipe)
                        criarRankJogador.start(index + 1, valor.jogador, valor.kill, valor.equipe)
                    })
                    
                }
            }
        }
        
    }
    mudarSeason.start()
   



})()