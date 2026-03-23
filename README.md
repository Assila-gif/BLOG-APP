
Blog API - TAF 1 (INF222)

Cette API Backend de gestion de blog a été développée dans le cadre du cours INF222 - Programmation Web. Elle permet de gérer des articles (CRUD) et a été conçue en suivant un parcours d'apprentissage structuré sur la plateforme CleeRoute.

Technologies Utilisées

•	Langage : Python 3.9+ 
•	Framework : FastAPI 
•	Base de données : SQLite 
•	Documentation : Swagger UI (Auto-généré par FastAPI) 
•	Architecture : Séparation claire entre Routes, Modèles et Schémas 

 Installation et Lancement
 
1. Cloner le projet
2. 
Bash https://github.com/Assila-gif/BLOG-APP/ 
   
cd votre-repo

3. Créer un environnement virtuel
4. 
Bash
python -m venv venv
source venv/bin/activate  # Sur Windows: venv\Scripts\activate

5. Installer les dépendances
6. 
Bash
pip install fastapi uvicorn sqlalchemy

7. Lancer le serveur
8. 
Bash
uvicorn main:app --reload
L'API sera accessible sur https://articlespace.fly.dev/
📖 Documentation de l'API (Swagger)
Une fois le serveur lancé, vous pouvez tester interactivement tous les endpoints à l'adresse suivante : 👉 https://articlespace.fly.dev/docs

   Endpoints Principaux
   
Méthode/	Endpoint/	Description

POST	/api/articles	Créer un nouvel article 
GET	/api/articles	Lister tous les articles (ou filtrer) 
GET	/api/articles/{id}	Récupérer un article par son ID 
PUT	/api/articles/{id}	Modifier un article existant 
DELETE	/api/articles/{id}	Supprimer un article 
GET	/api/articles/search	Rechercher par titre ou contenu 
📝 Structure d'un Article
Chaque article envoyé en JSON doit respecter ce format:
JSON
{
  "titre": "Introduction au Python",
  "contenu": "Le contenu de l'article...",
  "auteur": "Nom de l'auteur",
  "categorie": "Développement",
  "tags": ["python", "api", "fastapi"]
}

 Codes de Réponse HTTP utilisés
 
•	200 OK : Requête réussie.
•	201 Created : Création réussie de l'article.
•	400 Bad Request : Entrées invalides ou manquantes.
•	404 Not Found : L'article demandé n'existe pas.
•	500 Internal Server Error : Erreur serveur.

 Auteur
 
•	Nom : [ASSILA TAMBA ELIE BRICE]
•	Matricule : [24G2719]
•	Filière : [INFORMATIQUE ]
•	Cours : INF222 - EC1 (Sous la direction de Charles Njiosseu) 
                  

