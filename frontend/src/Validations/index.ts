import * as yup from "yup";

export const schemaRegistry = yup.object().shape({
  username: yup
    .string()
    .min(3, "Deve conter no mínimo 3 caracteres")
    .required("Campo obrigatório"),

  password: yup
    .string()
    .min(8, "Minimum of 8 digits")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[0-9])[A-Za-z\d@$!%*#?&]{8,12}$/,
      "The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    )
    .required("Password Required"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "A senha deve corresponder a anterior"),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().required("Digite seu email cadastrado"),

  password: yup.string().required("Digite sua senha cadastrada"),
});
