REST API

Posibles Request http:

GET \books -> READ_ALL
POST + {body} \books -> CREATE

GET \book\<id> -> READ
PATCH + {body} \book\<id> -> UPDATE
DELETE \book\<id> -> DELETE

---

API NO REST
GET \books?id:34&action:delete
