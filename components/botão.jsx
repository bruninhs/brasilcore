function Botao() {
  function handleClick() {
    alert("Você clicou no botão! 🚀");
  }

  return (
    <button 
      onClick={handleClick} 
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "8px",
        backgroundColor: "#333",
        color: "white",
        border: "none"
      }}
    >
      Clique aqui
    </button>
  )
}
export default Botao;