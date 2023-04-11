
import { useState, useEffect, FormEvent, HTMLInputTypeAttribute } from "react";
import * as Item from './styles/App.styles';// Itens de estilo = S itens
import * as Photos from './services/photos'
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";
const App = () => {
  const [addFileType, setAddFileType] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);


  useEffect(() => {
    const getPhotos = async () => {

      setLoading(true);
      //---- Tempo de carregamento.
      setPhotos(await Photos.getAll());
      //---- Fim de carregamento.
      setLoading(false);

    }

    getPhotos(); //A recomendação é que se execute uma função async não diretamente no código.

  }, []);


  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Checa se há arquivo enviado.
    const formData = new FormData(e.currentTarget);
    //Pegando o arquivo:
    const file = formData.get('image') as File;
    if (file && file.size > 0) {
      setUploading(true);
      //Envio do arquivo:
      let result = await Photos.insert(file);
      setUploading(false);

      // Se for um erro:
      if (result instanceof Error) {
        alert(`${result.name} -- ${result.message}`);
      } else {
        let newPhotosList = [...photos];
        newPhotosList.push(result);
        setPhotos(newPhotosList);
      }


    }
  };
  const addingFileType = () => {
    setAddFileType(true)
    let inputFile = (document.querySelector(".archive") as HTMLInputElement);
    let fileName = inputFile.value;
    let spanFileName = document.querySelector(".file-name") as HTMLSpanElement;    
    spanFileName.innerHTML = fileName;
  };

  return (

    <Item.Container>
      <Item.Area>
        <Item.Header>
          <h1>
            Galeria de fotos
          </h1>

        </Item.Header>
        {/* {Botão extra?} */}
        <Item.UploadAreaPhotos>
          {/* {Área de upload} */}
          <Item.UploadForm method="POST" onSubmit={handleFormSubmit} >
            <label htmlFor="image">
              <span className="material-symbols-outlined">
                cloud_upload
              </span>
              Escolha uma imagem
            <span className="file-name">Nenhuma selecionada</span>
            </label>
            <input type="file" name="image" id="image" className="archive" onChange={addingFileType} />
           
            <input type="submit" value="Enviar" className="submit-button" />
            {uploading && <span>Enviando...</span>}
          </Item.UploadForm>

          {/* Quando houver carregamento das imagens na tela: */}
          {loading &&
            <Item.Warning>
              <div className="emoji">⚠️</div>
              <div className="message">Carregando as imagens da galeria de fotos...</div>

            </Item.Warning>
          }

          {!loading && photos.length > 0 &&

            <Item.PhotosList>
              {photos.map((item, index) => (
                <PhotoItem key={index} url={item.url} name={item.name} />

              ))}

            </Item.PhotosList>
          }
          {!loading && photos.length === 0 &&

            <Item.Warning>
              <div className="emoji">📸</div>
              <div className="message">Não há fotos cadastradas. Faça o upload!</div>

            </Item.Warning>
          }

          {/* {área de fotos} */}
        </Item.UploadAreaPhotos>

      </Item.Area>
    </Item.Container>
  );
}

export default App;