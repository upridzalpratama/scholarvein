import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter, UNSAFE_withComponentProps, Outlet, useNavigate, useLocation, Meta, Links, ScrollRestoration, Scripts, useRouteError, useAsyncError } from 'react-router';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { forwardRef, useEffect, createElement, useRef, useState, Component, useCallback } from 'react';
import { useButton } from '@react-aria/button';
import { f as fetchWithHeaders } from './index-BhNNfKxg.js';
import { SessionProvider, signIn } from '@hono/auth-js/react';
import { toPng } from 'html-to-image';
import { serializeError } from 'serialize-error';
import { Toaster, toast } from 'sonner';
import { useIdleTimer } from 'react-idle-timer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import _JSXStyle from 'styled-jsx/style.js';
import { motion, useInView } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Globe, Mail, MessageCircle, X, Menu, Sparkles, Award, ArrowRight, ExternalLink, Users, Target, TrendingUp, GraduationCap, Briefcase } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import fg from 'fast-glob';
import 'node:async_hooks';
import 'node:console';
import '@auth/core';
import '@auth/core/providers/credentials';
import '@hono/auth-js';
import '@neondatabase/serverless';
import 'argon2';
import 'hono';
import 'hono/context-storage';
import 'hono/cors';
import 'hono/proxy';
import 'hono/body-limit';
import 'hono/request-id';
import 'hono/factory';
import '@hono/node-server';
import '@hono/node-server/serve-static';
import 'hono/logger';
import 'ws';
import '@auth/core/jwt';
import 'node:path';
import 'node:fs';
import 'node:url';
import '@react-router/dev/routes';
import 'node:fs/promises';

const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}

const entryServer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: 'Module' }));

const JSX_RENDER_ID_ATTRIBUTE_NAME = "data-render-id";
function buildGridPlaceholder(w, h) {
  const size = Math.max(w, h);
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 895 895" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="895" height="895" fill="#E9E7E7"/>
<g>
<line x1="447.505" y1="-23" x2="447.505" y2="901" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="447.505" x2="5.66443" y2="447.505" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="278.068" x2="5.66443" y2="278.068" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="57.1505" x2="5.66443" y2="57.1504" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="61.8051" y1="883.671" x2="61.8051" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="282.495" y1="907" x2="282.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="611.495" y1="907" x2="611.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="832.185" y1="883.671" x2="832.185" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="827.53" x2="5.66443" y2="827.53" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="606.613" x2="5.66443" y2="606.612" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="4.3568" y1="4.6428" x2="889.357" y2="888.643" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="-0.3568" y1="894.643" x2="894.643" y2="0.642772" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.5" cy="441.5" r="163.995" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.911" cy="447.911" r="237.407" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="448" cy="442" r="384.495" stroke="#C0C0C0" stroke-width="1.00975"/>
</g>
</svg>
`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function useOptionalRef(ref) {
  const fallbackRef = useRef(null);
  if (ref && "instance" in ref) return fallbackRef;
  return ref ?? fallbackRef;
}
const CreatePolymorphicComponent = /* @__PURE__ */ forwardRef(
  // @ts-expect-error -- generic forwardRef signature doesn't propagate the As type param
  function CreatePolymorphicComponentRender({
    as,
    children,
    renderId,
    onError,
    ...rest
  }, forwardedRef) {
    const props = as === "img" ? {
      ...rest,
      // keep the original type of onError for <img>
      onError: (e) => {
        if (typeof onError === "function") onError(e);
        const img = e.currentTarget;
        const {
          width,
          height
        } = img.getBoundingClientRect();
        img.dataset.hasFallback = "1";
        img.onerror = null;
        img.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        img.style.objectFit = "cover";
      }
    } : rest;
    const ref = useOptionalRef(forwardedRef);
    useEffect(() => {
      const el = ref && "current" in ref ? ref.current : null;
      if (!el) return;
      if (as !== "img") {
        const placeholder = () => {
          const {
            width,
            height
          } = el.getBoundingClientRect();
          return buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        };
        const applyBgFallback = () => {
          el.dataset.hasFallback = "1";
          el.style.backgroundImage = `url("${placeholder()}")`;
          el.style.backgroundSize = "cover";
        };
        const probeBg = () => {
          const bg = getComputedStyle(el).backgroundImage;
          const match = /url\(["']?(.+?)["']?\)/.exec(bg);
          const src = match?.[1];
          if (!src) return;
          const probe = new Image();
          probe.onerror = applyBgFallback;
          probe.src = src;
        };
        probeBg();
        const ro2 = new ResizeObserver(([entry]) => {
          if (!el.dataset.hasFallback) return;
          const {
            width,
            height
          } = entry.contentRect;
          el.style.backgroundImage = `url("${buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128)}")`;
        });
        ro2.observe(el);
        const mo = new MutationObserver(probeBg);
        mo.observe(el, {
          attributes: true,
          attributeFilter: ["style", "class"]
        });
        return () => {
          ro2.disconnect();
          mo.disconnect();
        };
      }
      if (!el.dataset.hasFallback) return;
      const ro = new ResizeObserver(([entry]) => {
        const {
          width,
          height
        } = entry.contentRect;
        el.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, [as, ref]);
    return /* @__PURE__ */ createElement(as, Object.assign({}, props, {
      ref,
      ...renderId ? {
        [JSX_RENDER_ID_ATTRIBUTE_NAME]: renderId
      } : void 0
    }), children);
  }
);

function LoadFonts() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=block" }) });
}

function useDevServerHeartbeat() {
  useIdleTimer({
    disabled: typeof window === "undefined",
    throttle: 6e4 * 3,
    timeout: 6e4,
    onAction: () => {
      fetch("/", {
        method: "GET"
      }).catch((error) => {
      });
    }
  });
}

const links = () => [];
if (globalThis.window && globalThis.window !== void 0) {
  globalThis.window.fetch = fetchWithHeaders;
}
const LoadFontsSSR = LoadFonts ;
function InternalErrorBoundary({
  error: errorArg
}) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);
  const shouldScale = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const scaleFactor = shouldScale ? 1.02 : 1;
  const copyButtonTextClass = shouldScale ? "text-sm" : "text-xs";
  const copyButtonPaddingClass = shouldScale ? "px-[10px] py-[5px]" : "px-[6px] py-[3px]";
  const postCountRef = useRef(0);
  const lastPostTimeRef = useRef(0);
  const lastErrorKeyRef = useRef(null);
  const MAX_ERROR_POSTS_PER_ERROR = 5;
  const THROTTLE_MS = 1e3;
  useEffect(() => {
    const serialized = serializeError(error);
    const errorKey = JSON.stringify(serialized);
    if (errorKey !== lastErrorKeyRef.current) {
      lastErrorKeyRef.current = errorKey;
      postCountRef.current = 0;
    }
    if (postCountRef.current >= MAX_ERROR_POSTS_PER_ERROR) {
      return;
    }
    const now = Date.now();
    const timeSinceLastPost = now - lastPostTimeRef.current;
    const post = () => {
      if (postCountRef.current >= MAX_ERROR_POSTS_PER_ERROR) {
        return;
      }
      postCountRef.current += 1;
      lastPostTimeRef.current = Date.now();
      window.parent.postMessage({
        type: "sandbox:error:detected",
        error: serialized
      }, "*");
    };
    if (timeSinceLastPost < THROTTLE_MS) {
      const timer = setTimeout(post, THROTTLE_MS - timeSinceLastPost);
      return () => clearTimeout(timer);
    }
    post();
  }, [error]);
  useEffect(() => {
    const animateTimer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(animateTimer);
  }, []);
  const {
    buttonProps: copyButtonProps
  } = useButton({
    onPress: useCallback(() => {
      const toastScale = shouldScale ? 1.2 : 1;
      const toastStyle = {
        padding: `${16 * toastScale}px`,
        background: "#18191B",
        border: "1px solid #2C2D2F",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: `${280 * toastScale}px`,
        fontSize: `${13 * toastScale}px`,
        display: "flex",
        alignItems: "center",
        gap: `${6 * toastScale}px`,
        justifyContent: "flex-start",
        margin: "0 auto"
      };
      navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
      toast.custom(() => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: toastStyle,
        renderId: "render-73f5456b",
        as: "div",
        children: [/* @__PURE__ */ jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
          children: [/* @__PURE__ */ jsx("title", {
            children: "Success"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
            renderId: "render-7d2bc4c5",
            as: "path"
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-6487beee",
          as: "span",
          children: "Copied successfully!"
        })]
      }), {
        id: "copy-error-success",
        duration: 3e3
      });
    }, [error, shouldScale])
  }, useRef(null));
  function isInIframe() {
    try {
      return window.parent !== window;
    } catch {
      return true;
    }
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: !isInIframe() && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: `fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-md z-50 transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`,
      style: {
        width: "75vw"
      },
      renderId: "render-c37f1e51",
      as: "div",
      children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 shadow-lg w-full",
        style: scaleFactor !== 1 ? {
          transform: `scale(${scaleFactor})`,
          transformOrigin: "bottom center"
        } : void 0,
        renderId: "render-fb95b54d",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-start gap-3",
          renderId: "render-7bd7d677",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex-shrink-0",
            renderId: "render-39da8368",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center",
              renderId: "render-7655ad0c",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-black text-[1.125rem] leading-none",
                renderId: "render-370f5833",
                as: "span",
                children: "!"
              })
            })
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col gap-2 flex-1",
            renderId: "render-49e6cb46",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex flex-col gap-1",
              renderId: "render-e96d77b2",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "font-light text-[#F2F2F2] text-sm",
                renderId: "render-1de31800",
                as: "p",
                children: "App Error Detected"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-[#959697] text-sm font-light",
                renderId: "render-fe4a1994",
                as: "p",
                children: "It looks like an error occurred while trying to use your app."
              })]
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: `flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white ${copyButtonTextClass} ${copyButtonPaddingClass} w-fit`,
              type: "button",
              ...copyButtonProps,
              renderId: "render-4c848b7f",
              as: "button",
              children: "Copy error"
            })]
          })]
        })
      })
    })
  });
}
class ErrorBoundaryWrapper extends Component {
  state = {
    hasError: false,
    error: null
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx(InternalErrorBoundary, {
        error: this.state.error,
        params: {}
      });
    }
    return this.props.children;
  }
}
function LoaderWrapper({
  loader
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: loader()
  });
}
const ClientOnly = ({
  loader
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return /* @__PURE__ */ jsx(ErrorBoundaryWrapper, {
    children: /* @__PURE__ */ jsx(LoaderWrapper, {
      loader
    })
  });
};
function useHmrConnection() {
  const [connected, setConnected] = useState(() => false);
  useEffect(() => {
    return;
  }, []);
  return connected;
}
const healthyResponseType = "sandbox:web:healthcheck:response";
const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected,
      supportsErrorDetected: true
    };
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:healthcheck") {
        window.parent.postMessage(healthyResponse, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage(healthyResponse, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [isHmrConnected]);
};
const waitForScreenshotReady = async () => {
  const images = Array.from(document.images);
  await Promise.all([
    // make sure custom fonts are loaded
    "fonts" in document ? document.fonts.ready : Promise.resolve(),
    ...images.map((img) => new Promise((resolve) => {
      img.crossOrigin = "anonymous";
      if (img.complete) {
        resolve(true);
        return;
      }
      img.onload = () => resolve(true);
      img.onerror = () => resolve(true);
    }))
  ]);
  await new Promise((resolve) => setTimeout(resolve, 250));
};
const useHandleScreenshotRequest = () => {
  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.data.type === "sandbox:web:screenshot:request") {
        try {
          await waitForScreenshotReady();
          const width = window.innerWidth;
          const aspectRatio = 16 / 9;
          const height = Math.floor(width / aspectRatio);
          const dataUrl = await toPng(document.body, {
            cacheBust: true,
            skipFonts: false,
            width,
            height,
            style: {
              // force snapshot sizing
              width: `${width}px`,
              height: `${height}px`,
              margin: "0"
            }
          });
          window.parent.postMessage({
            type: "sandbox:web:screenshot:response",
            dataUrl
          }, "*");
        } catch (error) {
          window.parent.postMessage({
            type: "sandbox:web:screenshot:error",
            error: error instanceof Error ? error.message : String(error)
          }, "*");
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
function Layout({
  children
}) {
  useHandshakeParent();
  useHandleScreenshotRequest();
  useDevServerHeartbeat();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:navigation") {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage({
      type: "sandbox:web:ready"
    }, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);
  useEffect(() => {
    if (pathname) {
      window.parent.postMessage({
        type: "sandbox:web:navigation",
        pathname
      }, "*");
    }
  }, [pathname]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("script", {
        type: "module",
        src: "/src/__create/dev-error-overlay.js"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/src/__create/favicon.png"
      }), LoadFontsSSR ? /* @__PURE__ */ jsx(LoadFontsSSR, {}) : null]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(ClientOnly, {
        loader: () => children
      }), /* @__PURE__ */ jsx(Toaster, {
        position: isMobile ? "top-center" : "bottom-right"
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx("script", {
        src: "https://kit.fontawesome.com/2c15cc0cc7.js",
        crossOrigin: "anonymous",
        async: true
      })]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(SessionProvider, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});

const route0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ClientOnly,
  Layout,
  default: root,
  links,
  useHandleScreenshotRequest,
  useHmrConnection
}, Symbol.toStringTag, { value: 'Module' }));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      cacheTime: 1e3 * 60 * 30,
      // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
function RootLayout({
  children
}) {
  return /* @__PURE__ */ jsxs(QueryClientProvider, {
    client: queryClient,
    children: [/* @__PURE__ */ jsx(Toaster, {
      position: "top-center",
      richColors: true
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "font-instrument-sans",
      renderId: "render-e946f102",
      as: "div",
      children
    })]
  });
}

const COLORS = {
  canvas: "bg-[#F8FAFC]",
  workspace: "bg-[#FFFFFF]",
  primary: "bg-[#0F172A]",
  primaryText: "text-[#0F172A]",
  primaryHover: "hover:bg-[#1E293B]",
  primaryMuted: "bg-[#F1F5F9]",
  border: "border-[#E2E8F0]"};
const Pill = ({
  children,
  className
}) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
  className: twMerge("rounded-full px-3 py-1 text-[12px] font-medium border flex items-center gap-1.5 transition-all", COLORS.primaryMuted, COLORS.primaryText, "border-[#E2E8F0]", className),
  renderId: "render-3bdd2b9f",
  as: "div",
  children
});
const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles = "px-5 py-2.5 rounded-[6px] text-sm font-medium transition-all flex items-center justify-center gap-2";
  const variants = {
    primary: `${COLORS.primary} text-white ${COLORS.primaryHover}`,
    secondary: `${COLORS.canvas} ${COLORS.primaryText} border ${COLORS.border} ${COLORS.primaryHover}`,
    ghost: "bg-transparent text-[#0F172A] hover:bg-[#F1F5F9]"
  };
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: twMerge(baseStyles, variants[variant], className),
    ...props,
    renderId: "render-04970123",
    as: "button",
    children
  });
};
const Counter = ({
  target,
  duration = 2,
  suffix = ""
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target);
      const totalMiliseconds = duration * 1e3;
      const incrementTime = totalMiliseconds / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    ref,
    className: "text-[32px] font-normal tracking-tight text-[#0F172A]",
    renderId: "render-245fdf9a",
    as: "div",
    children: [count, suffix]
  });
};
const SectionHeading = ({
  title,
  subtitle,
  badge
}) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
  className: "mb-12",
  renderId: "render-3355e68c",
  as: "div",
  children: [badge && /* @__PURE__ */ jsx(Pill, {
    className: "mb-4 w-fit",
    children: badge
  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "text-[24px] font-normal tracking-tight text-[#0F172A] mb-3",
    renderId: "render-05a2526a",
    as: "h2",
    children: title
  }), subtitle && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "text-[16px] text-[#64748B] max-w-2xl",
    renderId: "render-8e6efafc",
    as: "p",
    children: subtitle
  })]
});
function ConferenceLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();
  const handleWhatsApp = (text = "Hi, I am interested in your conferences.") => {
    if (typeof window === "undefined") return;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/62811227479?text=${encodedText}`, "_blank");
  };
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "jsx-2479205301 " + (twMerge("min-h-screen", COLORS.canvas) || ""),
    renderId: "render-406f008c",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "jsx-2479205301 sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm",
      renderId: "render-78b1e721",
      as: "header",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2479205301 max-w-7xl mx-auto px-6 md:px-16",
        renderId: "render-3e7a0d92",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 flex items-center justify-between h-[72px]",
          renderId: "render-fa36ab49",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 flex items-center gap-2",
            renderId: "render-dd81033e",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 w-8 h-8 bg-[#0F172A] rounded-md flex items-center justify-center",
              renderId: "render-6228d2fa",
              as: "div",
              children: /* @__PURE__ */ jsx(Globe, {
                className: "text-white",
                size: 18
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 text-[18px] font-medium tracking-tight text-[#0F172A]",
              renderId: "render-86b44544",
              as: "span",
              children: "Scholarvein"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 hidden md:flex items-center gap-8",
            renderId: "render-96a2c344",
            as: "nav",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              href: "#hero",
              className: "jsx-2479205301 text-sm text-[#0F172A] hover:text-[#64748B] transition-all font-medium",
              renderId: "render-72e62e42",
              as: "a",
              children: "Overview"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              href: "#why-join",
              className: "jsx-2479205301 text-sm text-[#64748B] hover:text-[#0F172A] transition-all",
              renderId: "render-f2e7d447",
              as: "a",
              children: "Benefits"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              href: "#how-it-works",
              className: "jsx-2479205301 text-sm text-[#64748B] hover:text-[#0F172A] transition-all",
              renderId: "render-449f4e6c",
              as: "a",
              children: "Timeline"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 hidden md:flex items-center gap-3",
            renderId: "render-85183505",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              href: "mailto:committee@eduglobal.org",
              className: "jsx-2479205301 text-[#64748B] hover:text-[#0F172A] transition-all",
              renderId: "render-6daa2c5e",
              as: "a",
              children: /* @__PURE__ */ jsx(Mail, {
                size: 18
              })
            }), /* @__PURE__ */ jsxs(Button, {
              onClick: () => handleWhatsApp(),
              variant: "secondary",
              className: "text-sm",
              children: [/* @__PURE__ */ jsx(MessageCircle, {
                size: 14
              }), "Consult via WA"]
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            className: "jsx-2479205301 md:hidden",
            renderId: "render-38a578b3",
            as: "button",
            children: isMenuOpen ? /* @__PURE__ */ jsx(X, {
              size: 24
            }) : /* @__PURE__ */ jsx(Menu, {
              size: 24
            })
          })]
        })
      }), isMenuOpen && /* @__PURE__ */ jsx(motion.div, {
        initial: {
          opacity: 0,
          y: -20
        },
        animate: {
          opacity: 1,
          y: 0
        },
        className: "md:hidden border-t border-[#E2E8F0] bg-white",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 px-6 py-4 space-y-4",
          renderId: "render-0ef94131",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            href: "#hero",
            onClick: () => setIsMenuOpen(false),
            className: "jsx-2479205301 block py-2 text-sm text-[#0F172A] hover:text-[#64748B] transition-all border-b border-[#E2E8F0]",
            renderId: "render-d13022b9",
            as: "a",
            children: "Overview"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            href: "#why-join",
            onClick: () => setIsMenuOpen(false),
            className: "jsx-2479205301 block py-2 text-sm text-[#64748B] hover:text-[#0F172A] transition-all border-b border-[#E2E8F0]",
            renderId: "render-ed89f977",
            as: "a",
            children: "Benefits"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            href: "#how-it-works",
            onClick: () => setIsMenuOpen(false),
            className: "jsx-2479205301 block py-2 text-sm text-[#64748B] hover:text-[#0F172A] transition-all border-b border-[#E2E8F0]",
            renderId: "render-d32eec78",
            as: "a",
            children: "Timeline"
          }), /* @__PURE__ */ jsxs(Button, {
            onClick: () => {
              handleWhatsApp();
              setIsMenuOpen(false);
            },
            className: "w-full mt-4",
            children: [/* @__PURE__ */ jsx(MessageCircle, {
              size: 14
            }), "WhatsApp Consultation"]
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "jsx-2479205301 " + (twMerge("min-h-screen", COLORS.workspace) || ""),
      renderId: "render-3d04d791",
      as: "main",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        id: "hero",
        className: "jsx-2479205301 relative min-h-[90vh] flex items-center px-6 md:px-16 pt-12 pb-24 overflow-hidden max-w-7xl mx-auto",
        renderId: "render-f104425e",
        as: "section",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 absolute inset-0 z-0",
          renderId: "render-8d43463b",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: "https://raw.createusercontent.com/73329bf8-1f7b-4def-9f3b-1c6e414fb8ab/",
            alt: "Conference Collage",
            className: "jsx-2479205301 w-full h-full object-cover opacity-[0.08]",
            renderId: "render-63820ed4",
            as: "img"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 absolute inset-0 bg-gradient-to-br from-white via-white/80 to-slate-50/50",
            renderId: "render-6cb0084a",
            as: "div"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 relative z-10 max-w-4xl",
          renderId: "render-ec366da1",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 flex flex-wrap gap-2 mb-8",
            renderId: "render-a69c04bd",
            as: "div",
            children: [/* @__PURE__ */ jsxs(Pill, {
              children: [/* @__PURE__ */ jsx(Sparkles, {
                size: 14
              }), " Hybrid Events"]
            }), /* @__PURE__ */ jsxs(Pill, {
              children: [/* @__PURE__ */ jsx(Globe, {
                size: 14
              }), " Global Network"]
            }), /* @__PURE__ */ jsxs(Pill, {
              children: [/* @__PURE__ */ jsx(Award, {
                size: 14
              }), " Scopus Indexed"]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 text-[42px] md:text-[64px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0F172A] mb-8",
            renderId: "render-3299ea7a",
            as: "h1",
            children: ["Bridge the Gap Between ", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 hidden md:block",
              renderId: "render-75a3e344",
              as: "br"
            }), "Research and Global Impact."]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 text-[18px] md:text-[20px] text-[#64748B] mb-10 max-w-2xl font-normal leading-relaxed",
            renderId: "render-4974fecf",
            as: "p",
            children: "Join thousands of academics and professionals in our upcoming international conferences. Gain world-class insights, publication opportunities, and networking that lasts a lifetime."
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 flex flex-col sm:flex-row gap-4",
            renderId: "render-204395ed",
            as: "div",
            children: [/* @__PURE__ */ jsxs(Button, {
              onClick: () => {
                if (typeof window !== "undefined") {
                  window.open("http://bit.ly/UpcomingConference-RSF", "_blank");
                }
              },
              className: "px-8 py-4 text-base",
              children: ["Explore Conferences", /* @__PURE__ */ jsx(ArrowRight, {
                size: 18
              })]
            }), /* @__PURE__ */ jsx(Button, {
              variant: "secondary",
              className: "px-8 py-4 text-base",
              onClick: () => handleWhatsApp(),
              children: "Consult via WhatsApp"
            }), /* @__PURE__ */ jsxs(Button, {
              variant: "ghost",
              className: "px-8 py-4 text-base border border-[#E2E8F0]",
              onClick: () => {
                if (typeof window !== "undefined") {
                  window.open("https://www.researchsynergy.org/faq-how-to-submit-abstract/", "_blank");
                }
              },
              children: ["How to Submit", /* @__PURE__ */ jsx(ExternalLink, {
                size: 16
              })]
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2479205301 px-6 md:px-16 py-16 bg-[#F1F5F9]/50 border-y border-[#E2E8F0]",
        renderId: "render-e4b14272",
        as: "section",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
          renderId: "render-65f3d768",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 space-y-1",
            renderId: "render-62faf9b8",
            as: "div",
            children: [/* @__PURE__ */ jsx(Counter, {
              target: "244",
              suffix: "",
              duration: 0.8
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 text-sm text-[#64748B]",
              renderId: "render-f032997b",
              as: "p",
              children: "International Conferences"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 space-y-1",
            renderId: "render-f189b38d",
            as: "div",
            children: [/* @__PURE__ */ jsx(Counter, {
              target: "4500",
              suffix: "+",
              duration: 0.8
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 text-sm text-[#64748B]",
              renderId: "render-dcbb9b62",
              as: "p",
              children: "Participants"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 space-y-1",
            renderId: "render-e6856b3c",
            as: "div",
            children: [/* @__PURE__ */ jsx(Counter, {
              target: "7190",
              suffix: "+",
              duration: 0.8
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 text-sm text-[#64748B]",
              renderId: "render-05cd2a12",
              as: "p",
              children: "Institutions Represented"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 space-y-1",
            renderId: "render-b4dc5cee",
            as: "div",
            children: [/* @__PURE__ */ jsx(Counter, {
              target: "87",
              suffix: "",
              duration: 0.8
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 text-sm text-[#64748B]",
              renderId: "render-b4fc1521",
              as: "p",
              children: "Countries Represented"
            })]
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        id: "why-join",
        className: "jsx-2479205301 px-6 md:px-16 py-24",
        renderId: "render-6ad7440c",
        as: "section",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 max-w-7xl mx-auto",
          renderId: "render-e69dcc09",
          as: "div",
          children: [/* @__PURE__ */ jsx(SectionHeading, {
            badge: "Why Join Us",
            title: "Premium Academic Experience",
            subtitle: "We provide a comprehensive ecosystem for research dissemination and professional growth."
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 grid grid-cols-1 md:grid-cols-3 gap-8",
            renderId: "render-11393b5b",
            as: "div",
            children: [{
              icon: /* @__PURE__ */ jsx(Globe, {
                size: 24
              }),
              title: "Global Reach",
              desc: "Connect with experts from over 80 countries worldwide."
            }, {
              icon: /* @__PURE__ */ jsx(Award, {
                size: 24
              }),
              title: "Indexed Publication",
              desc: "Submit your work to Scopus/Copernicus/EBSCO (etc.) indexed journals."
            }, {
              icon: /* @__PURE__ */ jsx(Users, {
                size: 24
              }),
              title: "Vibrant Networking",
              desc: "Build meaningful collaborations across diverse disciplines."
            }, {
              icon: /* @__PURE__ */ jsx(Target, {
                size: 24
              }),
              title: "Expert Feedback",
              desc: "Receive rigorous peer-reviews to enhance your research quality."
            }, {
              icon: /* @__PURE__ */ jsx(Sparkles, {
                size: 24
              }),
              title: "Hybrid Innovation",
              desc: "Join virtually or physically with high-tech seamless streaming."
            }, {
              icon: /* @__PURE__ */ jsx(TrendingUp, {
                size: 24
              }),
              title: "Career Growth",
              desc: "Gain international credentials recognized by top universities."
            }].map((benefit, i) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "jsx-2479205301 group p-6 border border-[#E2E8F0] rounded-[6px] hover:border-[#0F172A] transition-all bg-white shadow-sm",
              renderId: "render-e1e62804",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2479205301 mb-4 text-[#0F172A] group-hover:scale-110 transition-transform duration-300",
                renderId: "render-aa17a01f",
                as: "div",
                children: benefit.icon
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2479205301 text-[18px] font-medium text-[#0F172A] mb-2",
                renderId: "render-9f46ff63",
                as: "h3",
                children: benefit.title
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2479205301 text-sm text-[#64748B] leading-relaxed",
                renderId: "render-88a1bd75",
                as: "p",
                children: benefit.desc
              })]
            }, i))
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2479205301 px-6 md:px-16 py-24 bg-[#F8FAFC]",
        renderId: "render-e97efea9",
        as: "section",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 max-w-7xl mx-auto",
          renderId: "render-c9908cdd",
          as: "div",
          children: [/* @__PURE__ */ jsx(SectionHeading, {
            title: "Designed for Your Background",
            subtitle: "Tailored opportunities for every step of your professional and academic journey."
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 grid grid-cols-1 md:grid-cols-3 gap-8",
            renderId: "render-413327a6",
            as: "div",
            children: [{
              icon: /* @__PURE__ */ jsx(GraduationCap, {
                size: 32
              }),
              title: "For Academics",
              points: ["Scopus Publication", "Oral & Poster Presentation", "Scientific Networking", "Research Collaboration"]
            }, {
              icon: /* @__PURE__ */ jsx(Briefcase, {
                size: 32
              }),
              title: "For Practitioners",
              points: ["Industry Case Sharing", "Evidence-Based Solutions", "Peer Validation", "Global Trend Insights"]
            }, {
              icon: /* @__PURE__ */ jsx(Users, {
                size: 32
              }),
              title: "For Professionals",
              points: ["Strategic Networking", "Cross-Sector Partnerships", "Leadership Development", "International Credentials"]
            }].map((item, i) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "jsx-2479205301 p-8 border border-[#E2E8F0] rounded-[6px] bg-white flex flex-col items-center text-center shadow-sm",
              renderId: "render-40000b86",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2479205301 mb-6 text-[#0F172A]",
                renderId: "render-52513d81",
                as: "div",
                children: item.icon
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2479205301 text-[18px] font-medium text-[#0F172A] mb-6",
                renderId: "render-cfe22828",
                as: "h3",
                children: item.title
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-2479205301 space-y-3 w-full text-left",
                renderId: "render-06a6fc74",
                as: "ul",
                children: item.points.map((point, idx) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "jsx-2479205301 flex items-start gap-2 text-sm text-[#64748B]",
                  renderId: "render-ace53ef1",
                  as: "li",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "jsx-2479205301 text-[#0F172A] mt-0.5",
                    renderId: "render-fbc4d764",
                    as: "span",
                    children: "-"
                  }), point]
                }, idx))
              })]
            }, i))
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        id: "how-it-works",
        className: "jsx-2479205301 px-6 md:px-16 py-24",
        renderId: "render-429caccf",
        as: "section",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 max-w-7xl mx-auto",
          renderId: "render-19f61a06",
          as: "div",
          children: [/* @__PURE__ */ jsx(SectionHeading, {
            badge: "Process",
            title: "Your Journey to Success",
            subtitle: "Six simple steps to participating in the world's leading conferences."
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 relative",
            renderId: "render-0c274792",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 hidden md:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-[#E2E8F0] z-0",
              renderId: "render-29cc9fd4",
              as: "div"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8",
              renderId: "render-58bb8714",
              as: "div",
              children: [{
                step: "01",
                title: "Registration",
                desc: "Select conference and register your interest."
              }, {
                step: "02",
                title: "Submission",
                desc: "Submit your abstract or full paper for review."
              }, {
                step: "03",
                title: "Review",
                desc: "Rigorous peer-review process by experts."
              }, {
                step: "04",
                title: "Payment",
                desc: "Secure conference fee through local/global channels."
              }, {
                step: "05",
                title: "Participation",
                desc: "Join the conference and get your certificates."
              }, {
                step: "06",
                title: "Post-Conference",
                desc: "Monitor Your Publication After the Conference."
              }].map((item, i) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "jsx-2479205301 relative z-10 flex flex-col md:items-center md:text-center group",
                renderId: "render-7d75a301",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "jsx-2479205301 w-[56px] h-[56px] rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-[18px] font-medium text-[#0F172A] mb-6 group-hover:border-[#0F172A] group-hover:bg-[#F1F5F9] transition-all",
                  renderId: "render-bb264e1f",
                  as: "div",
                  children: item.step
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "jsx-2479205301 text-[16px] font-medium text-[#0F172A] mb-2",
                  renderId: "render-079079b6",
                  as: "h4",
                  children: item.title
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "jsx-2479205301 text-xs text-[#64748B] leading-relaxed px-4",
                  renderId: "render-e4a98d29",
                  as: "p",
                  children: item.desc
                })]
              }, i))
            })]
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2479205301 px-6 md:px-16 py-24 bg-[#F8FAFC]",
        renderId: "render-5d0c0ce1",
        as: "section",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 max-w-4xl mx-auto",
          renderId: "render-10e48c48",
          as: "div",
          children: [/* @__PURE__ */ jsx(SectionHeading, {
            badge: "Next Steps",
            title: "Post Conference",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 text-sm md:text-base text-[#64748B] leading-relaxed text-center max-w-3xl mx-auto",
            renderId: "render-cebf63ef",
            as: "p",
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2479205301 px-6 md:px-16 py-24",
        renderId: "render-0e28679b",
        as: "section",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 max-w-5xl mx-auto",
          renderId: "render-34a4407a",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 text-center mb-10",
            renderId: "render-655ef524",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 text-[24px] md:text-[32px] font-normal tracking-tight text-[#0F172A]",
              renderId: "render-f63c4675",
              as: "h2",
              children: "Indexed in Scopus Q1 and Q2"
            })
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-2479205301 grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
            renderId: "render-7873a60e",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 border border-[#E2E8F0] rounded-[10px] bg-white p-8 flex items-center justify-center min-h-[180px]",
              renderId: "render-97612151",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: "/images/clarivate-analytics.png?v=5",
                alt: "Clarivate Analytics logo",
                className: "jsx-2479205301 max-h-[110px] w-auto object-contain",
                renderId: "render-5f4fc5f6",
                as: "img"
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 border border-[#E2E8F0] rounded-[10px] bg-white p-8 flex items-center justify-center min-h-[180px]",
              renderId: "render-3722f076",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                src: "/images/scopus-logo.png",
                alt: "Scopus logo",
                className: "jsx-2479205301 max-h-[110px] w-auto object-contain",
                renderId: "render-38ccac1d",
                as: "img"
              })
            })]
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2479205301 px-6 md:px-16 py-24 bg-[#F8FAFC]",
        renderId: "render-84297ac4",
        as: "section",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 max-w-5xl mx-auto",
          renderId: "render-9bf8e7a9",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 text-center mb-10",
            renderId: "render-300e6021",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-2479205301 text-[24px] md:text-[32px] font-normal tracking-tight text-[#0F172A]",
              renderId: "render-62b35341",
              as: "h2",
              children: "Indexed and Included in the Database of"
            })
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 border border-[#E2E8F0] rounded-[10px] bg-white p-6 md:p-10 flex items-center justify-center",
            renderId: "render-74a5473c",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: "/images/indexed-database-logos.png?v=4",
              alt: "Indexed and included database logos",
              className: "jsx-2479205301 w-full max-w-4xl h-auto object-contain",
              renderId: "render-e041ea9b",
              as: "img"
            })
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "jsx-2479205301 px-6 md:px-16 py-24 bg-[#0F172A]",
        renderId: "render-dc0d9756",
        as: "section",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-2479205301 max-w-4xl mx-auto text-center",
          renderId: "render-94959521",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 text-[28px] md:text-[40px] font-normal tracking-tight text-white mb-4",
            renderId: "render-3cb21b71",
            as: "h2",
            children: "Ready to get started?"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-2479205301 text-slate-300 mb-10 text-[16px] md:text-[18px] max-w-2xl mx-auto",
            renderId: "render-70ec5cff",
            as: "p",
            children: "Chat with our committee team on WhatsApp for instant support and personalized guidance."
          }), /* @__PURE__ */ jsxs(Button, {
            onClick: () => handleWhatsApp(),
            className: "bg-emerald-600 hover:bg-emerald-700 border-none px-12 py-5 rounded-full text-lg shadow-xl inline-flex",
            children: [/* @__PURE__ */ jsx(MessageCircle, {
              size: 24
            }), "Chat on WhatsApp Now"]
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(_JSXStyle, {
      id: "2479205301",
      children: ["@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');", ".font-instrument-sans{font-family:'Instrument Sans',sans-serif;}", "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", "::-webkit-scrollbar{width:8px;}", "::-webkit-scrollbar-track{background:#F8FAFC;}", "::-webkit-scrollbar-thumb{background:#E2E8F0;border-radius:4px;}", "::-webkit-scrollbar-thumb:hover{background:#64748B;}"]
    })]
  });
}

const page$1 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ConferenceLandingPage, {
      ...props
    })
  });
});

const route1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$1
}, Symbol.toStringTag, { value: 'Module' }));

const isDev = process.env.NEXT_PUBLIC_CREATE_ENV === "DEVELOPMENT";
const PROVIDER_LABELS = {
  google: "Google",
  facebook: "Facebook",
  twitter: "Twitter / X",
  apple: "Apple"
};
function SocialDevShimPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isDev) {
      navigate("/");
    }
  }, [navigate]);
  if (!isDev) {
    return null;
  }
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const provider = params.get("provider") || "google";
  const callbackUrl = params.get("callbackUrl") || "/";
  const label = PROVIDER_LABELS[provider] || provider;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [missingSecrets, setMissingSecrets] = useState(null);
  useEffect(() => {
    fetch(`/api/__create/check-social-secrets?provider=${encodeURIComponent(provider)}`).then((r) => r.json()).then((data) => setMissingSecrets(data.missing || [])).catch((err) => {
      console.error("Failed to check social secrets:", err);
    });
  }, [provider]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signIn("dev-social", {
        email,
        name,
        provider,
        callbackUrl
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-in failed. Please try again.");
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "min-h-screen flex items-center justify-center font-sans bg-gray-100",
    renderId: "render-8bb7ed1a",
    as: "div",
    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "bg-white rounded-xl p-8 w-full max-w-[400px] shadow-md",
      renderId: "render-6d1357c7",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-amber-50 border border-amber-400 rounded-lg p-3 mb-4 text-[13px] text-amber-800",
        renderId: "render-5cadfe60",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-a793c065",
          as: "strong",
          children: "Development Mode"
        }), " — This is a simulated", " ", label, " sign-in. In production, users will see the real", " ", label, " OAuth screen."]
      }), error && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-red-50 border border-red-400 rounded-lg p-3 mb-4 text-[13px] text-red-900",
        renderId: "render-b74e25ae",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-24c07cfe",
          as: "strong",
          children: "Sign-in error"
        }), " — ", error]
      }), missingSecrets && missingSecrets.length > 0 && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-red-50 border border-red-400 rounded-lg p-3 mb-4 text-[13px] text-red-900",
        renderId: "render-df06f05d",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-2ecc3ff8",
          as: "strong",
          children: "Missing secrets"
        }), " — ", label, " sign-in won't work in production until you add these secrets to your project:", " ", missingSecrets.map((s) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "bg-red-200 px-1 rounded text-[12px]",
          renderId: "render-cb411c35",
          as: "code",
          children: s
        }, s))]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "mt-0 mb-6 text-xl font-semibold",
        renderId: "render-54c0460d",
        as: "h2",
        children: ["Sign in with ", label]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        onSubmit: handleSubmit,
        renderId: "render-f08da751",
        as: "form",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "block mb-4",
          renderId: "render-86b357a6",
          as: "label",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "block text-sm font-medium mb-1.5",
            renderId: "render-62b6d78b",
            as: "span",
            children: "Email"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            type: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "test@example.com",
            className: "w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm",
            renderId: "render-157359a5",
            as: "input"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "block mb-6",
          renderId: "render-2cdef9cf",
          as: "label",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "block text-sm font-medium mb-1.5",
            renderId: "render-d4aa6279",
            as: "span",
            children: ["Display Name", " ", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-gray-400",
              renderId: "render-d698b094",
              as: "span",
              children: "(optional)"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            type: "text",
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: "Test User",
            className: "w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm",
            renderId: "render-8f524bc0",
            as: "input"
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          type: "submit",
          disabled: loading,
          className: "w-full py-2.5 rounded-lg border-none text-white text-sm font-medium bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-default cursor-pointer",
          renderId: "render-25b81000",
          as: "button",
          children: loading ? "Signing in..." : `Continue as ${label} user`
        })]
      })]
    })
  });
}

const page = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SocialDevShimPage, {
      ...props
    })
  });
});

const route2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page
}, Symbol.toStringTag, { value: 'Module' }));

async function loader({
  params
}) {
  const matches = await fg("src/**/page.{js,jsx,ts,tsx}");
  return {
    path: `/${params["*"]}`,
    pages: matches.sort((a, b) => a.length - b.length).map(match => {
      const url = match.replace("src/app", "").replace(/\/page\.(js|jsx|ts|tsx)$/, "") || "/";
      const path = url.replaceAll("[", "").replaceAll("]", "");
      const displayPath = path === "/" ? "Homepage" : path;
      return {
        url,
        path: displayPath
      };
    })
  };
}
const notFound = UNSAFE_withComponentProps(function CreateDefaultNotFoundPage({
  loaderData
}) {
  const [siteMap, setSitemap] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined" && window.parent && window.parent !== window) {
      const handler = event => {
        if (event.data.type === "sandbox:sitemap") {
          window.removeEventListener("message", handler);
          setSitemap(event.data.sitemap);
        }
      };
      window.parent.postMessage({
        type: "sandbox:sitemap"
      }, "*");
      window.addEventListener("message", handler);
      return () => {
        window.removeEventListener("message", handler);
      };
    }
  }, []);
  const missingPath = loaderData.path.replace(/^\//, "");
  const existingRoutes = loaderData.pages.map(page => ({
    path: page.path,
    url: page.url
  }));
  const handleBack = () => {
    navigate("/");
  };
  const handleSearch = value => {
    if (!siteMap) {
      const path = `/${value}`;
      navigate(path);
    } else {
      navigate(value);
    }
  };
  const handleCreatePage = useCallback(() => {
    window.parent.postMessage({
      type: "sandbox:web:create",
      path: missingPath,
      view: "web"
    }, "*");
  }, [missingPath]);
  return /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
    className: "flex sm:w-full w-screen sm:min-w-[850px] flex-col",
    renderId: "render-2d7fb1f6",
    as: "div",
    children: [/* @__PURE__ */jsxs(CreatePolymorphicComponent, {
      className: "flex w-full items-center gap-2 p-5",
      renderId: "render-4b368828",
      as: "div",
      children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
        type: "button",
        onClick: handleBack,
        className: "flex items-center justify-center w-10 h-10 rounded-md",
        renderId: "render-29788fd5",
        as: "button",
        children: /* @__PURE__ */jsxs("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "Back",
          role: "img",
          children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
            d: "M8.5957 2.65435L2.25005 9L8.5957 15.3457",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-3f6a2dd2",
            as: "path"
          }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            d: "M2.25007 9L15.75 9",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-f5dd7448",
            as: "path"
          })]
        })
      }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
        className: "flex flex-row divide-x divide-gray-200 rounded-[8px] h-8 w-[300px] border border-gray-200 bg-gray-50 text-gray-500",
        renderId: "render-cda9ecb1",
        as: "div",
        children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center px-[14px] py-[5px]",
          renderId: "render-9ae631da",
          as: "div",
          children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            renderId: "render-4cc4a2f4",
            as: "span",
            children: "/"
          })
        }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center min-w-0",
          renderId: "render-e595b81f",
          as: "div",
          children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "border-0 bg-transparent px-3 py-2 focus:outline-none truncate max-w-[300px]",
            style: {
              minWidth: 0
            },
            title: missingPath,
            renderId: "render-d65f3af1",
            as: "p",
            children: missingPath
          })
        })]
      })]
    }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
      className: "flex flex-grow flex-col items-center justify-center pt-[100px] text-center gap-[20px]",
      renderId: "render-bdbf0394",
      as: "div",
      children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "text-4xl font-medium text-gray-900 px-2",
        renderId: "render-6b5a460a",
        as: "h1",
        children: "Uh-oh! This page doesn't exist (yet)."
      }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
        className: "pt-4 pb-12 px-2 text-gray-500",
        renderId: "render-36b5a672",
        as: "p",
        children: ['Looks like "', /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "font-bold",
          renderId: "render-64816105",
          as: "span",
          children: ["/", missingPath]
        }), `" isn't part of your project. But no worries, you've got options!`]
      }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "px-[20px] w-full",
        renderId: "render-6f41c46c",
        as: "div",
        children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "flex flex-row justify-center items-center w-full max-w-[800px] mx-auto border border-gray-200 rounded-lg p-[20px] mb-[40px] gap-[20px]",
          renderId: "render-f21905c8",
          as: "div",
          children: [/* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col gap-[5px] items-start self-start w-1/2",
            renderId: "render-de926a8b",
            as: "div",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "text-sm text-black text-left",
              renderId: "render-fcdb9a37",
              as: "p",
              children: "Build it from scratch"
            }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
              className: "text-sm text-gray-500 text-left",
              renderId: "render-2738c01c",
              as: "p",
              children: ['Create a new page to live at "', /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
                renderId: "render-deeee337",
                as: "span",
                children: ["/", missingPath]
              }), '"']
            })]
          }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "flex flex-row items-center justify-end w-1/2",
            renderId: "render-c8771063",
            as: "div",
            children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              type: "button",
              className: "bg-black text-white px-[10px] py-[5px] rounded-md",
              onClick: () => handleCreatePage(),
              renderId: "render-c0c58260",
              as: "button",
              children: "Create Page"
            })
          })]
        })
      }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "pb-20 lg:pb-[80px]",
        renderId: "render-934d7ac3",
        as: "div",
        children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center text-gray-500",
          renderId: "render-8d6c5876",
          as: "p",
          children: "Check out all your project's routes here ↓"
        })
      }), siteMap ? /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "flex flex-col justify-center items-center w-full px-[50px]",
        renderId: "render-4094cacd",
        as: "div",
        children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "flex flex-col justify-between items-center w-full max-w-[600px] gap-[10px]",
          renderId: "render-017680c0",
          as: "div",
          children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "text-sm text-gray-300 pb-[10px] self-start p-4",
            renderId: "render-cd91a1a3",
            as: "p",
            children: "PAGES"
          }), siteMap.webPages?.map(route => /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            type: "button",
            onClick: () => handleSearch(route.cleanRoute || ""),
            className: "flex flex-row justify-between text-center items-center p-4 rounded-lg bg-white shadow-sm w-full hover:bg-gray-50",
            renderId: "render-fb85ca6a",
            as: "button",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "font-medium text-gray-900",
              renderId: "render-1c64eaee",
              as: "h3",
              children: route.name
            }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "text-sm text-gray-400",
              renderId: "render-75705ab4",
              as: "p",
              children: route.cleanRoute
            })]
          }, route.id))]
        })
      }) : /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "flex flex-wrap gap-3 w-full max-w-[80rem] mx-auto pb-5 px-2",
        renderId: "render-555d9162",
        as: "div",
        children: existingRoutes.map(route => /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex flex-col flex-grow basis-full sm:basis-[calc(50%-0.375rem)] xl:basis-[calc(33.333%-0.5rem)]",
          renderId: "render-e74fce3f",
          as: "div",
          children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            className: "w-full flex-1 flex flex-col items-center ",
            renderId: "render-24541b65",
            as: "div",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64 overflow-hidden rounded-[8px] border border-comeback-gray-75 transition-all group-hover:shadow-md",
              renderId: "render-fa340eb0",
              as: "div",
              children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
                type: "button",
                onClick: () => handleSearch(route.url.replace(/^\//, "")),
                className: "h-full w-full rounded-[8px] bg-gray-50 bg-cover",
                renderId: "render-42bc3957",
                as: "button"
              })
            }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "pt-3 text-left text-gray-500 w-full max-w-[350px]",
              renderId: "render-e9e2cfa5",
              as: "p",
              children: route.path
            })]
          })
        }, route.path))
      })]
    })]
  });
});

const route3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: notFound,
  loader
}, Symbol.toStringTag, { value: 'Module' }));

const serverManifest = {'entry':{'module':'/assets/entry.client-BCYBeOFB.js','imports':['/assets/chunk-OE4NN4TA-DXCUBbyB.js','/assets/index-D7AetLs4.js'],'css':[]},'routes':{'root':{'id':'root','parentId':undefined,'path':'','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/root-DNIetcUE.js','imports':['/assets/chunk-OE4NN4TA-DXCUBbyB.js','/assets/index-D7AetLs4.js','/assets/PolymorphicComponent-bne2PHFm.js','/assets/react-BHzW20kU.js','/assets/index-CG64Auz7.js'],'css':['/assets/root-D6DiebrL.css'],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'page':{'id':'page','parentId':'root','path':undefined,'index':true,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-Cuwa3EjJ.js','imports':['/assets/PolymorphicComponent-bne2PHFm.js','/assets/chunk-OE4NN4TA-DXCUBbyB.js','/assets/layout-ukJd8m7D.js','/assets/index-CG64Auz7.js','/assets/index-D7AetLs4.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'__create/social-dev-shim/page':{'id':'__create/social-dev-shim/page','parentId':'root','path':'__create/social-dev-shim','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-CETcf3gP.js','imports':['/assets/PolymorphicComponent-bne2PHFm.js','/assets/chunk-OE4NN4TA-DXCUBbyB.js','/assets/layout-ukJd8m7D.js','/assets/react-BHzW20kU.js','/assets/index-CG64Auz7.js','/assets/index-D7AetLs4.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'__create/not-found':{'id':'__create/not-found','parentId':'root','path':'*?','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/not-found-FA0OuM7h.js','imports':['/assets/PolymorphicComponent-bne2PHFm.js','/assets/chunk-OE4NN4TA-DXCUBbyB.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined}},'url':'/assets/manifest-75fc9317.js','version':'75fc9317','sri':undefined};

const assetsBuildDirectory = "build/client";
      const basename = "/";
      const future = {"unstable_optimizeDeps":false,"unstable_passThroughRequests":false,"unstable_subResourceIntegrity":false,"unstable_trailingSlashAwareDataRequests":false,"unstable_previewServerPrerendering":false,"v8_middleware":false,"v8_splitRouteModules":false,"v8_viteEnvironmentApi":false};
      const ssr = true;
      const isSpaMode = false;
      const prerender = ["/*?"];
      const routeDiscovery = {"mode":"lazy","manifestPath":"/__manifest"};
      const publicPath = "/";
      const entry = { module: entryServer };
      const routes = {
        "root": {
          id: "root",
          parentId: undefined,
          path: "",
          index: undefined,
          caseSensitive: undefined,
          module: route0
        },
  "page": {
          id: "page",
          parentId: "root",
          path: undefined,
          index: true,
          caseSensitive: undefined,
          module: route1
        },
  "__create/social-dev-shim/page": {
          id: "__create/social-dev-shim/page",
          parentId: "root",
          path: "__create/social-dev-shim",
          index: undefined,
          caseSensitive: undefined,
          module: route2
        },
  "__create/not-found": {
          id: "__create/not-found",
          parentId: "root",
          path: "*?",
          index: undefined,
          caseSensitive: undefined,
          module: route3
        }
      };
      
      const allowedActionOrigins = false;

export { allowedActionOrigins, serverManifest as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
