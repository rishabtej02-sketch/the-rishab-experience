"use client";
import dynamic from "next/dynamic";
import { useState, type PointerEvent } from "react";
const Scene = dynamic(() => import("./ConnectionScene"), {
  ssr: false,
  loading: () => <span className="scene-loading">Connecting the dots…</span>,
});

export function Connection() {
  const [active, setActive] = useState(false);
  const [angle, setAngle] = useState(0);
  function move(e: PointerEvent<HTMLDivElement>) {
    if (
      e.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--rx",
      `${(e.clientY - rect.top - rect.height / 2) / 35}deg`,
    );
    e.currentTarget.style.setProperty(
      "--ry",
      `${(e.clientX - rect.left - rect.width / 2) / 25}deg`,
    );
  }
  return (
    <div
      className="connection-wrap"
      onPointerMove={move}
      onPointerLeave={(e) => {
        e.currentTarget.style.setProperty("--rx", "0deg");
        e.currentTarget.style.setProperty("--ry", "0deg");
      }}
    >
      <div className="hero-art">
        <div className="orbit-track" aria-hidden="true" />
        <span className="art-label label-strategy">STRATEGY</span>
        <span className="art-label label-tech">TECHNOLOGY</span>
        <span className="art-label label-marketing">MARKETING</span>
        <span className="art-label label-execution">EXECUTION</span>
        <div className="connection-object" aria-hidden="true">
          {active ? (
            <Scene angle={angle} />
          ) : (
            <svg viewBox="0 0 500 460" className="knot" role="presentation">
              <defs>
                <linearGradient id="knot-lime" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#efffbf" />
                  <stop offset=".45" stopColor="#d4ff51" />
                  <stop offset="1" stopColor="#779a24" />
                </linearGradient>
                <linearGradient id="knot-dark">
                  <stop stopColor="#111318" />
                  <stop offset=".5" stopColor="#555b54" />
                  <stop offset="1" stopColor="#141712" />
                </linearGradient>
              </defs>
              <ellipse
                cx="250"
                cy="399"
                rx="116"
                ry="12"
                fill="#111318"
                opacity=".07"
              />
              <g
                fill="none"
                strokeWidth="58"
                strokeLinecap="round"
                transform="translate(0 -10)"
              >
                <path
                  d="M250 125 C370 45 446 146 374 247 C304 349 178 410 133 316 C88 221 129 102 250 125Z"
                  stroke="url(#knot-dark)"
                />
                <path
                  d="M250 125 C130 45 54 146 126 247 C196 349 322 410 367 316 C412 221 371 102 250 125Z"
                  stroke="url(#knot-lime)"
                />
                <path
                  d="M250 125 C303 90 346 90 374 112"
                  stroke="url(#knot-dark)"
                />
              </g>
              <path
                d="M151 124 C98 174 164 269 217 306"
                stroke="#f3ffd0"
                strokeWidth="3"
                fill="none"
                opacity=".6"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="object-controls">
        {!active ? (
          <button className="text-button" onClick={() => setActive(true)}>
            <span className="crosshair" aria-hidden="true">
              ✳
            </span>{" "}
            Explore the connection in 3D
          </button>
        ) : (
          <>
            <button
              className="text-button"
              onClick={() => setAngle(angle + Math.PI / 3)}
            >
              Rotate the connection <span aria-hidden="true">↻</span>
            </button>
            <button className="text-button" onClick={() => setActive(false)}>
              Close 3D
            </button>
          </>
        )}
      </div>
    </div>
  );
}
