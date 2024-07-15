import { createContext, ReactNode, useContext } from "react";

interface RowStyles {
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
}

interface RowContextInterface extends RowStyles {
  gap: number;
}

interface RowProps extends RowStyles {
  children?: ReactNode;
}

const RowContext = createContext<RowContextInterface>({ gap: 0 });

const Row = ({ children }: RowProps) => {
  const context = useContext(RowContext);
  const style = {
    display: "flex",
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
    flex: context.flex
  };

  return <div style={style}>{children}</div>;
};

const createRowComponent = (defaultConfig: RowContextInterface) => (props: RowProps) => {
  const config = { ...defaultConfig, ...props };

  return (
    <RowContext.Provider value={config}>
      <Row {...props}>{props.children}</Row>
    </RowContext.Provider>
  );
};

export const RowSpacebetween = createRowComponent({ gap: 0, justifyContent: "space-between" });
export const Row0 = createRowComponent({ gap: 0 });
export const Row2 = createRowComponent({ gap: 2 });
export const Row4 = createRowComponent({ gap: 4 });
export const Row8 = createRowComponent({ gap: 8 });
export const Row12 = createRowComponent({ gap: 12 });
export const Row32 = createRowComponent({ gap: 32 });
