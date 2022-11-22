import { Envelope } from "phosphor-react";
import { useFormik } from "../services/FormValidation";
import { Text } from "../util/Text";
import { TextInput } from "../util/TextInput";
import { Alert } from "./Alert";

export function Newsletter() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: function (value: any) {
      const errors = {
        email: "Por favor, insira um email válido!",
      };

      if (!value.email.includes("@")) {
        errors.email;
      } else {
        errors.email = "";
      }
      return errors;
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formik.send();
  };

  return (
    <main className="flex">
      <div className="z-50 flex flex-col absolute left-[360px] top-[210px] h-[462px]">
        <div className="pt-3">
          <Text className="opacity-50 text-md font-Montserrat w-48 h-7 leading-[27px]">
            Sua casa com as
          </Text>
        </div>
        <div className="flex flex-col h-[188px] leading-[94px]">
          <Text className="font-Elsie text-2xl font-black">melhores</Text>
          <Text className="font-Elsie text-2xl font-black">plantas</Text>
        </div>
        <div className="w-[481px] h-[99px] leading-[26px] py-7">
          <Text className="opacity-50 font-Montserrat ">
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </Text>
        </div>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="drop-shadow-xsm flex flex-col py-16"
          >
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.value.email}
                type="email"
                name="email"
                id="email"
                placeholder="Insira seu e-mail"
              />
              <Alert
                disabled={formik.disabled}
                text={`Obrigado pela sua assinatura, você receberá nossas novidades
                  no e-mail: ${formik.value.email}`}
              />
            </TextInput.Root>
            {formik.touched.email && formik.errors.email && (
              <Text
                className="
                opacity-50 text-sm text-red-600
                font-Montserrat w-48 h-7 leading-[27px]"
              >
                {formik.errors.email}
              </Text>
            )}
          </label>
        </form>
      </div>
      <div className="absolute h-[1183px] z-0 top-[-28px] w-[787px] left-[718px]">
        <img className="" src="../public/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
}
