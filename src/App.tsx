import { useState } from "react";
import "./App.css";

const MeuBotao = (props: any) => {
	const [contador, setContador] = useState(0);
	const tratarOnClick = () => setContador(contador + 1);

	return (
		<button onClick={tratarOnClick} onMouseMove={props.contar}>
			{props.titulo} {contador} ({props.contador})
		</button>
	);
};

const App = () => {
	const [contador, setContador] = useState(0);
	const contarEmApp = () => setContador(contador + 1);

	return (
		<>
			<h1>Aplicativo exemplo de elevação de estado</h1>
			<MeuBotao
				titulo={"Contador de bom dia"}
				contador={contador}
				contar={contarEmApp}
			/>
			<MeuBotao
				titulo={"Contador de boa tarde"}
				contador={contador}
				contar={contarEmApp}
			/>
			<MeuBotao
				titulo={"Contador de boa noite"}
				contador={contador}
				contar={contarEmApp}
			/>
		</>
	);
};

export default App;