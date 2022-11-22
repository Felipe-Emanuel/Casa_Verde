import { ReactNode, useRef, useEffect, useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { styled} from "@stitches/react";
import { mauve } from "@radix-ui/colors";

export interface HoverProps {
  children?: ReactNode;
  handlePriceChange: Function;
  handleChange?: any;
}

export const Hover = ({ handlePriceChange, handleChange }: HoverProps) => {

  return (
    <HoverCard.Root openDelay={0}>
      <HoverCard.Trigger>
        <button
          onClick={() => handlePriceChange()}
          className="
           bg-white text-vector py-2 px-4 rounded-md
          drop-shadow-md hover:bg-vector hover:text-white
          transition-all focus:ring-2 focus:ring-vector
        "
        >
          Preço
        </button>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCardContent sideOffset={5}>
          <Flex css={{ flexDirection: "column", gap: 7, textAlign: "center" }}>
            <Flex css={{ flexDirection: "column", gap: 15 }}>
              <Text className="opacity-50">Esclha uma faixa de preço</Text>
                <input
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name="number"
                  className="outline-none ring-1 ring-vector rounded"
                  placeholder="ex: RS: 20.00"
                  />
            </Flex>
          </Flex>
          <HoverCardArrow />
        </HoverCardContent>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

const HoverCardContent = styled(HoverCard.Content, {
  borderRadius: 6,
  padding: 20,
  width: 200,
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
});

const HoverCardArrow = styled(HoverCard.Arrow, {
  fill: "white",
});

const Text = styled("div", {
  fontFamily: "Montserrat, sans-serif",
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const Flex = styled("div", { display: "flex" });
