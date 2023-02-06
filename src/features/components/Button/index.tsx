import * as Styles from "./styles"

interface ButtonProps {
	/**
	 * Propriedade responsável de permitir o botão ser clicável
	 */
	onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
	onClick
}) => {
	return (
		<Styles.Container>
			<Styles.Button>START QUIZ</Styles.Button>
		</Styles.Container>
	)
}