import { useNavigate } from "react-router-dom";
import Button from "@/renderer/shared/components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
export interface FormValues {
  email: string;
  password: string;
}
const ProfileForm = () => {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await window.electron.saveProfile(data);
    console.log("result", result);
    navigation("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email:
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className="border rounded px-2 py-1 w-full"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password:
        </label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="border rounded px-2 py-1 w-full"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ProfileForm;
