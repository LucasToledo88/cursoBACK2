import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lucasmatiastoledo88:eniskvZ34I7qF6Pp@cluster0.kbqmp.mongodb.net/tienda?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Conectado a mongo.");
  })
  .catch((error) => {
    console.log("Ups, no se conecto AIUDAAAA:\n" + error);
  });
