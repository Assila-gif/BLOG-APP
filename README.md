                              BLOG API - TAF 1 (INF 222)
                              

  Cette API Backend de gestion de blog a été développée dans le cadre du cours INF222 - Programmation Web. Elle permet de gérer des articles (CRUD) et a été conçue en suivant un parcours d'apprentissage structuré sur la plateforme CleeRoute.
                            🚀 TECHNOLOGIE UTILISÉE
                            
•	Langage : Python 3.9+ 
•	Framework : FastAPI 
•	Base de données : SQLite 
•	Documentation : Swagger UI (Auto-généré par FastAPI) 
•	Architecture : Séparation claire entre Routes, Modèles et Schémas 
🛠️ Installation et Lancement
                                 1. CLONNER LE PROJET
                                 
Bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo
                            2. CREER VOTRE ENVIRONNEMENT VIRTUEL
                            
Bash
python -m venv venv
source venv/bin/activate  # Sur Windows: venv\Scripts\activate
                            3. Installer les dépendances
                            
Bash
pip install fastapi uvicorn sqlalchemy
                            4. LANCER Le SERVEUR
                            
Bash
uvicorn main:app --reload
L'API sera accessible sur https://articlespace.fly.dev/
                          📖 DOCUMENTATION DE L’API (SWAGER)
                          
Une fois le serveur lancé, vous pouvez tester interactivement tous les endpoints à l'adresse suivante : 👉 https://articlespace.fly.dev/docs
                                  🛣️ ENDPOINTS PRINCIPAUX
                                  
Méthode	Endpoint	Description
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
                      🚥 Codes de Réponse HTTP utilisés
                      
•	200 OK : Requête réussie.
•	201 Created : Création réussie de l'article.
•	400 Bad Request : Entrées invalides ou manquantes.
•	404 Not Found : L'article demandé n'existe pas.
•	500 Internal Server Error : Erreur serveur.
                          👤 Auteur
                          
•	Nom : [ASSILA TAMBA ELIE BRICE]
•	Matricule : [24G2719]
•	Filière : [INFORMATIQUE ]
•	Cours : INF222 - EC1 (Sous la direction de Charles Njiosseu) 

