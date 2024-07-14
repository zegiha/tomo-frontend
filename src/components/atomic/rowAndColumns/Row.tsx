import { createContext, ReactNode, useContext } from "react";

interface RowContextInterface {
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

const RowContext = createContext<RowContextInterface>({ gap: 0 });

interface RowProps {
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
export const Row4 = createRowComponent({ gap: 4 });
export const Row8 = createRowComponent({ gap: 8 });
export const Row12 = createRowComponent({ gap: 12 });
export const Row32 = createRowComponent({ gap: 32 });
