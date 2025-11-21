import AvatarImage from "@/assets/images/avatar.png";
import { cn } from "@/lib/utils";
import { inView, type Variants } from "motion";
import { motion, AnimatePresence, useInView } from "motion/react";
import * as React from "react";

type NavButtonProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function NavButton({ href, label, children }: NavButtonProps) {
  return (
    <a
      href={href}
      className="bg-secondary grid place-items-center rounded-full px-6 py-1 transition-transform active:scale-95"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
}

const navButtons = [
  {
    href: "#",
    label: "work",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          stroke="#B7B7B7"
          strokeWidth="1.5"
          d="M2.58 8.625c-.071-.59-.106-.885-.057-1.126.142-.689.748-1.247 1.556-1.434C4.362 6 4.717 6 5.428 6h13.144c.711 0 1.066 0 1.35.065.807.187 1.413.745 1.555 1.434.05.241.014.536-.057 1.126-.162 1.352-.92 2.091-2.369 2.517L14.88 12.37c-1.426.42-2.139.63-2.88.63-.741 0-1.454-.21-2.88-.63l-4.171-1.228c-1.448-.426-2.207-1.165-2.37-2.517Z"
        ></path>
        <path
          stroke="#B7B7B7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m3.463 10.5-.196 2.276c-.352 4.079-.528 6.119.6 7.421C4.996 21.5 6.94 21.5 10.824 21.5h2.352c3.885 0 5.828 0 6.957-1.303 1.128-1.302.952-3.342.6-7.421l-.196-2.276"
        ></path>
        <path
          stroke="#B7B7B7"
          strokeWidth="1.5"
          d="m15.5 5.5-.077-.265c-.385-1.32-.578-1.98-1.036-2.357-.458-.378-1.067-.378-2.285-.378h-.204c-1.218 0-1.827 0-2.285.378-.458.377-.65 1.037-1.036 2.357L8.5 5.5"
        ></path>
      </svg>
    ),
  },
  {
    href: "#",
    label: "about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          stroke="#B7B7B7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
        ></path>
        <path
          stroke="#B7B7B7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
        ></path>
        <path
          stroke="#B7B7B7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 17a5 5 0 0 0-10 0"
        ></path>
      </svg>
    ),
  },
  {
    href: "#",
    label: "contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          stroke="#B7B7B7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.75 11v-1c0-3.771 0-5.657-1.171-6.828C17.407 2 15.52 2 11.75 2h-1C6.98 2 5.093 2 3.922 3.172 2.75 4.343 2.75 6.229 2.75 10v4c0 3.771 0 5.657 1.172 6.828C5.093 22 6.979 22 10.75 22"
        ></path>
        <path
          stroke="#B7B7B7"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M7.25 7h8m-8 5h8"
        ></path>
        <path
          stroke="#B7B7B7"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.25 20.827V22h1.174c.409 0 .614 0 .798-.076.184-.076.329-.221.618-.51l4.824-4.825c.273-.273.41-.41.482-.556.139-.28.139-.61 0-.89-.073-.147-.21-.283-.482-.556-.274-.273-.41-.41-.557-.483a1.002 1.002 0 0 0-.89 0c-.147.073-.284.21-.556.483l-4.824 4.824c-.29.289-.434.434-.51.618-.077.184-.077.388-.077.798Z"
        ></path>
      </svg>
    ),
  },
];

const variants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    // transition: { duration: 0.3 },
  },
  visible: { opacity: 1, filter: "blur(0px)" },
};
export default function Navbar() {
  const spacerRef = React.useRef<React.ComponentRef<"div">>(null);
  const isNavSticky = !useInView(spacerRef, {
    initial: true,
  });

  return (
    <>
      <div className="h-30" ref={spacerRef}></div>
      <motion.nav
        layout
        className={cn(
          "my-container sticky top-0 flex py-6",
          isNavSticky
            ? "max-w-[110rem]! justify-between px-0"
            : "justify-start gap-8",
        )}
      >
        <motion.a className="font-title text-4xl font-medium">
          <AnimatePresence initial={false} mode="popLayout">
            {!isNavSticky && (
              <motion.span
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                Hamzat
              </motion.span>
            )}
          </AnimatePresence>{" "}
          <motion.img
            layout
            src={AvatarImage.src}
            alt="Hamzat Victor"
            className="avatar inline size-11 rounded-xl"
            id="nav-avatar"
          />{" "}
          <AnimatePresence initial={false} mode="popLayout">
            {!isNavSticky && (
              <motion.span
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                Victor
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
        <motion.div layout className="flex gap-2" id="nav-buttons">
          {navButtons.map((button, i) => (
            <NavButton key={i} href={button.href} label={button.label}>
              {button.icon}
            </NavButton>
          ))}
        </motion.div>
      </motion.nav>

      <style>{`
        @property --border-angle {
          inherits: false;
          initial-value: 0deg;
          syntax: "<angle>";
        }
        .avatar {
          background:
            linear-gradient(#121212, #121212) padding-box,
            conic-gradient(
                from var(--border-angle),
                #323435 80%,
                #a3a7ab 86%,
                #c7c9cb 90%,
                #a3a7ab 94%,
                #323435
              )
              border-box;
          border: 1px solid transparent;
          animation: rotate-border 4s linear infinite;
        }
        @keyframes rotate-border {
          0% {
            --border-angle: 0deg;
          }
          100% {
            --border-angle: 360deg;
          }
        }
      `}</style>
    </>
  );
}
