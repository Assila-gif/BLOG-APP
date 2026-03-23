from pydantic import BaseModel

class ArticleCreate(BaseModel):
    titre: str
    contenu: str
    auteur: str
    categorie: str

class ArticleResponse(ArticleCreate):
    id: int

    class Config:
        from_attributes = True
