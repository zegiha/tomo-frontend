import { createContext, ReactNode, useContext } from "react";

interface ColContextInterface {
  justifyContent?: string;
  alignItems?: string;
  gap: number;
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: number;
  border?: string;
}

const ColContext = createContext<ColContextInterface>({ gap: 0 });

interface ColProps {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: number;
  border?: string;
}

const Col = ({ children }: ColProps) => {
  const context = useContext(ColContext);
  const style = {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: context.justifyContent,
    alignItems: context.alignItems,
    gap: `${context.gap}px`,
    width: context.width,
    height: context.height,
    padding: context.padding,
    backgroundColor: context.backgroundColor,
    borderRadius: context.borderRadius ? `${context.borderRadius}px` : undefined,
    border: context.border,
  };

  return <div style={style}>{children}</div>;
};

const createColComponent = (defaultConfig: ColContextInterface) => (props: ColProps) => {
  const config = { ...defaultConfig, ...props };

  return (
    <ColContext.Provider value={config}>
      <Col {...props}>{props.children}</Col>
    </ColContext.Provider>
  );
};

export const Col4 = createColComponent({ gap: 4 });
export const Col8 = createColComponent({ gap: 8 });
export const Col12 = createColComponent({ gap: 12 });
export const Col20 = createColComponent({ gap: 20 })
export const Col32 = createColComponent({ gap: 32 });
export const Col92 = createColComponent({ gap: 92 });
