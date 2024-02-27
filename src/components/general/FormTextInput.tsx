import { IFormTextInputProps } from "../../interface";

export const FormTextInput = ({
  register,
  errors,
  inputName,
  inputType,
  inputPlaceholder,
}: IFormTextInputProps) => {
  return (
    <div className="flex flex-col w-full gap-1 mb-3 sm:w-fit">
      <input
        className={`${
          errors[inputName] ? "border-red-500 focus:border-red-500" : ""
        } transition-all duration-300 outline-none input input-bordered`}
        type={inputType}
        placeholder={inputPlaceholder}
        autoComplete="current-password"
        {...register(inputName)}
      />
      {errors[inputName] && (
        <p className="text-xs text-red-500 font-roboto">
          {errors[inputName]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
