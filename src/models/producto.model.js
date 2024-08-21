import mongoose from "mongoose";

export const productoSchema = new mongoose.Schema({
  codigo: String,
  nombre: String,
  precio: Number,
  categoria: String,

});

const ProductoModel = mongoose.model("productos", productoSchema);

export default ProductoModel;
