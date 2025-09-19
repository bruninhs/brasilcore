function Imagem({ url }) {
  return (
    <div>
      <img src={url} alt="Minha imagem" style={{ width: "80%", borderRadius: "10px" }} />
    </div>
  )
}
export default Imagem;