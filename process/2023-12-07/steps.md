# All the steps to builld the thing

## Form

- More paper sketches
- Decide on final form
- 3D Modeling (Fusion 360, maybe also Rhino for room setup)
  - Floating objects
  - Cable winding mechanism
  - Cable routing / pulleys
  - Interactive table / pillar (pencil & metal plate interaction)
  - Pencil cable attachement

## Materials

- Plastic 3D prints (cable winding mechanism, floating neopixel structure)
- Wood / metal / plexiglas for interactive table structure (tbd)
- Metal or carbon plate for interactive plate on table
- Plastic foil / paper for floating objects (tbd)
- Fasteners for electronics and wiring

## Electronics

**Arduinos**

- Arduino 1 (metal plates sensor)
- Arduino 2 (stepping motors controller)

**Inputs**

- Metal plate resistance measurement (only arduino and electronics needed)
- Distance sensor or camera (backup if position measurement over resistance is not accurate enough)

**Data processing / Sound synthesis**

- Windows or Mac computer for TouchDesigner & Max Msp

**Outputs**

- 3 stepping motors for the 3 floating objects (Nema Motors & Motor Drivers)
- Neopixels inside floating objects
- 3 speakers (preferred Genelec)

**Code**

- Arduino code for resistance & position measurement
- Arduino code for motor & neopixel control
- TouchDesigner sketch for kinetic and light interaction
- Max Msp patch for sound processing

**Power supply**

- AC to DC converters for arduinos
- Computer power supply

**Wiring**

- Long, thin and flexible power / data cables on which floating objects with neopixels are attached to
- Long enough USB cables for connections between arduino and computer
- electric power cables

**API**

- [optional] maybe sound synthesis AI if not done with classical generative methods
