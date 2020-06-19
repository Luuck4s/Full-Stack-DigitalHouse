<p  align="center">
<img  alt="logo mongo"  src="./.github/mongo_logo.png"  width="80%">
</p>

# Mongo

[Documentação Mongo](https://docs.mongodb.com/)

MongoDB é um software de banco de dados orientado a documentos, usa documentos semelhantes a JSON com esquemas.


#### Para criar ou utilizar uma base dados podemos executar: 

```
	use <nome da base>
```

#### Para exibir todos as bases de dados:
```
	show dbs
```

#### Para criar uma coleção e já criamos um registro podemos utilizar:

```
	db.<nome da coleção>.insertOne(<Propriedades em formato de json>)
```

#### Para inserir mais de um objeto ao mesmo tempo podemos usar:

```
	db.<nome da coleção>.insertMany([<Propriedades em formato de json>])
```

#### Para visualizar todos os dados de uma coleção utilizamos:

```
	db.<nome da coleção>.find()
```

#### Para filtrar dados de una coleção utilizamos:

```
	db.<nome da coleção>.find({ <nome da prorpriedade>: <valor> })
								ou
	db.<nome da coleção>.find({ <nome da prorpriedade>: <REGEX> })
```

#### Para deletar algum dado podemos fazer das seguintes maneiras: 

 ```
	db.<nome da coleção>.deleteOne({ <nome da prorpriedade>: <valor> })
								ou
	db.<nome da coleção>.deleteMany({ <nome da prorpriedade>: <valor> })
```


#### Para atualizar algum dado podemos fazer das seguintes maneiras: 

 ```
	 1º Parâmetro  - Condição parra atualizar
	 2º Parâmetro  - Dado para atualizar
	 
db.<nome da coleção>.updateOne({ <nome da prorpriedade>: <valor> }, { <nome da prorpriedade>: <valor> })

db.<nome da coleção>.deleteMany({ <nome da prorpriedade>: <valor> })
```




