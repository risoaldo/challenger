import { ReactElement, ReactNode } from "react";

type ModalWrapperProps = {
	children: ReactNode;
};

const ModalWrapper = ({ children }: ModalWrapperProps) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default ModalWrapper;
