# Inert Gas System — 3D Training Simulator

An offline, single-file 3D training simulator for the **inert gas system (IGS) of a crude oil tanker**.
Everything — the WebGL scene, the process model and the whole training programme — lives in one HTML
file, so it runs on any modern browser with no install, no build step and no network connection.

Based on SOLAS II-2 Reg. 4.5.5, FSS Code Chapter 15 and ISGOTT 6.

## Two editions

| File | Language | Plant data | Notes |
| --- | --- | --- | --- |
| `IGS-3D-Training-Simulator.html` | English | Ship-specific values (see *Plant data modelled*) | Landing page |
| `IGS-3D-Egitim-Simulatoru.html` | Türkçe | Generic training values (2 × 8,000 m³/h blowers, P/V +1400/−350, breaker +2000/−700, 3 × 4,200 m³/h pumps) | **v3** — carries the newest features listed under *New in v3* |

The two editions share the same engine and 3D scene; the English edition will pick up the v3 features
in a follow-up.

## Running it

**In the browser:**

- English: <https://mrhakan.github.io/inert-gas-simulator/>
- Türkçe (v3): <https://mrhakan.github.io/inert-gas-simulator/tr/>

Or open the HTML file locally in Chrome, Edge or Firefox. That is all.

If you prefer to serve it over HTTP (for example to open it from another device on the same network):

```bash
node _srv.js
```

then browse to <http://localhost:8733> (English) or <http://localhost:8733/tr> (Türkçe).

## What is in it

**9 modules, 41 lessons** (English) · **9 modül, 45 ders** (Türkçe v3)

| Module | Content |
| --- | --- |
| Fundamentals | Fire triangle, flammability diagram, inert gas sources, regulatory framework |
| System components | End-to-end 3D tour, scrubber, blowers, deck water seal, P/V devices, instrumentation |
| Start-up procedure | Pre-start checks, step-by-step start-up, normal shutdown · v3: interlocked cold start you perform yourself, IGG operation |
| Cargo operations | Inerting (dilution vs. displacement), loading, discharge, topping-up, COW · v3: day/night thermal breathing cycle |
| Purging and gas freeing | Purging to HC < 2%, gas freeing, enclosed space entry · v3: entry permit and gas-free certificate |
| Alarms, faults and safety | Alarm and shutdown list, three fault scenarios, hazards, IG quality and cargo contamination |
| Cargo pumps and steam | Steam-turbine cargo pumps, the pump → steam → boiler → IG quality chain |
| Scenarios | Free operation plus 9 abnormal situations · v3: 10th scenario — sour crude / H₂S |
| Assessment | Quick reference card and a 28-question test (30 questions in v3) |

**Simulation** — an O₂ mixing model (dilution and displacement), a pressure balance based on the
connected gas volume, tank atmospheres per tank, the boiler-load / flue-gas-O₂ relationship, the steam
system and the cargo pumps, alarms, automatic shutdowns and a trend recorder.

**Free operation control station** — valves, blowers, cargo pumps, steam dump, the branch valve of each
of the 14 tanks, operating modes, preset states and injectable faults, so the plant can be run
without following a lesson.

## New in v3 (Turkish edition)

1. **Interlocks and start-up sequence** — blower start is blocked without scrubber water, water seal
   level or a gas source; the deck isolating valve stays locked until the O₂ analyser is warmed up,
   calibrated and reading ≤ 5%; a tank with an active entry permit cannot have its branch valve opened.
   The instructor can bypass the interlocks — every bypass costs points.
2. **Per-tank pressure and thermal breathing** — tanks with an open branch valve equalise with the deck
   main; an isolated tank carries its own pressure and is protected only by its own P/V valve. A day/night
   temperature cycle (≈ 34 mmWG per °C) raises the pressure in the afternoon and lets it fall at night,
   so topping-up becomes a real, observed need.
3. **Inert gas generator (IGG)** — an independent combustion unit for port operation with the boilers
   shut down: purge → ignition → load, its own blower and cooling, flame-failure and cooling-water trips,
   a 3D model in both scenes and a warning when the blowers are run with the uptake closed.
4. **Alarm management** — audible horn for critical alarms, ACK / silence, unacknowledged-alarm
   blinking and an alarm history (raised / acknowledged / cleared times).
5. **H₂S and enclosed space entry** — sour crude releases H₂S into the ullage space; a deck H₂S alarm
   during venting; an entry permit form with live measurements (O₂ 20.9%, HC < 1% LEL, H₂S < 5 ppm,
   isolation, portable ventilation), a supervisor checklist and a gas-free certificate. The permit is
   voided automatically if the atmosphere deteriorates or the branch valve is opened.
6. **Session scoring, IG log book and report** — free operation is scored against 13 rules (P/V lift,
   vacuum, cargo operation in a non-inert tank, interlock bypass, unacknowledged alarm, permit
   violation…); an hourly IG log book is kept and a printable / copyable report is produced.
7. **Persistent progress** — completed lessons, best test score, view preferences and session results
   are kept in the browser (localStorage) and can be reset from the lesson panel.

## Plant data modelled (English edition)

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

Progress is kept in the page only in the English edition; the Turkish v3 edition stores it in the browser.

## Publishing

The pages at <https://mrhakan.github.io/inert-gas-simulator/> (English) and
<https://mrhakan.github.io/inert-gas-simulator/tr/> (Türkçe) are published by
`.github/workflows/pages.yml` on every push to `main` (and on demand from the Actions tab).
The workflow copies the simulator files into place and uploads them as the Pages artifact — nothing is
built, so the published pages are byte-for-byte the files in this repository.

The first run needs *Settings → Pages → Source* set to **GitHub Actions**; the workflow tries to set
this itself, so in most cases there is nothing to do.

## Note

This simulator is a training aid. On board, the ship's own IGS operating manual, the checklists and the
company procedures always govern.
