
import { useState, useEffect, FormEvent } from "react";
import * as Item from './App.styles';// Itens de estilo = S itens
import * as Photos from './services/photos'
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";
const App = () => {
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
      //Envio do arquivo
      setLoading(false);
    }
  }

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
            <label htmlFor="image">Clique aqui para escolher um aquivo</label>
            <input type="file" name="image" id="image" className="archive" />
            <input type="submit" value="Enviar" className="submit-button" />
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
              <div className="message">Não há fotos, faça o upload abaixo para preencher a sua galeria!</div>

            </Item.Warning>
          }

          {/* {área de fotos} */}
        </Item.UploadAreaPhotos>

      </Item.Area>
    </Item.Container>
  );
}

export default App;