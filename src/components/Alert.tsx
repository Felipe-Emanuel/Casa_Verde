import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { styled, keyframes } from "@stitches/react";
import { blackA, mauve } from "@radix-ui/colors";

import { Text } from "../util/Text";

export interface AlertProps {
  children?: any;
  text: string;
  disabled: any;
}

export const Alert = ({ disabled, text }: AlertProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          disabled={disabled}
          type="submit"
          className="bg-vector text-white px-8 h-[75px] disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          Assinar newsletter
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>
            <Text className="font-Elsie text-md font-black">
              Confirmação News Latter Casa Verde
            </Text>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <Text className="opacity-50 text-sm font-Montserrat w-48 h-7 leading-[27px]">
              {text.includes("@.com")
                ? (text = "Favor preencher um e-mail válido")
                : text}
            </Text>
          </AlertDialogDescription>
          <Flex css={{ justifyContent: "flex-end" }}>
            <AlertDialog.Action asChild>
              <Button variant={"vector"}>
                {text === "Favor preencher um e-mail válido"
                  ? "Voltar"
                  : "ver e-mail"}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const AlertDialogContent = styled(AlertDialog.Content, {
  zIndex: 50,
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "500px",
  maxHeight: "85vh",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  "&:focus": { outline: "none" },
});

const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 17,
  fontWeight: 500,
});

const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Flex = styled("div", { display: "flex" });

const Button = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      vector: {
        backgroundColor: "white",
        color: "rgb(255 203 71)",
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        transition: ".2s ease-in-out",
        "&:hover": { backgroundColor: "rgb(255 203 71)", color: "white" },
        "&:focus": { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
    },
  },
});
