# Inert Gas System — 3D Training Simulator

An offline, single-file 3D training simulator for the **inert gas system (IGS) of a crude oil tanker**.
Everything — the WebGL scene, the process model and the whole training programme — lives in one HTML
file, so it runs on any modern browser with no install, no build step and no network connection.

Based on SOLAS II-2 Reg. 4.5.5, FSS Code Chapter 15 and ISGOTT 6.

## Running it

**In the browser:** <https://mrhakan.github.io/inert-gas-simulator/>

Or open `IGS-3D-Training-Simulator.html` locally in Chrome, Edge or Firefox. That is all.

If you prefer to serve it over HTTP (for example to open it from another device on the same network):

```bash
node _srv.js
```

then browse to <http://localhost:8733>.

## What is in it

**9 modules, 41 lessons**

| Module | Content |
| --- | --- |
| Fundamentals | Fire triangle, flammability diagram, inert gas sources, regulatory framework |
| System components | End-to-end 3D tour, scrubber, blowers, deck water seal, P/V devices, instrumentation |
| Start-up procedure | Pre-start checks, step-by-step start-up, normal shutdown |
| Cargo operations | Inerting (dilution vs. displacement), loading, discharge, topping-up, COW |
| Purging and gas freeing | Purging to HC < 2%, gas freeing, enclosed space entry |
| Alarms, faults and safety | Alarm and shutdown list, three fault scenarios, hazards, IG quality and cargo contamination |
| Cargo pumps and steam | Steam-turbine cargo pumps, the pump → steam → boiler → IG quality chain |
| Scenarios | Free operation plus 9 abnormal situations |
| Assessment | Quick reference card and a 28-question test |

**Simulation** — an O₂ mixing model (dilution and displacement), a pressure balance based on the
connected gas volume, tank atmospheres per tank, the boiler-load / flue-gas-O₂ relationship, the steam
system and the cargo pumps, alarms, automatic shutdowns and a trend recorder.

**Free operation control station** — valves, blowers, cargo pumps, steam dump, the branch valve of each
of the 14 tanks, operating modes, preset states and 10 injectable faults, so the plant can be run
without following a lesson.

## Plant data modelled

| Item | Value |
| --- | --- |
| Nominal capacity | 13,150 m³/h, min. 10 kPa at the main control valve |
| Inert gas blowers | 2 × 13,150 m³/h, 18.63 kPa (1900 mmWG) static, 112 kW |
| Scrubber | Cooling water 210 m³/h at 0.12 MPa · SO₂ removal ≥ 90% · outlet 3-5 °C above sea water |
| Flue gas inlet | Max. 400 °C, atmospheric |
| Deck water seal | Sealing water 2.4 m³/h · steam heating ~50 kg/h · low level alarm 50 mm below N.W.L. |
| Deck main working band | 2.0 – 15.0 kPa (200 – 1530 mmWG) |
| Pressure alarms | LOW 2.0 kPa · LOW LOW 1.0 kPa (cargo oil pumps trip after 2 min) · HIGH 15.0 kPa |
| P/V breaker | +18.53 / −6.18 kPa (+1890 / −630 mmWG) |
| Tank P/V valve | +1700 / −350 mmWG |
| Oxygen | Supply HIGH 5% · HIGH-HIGH 8% (supply to deck cut automatically) |
| IG temperature | Normal 5-60 °C, alarm 65 °C |
| Cargo pumps | 3 × 3,500 m³/h, steam turbine driven, plus a 260 m³/h stripping pump |

## Controls

| Action | Control |
| --- | --- |
| Rotate | Drag with the left button |
| Pan | Right button, or Shift + drag |
| Zoom | Mouse wheel |
| Equipment information | Click a label or the model |

Keyboard: `Space` play/pause · `←` `→` previous/next step · `L` labels · `C` cutaway · `F` gas flow ·
`W` wireframe · `S` sea · `G` schematic/ship view · `R` reset camera · `Esc` close window.

Progress is kept in the page only; reloading starts a fresh session.

## Publishing

The page at <https://mrhakan.github.io/inert-gas-simulator/> is published by
`.github/workflows/pages.yml` on every push to `main` (and on demand from the Actions tab).
The workflow copies the simulator to `index.html` and uploads it as the Pages artifact — nothing is
built, so the published page is byte-for-byte the file in this repository.

The first run needs *Settings → Pages → Source* set to **GitHub Actions**; the workflow tries to set
this itself, so in most cases there is nothing to do.

## Note

This simulator is a training aid. On board, the ship's own IGS operating manual, the checklists and the
company procedures always govern.
