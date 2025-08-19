/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { type FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, type TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LBForm from "../components/form/LBForm";
import LBInput from "../components/form/LBInput";

const Login = () => {
  const navigate = useNavigate();
  const disPatch = useAppDispatch();

  const defaultValues = {
    email: "khali2@gmail.com",
    password: "A111",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);

      const user = verifyToken(res.data.accessToken) as TUser;

      disPatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastId, duration: 2000 });

      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <LBForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <LBInput type="text" name="email" label="email" />
        <LBInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </LBForm>
    </Row>
  );
};

export default Login;
