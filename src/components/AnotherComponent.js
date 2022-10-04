const AnotherComponent = () => {
    const BotaoClick = () => {
        console.log("Olá botão");
    }

    return(
        <div>
            <p>Segundo Component</p>
            <button onClick={BotaoClick}>Evento de Click</button>
        <hr/>
        <button onClick={() => console.log("teste")}>Evento no Elemento</button>
        </div>
    )
};

export default AnotherComponent;