import { createContext, ReactNode, useContext } from "react";

interface ColStyles {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: number;
  border?: string;
  borderBottom?: string;
  margin?: string;
  maxWidth?: string;
  flex?: string;
  overflow?: string;
}

interface ColContextInterface extends ColStyles {
  gap: number;
}

interface ColProps extends ColStyles {
  children?: ReactNode;
}

const ColContext = createContext<ColContextInterface>({ gap: 0 });

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
    borderBottom: context.borderBottom,
    margin: context.margin,
    maxWidth: context.maxWidth,
    flex: context.flex,
    overflow: context.overflow
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

export const Col0 = createColComponent({ gap: 0 });
export const Col4 = createColComponent({ gap: 4 });
export const Col8 = createColComponent({ gap: 8 });
export const Col12 = createColComponent({ gap: 12 });
export const Col20 = createColComponent({ gap: 20 });
export const Col22 = createColComponent({ gap: 22 });
export const Col32 = createColComponent({ gap: 32 });
export const Col92 = createColComponent({ gap: 92 });
