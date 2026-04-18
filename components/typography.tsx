import React from 'react';

export function Blockquote({ className = "", children, ...props }: React.ComponentProps<"blockquote">) {
  return (
    <blockquote className={className} {...props}>
      {children}
    </blockquote>
  );
}

export function H1({ className = "", children, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1 className={className} {...props}>
      {children}
    </h1>
  );
}

export function H2({ className = "", children, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2 className={className} {...props}>
      {children}
    </h2>
  );
}

export function H3({ className = "", children, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3 className={className} {...props}>
      {children}
    </h3>
  );
}

export function H4({ className = "", children, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4 className={className} {...props}>
      {children}
    </h4>
  );
}

export function InlineCode({ className = "", children, ...props }: React.ComponentProps<"code">) {
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
}



type LargeProps = React.ComponentProps<"div"> & {
  as?: "p" | "span" | "div";
};

export function Large({ className = "", as = "div", children, ...props }: LargeProps) {
  const Tag = as;
  return (
    <Tag className={["text-large", className].filter(Boolean).join(" ")} {...(props)}>
      {children}
    </Tag>
  );
}

export function Lead({ className = "", children, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={["text-lead", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </p>
  );
}

type ListProps = React.ComponentProps<"ul"> & {
  type?: "ul" | "ol";
};

export function List({ className = "", type = "ul", children, ...props }: ListProps) {
  const Tag = type;
  return (
    <Tag className={className} {...(props as any)}>
      {children}
    </Tag>
  );
}

type MutedProps = React.ComponentProps<"p"> & {
  as?: "p" | "span";
};

export function Muted({ className = "", as = "p", children, ...props }: MutedProps) {
  const Tag = as;
  return (
    <Tag className={["text-muted", className].filter(Boolean).join(" ")} {...(props as any)}>
      {children}
    </Tag>
  );
}

export function P({ className = "", children, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
}

type RTLProps = React.ComponentProps<"div"> & {
  as?: "div" | "p" | "span";
};

export function RTL({ className = "", as = "div", children, ...props }: RTLProps) {
  const Tag = as;
  return (
    <Tag dir="rtl" className={["rtl", className].filter(Boolean).join(" ")} {...(props as any)}>
      {children}
    </Tag>
  );
}

type SmallProps = React.ComponentProps<"small"> & {
  as?: "p" | "span" | "small";
};

export function Small({ className = "", as = "small", children, ...props }: SmallProps) {
  const Tag = as;
  return (
    <Tag className={["text-small", className].filter(Boolean).join(" ")} {...(props as any)}>
      {children}
    </Tag>
  );
}

export function Table({ className = "", children, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="overflow-x-auto w-full">
      <table className={className} {...props}>
        {children}
      </table>
    </div>
  );
}