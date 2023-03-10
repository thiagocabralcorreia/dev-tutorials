interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText?: string;
  labelFor?: string;
  id: string;
  name: string;
  type: string;
  isRequired?: boolean;
  placeholder?: string;
}

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
}: InputProps) {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className="rounded-3xl appearance-none relative block w-full px-4 py-2 mb-4
        bg-white placeholder-gray-600 text-gray-800 border border-gray-300
        focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
