

// Extends the HTML input element in order to have access to other props such as 'onBlur' or 'className'
export interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInput = ({ name, label, type, placeholder, value, onChange, ...props}: BasicInputProps) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="mb-2 font-semibold">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border border-gray-400 rounded-md p-2 ${props.className || ""}`}
                {...props}
            />
        </div>
    );
}

export default BasicInput;