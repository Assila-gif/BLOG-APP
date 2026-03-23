const API = "http://127.0.0.1:8000";

async function getArticles() {
  const res = await fetch(API + "/articles");
  const data = await res.json();

  const container = document.getElementById("articles");
  container.innerHTML = "";

  data.forEach(a => {
    container.innerHTML += `
      <div class="card">
        <h3>${a.titre}</h3>
        <p>${a.contenu}</p>
        <small>${a.auteur} - ${a.categorie}</small>
        <br>
        <button onclick="deleteArticle(${a.id})">Supprimer</button>
      </div>
    `;
  });
}

async function addArticle() {
  const titre = document.getElementById("titre").value;
  const contenu = document.getElementById("contenu").value;
  const auteur = document.getElementById("auteur").value;
  const categorie = document.getElementById("categorie").value;

  await fetch(API + "/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titre, contenu, auteur, categorie })
  });

  getArticles();
}

async function deleteArticle(id) {
  await fetch(API + "/articles/" + id, {
    method: "DELETE"
  });

  getArticles();
}

async function searchArticle() {
  const q = document.getElementById("search").value;

  const res = await fetch(API + "/search?query=" + q);
  const data = await res.json();

  const container = document.getElementById("articles");
  container.innerHTML = "";

  data.forEach(a => {
    container.innerHTML += `
      <div class="card">
        <h3>${a.titre}</h3>
        <p>${a.contenu}</p>
      </div>
    `;
  });
}

getArticles();
