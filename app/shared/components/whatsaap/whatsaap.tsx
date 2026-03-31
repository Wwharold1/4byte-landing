"use client";

import { useState } from "react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const phone = "51944148254";
  const advisor = "Aldair Gonzales";
  const role = "Ventas";
  const message =
    "Hola, quisiera más información sobre sus servicios.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
        {open && (
          <div className="w-[340px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] ring-1 ring-black/5">
            <div className="bg-[#25D366] px-6 py-5 text-white">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-7 w-7 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.23c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.32-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13.18 1.88 2.87 4.55 4.02.64.28 1.14.45 1.53.58.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.51-.31Z" />
                    <path d="M16.03 3C8.84 3 3 8.73 3 15.8c0 2.26.6 4.47 1.74 6.41L3 29l6.99-1.81a13.2 13.2 0 0 0 6.04 1.45H16c7.19 0 13.03-5.73 13.03-12.8C29.03 8.73 23.19 3 16.03 3Zm0 23.45h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.15 1.07 1.11-4.01-.26-.41a10.6 10.6 0 0 1-1.65-5.54c0-5.9 4.9-10.7 10.92-10.7 2.92 0 5.66 1.12 7.71 3.13a10.5 10.5 0 0 1 3.2 7.57c0 5.9-4.9 10.7-10.9 10.7Z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[1.55rem] font-semibold leading-tight">
                    Iniciar una conversación
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/95">
                    ¡Hola! Haz clic en uno de nuestros miembros a continuación
                    para chatear en WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f6f7f9] px-6 py-4 text-sm text-slate-500">
              El equipo suele responder en unos minutos.
            </div>

            <div className="bg-white p-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-4 transition hover:border-[#25D366]/40 hover:bg-[#f4fff8]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e9f9ef]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-9 w-9 fill-[#25D366]"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.23c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.32-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13.18 1.88 2.87 4.55 4.02.64.28 1.14.45 1.53.58.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.51-.31Z" />
                    <path d="M16.03 3C8.84 3 3 8.73 3 15.8c0 2.26.6 4.47 1.74 6.41L3 29l6.99-1.81a13.2 13.2 0 0 0 6.04 1.45H16c7.19 0 13.03-5.73 13.03-12.8C29.03 8.73 23.19 3 16.03 3Zm0 23.45h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.15 1.07 1.11-4.01-.26-.41a10.6 10.6 0 0 1-1.65-5.54c0-5.9 4.9-10.7 10.92-10.7 2.92 0 5.66 1.12 7.71 3.13a10.5 10.5 0 0 1 3.2 7.57c0 5.9-4.9 10.7-10.9 10.7Z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="text-lg font-medium text-slate-700">
                    {advisor}
                  </div>
                  <div className="text-sm text-slate-400">{role}</div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ecfdf3]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-5 w-5 fill-[#25D366]"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.23c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.32-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13.18 1.88 2.87 4.55 4.02.64.28 1.14.45 1.53.58.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.51-.31Z" />
                    <path d="M16.03 3C8.84 3 3 8.73 3 15.8c0 2.26.6 4.47 1.74 6.41L3 29l6.99-1.81a13.2 13.2 0 0 0 6.04 1.45H16c7.19 0 13.03-5.73 13.03-12.8C29.03 8.73 23.19 3 16.03 3Zm0 23.45h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.15 1.07 1.11-4.01-.26-.41a10.6 10.6 0 0 1-1.65-5.54c0-5.9 4.9-10.7 10.92-10.7 2.92 0 5.66 1.12 7.71 3.13a10.5 10.5 0 0 1 3.2 7.57c0 5.9-4.9 10.7-10.9 10.7Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Cerrar WhatsApp" : "Abrir WhatsApp"}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_14px_34px_rgba(37,211,102,0.35)] transition hover:scale-105"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 w-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-8 w-8 fill-white"
              aria-hidden="true"
            >
              <path d="M19.11 17.23c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.32-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13.18 1.88 2.87 4.55 4.02.64.28 1.14.45 1.53.58.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.51-.31Z" />
              <path d="M16.03 3C8.84 3 3 8.73 3 15.8c0 2.26.6 4.47 1.74 6.41L3 29l6.99-1.81a13.2 13.2 0 0 0 6.04 1.45H16c7.19 0 13.03-5.73 13.03-12.8C29.03 8.73 23.19 3 16.03 3Zm0 23.45h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.15 1.07 1.11-4.01-.26-.41a10.6 10.6 0 0 1-1.65-5.54c0-5.9 4.9-10.7 10.92-10.7 2.92 0 5.66 1.12 7.71 3.13a10.5 10.5 0 0 1 3.2 7.57c0 5.9-4.9 10.7-10.9 10.7Z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}