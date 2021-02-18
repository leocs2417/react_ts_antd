import React, {} from 'react';
import classnames from 'classnames';

export type ButtonSize =  'lg' | 'sm';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	btnType?: ButtonType;
	children: React.ReactNode;
	href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
	const {
		className,
		disabled,
		size,
		btnType,
		children,
		href,
		...restProps
	} = props;

	// btn, btn-lg, btn-primary
	const prefixCls = classnames('btn', className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		'disabled': (btnType === 'link') && disabled
	});

	if (btnType === 'link' && href) {
		return (
			<a
				className={prefixCls}
				href={href}
        {...restProps}
			>
				{children}
			</a>
		)
	}

	return (
		<button
			className={prefixCls}
			disabled={disabled}
			{...restProps}
		>
			{children}
		</button>
	)
}

Button.defaultProps = {
	disabled: false,
	btnType: 'default'
}

export default Button;