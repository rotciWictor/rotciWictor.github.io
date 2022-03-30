app.get("/ranking", (req, res) => {
    const ranking = JSON.parse(fs.readFileSync("./ranking.json", "utf8"));
    ranking.sort(function (a, b) {
      if (a.points > b.points) {
        return 1;
      }
      if (a.points < b.points) {
        return -1;
      }
      return 0;
    });
    ranking.slice(0,9)
    res.send({data: ranking});
  });

  [{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Danubio","points":"100"},{"name":"Victor","points":"0"}]

  function savePoints() {
    console.log("ok");
    const name = document.getElementById("player-name").value;
    const points = document.getElementById("points").innerHTML;
    const objASerStrigifado = { data: { name: name, points: points } };
    const objetoNovo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objASerStrigifado),
    };
    fetch("http://localhost:3000/save-score", objetoNovo)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        alert(response.status); 
        //FIXME redirecionar jogador para tela inicial, fazer uma confirmação se a pontuação foi salva
      })
      .catch(function (error) {
        console.error(error);
      });
    }
    // sempre colocar esse catch ao final dos then para capturar erros
    