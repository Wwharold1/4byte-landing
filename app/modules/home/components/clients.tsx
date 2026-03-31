"use client";

import Image from "next/image";

const clients = [
  { name: "Comsatel", logo: "/comsatel.svg", width: 1040, height: 360 },
  { name: "Smart Tracing", logo: "/smart-tracing.png", width: 1040, height: 360 },
  { name: "Gloria", logo: "/smart-tracing.png", width: 1040, height: 360 },
];

export default function ClientsCarousel() {
  const loopedClients = [...clients, ...clients, ...clients];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Ellos confían en nosotros
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Empresas que han confiado en nuestro talento y nuestras soluciones.
        </p>
      </div>

      <div className="relative overflow-hidden py-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        <div className="clients-track items-center gap-32">
          {loopedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex h-[120px] min-w-[150px] items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-[70px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}