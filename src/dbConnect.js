import {MongoClient} from 'mongodb';

const cliente = new MongoClient("mongodb+srv://PeduZx:123@cluster0.lj8d1hw.mongodb.net/?appName=Cluster0")

let documentosColecao;


try{
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao MongoDB Atlas! (Ta Bombando!)");

}catch(err){
    console.log(err);
}


export {documentosColecao};