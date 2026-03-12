

(function () {
    const seasons = {
        season1: [
            { equipe: "LK 01", quedas: 5, abates: 63, booyah: 1, pts: 106},
            { equipe: "Equipe Russo 3", quedas: 5, abates: 30, booyah: 0, pts: 83},
            { equipe: "Equipe Russo 2", quedas: 5, abates: 47, booyah: 1, pts: 74 },
            { equipe: "Team Fluxo", quedas: 5, abates: 35, booyah: 1, pts: 62},
            { equipe: "LK 02", quedas: 5, abates: 29, booyah: 1, pts: 61},
            { equipe: "Equipe Russo 1", quedas: 5, abates: 29, booyah: 1, pts: 57},
            { equipe: "Beserkers", quedas: 5, abates: 24, booyah: 0, pts:49},
            { equipe: "Not Mobile", quedas: 5, abates: 18, booyah: 0, pts: 36},
            { equipe: "Beserkers 2.0", quedas: 5, abates: 12, booyah: 0, pts:29},
            { equipe: "Ghost", quedas: 5, abates: 13, booyah: 0, pts: 23},
            { equipe: "De Manaus", quedas: 5, abates: 9, booyah: 0, pts: 21},
            { equipe: "Trupe Skull", quedas: 5, abates: 0, booyah: 0, pts: 2},
            {data: "09/03/2026"}
            // { equipe: "", quedas: 5, abates: , booyah: , pts: },
        ],
        season2: [
            { equipe: "J6 Eceleny", quedas: 5, abates: 53, booyah: 1, pts: 91},
            { equipe: "Fanaticos 01", quedas: 5, abates: 51, booyah: 1, pts: 83},
            { equipe: "Lk 02", quedas: 5, abates: 38, booyah: 2, pts: 79},
            { equipe: "Lk 01", quedas: 5, abates: 44, booyah: 0, pts:79},
            { equipe: "Equipe Russo01", quedas: 5, abates: 51, booyah: 0, pts: 77},
            { equipe: "Fanaticos 02", quedas: 5, abates: 38, booyah: 0, pts: 61},
            { equipe: "Beserkers", quedas: 5, abates: 26, booyah: 1, pts: 55},
            { equipe: "Equipe Russo 03", quedas: 5, abates: 29, booyah: 0, pts: 53},
            { equipe: "Equipe Russo 02", quedas: 5, abates: 21, booyah: 0, pts: 35},
            { equipe: "De Manaus", quedas: 5, abates: 21, booyah: 0, pts: 33},
            { equipe: "Beserkers 2.0", quedas: 5, abates: 18, booyah: 0, pts: 27},
            { equipe: "Ghost", quedas: 5, abates: 4, booyah: 0, pts: 6},
            {data: "15/11/2023"}
        ]
    }

    const jogadores = {
        season1: [
            { jogador: "LK ATIRADOR", kill: 28, equipe: "LK 01" },          
            { jogador: "LK BIEL",     kill: 17, equipe: "LK 01" },
            { jogador: "CAMARGO-SP", kill: 14, equipe: "EQUIPE RUSSO 02" },        
            { jogador: "EQP covarde", kill: 12, equipe: "Equipe russo 03" },
            { jogador: "EQP kn", kill: 12, equipe: "Equipe russo 03" },
            { jogador: "FX sasuke",   kill: 12, equipe: "Team_fluxo" },
            { jogador: "BK Lwzin",    kill: 12, equipe: "BERSERKERS" },            
            { jogador: "LK-FELCADA",  kill: 11, equipe: "LK 01" },
            { jogador: "LDR t'soca",  kill: 11, equipe: "Team_fluxo" },
            {jogador: "LK duzinn$$",  kill: 10, equipe: "LK 02"},
            {jogador: "PM Kws",       kill: 9, equipe: "EQUIPE RUSSO 02"},
            { jogador: "EQP KAIOZERA", kill: 9, equipe: "EQUIPE RUSSO 01" },      
            { jogador: "EQP PINGOLA", kill: 8, equipe: "EQUIPE RUSSO 02" },
            {jogador: "BK DRAGO9",    kill: 8, equipe: "BERSERKERS"},
            { jogador: "GAAB0LOKO", kill: 8, equipe: "NOTMOBILE" },         
            {jogador: "LK Bruniix",   kill: 7, equipe: "LK 01"},
            { jogador: "EQP VTZN7",   kill: 7, equipe: "EQUIPE RUSSO 02" },
            {jogador: "@__souzaxt",   kill: 7, equipe: "NOTMOBILE"},
            { jogador: "BK DOUTOR",   kill: 7, equipe: "BERSERKERS 2.0" }, 
            { jogador: "SUESAPRIME", kill: 7, equipe: "GHOST" },   
            { jogador: "EQP CHEF",    kill: 6, equipe: "EQUIPE RUSSO 02" },
            { jogador: "FX_Itachi",   kill: 6, equipe: "Team_fluxo" },
            { jogador: "EQP IAGOX6",  kill: 6, equipe: "EQUIPE RUSSO 01" },
            { jogador: "EQP neo23",   kill: 5, equipe: "Equipe russo 03" },
            { jogador: "god$money",   kill: 5, equipe: "EQUIPE RUSSO 01" },
            {jogador: "JAPONESA",     kill: 5, equipe: "DE MANAUS"},
            { jogador: "LK GORDÃO",   kill: 4, equipe: "LK 02" },
            {jogador: "ferreira GHs", kill: 4, equipe: "GHOST"},
            { jogador: "DM style", kill: 4, equipe: "DE MANAUS" },           
            { jogador: "goza y dorme",kill: 3, equipe: "Team_fluxo" },          
            { jogador: "GOD sasuke", kill: 3, equipe: "Team_fluxo" },
            {jogador: "gui",          kill: 3, equipe: "LK 02"},
            { jogador: "jotav77",     kill: 3, equipe: "EQUIPE RUSSO 01" },
            { jogador: "EQP VM",      kill: 3, equipe: "EQUIPE RUSSO 01" },
            { jogador: "bot.X",       kill: 3, equipe: "BERSERKERS" },
            {jogador: "BK zeus",      kill: 3, equipe: "BERSERKERS 2.0"},     
            { jogador: "EQP loirinha",kill: 2, equipe: "EQUIPE RUSSO 02" }, 
            {jogador: "LKJAP7",       kill: 2, equipe: "LK 02"},
            {jogador: "HS-10.dnx",    kill: 2, equipe: "NOTMOBILE"},
            {jogador: "Santz.7",      kill: 2, equipe: "GHOST"},
            { jogador: "EQP merlin",  kill: 1, equipe: "Equipe russo 03" },
            { jogador: "@wking_v4",   kill: 1, equipe: "BERSERKERS" },
            { jogador: "BOTECO",      kill: 1, equipe: "NOTMOBILE" },
            {jogador: "Ghost",        kill: 1, equipe: "BERSERKERS 2.0"}, 
            {jogador: "PECADO",       kill: 1, equipe: "BERSERKERS 2.0"},
            { jogador: "papaicris%$", kill: 0, equipe: "GHOST" },
            { jogador: "odio",        kill: 0, equipe: "DE MANAUS" },
            {jogador: "Madaral",      kill: 0, equipe: "Trupe SKULL"},
            {jogador: "notrare",      kill: 0, equipe: "Trupe SKULL"},
        ],
        season2: [
            { jogador: "Wod whiskyst", kill: 25, equipe: "EQUIPE RUSSO 01" },
            {jogador: "J6 psico ump", kill: 20, equipe: "J6 ECELENY"},
            { jogador: "Rx ghost7wp", kill: 20, equipe: "FANÁTICOS 02" },
            {jogador: "Rx rzin777", kill: 19, equipe: "FANÁTICOS 01"},
            {jogador: "Yyyyyyyk", kill: 18, equipe: "FANÁTICOS 01"},
            {jogador: "Lk felcada", kill: 18, equipe: "LK 02"},
            {jogador: "EQP neo", kill: 15, equipe: "EQUIPE RUSSO 03"},
            { jogador: "Lk Biel 051", kill: 14, equipe: "LK 01" },
            { jogador: "Lk duzinn", kill: 14, equipe: "LK 01" },
            { jogador: "W7 mt07", kill: 13, equipe: "J6 ECELENY" },
            {jogador: "Lk atirador", kill: 13, equipe: "LK 01"},
            { jogador: "J6 shadow", kill: 12, equipe: "J6 ECELENY" },
            {jogador: "EQP Camargo", kill: 11, equipe: "EQUIPE RUSSO 01"},
            { jogador: "Lk novinho ", kill: 9, equipe: "LK 02" },
            { jogador: "gx7gás", kill: 9, equipe: "EQUIPE RUSSO 01" },
            {jogador: "BSK drago9", kill: 9, equipe: "BESERKERS"},
            { jogador: "EQP índio x6", kill: 9, equipe: "EQUIPE RUSSO 03" },          
            { jogador: "Japonesa", kill: 9, equipe: "DE MANAUS" },  
            { jogador: "J6 kaio", kill: 8, equipe: "J6 ECELENY" },
            {jogador: "Rx nk7 ", kill: 8, equipe: "FANÁTICOS 01"},
            { jogador: "Rx nox", kill: 8, equipe: "FANÁTICOS 02" },
            { jogador: "EQP jv", kill: 8, equipe: "EQUIPE RUSSO 02" },

            
            { jogador: "Pedro Lk", kill: 7, equipe: "LK 02" },        
            { jogador: "BSK zeus", kill: 7, equipe: "BESERKERS" },
            { jogador: "BSK doutor ", kill: 7, equipe: "BESERKERS 2.0" },
            { jogador: "ven4nciio46_", kill: 6, equipe: "FANÁTICOS 01" },
            { jogador: "Rn Gohan m590", kill: 6, equipe: "EQUIPE RUSSO 01" },
            { jogador: "EQP Iago x6", kill: 6, equipe: "EQUIPE RUSSO 02" },            
            { jogador: "Odio", kill: 6, equipe: "DE MANAUS" },
            { jogador: "Rxg Souza", kill: 5, equipe: "FANÁTICOS 02" },
            {jogador: "BSK GOAT 157", kill: 5, equipe: "BESERKERS" },
            {jogador: "EQP vm", kill: 5, equipe: "EQUIPE RUSSO 02" },
            { jogador: "BSK kirito ", kill: 5, equipe: "BESERKERS 2.0" },
            { jogador: "GHOST Tm ", kill: 5, equipe: "BESERKERS 2.0" },
            { jogador: "Lk gordão", kill: 4, equipe: "LK 02" },
            {jogador: "BSK lwzin", kill: 4, equipe: "BESERKERS"},
            { jogador: "EQP kn", kill: 4, equipe: "EQUIPE RUSSO 03" },
            { jogador: "Dm gs", kill: 4, equipe: "DE MANAUS" },
            { jogador: "Lk general", kill: 3, equipe: "LK 01" },
            

            { jogador: "_Luanazzk", kill: 2, equipe: "FANÁTICOS 02" },
            { jogador: "Rx myamura", kill: 2, equipe: "FANÁTICOS 02" },
            { jogador: "EQP Kaiozera", kill: 2, equipe: "EQUIPE RUSSO 02" },
            { jogador: "Dm style", kill: 2, equipe: "DE MANAUS" },
            {jogador: "FX", kill: 2, equipe: "GHOST"},
            { jogador: "Wking_v4", kill: 1, equipe: "BESERKERS 2.0" }, 
            

            { jogador: "Yyyyyyyi", kill: 0, equipe: "FANÁTICOS 01" },                     
            { jogador: "EQP merlin", kill: 0, equipe: "EQUIPE RUSSO 03" },
            {jogador: "Papai cris", kill: 0, equipe: "GHOST"},          
            // {jogador: "", kill: , equipe: ""},

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

            mudarSeason.carregarAutomatico(select.value)


            select.addEventListener("change", function() {
                const seasonEscolhida = this.value
                mudarSeason.carregarSeason(seasonEscolhida)
                mudarSeason.carregarRankJogador(seasonEscolhida)
            })
        },
        carregarSeason(nomeSeason) {
            if (nomeSeason != "selecioneSeason") {
                const tbody = document.querySelector("#tbody")
                tbody.innerHTML = ""
                
            }

            for (let season in seasons) {
            
                if (nomeSeason == season) {

                    const equipes = seasons[nomeSeason]
                    console.log(equipes)

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
            if (nomeSeason != "selecioneSeason") {
                
                const top_kills_grid = document.querySelector(".top_kills_grid")
                top_kills_grid.innerHTML = ""
                
            }

            for (let season in jogadores) {
                if (nomeSeason == season) {
                    const objJogadores = jogadores[nomeSeason]

                    objJogadores.forEach((valor, index) => {
                        new Jogador(index + 1, valor.jogador, valor.kill, valor.equipe)
                        criarRankJogador.start(index + 1, valor.jogador, valor.kill, valor.equipe)
                    })
                    
                }
            }
        },
        carregarAutomatico(selecioneSeason) {
            const equipes = seasons.season1
            equipes.forEach((valor, index) => {
                if (!valor.equipe) {
                        const spanData = document.querySelector("#data")
                        spanData.innerHTML = valor.data
                        return
                }
                new Equipe(index + 1, valor.equipe, valor.quedas, valor.abates, valor.booyah, valor.pts, valor.data, "season 1")

            });


            
                
                const objJogadores = jogadores.season1

                objJogadores.forEach((valor, index) => {
                    new Jogador(index + 1, valor.jogador, valor.kill, valor.equipe)
                    criarRankJogador.start(index + 1, valor.jogador, valor.kill, valor.equipe)
                })
                    
            
        }
        
    }
    mudarSeason.start()
   



})()