import { FormTextFieldProps } from '@/types';

const FormTextField: React.FC<FormTextFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => (
  <div className="relative">
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className="form-text h-[50px] w-full rounded-[10px] border-2 border-solid border-[#e2e9ed] bg-transparent px-[10px] text-white"
    />
    {error && (
      <span className="pl-[10px] text-[11px] font-bold">
        {error.message}
      </span>
    )}
  </div>
);
export default FormTextField;
