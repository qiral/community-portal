"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  buttonVariants: () => buttonVariants,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// components/button.tsx
var import_react = require("react");
var import_class_variance_authority = require("class-variance-authority");

// utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// components/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = (0, import_react.forwardRef)(
  ({ className, variant, size, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// components/card.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      ref,
      className: cn("bg-card text-card-foreground rounded-xl border shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "h3",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
var CardDescription = (0, import_react2.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { ref, className: cn("text-muted-foreground text-sm", className), ...props }));
CardDescription.displayName = "CardDescription";
var CardContent = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  buttonVariants,
  cn
});
