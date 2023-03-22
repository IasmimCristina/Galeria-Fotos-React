import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId } from "uuid";

// Função que pega todas as fotos:
export const getAll = async () => {
  let list: Photo[] = [];

  //Leitura dos arquivos:
  const imagesFolder = ref(storage, "images");
  const photosList = await listAll(imagesFolder); //Tudo na pasta é listado.

  for (let i in photosList.items) {
    //Geração da URL:
    let photoUrl = await getDownloadURL(photosList.items[i]);

    list.push({
      name: photosList.items[i].name,
      url: photoUrl,
    });
  }
  return list;
};

//Função que envia fotos:
export const insert = async (file: File) => {
  //Autenticação das imagens:
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    let randomName = createId();
    let newFile = ref(storage, `images/${randomName}`);
    let upload = await uploadBytes(newFile, file);
  } else {
    return new Error("Tipo de arquivo não suportado!");
  }
};
