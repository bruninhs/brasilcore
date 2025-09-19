function Home() {
  return (
    <div className="home">
      {/* Imagem grande */}
      <div className="hero">
        <img src="https://i.pinimg.com/1200x/f6/d1/3b/f6d13be918d591c9cb65ba96304ddba4.jpg" alt="Brasil" />
      </div>

      {/* Frase */}
      <section className="frase">
        <h2>“Entre a força da natureza e a delicadeza da cultura, vive a alma do Brasil.”</h2>
      </section>

      {/* Três imagens */}
      <section className="galeria">
        <div>
          <img src="https://i.pinimg.com/736x/60/97/97/6097970f36610b71e9317c7dbab2cff9.jpg" alt="Cultura" />
          <p>Flora</p>
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/56/3d/ca/563dcaa3348c21d9afabd216aaefe2d9.jpg" alt="Povo" />
          <p>Fauna</p>
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/cb/08/f9/cb08f901982a04c8b71097db16c3077a.jpg" alt="Natureza" />
          <p>Orgulho Brasileiro</p>
        </div>
      </section>

      {/* Botão */}
      <div className="botao">
        <button>Descubra mais do Brasil</button>
      </div>
    </div>
  )
}
export default Home;
