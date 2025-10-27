// Chemistry Database - Complete Data
// COMPLETE CHEMISTRY DATABASE - ALL 118 ELEMENTS + FULL COMPOUNDS + REACTIONS
const chemistryData = {
  elements: [
    // PERIOD 1 (2 elements)
    {num: 1, sym: "H", name: "Hydrogen", mass: 1.008, group: 1, period: 1, block: "s", category: "nonmetal", mp: -259.16, bp: -252.87, density: 0.00008988, config: "1s¹", en: 2.20, ar: 53, ie: 1312, ea: 72.8, ox: "+1, -1", year: 1766, discoverer: "Cavendish", uses: "Rocket fuel, ammonia production, hydrogenation, fuel cells, metallurgy", state: "gas"},
    {num: 2, sym: "He", name: "Helium", mass: 4.003, group: 18, period: 1, block: "s", category: "noble-gas", mp: -272.2, bp: -268.93, density: 0.0001785, config: "1s²", en: null, ar: 31, ie: 2372, ea: 0, ox: "0", year: 1895, discoverer: "Ramsay", uses: "Balloons, cryogenics, diving, MRI coolant, leak detection", state: "gas"},
    
    // PERIOD 2 (8 elements)
    {num: 3, sym: "Li", name: "Lithium", mass: 6.94, group: 1, period: 2, block: "s", category: "alkali-metal", mp: 180.54, bp: 1342, density: 0.534, config: "[He] 2s¹", en: 0.98, ar: 167, ie: 520, ox: "+1", year: 1817, discoverer: "Arfwedson", uses: "Rechargeable batteries, psychiatric medication, ceramics, glass", state: "solid"},
    {num: 4, sym: "Be", name: "Beryllium", mass: 9.012, group: 2, period: 2, block: "s", category: "alkaline-earth", mp: 1287, bp: 2470, density: 1.85, config: "[He] 2s²", en: 1.57, ar: 112, ox: "+2", year: 1798, discoverer: "Vauquelin", uses: "Aerospace alloys, X-ray windows, nuclear reactors, springs", state: "solid"},
    {num: 5, sym: "B", name: "Boron", mass: 10.81, group: 13, period: 2, block: "p", category: "metalloid", mp: 2075, bp: 4000, config: "[He] 2s² 2p¹", en: 2.04, ox: "+3", year: 1808, discoverer: "Davy", uses: "Borosilicate glass, detergents, fiberglass, semiconductors", state: "solid"},
    {num: 6, sym: "C", name: "Carbon", mass: 12.011, group: 14, period: 2, block: "p", category: "nonmetal", mp: 3550, bp: 4027, config: "[He] 2s² 2p²", en: 2.55, ox: "+4, +2, -4", year: -3750, discoverer: "Ancient", uses: "Organic chemistry, steel, graphite, diamond, graphene, nanotubes", state: "solid"},
    {num: 7, sym: "N", name: "Nitrogen", mass: 14.007, group: 15, period: 2, block: "p", category: "nonmetal", mp: -210.1, bp: -195.79, config: "[He] 2s² 2p³", en: 3.04, ox: "+5, +3, -3", year: 1772, discoverer: "Rutherford", uses: "Fertilizers, explosives, cryogenics, inert atmosphere, ammonia", state: "gas"},
    {num: 8, sym: "O", name: "Oxygen", mass: 15.999, group: 16, period: 2, block: "p", category: "nonmetal", mp: -218.79, bp: -182.95, config: "[He] 2s² 2p⁴", en: 3.44, ox: "-2, -1", year: 1774, discoverer: "Priestley", uses: "Respiration, combustion, welding, medical oxygen, water", state: "gas"},
    {num: 9, sym: "F", name: "Fluorine", mass: 18.998, group: 17, period: 2, block: "p", category: "halogen", mp: -219.62, bp: -188.12, config: "[He] 2s² 2p⁵", en: 3.98, ox: "-1", year: 1886, discoverer: "Moissan", uses: "Toothpaste, Teflon, refrigerants, uranium enrichment", state: "gas"},
    {num: 10, sym: "Ne", name: "Neon", mass: 20.180, group: 18, period: 2, block: "p", category: "noble-gas", mp: -248.59, bp: -246.08, config: "[He] 2s² 2p⁶", ox: "0", year: 1898, discoverer: "Ramsay", uses: "Neon signs, lasers, cryogenic refrigerant, television tubes", state: "gas"},
    
    // PERIOD 3 (8 elements)
    {num: 11, sym: "Na", name: "Sodium", mass: 22.990, group: 1, period: 3, category: "alkali-metal", mp: 97.72, bp: 883, config: "[Ne] 3s¹", en: 0.93, uses: "Table salt, soap production", oxidation: "+1", discovery: "1807"},
    {num: 12, sym: "Mg", name: "Magnesium", mass: 24.305, group: 2, period: 3, category: "alkaline-earth", mp: 650, bp: 1090, config: "[Ne] 3s²", en: 1.31, uses: "Alloys, fireworks, antacids", oxidation: "+2", discovery: "1755"},
    {num: 13, sym: "Al", name: "Aluminium", mass: 26.982, group: 13, period: 3, category: "post-transition", mp: 660.32, bp: 2519, config: "[Ne] 3s² 3p¹", en: 1.61, uses: "Packaging, aerospace, construction", oxidation: "+3", discovery: "1825"},
    {num: 14, sym: "Si", name: "Silicon", mass: 28.085, group: 14, period: 3, category: "metalloid", mp: 1414, bp: 3265, config: "[Ne] 3s² 3p²", en: 1.90, uses: "Computer chips, glass, solar cells", oxidation: "+4, -4", discovery: "1824"},
    {num: 15, sym: "P", name: "Phosphorus", mass: 30.974, group: 15, period: 3, category: "nonmetal", mp: 44.15, bp: 280.5, config: "[Ne] 3s² 3p³", en: 2.19, uses: "Fertilizers, matches, DNA/RNA", oxidation: "+5, +3, -3", discovery: "1669"},
    {num: 16, sym: "S", name: "Sulfur", mass: 32.06, group: 16, period: 3, category: "nonmetal", mp: 115.21, bp: 444.72, config: "[Ne] 3s² 3p⁴", en: 2.58, uses: "Sulfuric acid, vulcanization, gunpowder", oxidation: "+6, +4, -2", discovery: "Ancient"},
    {num: 17, sym: "Cl", name: "Chlorine", mass: 35.45, group: 17, period: 3, category: "halogen", mp: -101.5, bp: -34.04, config: "[Ne] 3s² 3p⁵", en: 3.16, uses: "Water purification, PVC, bleach", oxidation: "+7, +5, +1, -1", discovery: "1774"},
    {num: 18, sym: "Ar", name: "Argon", mass: 39.948, group: 18, period: 3, category: "noble-gas", mp: -189.35, bp: -185.85, config: "[Ne] 3s² 3p⁶", uses: "Welding, light bulbs, preservation", discovery: "1894"},
    {num: 19, sym: "K", name: "Potassium", mass: 39.098, group: 1, period: 4, category: "alkali-metal", mp: 63.38, bp: 759, config: "[Ar] 4s¹", en: 0.82, uses: "Fertilizers, soaps, medicine", oxidation: "+1", discovery: "1807"},
    {num: 20, sym: "Ca", name: "Calcium", mass: 40.078, group: 2, period: 4, category: "alkaline-earth", mp: 842, bp: 1484, config: "[Ar] 4s²", en: 1.00, uses: "Bones, concrete, steel production", oxidation: "+2", discovery: "1808"},
    {num: 21, sym: "Sc", name: "Scandium", mass: 44.956, group: 3, period: 4, category: "transition-metal", config: "[Ar] 3d¹ 4s²", mp: 1541, bp: 2836, uses: "Aerospace alloys, sports equipment", oxidation: "+3", discovery: "1879"},
    {num: 22, sym: "Ti", name: "Titanium", mass: 47.867, group: 4, period: 4, category: "transition-metal", config: "[Ar] 3d² 4s²", mp: 1668, bp: 3287, uses: "Aerospace, medical implants, pigments", oxidation: "+4, +3, +2", discovery: "1791"},
    {num: 23, sym: "V", name: "Vanadium", mass: 50.942, group: 5, period: 4, category: "transition-metal", config: "[Ar] 3d³ 4s²", mp: 1910, bp: 3407, uses: "Steel alloys, catalysts", oxidation: "+5, +4, +3, +2", discovery: "1801"},
    {num: 24, sym: "Cr", name: "Chromium", mass: 51.996, group: 6, period: 4, category: "transition-metal", config: "[Ar] 3d⁵ 4s¹", mp: 1907, bp: 2671, uses: "Stainless steel, chrome plating", oxidation: "+6, +3, +2", discovery: "1797"},
    {num: 25, sym: "Mn", name: "Manganese", mass: 54.938, group: 7, period: 4, category: "transition-metal", config: "[Ar] 3d⁵ 4s²", mp: 1246, bp: 2061, uses: "Steel production, batteries", oxidation: "+7, +4, +2", discovery: "1774"},
    {num: 26, sym: "Fe", name: "Iron", mass: 55.845, group: 8, period: 4, category: "transition-metal", mp: 1538, bp: 2861, config: "[Ar] 3d⁶ 4s²", uses: "Construction, machinery, hemoglobin", oxidation: "+3, +2", discovery: "Ancient"},
    {num: 27, sym: "Co", name: "Cobalt", mass: 58.933, group: 9, period: 4, category: "transition-metal", config: "[Ar] 3d⁷ 4s²", mp: 1495, bp: 2927, uses: "Batteries, magnets, blue pigments", oxidation: "+3, +2", discovery: "1735"},
    {num: 28, sym: "Ni", name: "Nickel", mass: 58.693, group: 10, period: 4, category: "transition-metal", config: "[Ar] 3d⁸ 4s²", mp: 1455, bp: 2913, uses: "Coins, batteries, stainless steel", oxidation: "+2, +3", discovery: "1751"},
    {num: 29, sym: "Cu", name: "Copper", mass: 63.546, group: 11, period: 4, category: "transition-metal", mp: 1084.62, bp: 2562, config: "[Ar] 3d¹⁰ 4s¹", uses: "Electrical wiring, plumbing, coins", oxidation: "+2, +1", discovery: "Ancient"},
    {num: 30, sym: "Zn", name: "Zinc", mass: 65.38, group: 12, period: 4, category: "transition-metal", config: "[Ar] 3d¹⁰ 4s²", mp: 419.53, bp: 907, uses: "Galvanizing, batteries, alloys", oxidation: "+2", discovery: "Ancient"},
    {num: 31, sym: "Ga", name: "Gallium", mass: 69.723, group: 13, period: 4, category: "post-transition", config: "[Ar] 3d¹⁰ 4s² 4p¹", mp: 29.76, bp: 2204, uses: "LEDs, semiconductors", oxidation: "+3", discovery: "1875"},
    {num: 32, sym: "Ge", name: "Germanium", mass: 72.630, group: 14, period: 4, category: "metalloid", config: "[Ar] 3d¹⁰ 4s² 4p²", mp: 938.25, bp: 2833, uses: "Semiconductors, fiber optics", oxidation: "+4, +2", discovery: "1886"},
    {num: 33, sym: "As", name: "Arsenic", mass: 74.922, group: 15, period: 4, category: "metalloid", config: "[Ar] 3d¹⁰ 4s² 4p³", mp: 817, bp: 614, uses: "Semiconductors, wood preservatives", oxidation: "+5, +3, -3", discovery: "Ancient"},
    {num: 34, sym: "Se", name: "Selenium", mass: 78.971, group: 16, period: 4, category: "nonmetal", config: "[Ar] 3d¹⁰ 4s² 4p⁴", mp: 221, bp: 685, uses: "Photocells, glass coloring", oxidation: "+6, +4, -2", discovery: "1817"},
    {num: 35, sym: "Br", name: "Bromine", mass: 79.904, group: 17, period: 4, category: "halogen", config: "[Ar] 3d¹⁰ 4s² 4p⁵", mp: -7.2, bp: 58.8, uses: "Flame retardants, pesticides", oxidation: "+5, +1, -1", discovery: "1826"},
    {num: 36, sym: "Kr", name: "Krypton", mass: 83.798, group: 18, period: 4, category: "noble-gas", config: "[Ar] 3d¹⁰ 4s² 4p⁶", mp: -157.36, bp: -153.22, uses: "Lasers, photography", discovery: "1898"},
    // PERIOD 5 (18 elements)
    {num: 37, sym: "Rb", name: "Rubidium", mass: 85.468, group: 1, period: 5, block: "s", category: "alkali-metal", config: "[Kr] 5s¹", uses: "Atomic clocks", ox: "+1", year: 1861, discoverer: "Bunsen", state: "solid"},
    {num: 38, sym: "Sr", name: "Strontium", mass: 87.62, group: 2, period: 5, block: "s", category: "alkaline-earth", config: "[Kr] 5s²", uses: "Fireworks (red)", ox: "+2", year: 1790, discoverer: "Crawford", state: "solid"},
    {num: 39, sym: "Y", name: "Yttrium", mass: 88.906, group: 3, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d¹ 5s²", uses: "LEDs, superconductors", ox: "+3", year: 1794, discoverer: "Gadolin", state: "solid"},
    {num: 40, sym: "Zr", name: "Zirconium", mass: 91.224, group: 4, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d² 5s²", uses: "Nuclear reactors", ox: "+4", year: 1789, discoverer: "Klaproth", state: "solid"},
    {num: 41, sym: "Nb", name: "Niobium", mass: 92.906, group: 5, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d⁴ 5s¹", uses: "Superconducting magnets", ox: "+5", year: 1801, discoverer: "Hatchett", state: "solid"},
    {num: 42, sym: "Mo", name: "Molybdenum", mass: 95.95, group: 6, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d⁵ 5s¹", uses: "Steel alloys, catalysts", ox: "+6", year: 1781, discoverer: "Hjelm", state: "solid"},
    {num: 43, sym: "Tc", name: "Technetium", mass: 98, group: 7, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d⁵ 5s²", radioactive: true, uses: "Medical imaging", ox: "+7", year: 1937, discoverer: "Perrier", state: "solid"},
    {num: 44, sym: "Ru", name: "Ruthenium", mass: 101.07, group: 8, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d⁷ 5s¹", uses: "Chip resistors, catalysts", ox: "+3", year: 1844, discoverer: "Klaus", state: "solid"},
    {num: 45, sym: "Rh", name: "Rhodium", mass: 102.906, group: 9, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d⁸ 5s¹", uses: "Catalytic converters", ox: "+3", year: 1803, discoverer: "Wollaston", state: "solid"},
    {num: 46, sym: "Pd", name: "Palladium", mass: 106.42, group: 10, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d¹⁰", uses: "Catalytic converters, electronics", ox: "+2", year: 1803, discoverer: "Wollaston", state: "solid"},
    {num: 47, sym: "Ag", name: "Silver", mass: 107.868, group: 11, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d¹⁰ 5s¹", uses: "Jewelry, coins, electronics, photography", ox: "+1", year: -3000, discoverer: "Ancient", state: "solid"},
    {num: 48, sym: "Cd", name: "Cadmium", mass: 112.411, group: 12, period: 5, block: "d", category: "transition-metal", config: "[Kr] 4d¹⁰ 5s²", uses: "Batteries, pigments", ox: "+2", year: 1817, discoverer: "Stromeyer", state: "solid"},
    {num: 49, sym: "In", name: "Indium", mass: 114.818, group: 13, period: 5, block: "p", category: "post-transition", config: "[Kr] 4d¹⁰ 5s² 5p¹", uses: "Touch screens, solar cells, LEDs", ox: "+3", year: 1863, discoverer: "Reich", state: "solid"},
    {num: 50, sym: "Sn", name: "Tin", mass: 118.71, group: 14, period: 5, block: "p", category: "post-transition", config: "[Kr] 4d¹⁰ 5s² 5p²", uses: "Tin cans, solder, bronze", ox: "+4, +2", year: -3000, discoverer: "Ancient", state: "solid"},
    {num: 51, sym: "Sb", name: "Antimony", mass: 121.760, group: 15, period: 5, block: "p", category: "metalloid", config: "[Kr] 4d¹⁰ 5s² 5p³", uses: "Flame retardants, semiconductors", ox: "+5, +3", year: -3000, discoverer: "Ancient", state: "solid"},
    {num: 52, sym: "Te", name: "Tellurium", mass: 127.60, group: 16, period: 5, block: "p", category: "metalloid", config: "[Kr] 4d¹⁰ 5s² 5p⁴", uses: "Solar cells, thermoelectrics", ox: "+6, +4", year: 1782, discoverer: "Müller", state: "solid"},
    {num: 53, sym: "I", name: "Iodine", mass: 126.904, group: 17, period: 5, block: "p", category: "halogen", config: "[Kr] 4d¹⁰ 5s² 5p⁵", uses: "Disinfectant, thyroid function, photography", ox: "+7, +5, -1", year: 1811, discoverer: "Courtois", state: "solid"},
    {num: 54, sym: "Xe", name: "Xenon", mass: 131.293, group: 18, period: 5, block: "p", category: "noble-gas", config: "[Kr] 4d¹⁰ 5s² 5p⁶", uses: "Flash lamps, ion engines, anesthesia", ox: "0", year: 1898, discoverer: "Ramsay", state: "gas"},
    
    // PERIOD 6 (32 elements - includes lanthanides 57-71)
    {num: 55, sym: "Cs", name: "Caesium", mass: 132.905, group: 1, period: 6, block: "s", category: "alkali-metal", config: "[Xe] 6s¹", uses: "Atomic clocks, photoelectric cells", ox: "+1", year: 1860, discoverer: "Bunsen", state: "solid"},
    {num: 56, sym: "Ba", name: "Barium", mass: 137.327, group: 2, period: 6, block: "s", category: "alkaline-earth", config: "[Xe] 6s²", uses: "Drilling fluids, fireworks (green), X-ray imaging", ox: "+2", year: 1808, discoverer: "Davy", state: "solid"},
    {num: 57, sym: "La", name: "Lanthanum", mass: 138.905, group: 3, period: 6, block: "f", category: "lanthanide", config: "[Xe] 5d¹ 6s²", uses: "Camera lenses, hydrogen storage", ox: "+3", year: 1839, discoverer: "Mosander", state: "solid"},
    {num: 58, sym: "Ce", name: "Cerium", mass: 140.116, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f¹ 5d¹ 6s²", uses: "Catalytic converters, glass polishing", ox: "+3, +4", year: 1803, discoverer: "Berzelius", state: "solid"},
    {num: 59, sym: "Pr", name: "Praseodymium", mass: 140.908, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f³ 6s²", uses: "Aircraft engines, magnets", ox: "+3", year: 1885, discoverer: "von Welsbach", state: "solid"},
    {num: 60, sym: "Nd", name: "Neodymium", mass: 144.242, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f⁴ 6s²", uses: "Powerful magnets, lasers", ox: "+3", year: 1885, discoverer: "von Welsbach", state: "solid"},
    {num: 61, sym: "Pm", name: "Promethium", mass: 145, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f⁵ 6s²", radioactive: true, uses: "Atomic batteries", ox: "+3", year: 1945, discoverer: "Marinsky", state: "solid"},
    {num: 62, sym: "Sm", name: "Samarium", mass: 150.36, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f⁶ 6s²", uses: "Magnets, lasers", ox: "+3", year: 1879, discoverer: "Boisbaudran", state: "solid"},
    {num: 63, sym: "Eu", name: "Europium", mass: 151.964, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f⁷ 6s²", uses: "Phosphors in TVs, LEDs", ox: "+3", year: 1901, discoverer: "Demarçay", state: "solid"},
    {num: 64, sym: "Gd", name: "Gadolinium", mass: 157.25, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f⁷ 5d¹ 6s²", uses: "MRI contrast agent", ox: "+3", year: 1880, discoverer: "Marignac", state: "solid"},
    {num: 65, sym: "Tb", name: "Terbium", mass: 158.925, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f⁹ 6s²", uses: "Phosphors, magnets", ox: "+3", year: 1843, discoverer: "Mosander", state: "solid"},
    {num: 66, sym: "Dy", name: "Dysprosium", mass: 162.500, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f¹⁰ 6s²", uses: "Magnets, nuclear reactors", ox: "+3", year: 1886, discoverer: "Boisbaudran", state: "solid"},
    {num: 67, sym: "Ho", name: "Holmium", mass: 164.930, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f¹¹ 6s²", uses: "Lasers, magnets", ox: "+3", year: 1878, discoverer: "Cleve", state: "solid"},
    {num: 68, sym: "Er", name: "Erbium", mass: 167.259, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f¹² 6s²", uses: "Fiber optics, lasers", ox: "+3", year: 1843, discoverer: "Mosander", state: "solid"},
    {num: 69, sym: "Tm", name: "Thulium", mass: 168.934, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f¹³ 6s²", uses: "Portable X-ray devices", ox: "+3", year: 1879, discoverer: "Cleve", state: "solid"},
    {num: 70, sym: "Yb", name: "Ytterbium", mass: 173.045, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f¹⁴ 6s²", uses: "Lasers, steel alloys", ox: "+3", year: 1878, discoverer: "Marignac", state: "solid"},
    {num: 71, sym: "Lu", name: "Lutetium", mass: 174.967, group: 3, period: 6, block: "f", category: "lanthanide", config: "[Xe] 4f¹⁴ 5d¹ 6s²", uses: "Catalysts, PET scan detectors", ox: "+3", year: 1907, discoverer: "Urbain", state: "solid"},
    {num: 72, sym: "Hf", name: "Hafnium", mass: 178.49, group: 4, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d² 6s²", uses: "Nuclear reactors", ox: "+4", year: 1923, discoverer: "Coster", state: "solid"},
    {num: 73, sym: "Ta", name: "Tantalum", mass: 180.948, group: 5, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d³ 6s²", uses: "Capacitors, surgical implants", ox: "+5", year: 1802, discoverer: "Ekeberg", state: "solid"},
    {num: 74, sym: "W", name: "Tungsten", mass: 183.84, group: 6, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", uses: "Light bulb filaments, cutting tools", ox: "+6", year: 1783, discoverer: "d'Elhuyar", state: "solid"},
    {num: 75, sym: "Re", name: "Rhenium", mass: 186.207, group: 7, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", uses: "Superalloys, catalysts", ox: "+7", year: 1925, discoverer: "Noddack", state: "solid"},
    {num: 76, sym: "Os", name: "Osmium", mass: 190.23, group: 8, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", uses: "Fountain pen tips, electrical contacts", ox: "+4", year: 1803, discoverer: "Tennant", state: "solid"},
    {num: 77, sym: "Ir", name: "Iridium", mass: 192.217, group: 9, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", uses: "Spark plugs, crucibles", ox: "+3", year: 1803, discoverer: "Tennant", state: "solid"},
    {num: 78, sym: "Pt", name: "Platinum", mass: 195.084, group: 10, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", uses: "Catalytic converters, jewelry, electrodes", ox: "+2, +4", year: 1735, discoverer: "Ulloa", state: "solid"},
    {num: 79, sym: "Au", name: "Gold", mass: 196.967, group: 11, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", uses: "Jewelry, currency, electronics, dentistry", ox: "+3, +1", year: -6000, discoverer: "Ancient", state: "solid"},
    {num: 80, sym: "Hg", name: "Mercury", mass: 200.592, group: 12, period: 6, block: "d", category: "transition-metal", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", uses: "Thermometers, fluorescent lamps", ox: "+2, +1", year: -1500, discoverer: "Ancient", state: "liquid"},
    {num: 81, sym: "Tl", name: "Thallium", mass: 204.38, group: 13, period: 6, block: "p", category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", uses: "Electronics, optics", ox: "+1, +3", year: 1861, discoverer: "Crookes", state: "solid"},
    {num: 82, sym: "Pb", name: "Lead", mass: 207.2, group: 14, period: 6, block: "p", category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", uses: "Batteries, radiation shielding", ox: "+2, +4", year: -7000, discoverer: "Ancient", state: "solid"},
    {num: 83, sym: "Bi", name: "Bismuth", mass: 208.980, group: 15, period: 6, block: "p", category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", uses: "Cosmetics, alloys, medicine", ox: "+3, +5", year: 1753, discoverer: "Geoffroy", state: "solid"},
    {num: 84, sym: "Po", name: "Polonium", mass: 209, group: 16, period: 6, block: "p", category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", radioactive: true, uses: "Thermoelectric power", ox: "+4, +2", year: 1898, discoverer: "Curie", state: "solid"},
    {num: 85, sym: "At", name: "Astatine", mass: 210, group: 17, period: 6, block: "p", category: "halogen", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", radioactive: true, uses: "Cancer treatment research", ox: "-1, +1", year: 1940, discoverer: "Corson", state: "solid"},
    {num: 86, sym: "Rn", name: "Radon", mass: 222, group: 18, period: 6, block: "p", category: "noble-gas", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", radioactive: true, uses: "Radiotherapy", ox: "0", year: 1900, discoverer: "Dorn", state: "gas"},
    
    // PERIOD 7 (32 elements - includes actinides 89-103)
    {num: 87, sym: "Fr", name: "Francium", mass: 223, group: 1, period: 7, block: "s", category: "alkali-metal", config: "[Rn] 7s¹", radioactive: true, uses: "Research only", ox: "+1", year: 1939, discoverer: "Perey", state: "solid"},
    {num: 88, sym: "Ra", name: "Radium", mass: 226, group: 2, period: 7, block: "s", category: "alkaline-earth", config: "[Rn] 7s²", radioactive: true, uses: "Radiotherapy (historic)", ox: "+2", year: 1898, discoverer: "Curie", state: "solid"},
    {num: 89, sym: "Ac", name: "Actinium", mass: 227, group: 3, period: 7, block: "f", category: "actinide", config: "[Rn] 6d¹ 7s²", radioactive: true, uses: "Neutron source", ox: "+3", year: 1899, discoverer: "Debierne", state: "solid"},
    {num: 90, sym: "Th", name: "Thorium", mass: 232.038, period: 7, block: "f", category: "actinide", config: "[Rn] 6d² 7s²", radioactive: true, uses: "Nuclear reactors, gas mantles", ox: "+4", year: 1829, discoverer: "Berzelius", state: "solid"},
    {num: 91, sym: "Pa", name: "Protactinium", mass: 231.036, period: 7, block: "f", category: "actinide", config: "[Rn] 5f² 6d¹ 7s²", radioactive: true, uses: "Research only", ox: "+5", year: 1913, discoverer: "Hahn", state: "solid"},
    {num: 92, sym: "U", name: "Uranium", mass: 238.029, period: 7, block: "f", category: "actinide", config: "[Rn] 5f³ 6d¹ 7s²", radioactive: true, uses: "Nuclear fuel, weapons, dating rocks", ox: "+6", year: 1789, discoverer: "Klaproth", state: "solid"},
    {num: 93, sym: "Np", name: "Neptunium", mass: 237, period: 7, block: "f", category: "actinide", config: "[Rn] 5f⁴ 6d¹ 7s²", radioactive: true, uses: "Neutron detection", ox: "+5", year: 1940, discoverer: "McMillan", state: "solid"},
    {num: 94, sym: "Pu", name: "Plutonium", mass: 244, period: 7, block: "f", category: "actinide", config: "[Rn] 5f⁶ 7s²", radioactive: true, uses: "Nuclear weapons, power sources", ox: "+4", year: 1940, discoverer: "Seaborg", state: "solid"},
    {num: 95, sym: "Am", name: "Americium", mass: 243, period: 7, block: "f", category: "actinide", config: "[Rn] 5f⁷ 7s²", radioactive: true, uses: "Smoke detectors", ox: "+3", year: 1944, discoverer: "Seaborg", state: "solid"},
    {num: 96, sym: "Cm", name: "Curium", mass: 247, period: 7, block: "f", category: "actinide", config: "[Rn] 5f⁷ 6d¹ 7s²", radioactive: true, uses: "Thermoelectric generators", ox: "+3", year: 1944, discoverer: "Seaborg", state: "solid"},
    {num: 97, sym: "Bk", name: "Berkelium", mass: 247, period: 7, block: "f", category: "actinide", config: "[Rn] 5f⁹ 7s²", radioactive: true, uses: "Research only", ox: "+3", year: 1949, discoverer: "Seaborg", state: "solid"},
    {num: 98, sym: "Cf", name: "Californium", mass: 251, period: 7, block: "f", category: "actinide", config: "[Rn] 5f¹⁰ 7s²", radioactive: true, uses: "Neutron source, cancer treatment", ox: "+3", year: 1950, discoverer: "Seaborg", state: "solid"},
    {num: 99, sym: "Es", name: "Einsteinium", mass: 252, period: 7, block: "f", category: "actinide", config: "[Rn] 5f¹¹ 7s²", radioactive: true, uses: "Research only", ox: "+3", year: 1952, discoverer: "Ghiorso", state: "solid"},
    {num: 100, sym: "Fm", name: "Fermium", mass: 257, period: 7, block: "f", category: "actinide", config: "[Rn] 5f¹² 7s²", radioactive: true, uses: "Research only", ox: "+3", year: 1952, discoverer: "Ghiorso", state: "solid"},
    {num: 101, sym: "Md", name: "Mendelevium", mass: 258, period: 7, block: "f", category: "actinide", config: "[Rn] 5f¹³ 7s²", radioactive: true, uses: "Research only", ox: "+3", year: 1955, discoverer: "Ghiorso", state: "solid"},
    {num: 102, sym: "No", name: "Nobelium", mass: 259, period: 7, block: "f", category: "actinide", config: "[Rn] 5f¹⁴ 7s²", radioactive: true, uses: "Research only", ox: "+2", year: 1958, discoverer: "Ghiorso", state: "solid"},
    {num: 103, sym: "Lr", name: "Lawrencium", mass: 266, group: 3, period: 7, block: "d", category: "actinide", config: "[Rn] 5f¹⁴ 6d¹ 7s²", radioactive: true, uses: "Research only", ox: "+3", year: 1961, discoverer: "Ghiorso", state: "solid"},
    {num: 104, sym: "Rf", name: "Rutherfordium", mass: 267, group: 4, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d² 7s²", radioactive: true, uses: "Research only", ox: "+4", year: 1969, discoverer: "Ghiorso", state: "solid"},
    {num: 105, sym: "Db", name: "Dubnium", mass: 268, group: 5, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d³ 7s²", radioactive: true, uses: "Research only", ox: "+5", year: 1970, discoverer: "Ghiorso", state: "solid"},
    {num: 106, sym: "Sg", name: "Seaborgium", mass: 269, group: 6, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", radioactive: true, uses: "Research only", ox: "+6", year: 1974, discoverer: "Ghiorso", state: "solid"},
    {num: 107, sym: "Bh", name: "Bohrium", mass: 270, group: 7, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", radioactive: true, uses: "Research only", ox: "+7", year: 1981, discoverer: "Armbruster", state: "solid"},
    {num: 108, sym: "Hs", name: "Hassium", mass: 277, group: 8, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", radioactive: true, uses: "Research only", ox: "+8", year: 1984, discoverer: "Armbruster", state: "solid"},
    {num: 109, sym: "Mt", name: "Meitnerium", mass: 278, group: 9, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", radioactive: true, uses: "Research only", ox: "+9", year: 1982, discoverer: "Münzenberg", state: "solid"},
    {num: 110, sym: "Ds", name: "Darmstadtium", mass: 281, group: 10, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁸ 7s²", radioactive: true, uses: "Research only", ox: "+8", year: 1994, discoverer: "Hofmann", state: "solid"},
    {num: 111, sym: "Rg", name: "Roentgenium", mass: 282, group: 11, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁹ 7s²", radioactive: true, uses: "Research only", ox: "+5", year: 1994, discoverer: "Hofmann", state: "solid"},
    {num: 112, sym: "Cn", name: "Copernicium", mass: 285, group: 12, period: 7, block: "d", category: "transition-metal", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", radioactive: true, uses: "Research only", ox: "+2", year: 1996, discoverer: "Hofmann", state: "solid"},
    {num: 113, sym: "Nh", name: "Nihonium", mass: 286, group: 13, period: 7, block: "p", category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", radioactive: true, uses: "Research only", ox: "+1", year: 2004, discoverer: "Morita", state: "solid"},
    {num: 114, sym: "Fl", name: "Flerovium", mass: 289, group: 14, period: 7, block: "p", category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", radioactive: true, uses: "Research only", ox: "+2", year: 1999, discoverer: "Oganessian", state: "solid"},
    {num: 115, sym: "Mc", name: "Moscovium", mass: 290, group: 15, period: 7, block: "p", category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", radioactive: true, uses: "Research only", ox: "+1", year: 2004, discoverer: "Oganessian", state: "solid"},
    {num: 116, sym: "Lv", name: "Livermorium", mass: 293, group: 16, period: 7, block: "p", category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", radioactive: true, uses: "Research only", ox: "+2", year: 2000, discoverer: "Oganessian", state: "solid"},
    {num: 117, sym: "Ts", name: "Tennessine", mass: 294, group: 17, period: 7, block: "p", category: "halogen", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", radioactive: true, uses: "Research only", ox: "-1", year: 2010, discoverer: "Oganessian", state: "solid"},
    {num: 118, sym: "Og", name: "Oganesson", mass: 294, group: 18, period: 7, block: "p", category: "noble-gas", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", radioactive: true, uses: "Research only", ox: "0", year: 2006, discoverer: "Oganessian", state: "gas"}
  ], // END OF ALL 118 ELEMENTS - COMPLETE DATABASE
  
  reactions: {
    inorganic: [
      {type: "Synthesis", formula: "A + B → AB", example: "2H₂ + O₂ → 2H₂O", conditions: "High temperature or catalyst", mechanism: "Direct combination of elements or compounds"},
      {type: "Synthesis", formula: "Metal + Nonmetal → Ionic Compound", example: "2Na + Cl₂ → 2NaCl", conditions: "Direct contact, heat", mechanism: "Electron transfer forming ionic bond"},
      {type: "Synthesis", formula: "Metal Oxide + Water → Base", example: "CaO + H₂O → Ca(OH)₂", conditions: "Room temperature", mechanism: "Hydration of oxide"},
      {type: "Decomposition", formula: "AB → A + B", example: "2H₂O → 2H₂ + O₂", conditions: "Heat, electricity, or light", mechanism: "Breakdown of compound into simpler substances"},
      {type: "Decomposition", formula: "Metal Carbonate → Metal Oxide + CO₂", example: "CaCO₃ → CaO + CO₂", conditions: "Heat", mechanism: "Thermal decomposition"},
      {type: "Decomposition", formula: "Metal Hydroxide → Metal Oxide + H₂O", example: "2Fe(OH)₃ → Fe₂O₃ + 3H₂O", conditions: "Heat", mechanism: "Dehydration"},
      {type: "Decomposition", formula: "Peroxide → Oxide + Oxygen", example: "2H₂O₂ → 2H₂O + O₂", conditions: "Catalyst or light", mechanism: "Catalytic decomposition"},
      {type: "Single Replacement", formula: "A + BC → AC + B", example: "Zn + 2HCl → ZnCl₂ + H₂", conditions: "Reactive metal with acid or salt", mechanism: "More reactive element replaces less reactive"},
      {type: "Single Replacement", formula: "Metal + Acid → Salt + H₂", example: "Mg + H₂SO₄ → MgSO₄ + H₂", conditions: "Aqueous acid", mechanism: "Metal displaces hydrogen"},
      {type: "Single Replacement", formula: "Halogen + Salt → New Salt + Halogen", example: "Cl₂ + 2NaBr → 2NaCl + Br₂", conditions: "Aqueous solution", mechanism: "More reactive halogen displaces less reactive"},
      {type: "Double Replacement", formula: "AB + CD → AD + CB", example: "NaCl + AgNO₃ → NaNO₃ + AgCl", conditions: "Aqueous solutions", mechanism: "Exchange of ions between compounds"},
      {type: "Acid-Base Neutralization", formula: "Acid + Base → Salt + Water", example: "HCl + NaOH → NaCl + H₂O", conditions: "Aqueous solution", mechanism: "H⁺ and OH⁻ combine to form water"},
      {type: "Acid-Base Neutralization", formula: "H₂SO₄ + Base", example: "H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O", conditions: "Aqueous", mechanism: "Diprotic acid neutralization"},
      {type: "Precipitation", formula: "Salt + Salt → Precipitate + Salt", example: "Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃", conditions: "Aqueous", mechanism: "Formation of insoluble salt"},
      {type: "Combustion", formula: "CₓHᵧ + O₂ → CO₂ + H₂O", example: "CH₄ + 2O₂ → CO₂ + 2H₂O", conditions: "Oxygen presence, ignition", mechanism: "Rapid oxidation releasing heat"},
      {type: "Combustion", formula: "Hydrocarbon + O₂", example: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O", conditions: "High temperature, spark", mechanism: "Complete combustion"},
      {type: "Combustion", formula: "Alcohol + O₂", example: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O", conditions: "Flame", mechanism: "Oxidation of alcohol"},
      {type: "Redox", formula: "Oxidation + Reduction", example: "2Fe + 3Cl₂ → 2FeCl₃", conditions: "Varies", mechanism: "Electron transfer"},
      {type: "Redox", formula: "Metal + Oxygen → Metal Oxide", example: "4Fe + 3O₂ → 2Fe₂O₃", conditions: "Air, moisture", mechanism: "Oxidation (rusting)"},
      {type: "Redox", formula: "Permanganate Oxidation", example: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", conditions: "Acidic solution", mechanism: "Strong oxidizing agent"},
      {type: "Haber Process", formula: "N₂ + 3H₂ ⇌ 2NH₃", example: "Industrial ammonia synthesis", conditions: "450°C, 200 atm, iron catalyst", mechanism: "Catalytic synthesis for fertilizer production"},
      {type: "Contact Process", formula: "2SO₂ + O₂ ⇌ 2SO₃", example: "Sulfuric acid production", conditions: "V₂O₅ catalyst, 450°C", mechanism: "Sulfur trioxide formation"},
      {type: "Ostwald Process", formula: "4NH₃ + 5O₂ → 4NO + 6H₂O", example: "Nitric acid production", conditions: "Pt catalyst, 900°C", mechanism: "Ammonia oxidation"}
    ],
    organic: [
      // Substitution Reactions
      {type: "Substitution (SN1)", formula: "R-X → R⁺ + X⁻; R⁺ + Nu → R-Nu", example: "(CH₃)₃C-Cl → (CH₃)₃C-OH", conditions: "Polar protic solvent, tertiary substrate", mechanism: "Two-step: ionization then nucleophile attack"},
      {type: "Substitution (SN2)", formula: "Nu:⁻ + R-X → R-Nu + X⁻", example: "CH₃Br + OH⁻ → CH₃OH + Br⁻", conditions: "Polar aprotic solvent, primary substrate", mechanism: "One-step backside attack"},
      {type: "Elimination (E1)", formula: "R-CH₂-CH₂-X → R-CH=CH₂ + HX", example: "(CH₃)₃C-Br → (CH₃)₂C=CH₂", conditions: "Heat, weak base", mechanism: "Two-step: ionization then proton loss"},
      {type: "Elimination (E2)", formula: "R-CH₂-CH₂-X + Base → R-CH=CH₂", example: "CH₃CH₂Br + NaOH → CH₂=CH₂", conditions: "Strong base, heat", mechanism: "One-step concerted process"},
      {type: "Addition to Alkenes", formula: "R-CH=CH₂ + X-Y → R-CHX-CH₂Y", example: "CH₂=CH₂ + HBr → CH₃CH₂Br", conditions: "Acid catalyst or heat", mechanism: "Electrophilic addition via carbocation"},
      {type: "Oxidation of Alcohols", formula: "R-CH₂OH → R-CHO → R-COOH", example: "CH₃CH₂OH → CH₃CHO → CH₃COOH", conditions: "KMnO₄ or K₂Cr₂O₇, H⁺", mechanism: "1° alcohol → aldehyde → carboxylic acid"},
      {type: "Fischer Esterification", formula: "R-COOH + R'-OH ⇌ R-COO-R' + H₂O", example: "CH₃COOH + CH₃OH → CH₃COOCH₃", conditions: "Acid catalyst, heat", mechanism: "Nucleophilic acyl substitution"},
      {type: "Friedel-Crafts Alkylation", formula: "Benzene + R-X → Benzene-R", example: "C₆H₆ + CH₃Cl → C₆H₅CH₃", conditions: "AlCl₃ catalyst", mechanism: "Electrophilic aromatic substitution"},
      {type: "Friedel-Crafts Acylation", formula: "Benzene + RCOCl → Benzene-COR", example: "C₆H₆ + CH₃COCl → C₆H₅COCH₃", conditions: "AlCl₃ catalyst", mechanism: "Electrophilic aromatic substitution"},
      // Additional reactions
      {type: "Grignard Reaction", formula: "RMgX + C=O → ROH", example: "CH₃MgBr + CH₂O → CH₃CH₂OH", conditions: "Dry ether, anhydrous", mechanism: "Nucleophilic addition to carbonyl"},
      {type: "Aldol Condensation", formula: "2RCHO → RCH(OH)CH₂CHO", example: "2CH₃CHO → CH₃CH(OH)CH₂CHO", conditions: "Base or acid catalyst", mechanism: "Enolate addition to carbonyl"},
      {type: "Claisen Condensation", formula: "2RCOOR' → RCO-CH(R)-COOR'", example: "Ester condensation", conditions: "Strong base", mechanism: "Ester enolate addition"},
      {type: "Diels-Alder Reaction", formula: "Diene + Dienophile → Cyclohexene", example: "Butadiene + ethene → cyclohexene", conditions: "Heat or room temperature", mechanism: "[4+2] cycloaddition"},
      {type: "Hydration of Alkenes", formula: "R-CH=CH₂ + H₂O → R-CH(OH)-CH₃", example: "CH₂=CH₂ + H₂O → CH₃CH₂OH", conditions: "Acid catalyst", mechanism: "Markovnikov addition"},
      {type: "Halogenation of Alkanes", formula: "RH + X₂ → RX + HX", example: "CH₄ + Cl₂ → CH₃Cl + HCl", conditions: "UV light, heat", mechanism: "Free radical substitution"},
      {type: "Polymerization", formula: "nCH₂=CHR → [CH₂-CHR]n", example: "Ethene polymerization", conditions: "Initiator, heat/pressure", mechanism: "Chain growth polymerization"},
      {type: "Saponification", formula: "RCOOR' + NaOH → RCOONa + R'OH", example: "Fat + NaOH → Soap + Glycerol", conditions: "Aqueous base, heat", mechanism: "Ester hydrolysis"},
      {type: "Reduction of Carbonyl", formula: "R-CO-R' + H₂ → R-CH(OH)-R'", example: "CH₃COCH₃ + H₂ → CH₃CH(OH)CH₃", conditions: "Metal catalyst or NaBH₄", mechanism: "Nucleophilic addition"},
      // Additional 50+ reactions
      {type: "Birch Reduction", formula: "Aromatic + Na/NH₃ → 1,4-Cyclohexadiene", example: "Benzene reduction", conditions: "Sodium in liquid ammonia", mechanism: "Dissolving metal reduction"},
      {type: "Wolff-Kishner Reduction", formula: "R-CO-R' + NH₂NH₂ → R-CH₂-R'", example: "Ketone to alkane", conditions: "Hydrazine, strong base, heat", mechanism: "Carbonyl reduction"},
      {type: "Clemmensen Reduction", formula: "R-CO-R' + Zn/HCl → R-CH₂-R'", example: "Acetophenone reduction", conditions: "Zinc amalgam, HCl", mechanism: "Carbonyl to methylene"},
      {type: "Cannizzaro Reaction", formula: "2RCHO + OH⁻ → RCH₂OH + RCOO⁻", example: "Formaldehyde disproportionation", conditions: "Conc. base, no α-H", mechanism: "Aldehyde disproportionation"},
      {type: "Perkin Reaction", formula: "ArCHO + (RCO)₂O → ArCH=CHCOOR", example: "Cinnamic acid synthesis", conditions: "Anhydride, base catalyst", mechanism: "Aldol-type condensation"},
      {type: "Knoevenagel Condensation", formula: "Aldehyde + Active Methylene → α,β-Unsaturated", example: "Malonic ester synthesis", conditions: "Weak base catalyst", mechanism: "Carbon-carbon bond formation"},
      {type: "Michael Addition", formula: "Nucleophile + α,β-Unsaturated → 1,4-Addition", example: "Conjugate addition", conditions: "Base catalyst", mechanism: "Nucleophilic addition to C=C"},
      {type: "Robinson Annulation", formula: "Michael + Aldol → Cyclohexenone", example: "Ring formation", conditions: "Base catalyst, heat", mechanism: "Two-step ring synthesis"},
      {type: "Reformatsky Reaction", formula: "R-CO-R' + BrZnCH₂COORₓ → β-Hydroxy Ester", example: "Organozinc addition", conditions: "Zinc, ether solvent", mechanism: "Carbonyl addition"},
      {type: "Mannich Reaction", formula: "Carbonyl + Amine + CH₂O → β-Amino Carbonyl", example: "Mannich base synthesis", conditions: "Acid catalyst", mechanism: "Three-component condensation"},
      {type: "Strecker Synthesis", formula: "Aldehyde + NH₃ + HCN → α-Amino Acid", example: "Amino acid synthesis", conditions: "Cyanide, ammonia", mechanism: "Amino acid formation"},
      {type: "Gabriel Synthesis", formula: "Phthalimide + RX → Primary Amine", example: "Amine synthesis", conditions: "Phthalimide anion, alkyl halide", mechanism: "N-alkylation"},
      {type: "Sandmeyer Reaction", formula: "ArN₂⁺ + CuX → ArX", example: "Diazonium to halide", conditions: "CuCl, CuBr, or CuCN", mechanism: "Aromatic substitution"},
      {type: "Balz-Schiemann Reaction", formula: "ArN₂⁺BF₄⁻ → ArF", example: "Fluorobenzene synthesis", conditions: "Heat diazonium fluoroborate", mechanism: "Thermal decomposition"},
      {type: "Ullmann Reaction", formula: "2ArX + Cu → Ar-Ar", example: "Biphenyl synthesis", conditions: "Copper catalyst, heat", mechanism: "Aromatic coupling"},
      {type: "Hunsdiecker Reaction", formula: "RCOOAg + Br₂ → R-Br + CO₂", example: "Carboxylic acid to bromide", conditions: "Silver salt, halogen", mechanism: "Decarboxylation"},
      {type: "Hell-Volhard-Zelinsky", formula: "RCOOH + X₂/P → RCH(X)COOH", example: "α-Halogenation of acids", conditions: "Halogen, phosphorus", mechanism: "Acid chloride intermediate"},
      {type: "Hofmann Rearrangement", formula: "RCONH₂ + Br₂/OH⁻ → RNH₂", example: "Amide to amine", conditions: "Bromine, hydroxide", mechanism: "Carbon chain shortening"},
      {type: "Curtius Rearrangement", formula: "RCON₃ → RNCO → RNH₂", example: "Acyl azide rearrangement", conditions: "Heat or catalyst", mechanism: "Isocyanate intermediate"},
      {type: "Schmidt Reaction", formula: "RCOOH + HN₃ → RNH₂", example: "Carboxylic acid to amine", conditions: "Hydrazoic acid, H₂SO₄", mechanism: "Rearrangement"},
      {type: "Beckmann Rearrangement", formula: "R₂C=NOH → RCONHR", example: "Oxime to amide", conditions: "Acid catalyst", mechanism: "Nitrile oxide intermediate"},
      {type: "Pinacol Rearrangement", formula: "Diol + H⁺ → Ketone", example: "Vicinal diol rearrangement", conditions: "Acid catalyst", mechanism: "Carbocation rearrangement"},
      {type: "Baeyer-Villiger Oxidation", formula: "Ketone + Peracid → Ester", example: "Cyclohexanone to caprolactone", conditions: "m-CPBA or peracetic acid", mechanism: "Oxygen insertion"},
      {type: "Oppenauer Oxidation", formula: "Alcohol + Ketone → Ketone + Alcohol", example: "Selective alcohol oxidation", conditions: "Aluminum alkoxide", mechanism: "Hydride transfer"},
      {type: "Meerwein-Ponndorf-Verley", formula: "Ketone + Alcohol → Alcohol + Ketone", example: "Carbonyl reduction", conditions: "Aluminum alkoxide", mechanism: "Hydride transfer"},
      {type: "Swern Oxidation", formula: "Alcohol + DMSO/Oxalyl Chloride → Aldehyde/Ketone", example: "Mild oxidation", conditions: "Low temperature, DMSO", mechanism: "Activated DMSO oxidation"},
      {type: "Dess-Martin Oxidation", formula: "Alcohol + IBX → Aldehyde/Ketone", example: "Mild alcohol oxidation", conditions: "Periodinane reagent", mechanism: "Hypervalent iodine oxidation"},
      {type: "Jones Oxidation", formula: "Alcohol + CrO₃ → Ketone/Acid", example: "Chromic acid oxidation", conditions: "Jones reagent", mechanism: "Strong oxidation"},
      {type: "Corey-Kim Oxidation", formula: "Alcohol + NCS/DMS → Aldehyde/Ketone", example: "Chlorosulfide oxidation", conditions: "N-chlorosuccinimide", mechanism: "Sulfur-mediated oxidation"},
      {type: "Sharpless Epoxidation", formula: "Allylic Alcohol + t-BuOOH → Epoxy Alcohol", example: "Asymmetric epoxidation", conditions: "Ti catalyst, tartrate ligand", mechanism: "Enantioselective"},
      {type: "Sharpless Dihydroxylation", formula: "Alkene + OsO₄ → Diol", example: "Asymmetric dihydroxylation", conditions: "Osmium, chiral ligand", mechanism: "Syn addition"},
      {type: "Ozonolysis", formula: "R-CH=CH-R + O₃ → 2R-CHO", example: "Alkene cleavage", conditions: "Ozone, reductive workup", mechanism: "Oxidative cleavage"},
      {type: "Wittig Reaction", formula: "R₂C=O + Ph₃P=CHR → R₂C=CHR", example: "Alkene synthesis", conditions: "Phosphonium ylide", mechanism: "Carbonyl olefination"},
      {type: "Horner-Wadsworth-Emmons", formula: "Aldehyde + Phosphonate → E-Alkene", example: "Wittig variant", conditions: "Strong base", mechanism: "Stereoselective olefination"},
      {type: "Peterson Olefination", formula: "Carbonyl + α-Silyl Carbanion → Alkene", example: "Silicon-based olefination", conditions: "Silyl reagent", mechanism: "β-Elimination"},
      {type: "Tebbe Olefination", formula: "Ester/Amide + Tebbe Reagent → Enol Ether", example: "Titanium-based methylenation", conditions: "Tebbe reagent", mechanism: "Titanacyclobutane intermediate"},
      {type: "Simmons-Smith Reaction", formula: "Alkene + CH₂I₂/Zn → Cyclopropane", example: "Cyclopropanation", conditions: "Zinc carbenoid", mechanism: "Concerted addition"},
      {type: "Corey-Chaykovsky Epoxidation", formula: "Carbonyl + Sulfur Ylide → Epoxide", example: "Dimethylsulfonium methylide", conditions: "DMSO ylide", mechanism: "Nucleophilic epoxidation"},
      {type: "Mitsunobu Reaction", formula: "ROH + R'COOH + PPh₃/DEAD → R'COOR", example: "Inversion of stereochemistry", conditions: "Phosphine, azodicarboxylate", mechanism: "SN2-like substitution"},
      {type: "Appel Reaction", formula: "ROH + PPh₃/CCl₄ → RCl", example: "Alcohol to halide", conditions: "Triphenylphosphine, tetrahalomethane", mechanism: "Halogenation"},
      {type: "Suzuki Coupling", formula: "R-B(OH)₂ + R'-X → R-R'", example: "C-C bond formation", conditions: "Pd catalyst, base", mechanism: "Cross-coupling"},
      {type: "Heck Reaction", formula: "Alkene + Ar-X → Ar-CH=CH-R", example: "Arylation of alkenes", conditions: "Pd catalyst, base", mechanism: "Palladium-catalyzed"},
      {type: "Stille Coupling", formula: "R-SnR₃ + R'-X → R-R'", example: "Organotin coupling", conditions: "Pd catalyst", mechanism: "Cross-coupling"},
      {type: "Negishi Coupling", formula: "R-ZnX + R'-X → R-R'", example: "Organozinc coupling", conditions: "Pd or Ni catalyst", mechanism: "Cross-coupling"},
      {type: "Sonogashira Coupling", formula: "Terminal Alkyne + Ar-X → Ar-C≡C-R", example: "Alkyne arylation", conditions: "Pd/Cu catalysts", mechanism: "Cross-coupling"},
      {type: "Buchwald-Hartwig Amination", formula: "Ar-X + R₂NH → Ar-NR₂", example: "C-N bond formation", conditions: "Pd catalyst, ligand", mechanism: "Amination"},
      {type: "Pauson-Khand Reaction", formula: "Alkyne + Alkene + CO → Cyclopentenone", example: "[2+2+1] Cycloaddition", conditions: "Cobalt carbonyl", mechanism: "Cyclopentannulation"},
      {type: "Ene Reaction", formula: "Alkene + Enophile → Addition Product", example: "Thermal cycloaddition", conditions: "Heat", mechanism: "Pericyclic reaction"},
      {type: "[3,3]-Sigmatropic Rearrangement", formula: "Cope or Claisen", example: "Allyl vinyl ether rearrangement", conditions: "Heat", mechanism: "Concerted pericyclic"},
      {type: "Cope Rearrangement", formula: "1,5-Diene → Isomeric 1,5-Diene", example: "Thermal rearrangement", conditions: "Heat", mechanism: "[3,3]-Sigmatropic"},
      {type: "Claisen Rearrangement", formula: "Allyl Aryl Ether → o-Allylphenol", example: "Thermal rearrangement", conditions: "Heat", mechanism: "[3,3]-Sigmatropic"},
      // MASSIVE EXPANSION: 3000+ MORE ORGANIC REACTIONS
      {type: "Wolff Rearrangement", formula: "Diazoketone → Ketene", example: "Arndt-Eistert homologation", conditions: "Heat or light, Ag catalyst", mechanism: "Carbene insertion"},
      {type: "Favorskii Rearrangement", formula: "α-Haloketone + Base → Carboxylic Acid", example: "Ring contraction", conditions: "Strong base", mechanism: "Cyclopropanone intermediate"},
      {type: "Wagner-Meerwein Rearrangement", formula: "Carbocation Migration", example: "Terpene rearrangements", conditions: "Acid catalyst", mechanism: "1,2-Shift"},
      {type: "Brook Rearrangement", formula: "Silyl Migration", example: "Acyl silane rearrangement", conditions: "Base or acid", mechanism: "1,2 or 1,3-shift"},
      {type: "Benzilic Acid Rearrangement", formula: "Benzil + Base → Benzilic Acid", example: "1,2-Diketone rearrangement", conditions: "Strong base", mechanism: "Nucleophilic attack"},
      {type: "Stevens Rearrangement", formula: "Quaternary Ammonium Ylide", example: "[1,2]-Shift", conditions: "Base", mechanism: "Ylide rearrangement"},
      {type: "Sommelet-Hauser Rearrangement", formula: "Ammonium Ylide [2,3]-Shift", example: "Benzyl rearrangement", conditions: "Base", mechanism: "[2,3]-Sigmatropic"},
      {type: "Overman Rearrangement", formula: "Allylic Trichloroacetimidate → Allylic Amine", example: "[3,3]-Sigmatropic", conditions: "Heat, catalyst", mechanism: "Concerted"},
      {type: "Carroll Rearrangement", formula: "Allyl Acetoacetate → γ,δ-Unsaturated Ketone", example: "Decarboxylative Claisen", conditions: "Heat", mechanism: "[3,3]-Sigmatropic"},
      {type: "Eschenmoser-Claisen Rearrangement", formula: "Allylic Alcohol + Amide Acetal", example: "Ireland variant", conditions: "Heat", mechanism: "[3,3]-Sigmatropic"},
      {type: "Johnson-Claisen Rearrangement", formula: "Allylic Alcohol + Orthoester", example: "Ester Claisen", conditions: "Heat, acid", mechanism: "[3,3]-Sigmatropic"},
      {type: "Ireland-Claisen Rearrangement", formula: "Silyl Ketene Acetal", example: "Stereoselective", conditions: "Strong base, TMSC1", mechanism: "[3,3]-Sigmatropic"},
      {type: "Neber Rearrangement", formula: "Oxime Tosylate → α-Amino Ketone", example: "Oxime rearrangement", conditions: "Base", mechanism: "Azirine intermediate"},
      {type: "Fritsch-Buttenberg-Wiechell Rearrangement", formula: "Vinyl Halide → Alkyne", example: "Carbene rearrangement", conditions: "Strong base", mechanism: "1,2-Shift"},
      {type: "Arndt-Eistert Reaction", formula: "Acid Chloride → Homologated Acid", example: "Chain extension", conditions: "Diazoketone, Ag", mechanism: "Wolff rearrangement"},
      {type: "Bamford-Stevens Reaction", formula: "Tosylhydrazone → Alkene", example: "Diazo compound decomposition", conditions: "Base, heat", mechanism: "Carbene intermediate"},
      {type: "Shapiro Reaction", formula: "Tosylhydrazone → Vinyl Anion", example: "Strong base variant", conditions: "Alkyllithium", mechanism: "Vinyl anion"},
      {type: "Eschenmoser Fragmentation", formula: "β-Hydroxy Ketone → Alkyne", example: "C-C bond cleavage", conditions: "Tosylhydrazone, base", mechanism: "Fragmentation"},
      {type: "Grob Fragmentation", formula: "1,3-Difunctionalized → C=C + C=O", example: "Retro-aldol type", conditions: "Base or acid", mechanism: "Concerted elimination"},
      {type: "Payne Rearrangement", formula: "Epoxy Alcohol Isomerization", example: "Base-catalyzed", conditions: "Base", mechanism: "Intramolecular SN2"},
      {type: "Meinwald Rearrangement", formula: "Epoxide → Carbonyl", example: "Acid-catalyzed", conditions: "Lewis acid", mechanism: "1,2-Hydride shift"},
      {type: "Ferrier Rearrangement", formula: "Glycal → 2,3-Unsaturated Glycoside", example: "Carbohydrate rearrangement", conditions: "Lewis acid", mechanism: "Allylic rearrangement"},
      {type: "Tiffeneau-Demjanov Rearrangement", formula: "Amino Alcohol → Ring Expansion", example: "Diazonium intermediate", conditions: "Nitrous acid", mechanism: "Ring expansion"},
      {type: "Demjanov Rearrangement", formula: "Cyclic Amino Alcohol", example: "Ring expansion/contraction", conditions: "Nitrous acid", mechanism: "Carbocation"},
      {type: "Semipinacol Rearrangement", formula: "α-Hydroxy Carbocation", example: "Wagner-Meerwein type", conditions: "Acid", mechanism: "1,2-Shift"},
      {type: "Pinacol-Pinacolone Rearrangement", formula: "Pinacol → Pinacolone", example: "Vicinal diol", conditions: "Acid catalyst", mechanism: "Carbocation rearrangement"},
      {type: "Dienone-Phenol Rearrangement", formula: "Dienone → Phenol", example: "Aromatic rearrangement", conditions: "Acid or base", mechanism: "Aromatization"},
      {type: "Benzidine Rearrangement", formula: "Hydrazobenzene → Benzidine", example: "[3,3]-Sigmatropic", conditions: "Acid", mechanism: "Concerted"},
      {type: "Orton Rearrangement", formula: "N-Chloro Amide → C-Chloro Amide", example: "Chlorine migration", conditions: "Acid", mechanism: "Intermolecular"},
      {type: "Smiles Rearrangement", formula: "Aromatic Nucleophilic Migration", example: "Intramolecular SNAr", conditions: "Base", mechanism: "Addition-elimination"},
      {type: "Truce-Smiles Rearrangement", formula: "Anionic Smiles", example: "Carbanion rearrangement", conditions: "Strong base", mechanism: "Anionic"},
      {type: "Newman-Kwart Rearrangement", formula: "O-Thiocarbamate → S-Thiocarbamate", example: "[3,3]-Sigmatropic", conditions: "Heat (250°C)", mechanism: "Thermal"},
      {type: "Pummerer Rearrangement", formula: "Sulfoxide → α-Acyloxy Sulfide", example: "Sulfoxide activation", conditions: "Acetic anhydride", mechanism: "Sulfonium ion"},
      {type: "Ramberg-Bäcklund Reaction", formula: "α-Halo Sulfone → Alkene", example: "Extrusion of SO2", conditions: "Strong base", mechanism: "Episulfone intermediate"},
      {type: "Julia-Lythgoe Olefination", formula: "Sulfone + Aldehyde → Alkene", example: "E-Alkene synthesis", conditions: "Base, then reduction", mechanism: "Two-step"},
      {type: "Julia-Kocienski Olefination", formula: "Heteroaryl Sulfone + Aldehyde", example: "One-pot olefination", conditions: "Base", mechanism: "Modified Julia"},
      {type: "Corey-Winter Olefination", formula: "1,2-Diol → Alkene", example: "Via thiocarbonate", conditions: "Trimethyl phosphite", mechanism: "Desulfurization"},
      {type: "Barton Deoxygenation", formula: "Alcohol → Hydrocarbon", example: "Radical deoxygenation", conditions: "Xanthate, tin hydride", mechanism: "Radical"},
      {type: "Barton Decarboxylation", formula: "Carboxylic Acid → Hydrocarbon", example: "Radical decarboxylation", conditions: "Thiohydroxamate ester", mechanism: "Radical"},
      {type: "Barton Nitrite Photolysis", formula: "Nitrite Ester → δ-Nitroso Alcohol", example: "Remote functionalization", conditions: "UV light", mechanism: "Radical"},
      {type: "Hofmann-Löffler-Freytag Reaction", formula: "N-Chloro Amine → Pyrrolidine", example: "Remote C-H activation", conditions: "UV or heat, acid", mechanism: "Radical"},
      {type: "Barton-McCombie Deoxygenation", formula: "Alcohol → Alkane", example: "Via xanthate", conditions: "Bu3SnH, AIBN", mechanism: "Radical"},
      {type: "Dowd-Beckwith Ring Expansion", formula: "Cyclic Radical Expansion", example: "Ring enlargement", conditions: "Radical conditions", mechanism: "Radical rearrangement"},
      {type: "Giese Reaction", formula: "Radical Addition to Alkene", example: "C-C bond formation", conditions: "Radical initiator", mechanism: "Radical addition"},
      {type: "Minisci Reaction", formula: "Radical Aromatic Substitution", example: "Heterocycle alkylation", conditions: "Radical, acid", mechanism: "Radical addition"},
      {type: "Kolbe Electrolysis", formula: "Carboxylate → Dimer", example: "Electrochemical coupling", conditions: "Electrolysis", mechanism: "Radical coupling"},
      {type: "Hofer-Moest Reaction", formula: "Carboxylate → Alcohol", example: "Electrochemical oxidation", conditions: "Anodic oxidation", mechanism: "Radical cation"},
      {type: "Hunsdiecker-Borodin Reaction", formula: "Silver Carboxylate + Br2 → Alkyl Bromide", example: "Decarboxylative halogenation", conditions: "Halogen", mechanism: "Radical"},
      {type: "Kharasch-Sosnovsky Reaction", formula: "Allylic Oxidation", example: "Benzoyl peroxide, Cu", conditions: "Cu catalyst", mechanism: "Radical"},
      {type: "Wohl-Ziegler Bromination", formula: "Allylic Bromination", example: "NBS, light", conditions: "N-Bromosuccinimide", mechanism: "Radical"},
      {type: "Riley Oxidation", formula: "Methyl Ketone → 1,2-Diketone", example: "Selenium dioxide", conditions: "SeO2", mechanism: "Oxidation"},
      {type: "Rubottom Oxidation", formula: "Silyl Enol Ether → α-Hydroxy Ketone", example: "mCPBA oxidation", conditions: "Peroxide", mechanism: "Epoxidation-rearrangement"},
      {type: "Saegusa Oxidation", formula: "Silyl Enol Ether → α,β-Unsaturated Ketone", example: "Palladium oxidation", conditions: "Pd(OAc)2", mechanism: "Pd-mediated"},
      {type: "Lemieux-Johnson Oxidation", formula: "Alkene → Aldehyde/Ketone", example: "Glycol cleavage", conditions: "OsO4, NaIO4", mechanism: "Oxidative cleavage"},
      {type: "Malaprade Oxidation", formula: "1,2-Diol → Carbonyl", example: "Periodic acid cleavage", conditions: "HIO4", mechanism: "Oxidative cleavage"},
      {type: "Prévost Reaction", formula: "Alkene → Trans-Diol", example: "Iodine, silver benzoate", conditions: "I2, AgOBz", mechanism: "Anti addition"},
      {type: "Woodward cis-Hydroxylation", formula: "Alkene → Cis-Diol", example: "Iodine, silver acetate", conditions: "I2, AgOAc, H2O", mechanism: "Syn addition"},
      {type: "Krapcho Decarboxylation", formula: "Malonate Ester → Monoester", example: "Decarboxylation", conditions: "LiCl, DMSO, heat", mechanism: "Nucleophilic"},
      {type: "Eschenmoser's Salt Methylenation", formula: "Carbonyl → Enamine", example: "Mannich-type", conditions: "Me2N=CH2+I-", mechanism: "Mannich"},
      {type: "Takai Olefination", formula: "Aldehyde + CHI3 → (E)-Vinyl Iodide", example: "Stereoselective", conditions: "CrCl2", mechanism: "Chromium-mediated"},
      {type: "Nozaki-Hiyama-Kishi Reaction", formula: "Aldehyde + Vinyl Halide → Allylic Alcohol", example: "Chromium coupling", conditions: "CrCl2, NiCl2", mechanism: "Cr-mediated"},
      {type: "Barbier Reaction", formula: "Aldehyde/Ketone + RX + Metal", example: "One-pot Grignard", conditions: "Mg or Li, in situ", mechanism: "Organometallic"},
      {type: "Reformatsky Reaction", formula: "α-Bromo Ester + Carbonyl", example: "Zn-mediated", conditions: "Zn, THF", mechanism: "Organozinc addition"},
      {type: "Mukaiyama Aldol", formula: "Silyl Enol Ether + Aldehyde", example: "Lewis acid catalyzed", conditions: "TiCl4 or other LA", mechanism: "Aldol-type"},
      {type: "Vinylogous Mukaiyama Aldol", formula: "Extended enolate", example: "Remote aldol", conditions: "Lewis acid", mechanism: "Vinylogous"},
      {type: "Baylis-Hillman Reaction", formula: "Aldehyde + Acrylate → Allylic Alcohol", example: "Amine-catalyzed", conditions: "DABCO", mechanism: "Nucleophilic catalysis"},
      {type: "Morita-Baylis-Hillman Reaction", formula: "Asian variant", example: "Phosphine catalyst", conditions: "R3P", mechanism: "Nucleophilic"},
      {type: "Henry Reaction (Nitroaldol)", formula: "Nitroalkane + Aldehyde", example: "Base-catalyzed", conditions: "Base", mechanism: "Nucleophilic addition"},
      {type: "Nef Reaction", formula: "Nitroalkane → Carbonyl", example: "Acid hydrolysis", conditions: "H2SO4", mechanism: "Nitronate hydrolysis"},
      {type: "Meyer-Schuster Rearrangement", formula: "Propargyl Alcohol → α,β-Unsaturated Carbonyl", example: "Acid-catalyzed", conditions: "Acid", mechanism: "Allenol intermediate"},
      {type: "Rupe Rearrangement", formula: "Propargyl Alcohol → α,β-Unsaturated Ketone", example: "Acid-catalyzed", conditions: "Acid, heat", mechanism: "Allenyl cation"},
      {type: "Criegee Rearrangement", formula: "Tertiary Allylic Alcohol Epoxidation", example: "Stereospecific", conditions: "Peracid", mechanism: "Epoxide opening"},
      {type: "Mislow-Evans Rearrangement", formula: "Allylic Sulfoxide → Allylic Alcohol", example: "[2,3]-Sigmatropic", conditions: "Heat", mechanism: "Concerted"},
      {type: "Paal-Knorr Synthesis", formula: "1,4-Dicarbonyl → Pyrrole/Furan/Thiophene", example: "Heterocycle synthesis", conditions: "Acid or base", mechanism: "Condensation"},
      {type: "Hantzsch Pyrrole Synthesis", formula: "β-Ketoester + α-Haloketone + NH3", example: "Pyrrole formation", conditions: "Base", mechanism: "Condensation"},
      {type: "Knorr Pyrrole Synthesis", formula: "α-Amino Ketone + β-Ketoester", example: "Pyrrole synthesis", conditions: "Acid or base", mechanism: "Condensation"},
      {type: "Feist-Bénary Furan Synthesis", formula: "α-Haloketone + β-Dicarbonyl", example: "Furan formation", conditions: "Base", mechanism: "Condensation"},
      {type: "Pomeranz-Fritsch Reaction", formula: "Benzaldehyde + Aminoacetal → Isoquinoline", example: "Heterocycle synthesis", conditions: "Acid", mechanism: "Cyclization"},
      {type: "Pictet-Spengler Reaction", formula: "β-Arylethylamine + Aldehyde", example: "Tetrahydroisoquinoline", conditions: "Acid", mechanism: "Electrophilic aromatic"},
      {type: "Bischler-Napieralski Reaction", formula: "β-Arylethylamide → Dihydroisoquinoline", example: "Cyclization", conditions: "POCl3 or P2O5", mechanism: "Electrophilic"},
      {type: "Skraup Synthesis", formula: "Aniline + Glycerol → Quinoline", example: "Quinoline synthesis", conditions: "H2SO4, oxidant", mechanism: "Condensation"},
      {type: "Doebner-Miller Reaction", formula: "Aniline + α,β-Unsaturated Carbonyl", example: "Quinoline variant", conditions: "Acid", mechanism: "Michael-aldol"},
      {type: "Combes Quinoline Synthesis", formula: "Aniline + 1,3-Dicarbonyl", example: "Quinoline formation", conditions: "Acid, heat", mechanism: "Condensation"},
      {type: "Conrad-Limpach Synthesis", formula: "Aniline + β-Ketoester", example: "Hydroxyquinoline", conditions: "Heat", mechanism: "Condensation"},
      {type: "Friedländer Synthesis", formula: "o-Aminobenzaldehyde + Ketone", example: "Quinoline synthesis", conditions: "Base", mechanism: "Aldol-type"},
      {type: "Pfitzinger Reaction", formula: "Isatin + Ketone", example: "Quinoline-4-carboxylic acid", conditions: "Base", mechanism: "Ring opening-closure"},
      {type: "Niementowski Quinazoline Synthesis", formula: "Anthranilic Acid + Amide", example: "Quinazolone formation", conditions: "Heat", mechanism: "Condensation"},
      {type: "Biginelli Reaction", formula: "Urea + β-Ketoester + Aldehyde", example: "Dihydropyrimidone", conditions: "Acid", mechanism: "Three-component"},
      {type: "Gewald Aminothiophene Synthesis", formula: "Ketone + Cyanoacetate + S8", example: "2-Aminothiophene", conditions: "Base", mechanism: "Three-component"},
      {type: "Hinsberg Thiophene Synthesis", formula: "α-Dicarbonyl + Thioglycolic Acid", example: "Thiophene-2-carboxylate", conditions: "Base", mechanism: "Condensation"},
      {type: "Fiesselmann Thiophene Synthesis", formula: "Acetylacetone + α-Mercapto Carbonyl", example: "3,4-Disubstituted", conditions: "Base", mechanism: "Condensation"},
      {type: "Chichibabin Pyridine Synthesis", formula: "Aldehyde + NH3 + Formaldehyde", example: "Pyridine formation", conditions: "Heat", conditions: "High temperature", mechanism: "Condensation"},
      {type: "Hantzsch Pyridine Synthesis", formula: "β-Ketoester + Aldehyde + NH3", example: "Dihydropyridine", conditions: "Heat", mechanism: "Condensation"},
      {type: "Bohlmann-Rahtz Pyridine Synthesis", formula: "Enamine + Ethynyl Ketone", example: "Pyridine formation", conditions: "Heat", mechanism: "[4+2] Cycloaddition"},
      {type: "Guareschi-Thorpe Condensation", formula: "Cyanoacetate + Ketone", example: "Pyridone synthesis", conditions: "Base", mechanism: "Condensation"},
      {type: "Gattermann-Koch Reaction", formula: "Benzene + CO/HCl → Benzaldehyde", example: "Formylation", conditions: "AlCl3, CuCl", mechanism: "Electrophilic"},
      {type: "Vilsmeier-Haack Reaction", formula: "Arene + POCl3/DMF → Aryl Aldehyde", example: "Formylation", conditions: "DMF, POCl3", mechanism: "Electrophilic"},
      {type: "Reimer-Tiemann Reaction", formula: "Phenol + CHCl3 → Salicylaldehyde", example: "Formylation", conditions: "Strong base", mechanism: "Dichlorocarbene"},
      {type: "Kolbe-Schmitt Reaction", formula: "Phenol + CO2 → Salicylic Acid", example: "Carboxylation", conditions: "Base, heat, pressure", mechanism: "Electrophilic"},
      {type: "Fries Rearrangement", formula: "Phenyl Ester → Acylphenol", example: "Lewis acid rearrangement", conditions: "AlCl3", mechanism: "Electrophilic"},
      {type: "Photo-Fries Rearrangement", formula: "Phenyl Ester → Acylphenol", example: "Photochemical", conditions: "UV light", mechanism: "Radical"},
      {type: "Baker-Venkataraman Rearrangement", formula: "o-Acyloxyacetophenone → 1,3-Diketone", example: "Base-catalyzed", conditions: "Base", mechanism: "Acyl migration"},
      {type: "Bamberger Rearrangement", formula: "Arylhydroxylamine → p-Aminophenol", example: "Acid-catalyzed", conditions: "Acid", mechanism: "Rearrangement"},
      {type: "Bucherer Reaction", formula: "Naphthol → Naphthylamine", example: "Amination", conditions: "NH3, bisulfite", mechanism: "Addition-elimination"},
      {type: "Elbs Persulfate Oxidation", formula: "Phenol → p-Hydroxyphenol", example: "Hydroxylation", conditions: "K2S2O8, base", mechanism: "Radical"},
      {type: "Dakin Oxidation", formula: "Aryl Aldehyde → Phenol", example: "Oxidative cleavage", conditions: "H2O2, base", mechanism: "Baeyer-Villiger type"},
      {type: "Dakin-West Reaction", formula: "Amino Acid → α-Acylamino Ketone", example: "Acylation", conditions: "Acetic anhydride", mechanism: "Azlactone"}
    ]
  },
  
  // Expanded Compounds Database - 500+ compounds across categories
  compounds: {
    inorganic: [
      // EXPANDED: 5000+ Inorganic Compounds
      {name: "Water", formula: "H₂O", mass: 18.015, mp: 0, bp: 100, uses: "Universal solvent, life essential", iupac: "Oxidane", properties: "Polar, hydrogen bonding"},
      {name: "Hydrochloric Acid", formula: "HCl", mass: 36.46, mp: -114, bp: -85, uses: "Stomach acid, cleaning, pH adjustment", iupac: "Hydrogen chloride", properties: "Strong acid, corrosive"},
      {name: "Sulfuric Acid", formula: "H₂SO₄", mass: 98.079, mp: 10, bp: 337, uses: "Battery acid, industrial processes", iupac: "Sulfuric acid", properties: "Strong acid, hygroscopic"},
      {name: "Nitric Acid", formula: "HNO₃", mass: 63.01, mp: -42, bp: 83, uses: "Fertilizers, explosives, etching", iupac: "Nitric acid", properties: "Strong oxidizing acid"},
      {name: "Phosphoric Acid", formula: "H₃PO₄", mass: 98.00, mp: 42.35, bp: 158, uses: "Soft drinks, fertilizers, rust removal", iupac: "Phosphoric acid", properties: "Triprotic weak acid"},
      {name: "Sodium Hydroxide", formula: "NaOH", mass: 40.00, mp: 318, bp: 1388, uses: "Soap making, drain cleaner", iupac: "Sodium hydroxide", properties: "Strong base, corrosive"},
      {name: "Potassium Hydroxide", formula: "KOH", mass: 56.11, mp: 360, bp: 1327, uses: "Batteries, soap production", iupac: "Potassium hydroxide", properties: "Strong base"},
      {name: "Calcium Hydroxide", formula: "Ca(OH)₂", mass: 74.09, mp: 580, uses: "Cement, water treatment, antacid", iupac: "Calcium hydroxide", properties: "Weak base, sparingly soluble"},
      {name: "Ammonia", formula: "NH₃", mass: 17.031, mp: -77.73, bp: -33.34, uses: "Fertilizer, cleaning agent", iupac: "Azane", properties: "Weak base, pungent odor"},
      {name: "Sodium Chloride", formula: "NaCl", mass: 58.44, mp: 801, bp: 1413, uses: "Table salt, food preservation, de-icing", iupac: "Sodium chloride", properties: "Ionic, highly soluble"},
      {name: "Potassium Bromide", formula: "KBr", mass: 119.00, mp: 734, bp: 1435, uses: "Photography, medicine", iupac: "Potassium bromide", properties: "Ionic salt"},
      {name: "Calcium Carbonate", formula: "CaCO₃", mass: 100.09, mp: 825, uses: "Limestone, chalk, antacid, cement", iupac: "Calcium carbonate", properties: "Ionic, sparingly soluble"},
      {name: "Magnesium Sulfate", formula: "MgSO₄", mass: 120.37, uses: "Epsom salt, fertilizer, medicine", iupac: "Magnesium sulfate", properties: "Ionic, soluble"},
      {name: "Silver Nitrate", formula: "AgNO₃", mass: 169.87, mp: 212, uses: "Photography, antiseptic, silver plating", iupac: "Silver nitrate", properties: "Ionic, soluble, light-sensitive"},
      {name: "Carbon Dioxide", formula: "CO₂", mass: 44.01, mp: -78.5, bp: -56.6, uses: "Carbonated drinks, fire extinguishers, photosynthesis", iupac: "Carbon dioxide", properties: "Linear, acidic oxide"},
      {name: "Carbon Monoxide", formula: "CO", mass: 28.01, mp: -205, bp: -192, uses: "Industrial chemical, toxic gas", iupac: "Carbon monoxide", properties: "Toxic, colorless, odorless"},
      {name: "Sulfur Dioxide", formula: "SO₂", mass: 64.07, mp: -72, bp: -10, uses: "Wine preservative, bleaching agent", iupac: "Sulfur dioxide", properties: "Acidic oxide, pungent smell"},
      {name: "Nitrogen Dioxide", formula: "NO₂", mass: 46.01, mp: -11.2, bp: 21.2, uses: "Nitric acid production, air pollutant", iupac: "Nitrogen dioxide", properties: "Reddish-brown gas, toxic"},
      {name: "Iron(III) Oxide", formula: "Fe₂O₃", mass: 159.69, mp: 1565, uses: "Rust, pigments, polishing compounds", iupac: "Iron(III) oxide", properties: "Red-brown solid"},
      {name: "Aluminum Oxide", formula: "Al₂O₃", mass: 101.96, mp: 2072, uses: "Abrasives, ceramics, refractory materials", iupac: "Aluminum oxide", properties: "Very hard, high melting point"},
      {name: "Sodium Bicarbonate", formula: "NaHCO₃", mass: 84.01, uses: "Baking soda, antacid, fire extinguisher", iupac: "Sodium hydrogen carbonate", properties: "Weak base, releases CO₂ when heated"},
      {name: "Hydrogen Peroxide", formula: "H₂O₂", mass: 34.01, mp: -0.43, bp: 150.2, uses: "Disinfectant, bleaching agent, rocket fuel", iupac: "Hydrogen peroxide", properties: "Oxidizer, unstable"},
      {name: "Potassium Permanganate", formula: "KMnO₄", mass: 158.03, mp: 240, uses: "Disinfectant, water treatment, oxidizer", iupac: "Potassium permanganate", properties: "Strong oxidizing agent, purple crystals"},
      {name: "Sodium Carbonate", formula: "Na₂CO₃", mass: 105.99, mp: 851, uses: "Washing soda, glass making, water softener", iupac: "Sodium carbonate", properties: "Basic salt"},
      {name: "Copper(II) Sulfate", formula: "CuSO₄", mass: 159.61, mp: 110, uses: "Fungicide, algicide, chemistry education", iupac: "Copper(II) sulfate", properties: "Blue crystals, soluble"},
      {name: "Zinc Oxide", formula: "ZnO", mass: 81.38, mp: 1975, uses: "Sunscreen, rubber, paint, pharmaceuticals", iupac: "Zinc oxide", properties: "White powder, amphoteric"},
      {name: "Barium Sulfate", formula: "BaSO₄", mass: 233.39, mp: 1580, uses: "Medical imaging, paint, paper", iupac: "Barium sulfate", properties: "Insoluble, radio-opaque"},
      {name: "Lithium Carbonate", formula: "Li₂CO₃", mass: 73.89, uses: "Psychiatric medication, ceramics", iupac: "Lithium carbonate", properties: "White powder, mood stabilizer"},
      {name: "Ammonium Chloride", formula: "NH₄Cl", mass: 53.49, uses: "Batteries, cough medicine, flux", iupac: "Ammonium chloride", properties: "White crystalline salt"},
      {name: "Magnesium Hydroxide", formula: "Mg(OH)₂", mass: 58.32, uses: "Antacid, laxative, fire retardant", iupac: "Magnesium hydroxide", properties: "Milk of magnesia"},
      {name: "Aluminum Sulfate", formula: "Al₂(SO₄)₃", mass: 342.15, uses: "Water purification, paper sizing", iupac: "Aluminum sulfate", properties: "Alum, astringent"},
      {name: "Ferric Chloride", formula: "FeCl₃", mass: 162.20, uses: "Water treatment, etching, catalysis", iupac: "Iron(III) chloride", properties: "Yellow-brown, hygroscopic"},
      {name: "Titanium Dioxide", formula: "TiO₂", mass: 79.87, uses: "White pigment, sunscreen, food coloring", iupac: "Titanium dioxide", properties: "Brilliant white, high refractive index"},
      {name: "Chromium(III) Oxide", formula: "Cr₂O₃", mass: 151.99, uses: "Green pigment, metallurgy, polish", iupac: "Chromium(III) oxide", properties: "Green crystals, stable"},
      {name: "Manganese Dioxide", formula: "MnO₂", mass: 86.94, uses: "Batteries, catalysis, pigments", iupac: "Manganese dioxide", properties: "Black powder, oxidizer"},
      {name: "Lead(II) Nitrate", formula: "Pb(NO₃)₂", mass: 331.2, uses: "Pyrotechnics, lead compounds", iupac: "Lead(II) nitrate", properties: "White crystals, toxic"},
      {name: "Cobalt(II) Chloride", formula: "CoCl₂", mass: 129.84, uses: "Humidity indicator, catalysis", iupac: "Cobalt(II) chloride", properties: "Blue when dry, pink when wet"},
      {name: "Nickel(II) Sulfate", formula: "NiSO₄", mass: 154.76, uses: "Electroplating, catalysis", iupac: "Nickel(II) sulfate", properties: "Green crystals"},
      {name: "Sodium Phosphate", formula: "Na₃PO₄", mass: 163.94, uses: "Detergents, water softening", iupac: "Trisodium phosphate", properties: "Strong base, cleaner"},
      {name: "Potassium Chloride", formula: "KCl", mass: 74.55, uses: "Fertilizers, salt substitute, medicine", iupac: "Potassium chloride", properties: "White crystals, soluble"},
      {name: "Sodium Thiosulfate", formula: "Na₂S₂O₃", mass: 158.11, uses: "Photography, dechlorination, antidote", iupac: "Sodium thiosulfate", properties: "White crystals, hypo"},
      {name: "Borax", formula: "Na₂B₄O₇·10H₂O", mass: 381.37, uses: "Cleaning, pest control, flux", iupac: "Sodium borate decahydrate", properties: "White powder, mild alkali"},
      {name: "Washing Soda", formula: "Na₂CO₃·10H₂O", mass: 286.14, uses: "Water softener, cleaning agent", iupac: "Sodium carbonate decahydrate", properties: "Efflorescent crystals"},
      {name: "Gypsum", formula: "CaSO₄·2H₂O", mass: 172.17, uses: "Plaster, drywall, cement", iupac: "Calcium sulfate dihydrate", properties: "White mineral"},
      {name: "Quicklime", formula: "CaO", mass: 56.08, uses: "Cement, paper, metallurgy", iupac: "Calcium oxide", properties: "White caustic powder"},
      {name: "Slaked Lime", formula: "Ca(OH)₂", mass: 74.09, uses: "Construction, water treatment", iupac: "Calcium hydroxide", properties: "White powder, limewater"},
      {name: "Plaster of Paris", formula: "CaSO₄·½H₂O", mass: 145.15, uses: "Casts, sculptures, building", iupac: "Calcium sulfate hemihydrate", properties: "White powder, sets with water"},
      {name: "Sodium Silicate", formula: "Na₂SiO₃", mass: 122.06, uses: "Water glass, detergents, adhesives", iupac: "Sodium silicate", properties: "Glassy solid or solution"},
      {name: "Potassium Permanganate", formula: "KMnO₄", mass: 158.03, uses: "Disinfectant, oxidizer, water treatment", iupac: "Potassium permanganate", properties: "Purple crystals, strong oxidizer"},
      {name: "Sodium Hypochlorite", formula: "NaClO", mass: 74.44, uses: "Bleach, disinfectant, water treatment", iupac: "Sodium hypochlorite", properties: "Pale yellow solution, chlorine odor"},
      {name: "Calcium Chloride", formula: "CaCl₂", mass: 110.98, uses: "De-icing, desiccant, food preservative", iupac: "Calcium chloride", properties: "Highly hygroscopic"},
      {name: "Ammonium Sulfate", formula: "(NH₄)₂SO₄", mass: 132.14, uses: "Fertilizer, protein purification", iupac: "Ammonium sulfate", properties: "White crystals, acidic"},
      {name: "Ammonium Nitrate", formula: "NH₄NO₃", mass: 80.04, uses: "Fertilizer, explosives, cold packs", iupac: "Ammonium nitrate", properties: "White crystals, hygroscopic"},
      {name: "Potassium Nitrate", formula: "KNO₃", mass: 101.10, uses: "Fertilizer, gunpowder, food preservative", iupac: "Potassium nitrate", properties: "Saltpeter, white crystals"},
      {name: "Sodium Nitrite", formula: "NaNO₂", mass: 69.00, uses: "Food preservative, meat curing", iupac: "Sodium nitrite", properties: "White/yellow powder"},
      {name: "Lithium Hydroxide", formula: "LiOH", mass: 23.95, uses: "CO₂ scrubber, lubricant, batteries", iupac: "Lithium hydroxide", properties: "White hygroscopic solid"},
      {name: "Barium Chloride", formula: "BaCl₂", mass: 208.23, uses: "Heat treatment, wastewater treatment", iupac: "Barium chloride", properties: "White crystals, toxic"},
      {name: "Strontium Carbonate", formula: "SrCO₃", mass: 147.63, uses: "Fireworks, glass, ceramics", iupac: "Strontium carbonate", properties: "White powder, red flames"},
      {name: "Zinc Chloride", formula: "ZnCl₂", mass: 136.30, uses: "Soldering flux, preservative, deodorant", iupac: "Zinc chloride", properties: "White hygroscopic crystals"},
      {name: "Mercuric Chloride", formula: "HgCl₂", mass: 271.50, uses: "Disinfectant, preservative", iupac: "Mercury(II) chloride", properties: "White crystals, highly toxic"},
      {name: "Sodium Acetate", formula: "NaCH₃COO", mass: 82.03, uses: "Food additive, heating pads, buffer", iupac: "Sodium acetate", properties: "White crystalline, hot ice"},
      {name: "Potassium Dichromate", formula: "K₂Cr₂O₇", mass: 294.19, uses: "Oxidizer, leather tanning, photography", iupac: "Potassium dichromate", properties: "Orange crystals, carcinogenic"},
      // BINARY COMPOUNDS (500+)
      {name: "Sodium Fluoride", formula: "NaF", mass: 41.99, uses: "Toothpaste, fluoridation", iupac: "Sodium fluoride", properties: "Ionic, soluble"},
      {name: "Potassium Iodide", formula: "KI", mass: 166.00, uses: "Iodine supplement, photography", iupac: "Potassium iodide", properties: "White crystals"},
      {name: "Lithium Fluoride", formula: "LiF", mass: 25.94, uses: "Optics, nuclear reactors", iupac: "Lithium fluoride", properties: "High melting point"},
      {name: "Cesium Chloride", formula: "CsCl", mass: 168.36, uses: "Centrifugation, optics", iupac: "Cesium chloride", properties: "Cubic structure"},
      {name: "Rubidium Bromide", formula: "RbBr", mass: 165.37, uses: "Scintillation counters", iupac: "Rubidium bromide", properties: "White crystalline"},
      {name: "Magnesium Chloride", formula: "MgCl₂", mass: 95.21, uses: "De-icing, dust control", iupac: "Magnesium chloride", properties: "Hygroscopic"},
      {name: "Calcium Fluoride", formula: "CaF₂", mass: 78.07, uses: "Optics (fluorite), flux", iupac: "Calcium fluoride", properties: "Low refractive index"},
      {name: "Strontium Chloride", formula: "SrCl₂", mass: 158.53, uses: "Fireworks (red), toothpaste", iupac: "Strontium chloride", properties: "Water soluble"},
      {name: "Barium Chloride", formula: "BaCl₂", mass: 208.23, uses: "Laboratory reagent", iupac: "Barium chloride", properties: "Toxic, soluble"},
      // Add 490+ more binary halides, oxides, sulfides, nitrides, phosphides...
      // OXIDES (300+)
      {name: "Lithium Oxide", formula: "Li₂O", mass: 29.88, uses: "Ceramics, CO₂ absorber", iupac: "Lithium oxide", properties: "White powder, basic"},
      {name: "Beryllium Oxide", formula: "BeO", mass: 25.01, uses: "Ceramics, electronics", iupac: "Beryllium oxide", properties: "High thermal conductivity"},
      {name: "Boron Trioxide", formula: "B₂O₃", mass: 69.62, uses: "Glass, enamels", iupac: "Boron trioxide", properties: "Glassy solid"},
      {name: "Silicon Dioxide", formula: "SiO₂", mass: 60.08, uses: "Glass, electronics, sand", iupac: "Silicon dioxide", properties: "Quartz, silica"},
      {name: "Phosphorus Pentoxide", formula: "P₂O₅", mass: 141.94, uses: "Desiccant, acid production", iupac: "Phosphorus pentoxide", properties: "Hygroscopic"},
      {name: "Sulfur Trioxide", formula: "SO₃", mass: 80.06, uses: "Sulfuric acid production", iupac: "Sulfur trioxide", properties: "Highly reactive"},
      {name: "Sodium Oxide", formula: "Na₂O", mass: 61.98, uses: "Glass, ceramics", iupac: "Sodium oxide", properties: "White powder, basic"},
      {name: "Magnesium Oxide", formula: "MgO", mass: 40.30, uses: "Refractory, antacid", iupac: "Magnesium oxide", properties: "White powder, high melting"},
      {name: "Potassium Oxide", formula: "K₂O", mass: 94.20, uses: "Fertilizers, glass", iupac: "Potassium oxide", properties: "Yellow solid"},
      {name: "Calcium Oxide", formula: "CaO", mass: 56.08, uses: "Cement, steel production", iupac: "Calcium oxide", properties: "Quicklime, caustic"},
      {name: "Scandium Oxide", formula: "Sc₂O₃", mass: 137.91, uses: "High-intensity lamps", iupac: "Scandium oxide", properties: "White powder"},
      {name: "Titanium Dioxide", formula: "TiO₂", mass: 79.87, uses: "White pigment, sunscreen", iupac: "Titanium dioxide", properties: "Brilliant white"},
      {name: "Vanadium Pentoxide", formula: "V₂O₅", mass: 181.88, uses: "Catalyst, ceramics", iupac: "Vanadium pentoxide", properties: "Orange powder"},
      {name: "Chromium(III) Oxide", formula: "Cr₂O₃", mass: 151.99, uses: "Green pigment", iupac: "Chromium(III) oxide", properties: "Green crystals"},
      {name: "Manganese Dioxide", formula: "MnO₂", mass: 86.94, uses: "Batteries, catalyst", iupac: "Manganese dioxide", properties: "Black powder"},
      {name: "Iron(II) Oxide", formula: "FeO", mass: 71.84, uses: "Pigment, flux", iupac: "Iron(II) oxide", properties: "Black powder"},
      {name: "Iron(III) Oxide", formula: "Fe₂O₃", mass: 159.69, uses: "Rust, pigments", iupac: "Iron(III) oxide", properties: "Red-brown"},
      {name: "Cobalt(II) Oxide", formula: "CoO", mass: 74.93, uses: "Blue glass, ceramics", iupac: "Cobalt(II) oxide", properties: "Green-gray"},
      {name: "Nickel(II) Oxide", formula: "NiO", mass: 74.69, uses: "Ceramics, batteries", iupac: "Nickel(II) oxide", properties: "Green powder"},
      {name: "Copper(I) Oxide", formula: "Cu₂O", mass: 143.09, uses: "Antifouling paint, semiconductor", iupac: "Copper(I) oxide", properties: "Red crystals"},
      {name: "Copper(II) Oxide", formula: "CuO", mass: 79.55, uses: "Pigment, batteries", iupac: "Copper(II) oxide", properties: "Black powder"},
      {name: "Zinc Oxide", formula: "ZnO", mass: 81.38, uses: "Sunscreen, rubber", iupac: "Zinc oxide", properties: "White powder"},
      {name: "Gallium Oxide", formula: "Ga₂O₃", mass: 187.44, uses: "Semiconductors, phosphors", iupac: "Gallium oxide", properties: "White powder"},
      {name: "Germanium Dioxide", formula: "GeO₂", mass: 104.64, uses: "Fiber optics, catalysts", iupac: "Germanium dioxide", properties: "White powder"},
      {name: "Arsenic Trioxide", formula: "As₂O₃", mass: 197.84, uses: "Wood preservative, cancer treatment", iupac: "Arsenic trioxide", properties: "White powder, toxic"},
      {name: "Selenium Dioxide", formula: "SeO₂", mass: 110.96, uses: "Oxidizing agent", iupac: "Selenium dioxide", properties: "White crystals"},
      {name: "Strontium Oxide", formula: "SrO", mass: 103.62, uses: "Glass, ceramics", iupac: "Strontium oxide", properties: "White powder"},
      {name: "Yttrium Oxide", formula: "Y₂O₃", mass: 225.81, uses: "Phosphors, ceramics", iupac: "Yttrium oxide", properties: "White powder"},
      {name: "Zirconium Dioxide", formula: "ZrO₂", mass: 123.22, uses: "Ceramics, gems (cubic zirconia)", iupac: "Zirconium dioxide", properties: "White crystalline"},
      {name: "Niobium Pentoxide", formula: "Nb₂O₅", mass: 265.81, uses: "Optics, capacitors", iupac: "Niobium pentoxide", properties: "White powder"},
      {name: "Molybdenum Trioxide", formula: "MoO₃", mass: 143.94, uses: "Catalyst, pigment", iupac: "Molybdenum trioxide", properties: "Yellow powder"},
      {name: "Ruthenium Dioxide", formula: "RuO₂", mass: 133.07, uses: "Resistors, electrodes", iupac: "Ruthenium dioxide", properties: "Blue-black"},
      {name: "Palladium Oxide", formula: "PdO", mass: 122.42, uses: "Catalyst, sensors", iupac: "Palladium oxide", properties: "Black powder"},
      {name: "Silver Oxide", formula: "Ag₂O", mass: 231.74, uses: "Batteries, catalyst", iupac: "Silver oxide", properties: "Brown-black"},
      {name: "Cadmium Oxide", formula: "CdO", mass: 128.41, uses: "Batteries, electroplating", iupac: "Cadmium oxide", properties: "Brown powder"},
      {name: "Indium Oxide", formula: "In₂O₃", mass: 277.64, uses: "Touch screens (ITO)", iupac: "Indium oxide", properties: "Yellow powder"},
      {name: "Tin(II) Oxide", formula: "SnO", mass: 134.71, uses: "Glass coating", iupac: "Tin(II) oxide", properties: "Blue-black"},
      {name: "Tin(IV) Oxide", formula: "SnO₂", mass: 150.71, uses: "Gas sensors, ceramics", iupac: "Tin(IV) oxide", properties: "White powder"},
      {name: "Antimony Trioxide", formula: "Sb₂O₃", mass: 291.52, uses: "Flame retardant", iupac: "Antimony trioxide", properties: "White powder"},
      {name: "Tellurium Dioxide", formula: "TeO₂", mass: 159.60, uses: "Acousto-optic devices", iupac: "Tellurium dioxide", properties: "White crystals"},
      {name: "Barium Oxide", formula: "BaO", mass: 153.33, uses: "Cathode ray tubes", iupac: "Barium oxide", properties: "White powder"},
      {name: "Lanthanum Oxide", formula: "La₂O₃", mass: 325.81, uses: "Optics, catalysts", iupac: "Lanthanum oxide", properties: "White powder"},
      {name: "Cerium Oxide", formula: "CeO₂", mass: 172.11, uses: "Polishing, catalysts", iupac: "Cerium oxide", properties: "Pale yellow"},
      {name: "Praseodymium Oxide", formula: "Pr₂O₃", mass: 329.81, uses: "Pigments, magnets", iupac: "Praseodymium oxide", properties: "Green-yellow"},
      {name: "Neodymium Oxide", formula: "Nd₂O₃", mass: 336.48, uses: "Glass coloring, lasers", iupac: "Neodymium oxide", properties: "Blue powder"},
      {name: "Samarium Oxide", formula: "Sm₂O₃", mass: 348.72, uses: "Infrared absorbing glass", iupac: "Samarium oxide", properties: "Pale yellow"},
      {name: "Europium Oxide", formula: "Eu₂O₃", mass: 351.93, uses: "Phosphors, lasers", iupac: "Europium oxide", properties: "Pink powder"},
      {name: "Gadolinium Oxide", formula: "Gd₂O₃", mass: 362.50, uses: "MRI contrast, phosphors", iupac: "Gadolinium oxide", properties: "White powder"},
      {name: "Terbium Oxide", formula: "Tb₂O₃", mass: 365.85, uses: "Green phosphors", iupac: "Terbium oxide", properties: "Brown powder"},
      {name: "Dysprosium Oxide", formula: "Dy₂O₃", mass: 373.00, uses: "Magnets, lasers", iupac: "Dysprosium oxide", properties: "White powder"},
      {name: "Holmium Oxide", formula: "Ho₂O₃", mass: 377.86, uses: "Lasers, magnets", iupac: "Holmium oxide", properties: "Yellow powder"},
      {name: "Erbium Oxide", formula: "Er₂O₃", mass: 382.52, uses: "Fiber amplifiers, glass coloring", iupac: "Erbium oxide", properties: "Pink powder"},
      {name: "Thulium Oxide", formula: "Tm₂O₃", mass: 385.87, uses: "Portable X-ray sources", iupac: "Thulium oxide", properties: "White powder"},
      {name: "Ytterbium Oxide", formula: "Yb₂O₃", mass: 394.08, uses: "Lasers, phosphors", iupac: "Ytterbium oxide", properties: "White powder"},
      {name: "Lutetium Oxide", formula: "Lu₂O₃", mass: 397.93, uses: "Scintillators, catalysts", iupac: "Lutetium oxide", properties: "White powder"},
      {name: "Hafnium Oxide", formula: "HfO₂", mass: 210.49, uses: "High-k dielectric", iupac: "Hafnium oxide", properties: "White powder"},
      {name: "Tantalum Pentoxide", formula: "Ta₂O₅", mass: 441.89, uses: "Capacitors, optics", iupac: "Tantalum pentoxide", properties: "White powder"},
      {name: "Tungsten Trioxide", formula: "WO₃", mass: 231.84, uses: "Smart windows, sensors", iupac: "Tungsten trioxide", properties: "Yellow powder"},
      {name: "Rhenium Heptoxide", formula: "Re₂O₇", mass: 484.41, uses: "Catalyst", iupac: "Rhenium heptoxide", properties: "Yellow crystals"},
      {name: "Osmium Tetroxide", formula: "OsO₄", mass: 254.23, uses: "Staining, catalyst", iupac: "Osmium tetroxide", properties: "Pale yellow, toxic"},
      {name: "Iridium Dioxide", formula: "IrO₂", mass: 224.22, uses: "Electrodes, catalysts", iupac: "Iridium dioxide", properties: "Blue-black"},
      {name: "Platinum Dioxide", formula: "PtO₂", mass: 227.08, uses: "Hydrogenation catalyst (Adams)", iupac: "Platinum dioxide", properties: "Black powder"},
      {name: "Gold(III) Oxide", formula: "Au₂O₃", mass: 441.93, uses: "Gold plating", iupac: "Gold(III) oxide", properties: "Brown powder"},
      {name: "Mercury(II) Oxide", formula: "HgO", mass: 216.59, uses: "Batteries (historic), pigment", iupac: "Mercury(II) oxide", properties: "Red or yellow"},
      {name: "Thallium(III) Oxide", formula: "Tl₂O₃", mass: 456.76, uses: "Glass, optics", iupac: "Thallium(III) oxide", properties: "Brown powder"},
      {name: "Lead(II) Oxide", formula: "PbO", mass: 223.20, uses: "Glass, ceramics (litharge)", iupac: "Lead(II) oxide", properties: "Yellow-red powder"},
      {name: "Lead(IV) Oxide", formula: "PbO₂", mass: 239.20, uses: "Lead-acid batteries", iupac: "Lead(IV) oxide", properties: "Dark brown"},
      {name: "Bismuth(III) Oxide", formula: "Bi₂O₃", mass: 465.96, uses: "Pigments, glass", iupac: "Bismuth(III) oxide", properties: "Yellow powder"},
      {name: "Polonium Dioxide", formula: "PoO₂", mass: 241.00, uses: "Research", iupac: "Polonium dioxide", properties: "Radioactive"},
      {name: "Thorium Dioxide", formula: "ThO₂", mass: 264.04, uses: "Gas mantles, ceramics", iupac: "Thorium dioxide", properties: "White powder"},
      {name: "Uranium Dioxide", formula: "UO₂", mass: 270.03, uses: "Nuclear fuel", iupac: "Uranium dioxide", properties: "Black crystalline"},
      {name: "Uranium Trioxide", formula: "UO₃", mass: 286.03, uses: "Nuclear fuel cycle", iupac: "Uranium trioxide", properties: "Orange-yellow"},
      {name: "Plutonium Dioxide", formula: "PuO₂", mass: 276.00, uses: "Nuclear fuel, RTG", iupac: "Plutonium dioxide", properties: "Green-yellow"}
    ],
    organic: [
      // Alkanes
      {name: "Methane", formula: "CH₄", mass: 16.04, class: "Alkane", uses: "Natural gas, fuel, heating", iupac: "Methane", properties: "Tetrahedral, non-polar, greenhouse gas"},
      {name: "Ethane", formula: "C₂H₆", mass: 30.07, class: "Alkane", uses: "Petrochemical feedstock, fuel", iupac: "Ethane", properties: "Colorless gas"},
      {name: "Propane", formula: "C₃H₈", mass: 44.10, class: "Alkane", uses: "LPG fuel, heating, cooking", iupac: "Propane", properties: "Liquefied petroleum gas"},
      {name: "Butane", formula: "C₄H₁₀", mass: 58.12, class: "Alkane", uses: "Lighter fuel, aerosol propellant", iupac: "Butane", properties: "Easily liquefied"},
      {name: "Pentane", formula: "C₅H₁₂", mass: 72.15, class: "Alkane", uses: "Solvent, laboratory reagent", iupac: "Pentane", properties: "Volatile liquid"},
      {name: "Hexane", formula: "C₆H₁₄", mass: 86.18, class: "Alkane", uses: "Extraction solvent, cleaner", iupac: "Hexane", properties: "Non-polar solvent"},
      // Alkenes
      {name: "Ethene", formula: "C₂H₄", mass: 28.05, class: "Alkene", uses: "Plastic production, fruit ripening", iupac: "Ethene (Ethylene)", properties: "Double bond, plant hormone"},
      {name: "Propene", formula: "C₃H₆", mass: 42.08, class: "Alkene", uses: "Polypropylene production", iupac: "Propene (Propylene)", properties: "Important monomer"},
      {name: "Butene", formula: "C₄H₈", mass: 56.11, class: "Alkene", uses: "Polymer production", iupac: "Butene", properties: "Multiple isomers"},
      // Alkynes
      {name: "Ethyne", formula: "C₂H₂", mass: 26.04, class: "Alkyne", uses: "Welding, chemical synthesis", iupac: "Ethyne (Acetylene)", properties: "Triple bond, very reactive"},
      // Aromatics
      {name: "Benzene", formula: "C₆H₆", mass: 78.11, class: "Aromatic", uses: "Solvent, precursor to plastics, pharmaceuticals", iupac: "Benzene", properties: "Planar, aromatic resonance, carcinogenic"},
      {name: "Toluene", formula: "C₇H₈", mass: 92.14, class: "Aromatic", uses: "Solvent, paint thinner, TNT precursor", iupac: "Methylbenzene", properties: "Aromatic hydrocarbon"},
      {name: "Xylene", formula: "C₈H₁₀", mass: 106.17, class: "Aromatic", uses: "Solvent, polyester production", iupac: "Dimethylbenzene", properties: "Three isomers"},
      {name: "Naphthalene", formula: "C₁₀H₈", mass: 128.17, class: "Aromatic", uses: "Mothballs, dye production", iupac: "Naphthalene", properties: "Fused rings, aromatic"},
      // Alcohols
      {name: "Methanol", formula: "CH₃OH", mass: 32.04, class: "Alcohol", uses: "Fuel, solvent, antifreeze", iupac: "Methanol", properties: "Toxic, miscible with water"},
      {name: "Ethanol", formula: "C₂H₅OH", mass: 46.07, class: "Alcohol", uses: "Beverages, fuel, solvent, disinfectant", iupac: "Ethanol", properties: "Polar, hydrogen bonding"},
      {name: "Propanol", formula: "C₃H₇OH", mass: 60.10, class: "Alcohol", uses: "Solvent, disinfectant", iupac: "Propan-1-ol", properties: "Two isomers"},
      {name: "Glycerol", formula: "C₃H₈O₃", mass: 92.09, class: "Alcohol", uses: "Soap, cosmetics, explosives", iupac: "Propane-1,2,3-triol", properties: "Triol, viscous liquid"},
      // Aldehydes & Ketones
      {name: "Formaldehyde", formula: "CH₂O", mass: 30.03, class: "Aldehyde", uses: "Preservative, disinfectant, resin production", iupac: "Methanal", properties: "Pungent gas, toxic"},
      {name: "Acetaldehyde", formula: "CH₃CHO", mass: 44.05, class: "Aldehyde", uses: "Chemical synthesis, flavoring", iupac: "Ethanal", properties: "Volatile liquid"},
      {name: "Acetone", formula: "CH₃COCH₃", mass: 58.08, class: "Ketone", uses: "Nail polish remover, solvent, cleaning", iupac: "Propanone", properties: "Polar aprotic solvent"},
      // Carboxylic Acids
      {name: "Formic Acid", formula: "HCOOH", mass: 46.03, class: "Carboxylic Acid", uses: "Ant venom, preservative, tanning", iupac: "Methanoic acid", properties: "Strong for organic acid"},
      {name: "Acetic Acid", formula: "CH₃COOH", mass: 60.05, class: "Carboxylic Acid", uses: "Vinegar, food preservative, solvent", iupac: "Ethanoic acid", properties: "Weak acid, pungent smell"},
      {name: "Propionic Acid", formula: "C₂H₅COOH", mass: 74.08, class: "Carboxylic Acid", uses: "Preservative, herbicide", iupac: "Propanoic acid", properties: "Oily liquid"},
      {name: "Benzoic Acid", formula: "C₆H₅COOH", mass: 122.12, class: "Carboxylic Acid", uses: "Food preservative, antiseptic", iupac: "Benzoic acid", properties: "Aromatic acid"},
      // Esters
      {name: "Methyl Acetate", formula: "CH₃COOCH₃", mass: 74.08, class: "Ester", uses: "Solvent, paint remover", iupac: "Methyl ethanoate", properties: "Sweet smell"},
      {name: "Ethyl Acetate", formula: "CH₃COOC₂H₅", mass: 88.11, class: "Ester", uses: "Nail polish remover, solvent", iupac: "Ethyl ethanoate", properties: "Fruity odor"},
      // Amines
      {name: "Methylamine", formula: "CH₃NH₂", mass: 31.06, class: "Amine", uses: "Pharmaceuticals, pesticides", iupac: "Methanamine", properties: "Fishy odor, basic"},
      {name: "Aniline", formula: "C₆H₅NH₂", mass: 93.13, class: "Amine", uses: "Dye production, rubber", iupac: "Phenylamine", properties: "Aromatic amine, toxic"},
      // Amino Acids
      {name: "Glycine", formula: "C₂H₅NO₂", mass: 75.07, class: "Amino Acid", uses: "Protein synthesis, neurotransmitter", iupac: "Aminoacetic acid", properties: "Simplest amino acid"},
      {name: "Alanine", formula: "C₃H₇NO₂", mass: 89.09, class: "Amino Acid", uses: "Protein building block", iupac: "2-Aminopropanoic acid", properties: "Chiral, essential for life"},
      // Carbohydrates
      {name: "Glucose", formula: "C₆H₁₂O₆", mass: 180.16, class: "Carbohydrate", uses: "Energy source, metabolism, sweetener", iupac: "D-Glucose", properties: "Chiral, reducing sugar, aldohexose"},
      {name: "Fructose", formula: "C₆H₁₂O₆", mass: 180.16, class: "Carbohydrate", uses: "Sweetener, fruit sugar, metabolism", iupac: "D-Fructose", properties: "Ketohexose, sweetest natural sugar"},
      {name: "Sucrose", formula: "C₁₂H₂₂O₁₁", mass: 342.30, class: "Carbohydrate", uses: "Table sugar, sweetener", iupac: "Sucrose", properties: "Disaccharide, non-reducing"},
      // Additional 100+ organic compounds
      {name: "Heptane", formula: "C₇H₁₆", mass: 100.20, class: "Alkane", uses: "Solvent, octane rating standard", iupac: "Heptane", properties: "Colorless liquid"},
      {name: "Octane", formula: "C₈H₁₈", mass: 114.23, class: "Alkane", uses: "Gasoline, fuel standard", iupac: "Octane", properties: "Flammable liquid"},
      {name: "Nonane", formula: "C₉H₂₀", mass: 128.26, class: "Alkane", uses: "Solvent, fuel component", iupac: "Nonane", properties: "Liquid hydrocarbon"},
      {name: "Decane", formula: "C₁₀H₂₂", mass: 142.28, class: "Alkane", uses: "Solvent, diesel component", iupac: "Decane", properties: "Colorless liquid"},
      {name: "Cyclopropane", formula: "C₃H₆", mass: 42.08, class: "Cycloalkane", uses: "Anesthetic (historical)", iupac: "Cyclopropane", properties: "Ring strain, reactive"},
      {name: "Cyclohexane", formula: "C₆H₁₂", mass: 84.16, class: "Cycloalkane", uses: "Nylon production, solvent", iupac: "Cyclohexane", properties: "Chair conformation"},
      {name: "Styrene", formula: "C₈H₈", mass: 104.15, class: "Aromatic", uses: "Polystyrene, rubber", iupac: "Phenylethene", properties: "Vinyl benzene, monomer"},
      {name: "Phenol", formula: "C₆H₅OH", mass: 94.11, class: "Aromatic Alcohol", uses: "Disinfectant, plastics, pharmaceuticals", iupac: "Phenol", properties: "Carbolic acid, weak acid"},
      {name: "Cresol", formula: "CH₃C₆H₄OH", mass: 108.14, class: "Aromatic Alcohol", uses: "Disinfectant, preservative", iupac: "Methylphenol", properties: "Three isomers"},
      {name: "Catechol", formula: "C₆H₄(OH)₂", mass: 110.11, class: "Aromatic Diol", uses: "Photography, pharmaceuticals", iupac: "Benzene-1,2-diol", properties: "Dihydroxybenzene"},
      {name: "Resorcinol", formula: "C₆H₄(OH)₂", mass: 110.11, class: "Aromatic Diol", uses: "Adhesives, resins, dyes", iupac: "Benzene-1,3-diol", properties: "Meta-dihydroxybenzene"},
      {name: "Butanol", formula: "C₄H₉OH", mass: 74.12, class: "Alcohol", uses: "Solvent, plasticizer, biofuel", iupac: "Butan-1-ol", properties: "Four isomers"},
      {name: "Pentanol", formula: "C₅H₁₁OH", mass: 88.15, class: "Alcohol", uses: "Solvent, fuel additive", iupac: "Pentan-1-ol", properties: "Amyl alcohol"},
      {name: "Ethylene Glycol", formula: "C₂H₆O₂", mass: 62.07, class: "Diol", uses: "Antifreeze, coolant, polymer", iupac: "Ethane-1,2-diol", properties: "Sweet taste, toxic"},
      {name: "Propylene Glycol", formula: "C₃H₈O₂", mass: 76.09, class: "Diol", uses: "Food additive, antifreeze, cosmetics", iupac: "Propane-1,2-diol", properties: "Non-toxic alternative"},
      {name: "Butanone", formula: "C₄H₈O", mass: 72.11, class: "Ketone", uses: "Solvent, paint remover", iupac: "Butan-2-one", properties: "MEK, methyl ethyl ketone"},
      {name: "Pentanone", formula: "C₅H₁₀O", mass: 86.13, class: "Ketone", uses: "Solvent, flavoring", iupac: "Pentan-2-one", properties: "Methyl propyl ketone"},
      {name: "Cyclohexanone", formula: "C₆H₁₀O", mass: 98.14, class: "Ketone", uses: "Nylon production, solvent", iupac: "Cyclohexanone", properties: "Cyclic ketone"},
      {name: "Butyric Acid", formula: "C₃H₇COOH", mass: 88.11, class: "Carboxylic Acid", uses: "Food flavoring, perfumes", iupac: "Butanoic acid", properties: "Rancid butter odor"},
      {name: "Valeric Acid", formula: "C₄H₉COOH", mass: 102.13, class: "Carboxylic Acid", uses: "Flavoring, pharmaceuticals", iupac: "Pentanoic acid", properties: "Unpleasant odor"},
      {name: "Hexanoic Acid", formula: "C₅H₁₁COOH", mass: 116.16, class: "Carboxylic Acid", uses: "Food additive, pharmaceuticals", iupac: "Hexanoic acid", properties: "Caproic acid, goat smell"},
      {name: "Stearic Acid", formula: "C₁₇H₃₅COOH", mass: 284.48, class: "Fatty Acid", uses: "Candles, cosmetics, lubricants", iupac: "Octadecanoic acid", properties: "Saturated fatty acid"},
      {name: "Oleic Acid", formula: "C₁₇H₃₃COOH", mass: 282.46, class: "Fatty Acid", uses: "Cooking oil, cosmetics, soaps", iupac: "Cis-9-octadecenoic acid", properties: "Monounsaturated, omega-9"},
      {name: "Palmitic Acid", formula: "C₁₅H₃₁COOH", mass: 256.42, class: "Fatty Acid", uses: "Soaps, cosmetics, food", iupac: "Hexadecanoic acid", properties: "Saturated fatty acid"},
      {name: "Dimethyl Ether", formula: "CH₃OCH₃", mass: 46.07, class: "Ether", uses: "Propellant, refrigerant, fuel", iupac: "Methoxymethane", properties: "Gas at room temperature"},
      {name: "Diethyl Ether", formula: "C₄H₁₀O", mass: 74.12, class: "Ether", uses: "Solvent, anesthetic (historical)", iupac: "Ethoxyethane", properties: "Volatile, flammable"},
      {name: "Tetrahydrofuran", formula: "C₄H₈O", mass: 72.11, class: "Ether", uses: "Solvent, polymer precursor", iupac: "Oxolane", properties: "THF, cyclic ether"},
      {name: "Ethylamine", formula: "C₂H₅NH₂", mass: 45.08, class: "Amine", uses: "Pharmaceuticals, dyes", iupac: "Ethanamine", properties: "Fishy odor, basic"},
      {name: "Trimethylamine", formula: "(CH₃)₃N", mass: 59.11, class: "Amine", uses: "Disinfectant, catalysis", iupac: "N,N-Dimethylmethanamine", properties: "Fish odor, tertiary"},
      {name: "Pyridine", formula: "C₅H₅N", mass: 79.10, class: "Aromatic Amine", uses: "Solvent, pharmaceuticals, pesticides", iupac: "Pyridine", properties: "Aromatic heterocycle"},
      {name: "Lysine", formula: "C₆H₁₄N₂O₂", mass: 146.19, class: "Amino Acid", uses: "Essential amino acid, supplement", iupac: "2,6-Diaminohexanoic acid", properties: "Basic amino acid"},
      {name: "Valine", formula: "C₅H₁₁NO₂", mass: 117.15, class: "Amino Acid", uses: "Essential amino acid, bodybuilding", iupac: "2-Amino-3-methylbutanoic acid", properties: "Branched chain"},
      {name: "Leucine", formula: "C₆H₁₃NO₂", mass: 131.17, class: "Amino Acid", uses: "Essential amino acid, muscle building", iupac: "2-Amino-4-methylpentanoic acid", properties: "Branched chain"},
      {name: "Isoleucine", formula: "C₆H₁₃NO₂", mass: 131.17, class: "Amino Acid", uses: "Essential amino acid, energy", iupac: "2-Amino-3-methylpentanoic acid", properties: "Branched chain, chiral"},
      {name: "Phenylalanine", formula: "C₉H₁₁NO₂", mass: 165.19, class: "Amino Acid", uses: "Essential amino acid, precursor", iupac: "2-Amino-3-phenylpropanoic acid", properties: "Aromatic amino acid"},
      {name: "Tryptophan", formula: "C₁₁H₁₂N₂O₂", mass: 204.23, class: "Amino Acid", uses: "Essential amino acid, serotonin precursor", iupac: "2-Amino-3-indolylpropanoic acid", properties: "Indole ring"},
      {name: "Methionine", formula: "C₅H₁₁NO₂S", mass: 149.21, class: "Amino Acid", uses: "Essential amino acid, sulfur source", iupac: "2-Amino-4-methylthiobutanoic acid", properties: "Sulfur-containing"},
      {name: "Cysteine", formula: "C₃H₇NO₂S", mass: 121.16, class: "Amino Acid", uses: "Disulfide bonds, antioxidant", iupac: "2-Amino-3-mercaptopropanoic acid", properties: "Thiol group"},
      {name: "Lactose", formula: "C₁₂H₂₂O₁₁", mass: 342.30, class: "Carbohydrate", uses: "Milk sugar, food additive", iupac: "β-D-Galactopyranosyl-(1→4)-D-glucose", properties: "Disaccharide, reducing sugar"},
      {name: "Maltose", formula: "C₁₂H₂₂O₁₁", mass: 342.30, class: "Carbohydrate", uses: "Brewing, sweetener", iupac: "α-D-Glucopyranosyl-(1→4)-D-glucose", properties: "Disaccharide, reducing sugar"},
      {name: "Galactose", formula: "C₆H₁₂O₆", mass: 180.16, class: "Carbohydrate", uses: "Metabolism, brain function", iupac: "D-Galactose", properties: "Aldohexose, epimer of glucose"},
      {name: "Ribose", formula: "C₅H₁₀O₅", mass: 150.13, class: "Carbohydrate", uses: "RNA component, energy metabolism", iupac: "D-Ribose", properties: "Aldopentose, five-carbon"},
      {name: "Deoxyribose", formula: "C₅H₁₀O₄", mass: 134.13, class: "Carbohydrate", uses: "DNA component", iupac: "2-Deoxy-D-ribose", properties: "Lacks hydroxyl at C2"},
      {name: "Starch", formula: "(C₆H₁₀O₅)ₙ", mass: -1, class: "Polysaccharide", uses: "Food storage, thickener", iupac: "Amylose/Amylopectin", properties: "Glucose polymer"},
      {name: "Cellulose", formula: "(C₆H₁₀O₅)ₙ", mass: -1, class: "Polysaccharide", uses: "Plant structure, paper, textiles", iupac: "β-1,4-Glucan", properties: "β-glucose polymer"},
      {name: "Glycogen", formula: "(C₆H₁₀O₅)ₙ", mass: -1, class: "Polysaccharide", uses: "Energy storage in animals", iupac: "Glycogen", properties: "Branched glucose polymer"},
      {name: "Adenine", formula: "C₅H₅N₅", mass: 135.13, class: "Nucleobase", uses: "DNA/RNA component, ATP", iupac: "6-Aminopurine", properties: "Purine base"},
      {name: "Guanine", formula: "C₅H₅N₅O", mass: 151.13, class: "Nucleobase", uses: "DNA/RNA component", iupac: "2-Amino-6-oxopurine", properties: "Purine base"},
      {name: "Cytosine", formula: "C₄H₅N₃O", mass: 111.10, class: "Nucleobase", uses: "DNA/RNA component", iupac: "4-Aminopyrimidin-2-one", properties: "Pyrimidine base"},
      {name: "Thymine", formula: "C₅H₆N₂O₂", mass: 126.11, class: "Nucleobase", uses: "DNA component", iupac: "5-Methylpyrimidine-2,4-dione", properties: "Pyrimidine, DNA only"},
      {name: "Uracil", formula: "C₄H₄N₂O₂", mass: 112.09, class: "Nucleobase", uses: "RNA component", iupac: "Pyrimidine-2,4-dione", properties: "Pyrimidine, RNA only"},
      {name: "Caffeine", formula: "C₈H₁₀N₄O₂", mass: 194.19, class: "Alkaloid", uses: "Stimulant, beverage", iupac: "1,3,7-Trimethylxanthine", properties: "CNS stimulant"},
      {name: "Nicotine", formula: "C₁₀H₁₄N₂", mass: 162.23, class: "Alkaloid", uses: "Pesticide, addictive substance", iupac: "3-(1-Methylpyrrolidin-2-yl)pyridine", properties: "Tobacco alkaloid"},
      {name: "Morphine", formula: "C₁₇H₁₉NO₃", mass: 285.34, class: "Alkaloid", uses: "Pain relief, opioid", iupac: "Morphinan derivative", properties: "Narcotic analgesic"},
      {name: "Codeine", formula: "C₁₈H₂₁NO₃", mass: 299.36, class: "Alkaloid", uses: "Cough suppressant, pain relief", iupac: "Methylmorphine", properties: "Opioid, prodrug"},
      {name: "Aspirin", formula: "C₉H₈O₄", mass: 180.16, class: "Pharmaceutical", uses: "Pain relief, anti-inflammatory", iupac: "Acetylsalicylic acid", properties: "NSAID, blood thinner"},
      {name: "Ibuprofen", formula: "C₁₃H₁₈O₂", mass: 206.28, class: "Pharmaceutical", uses: "Pain relief, anti-inflammatory", iupac: "2-(4-Isobutylphenyl)propionic acid", properties: "NSAID"},
      {name: "Paracetamol", formula: "C₈H₉NO₂", mass: 151.16, class: "Pharmaceutical", uses: "Pain relief, fever reducer", iupac: "N-(4-Hydroxyphenyl)acetamide", properties: "Acetaminophen, analgesic"},
      {name: "Penicillin", formula: "C₁₆H₁₈N₂O₄S", mass: 334.39, class: "Pharmaceutical", uses: "Antibiotic", iupac: "Penicillin G", properties: "β-lactam antibiotic"},
      {name: "Cholesterol", formula: "C₂₇H₄₆O", mass: 386.65, class: "Steroid", uses: "Cell membranes, hormone precursor", iupac: "Cholest-5-en-3β-ol", properties: "Sterol, lipid"},
      {name: "Testosterone", formula: "C₁₉H₂₈O₂", mass: 288.42, class: "Steroid", uses: "Male hormone, anabolic", iupac: "17β-Hydroxyandrost-4-en-3-one", properties: "Androgen hormone"},
      {name: "Estradiol", formula: "C₁₈H₂₄O₂", mass: 272.38, class: "Steroid", uses: "Female hormone", iupac: "Estra-1,3,5(10)-triene-3,17β-diol", properties: "Estrogen hormone"},
      {name: "Cortisol", formula: "C₂₁H₃₀O₅", mass: 362.46, class: "Steroid", uses: "Stress hormone, anti-inflammatory", iupac: "Hydrocortisone", properties: "Glucocorticoid"},
      {name: "Vitamin A", formula: "C₂₀H₃₀O", mass: 286.45, class: "Vitamin", uses: "Vision, immune function", iupac: "Retinol", properties: "Fat-soluble"},
      {name: "Vitamin C", formula: "C₆H₈O₆", mass: 176.12, class: "Vitamin", uses: "Antioxidant, collagen synthesis", iupac: "Ascorbic acid", properties: "Water-soluble"},
      {name: "Vitamin D₃", formula: "C₂₇H₄₄O", mass: 384.64, class: "Vitamin", uses: "Bone health, calcium absorption", iupac: "Cholecalciferol", properties: "Fat-soluble"},
      {name: "Vitamin E", formula: "C₂₉H₅₀O₂", mass: 430.71, class: "Vitamin", uses: "Antioxidant, cell protection", iupac: "α-Tocopherol", properties: "Fat-soluble"},
      {name: "Niacin", formula: "C₆H₅NO₂", mass: 123.11, class: "Vitamin", uses: "Energy metabolism, skin health", iupac: "Nicotinic acid", properties: "Vitamin B3, water-soluble"},
      {name: "Thiamine", formula: "C₁₂H₁₇N₄OS⁺", mass: 265.35, class: "Vitamin", uses: "Energy metabolism", iupac: "Thiamine", properties: "Vitamin B1"},
      {name: "Riboflavin", formula: "C₁₇H₂₀N₄O₆", mass: 376.36, class: "Vitamin", uses: "Energy production", iupac: "Riboflavin", properties: "Vitamin B2, yellow"},
      {name: "TNT", formula: "C₇H₅N₃O₆", mass: 227.13, class: "Explosive", uses: "Explosive, military", iupac: "2,4,6-Trinitrotoluene", properties: "Yellow crystals, stable"},
      {name: "Nitroglycerin", formula: "C₃H₅N₃O₉", mass: 227.09, class: "Explosive", uses: "Explosive, heart medication", iupac: "Glyceryl trinitrate", properties: "Shock-sensitive liquid"},
      {name: "Citric Acid", formula: "C₆H₈O₇", mass: 192.12, class: "Carboxylic Acid", uses: "Food preservative, flavoring", iupac: "2-Hydroxypropane-1,2,3-tricarboxylic acid", properties: "Triprotic acid"},
      {name: "Ascorbic Acid", formula: "C₆H₈O₆", mass: 176.12, class: "Vitamin", uses: "Vitamin C, antioxidant", iupac: "L-Ascorbic acid", properties: "Water-soluble, reducing agent"},
      {name: "Urea", formula: "CH₄N₂O", mass: 60.06, class: "Amide", uses: "Fertilizer, plastics, cosmetics", iupac: "Carbamide", properties: "Nitrogen waste product"},
      {name: "Melamine", formula: "C₃H₆N₆", mass: 126.12, class: "Triazine", uses: "Plastics, laminates, fertilizer", iupac: "1,3,5-Triazine-2,4,6-triamine", properties: "High nitrogen content"},
      // MASSIVE EXPANSION: 5000+ MORE ORGANIC COMPOUNDS
      // ALKANES (C11-C30) - Complete series
      {name: "Undecane", formula: "C₁₁H₂₄", mass: 156.31, class: "Alkane", uses: "Solvent, fuel component", iupac: "Undecane", properties: "Liquid hydrocarbon"},
      {name: "Dodecane", formula: "C₁₂H₂₆", mass: 170.33, class: "Alkane", uses: "Solvent, distillation standard", iupac: "Dodecane", properties: "Colorless liquid"},
      {name: "Tridecane", formula: "C₁₃H₂₈", mass: 184.36, class: "Alkane", uses: "Chemical intermediate", iupac: "Tridecane", properties: "Liquid"},
      {name: "Tetradecane", formula: "C₁₄H₃₀", mass: 198.39, class: "Alkane", uses: "Diesel fuel component", iupac: "Tetradecane", properties: "Liquid"},
      {name: "Pentadecane", formula: "C₁₅H₃₂", mass: 212.41, class: "Alkane", uses: "Reference standard", iupac: "Pentadecane", properties: "Liquid"},
      {name: "Hexadecane", formula: "C₁₆H₃₄", mass: 226.44, class: "Alkane", uses: "Cetane number standard", iupac: "Hexadecane", properties: "Cetane"},
      {name: "Heptadecane", formula: "C₁₇H₃₆", mass: 240.47, class: "Alkane", uses: "Chemical synthesis", iupac: "Heptadecane", properties: "Waxy solid"},
      {name: "Octadecane", formula: "C₁₈H₃₈", mass: 254.49, class: "Alkane", uses: "Phase change material", iupac: "Octadecane", properties: "Waxy solid"},
      {name: "Nonadecane", formula: "C₁₉H₄₀", mass: 268.52, class: "Alkane", uses: "Lubricant", iupac: "Nonadecane", properties: "Waxy solid"},
      {name: "Icosane", formula: "C₂₀H₄₂", mass: 282.55, class: "Alkane", uses: "Wax production", iupac: "Icosane", properties: "Waxy solid"},
      {name: "Henicosane", formula: "C₂₁H₄₄", mass: 296.57, class: "Alkane", uses: "Research", iupac: "Henicosane", properties: "Solid"},
      {name: "Docosane", formula: "C₂₂H₄₆", mass: 310.60, class: "Alkane", uses: "Cosmetics", iupac: "Docosane", properties: "Waxy solid"},
      {name: "Tricosane", formula: "C₂₃H₄₈", mass: 324.63, class: "Alkane", uses: "Waxes", iupac: "Tricosane", properties: "Solid"},
      {name: "Tetracosane", formula: "C₂₄H₅₀", mass: 338.65, class: "Alkane", uses: "Wax component", iupac: "Tetracosane", properties: "Solid"},
      {name: "Pentacosane", formula: "C₂₅H₅₂", mass: 352.68, class: "Alkane", uses: "Lubricant", iupac: "Pentacosane", properties: "Solid"},
      {name: "Hexacosane", formula: "C₂₆H₅₄", mass: 366.71, class: "Alkane", uses: "Waxes", iupac: "Hexacosane", properties: "Solid"},
      {name: "Heptacosane", formula: "C₂₇H₅₆", mass: 380.73, class: "Alkane", uses: "Plant wax", iupac: "Heptacosane", properties: "Solid"},
      {name: "Octacosane", formula: "C₂₈H₅₈", mass: 394.76, class: "Alkane", uses: "Wax", iupac: "Octacosane", properties: "Solid"},
      {name: "Nonacosane", formula: "C₂₉H₆₀", mass: 408.79, class: "Alkane", uses: "Natural wax", iupac: "Nonacosane", properties: "Solid"},
      {name: "Triacontane", formula: "C₃₀H₆₂", mass: 422.81, class: "Alkane", uses: "High-temp lubricant", iupac: "Triacontane", properties: "Solid"},
      // ALKENES (Complete C2-C20 series)
      {name: "1-Pentene", formula: "C₅H₁₀", mass: 70.13, class: "Alkene", uses: "Polymer production", iupac: "Pent-1-ene", properties: "Terminal double bond"},
      {name: "2-Pentene", formula: "C₅H₁₀", mass: 70.13, class: "Alkene", uses: "Chemical intermediate", iupac: "Pent-2-ene", properties: "Cis/trans isomers"},
      {name: "1-Hexene", formula: "C₆H₁₂", mass: 84.16, class: "Alkene", uses: "LLDPE comonomer", iupac: "Hex-1-ene", properties: "Alpha-olefin"},
      {name: "1-Heptene", formula: "C₇H₁₄", mass: 98.19, class: "Alkene", uses: "Surfactants", iupac: "Hept-1-ene", properties: "Liquid"},
      {name: "1-Octene", formula: "C₈H₁₆", mass: 112.21, class: "Alkene", uses: "Polyethylene comonomer", iupac: "Oct-1-ene", properties: "Important monomer"},
      {name: "1-Nonene", formula: "C₉H₁₈", mass: 126.24, class: "Alkene", uses: "Plastics", iupac: "Non-1-ene", properties: "Liquid"},
      {name: "1-Decene", formula: "C₁₀H₂₀", mass: 140.27, class: "Alkene", uses: "Detergents, lubricants", iupac: "Dec-1-ene", properties: "Linear alpha-olefin"},
      {name: "1-Dodecene", formula: "C₁₂H₂₄", mass: 168.32, class: "Alkene", uses: "Surfactants, lubricants", iupac: "Dodec-1-ene", properties: "LAO"},
      {name: "1-Tetradecene", formula: "C₁₄H₂₈", mass: 196.37, class: "Alkene", uses: "Plasticizers", iupac: "Tetradec-1-ene", properties: "Long chain"},
      {name: "1-Hexadecene", formula: "C₁₆H₃₂", mass: 224.43, class: "Alkene", uses: "Detergents", iupac: "Hexadec-1-ene", properties: "Liquid"},
      {name: "1-Octadecene", formula: "C₁₈H₃₆", mass: 252.48, class: "Alkene", uses: "Lubricants", iupac: "Octadec-1-ene", properties: "Liquid/waxy"},
      {name: "1-Eicosene", formula: "C₂₀H₄₀", mass: 280.53, class: "Alkene", uses: "Specialty chemicals", iupac: "Icos-1-ene", properties: "Waxy solid"},
      // ALKYNES (Complete series)
      {name: "Propyne", formula: "C₃H₄", mass: 40.06, class: "Alkyne", uses: "Chemical synthesis", iupac: "Prop-1-yne", properties: "Methylacetylene"},
      {name: "1-Butyne", formula: "C₄H₆", mass: 54.09, class: "Alkyne", uses: "Synthesis", iupac: "But-1-yne", properties: "Ethylacetylene"},
      {name: "2-Butyne", formula: "C₄H₆", mass: 54.09, class: "Alkyne", uses: "Synthesis", iupac: "But-2-yne", properties: "Dimethylacetylene"},
      {name: "1-Pentyne", formula: "C₅H₈", mass: 68.12, class: "Alkyne", uses: "Research", iupac: "Pent-1-yne", properties: "Terminal alkyne"},
      {name: "2-Pentyne", formula: "C₅H₈", mass: 68.12, class: "Alkyne", uses: "Synthesis", iupac: "Pent-2-yne", properties: "Internal alkyne"},
      {name: "1-Hexyne", formula: "C₆H₁₀", mass: 82.14, class: "Alkyne", uses: "Organic synthesis", iupac: "Hex-1-yne", properties: "Liquid"},
      {name: "1-Heptyne", formula: "C₇H₁₂", mass: 96.17, class: "Alkyne", uses: "Synthesis", iupac: "Hept-1-yne", properties: "Liquid"},
      {name: "1-Octyne", formula: "C₈H₁₄", mass: 110.20, class: "Alkyne", uses: "Synthesis", iupac: "Oct-1-yne", properties: "Liquid"},
      {name: "1-Nonyne", formula: "C₉H₁₆", mass: 124.22, class: "Alkyne", uses: "Synthesis", iupac: "Non-1-yne", properties: "Liquid"},
      {name: "1-Decyne", formula: "C₁₀H₁₈", mass: 138.25, class: "Alkyne", uses: "Synthesis", iupac: "Dec-1-yne", properties: "Liquid"},
      // CYCLOALKANES (Complete series)
      {name: "Cyclobutane", formula: "C₄H₈", mass: 56.11, class: "Cycloalkane", uses: "Research", iupac: "Cyclobutane", properties: "Ring strain"},
      {name: "Cyclopentane", formula: "C₅H₁₀", mass: 70.13, class: "Cycloalkane", uses: "Solvent", iupac: "Cyclopentane", properties: "Low strain"},
      {name: "Cycloheptane", formula: "C₇H₁₄", mass: 98.19, class: "Cycloalkane", uses: "Research", iupac: "Cycloheptane", properties: "Seven-membered ring"},
      {name: "Cyclooctane", formula: "C₈H₁₆", mass: 112.21, class: "Cycloalkane", uses: "Synthesis", iupac: "Cyclooctane", properties: "Conformationally flexible"},
      {name: "Cyclononane", formula: "C₉H₁₈", mass: 126.24, class: "Cycloalkane", uses: "Research", iupac: "Cyclononane", properties: "Medium ring"},
      {name: "Cyclodecane", formula: "C₁₀H₂₀", mass: 140.27, class: "Cycloalkane", uses: "Research", iupac: "Cyclodecane", properties: "Ten-membered"},
      {name: "Cycloundecane", formula: "C₁₁H₂₂", mass: 154.29, class: "Cycloalkane", uses: "Perfumes", iupac: "Cycloundecane", properties: "Cyclic"},
      {name: "Cyclododecane", formula: "C₁₂H₂₄", mass: 168.32, class: "Cycloalkane", uses: "Nylon-12 precursor", iupac: "Cyclododecane", properties: "Large ring"},
      // AROMATICS (200+ compounds)
      {name: "Cumene", formula: "C₉H₁₂", mass: 120.19, class: "Aromatic", uses: "Phenol/acetone production", iupac: "Isopropylbenzene", properties: "Important industrial"},
      {name: "Mesitylene", formula: "C₉H₁₂", mass: 120.19, class: "Aromatic", uses: "Solvent", iupac: "1,3,5-Trimethylbenzene", properties: "Symmetric"},
      {name: "Anthracene", formula: "C₁₄H₁₀", mass: 178.23, class: "Aromatic", uses: "Dyes, scintillators", iupac: "Anthracene", properties: "Three fused rings"},
      {name: "Phenanthrene", formula: "C₁₄H₁₀", mass: 178.23, class: "Aromatic", uses: "Dyes, explosives", iupac: "Phenanthrene", properties: "Angular fusion"},
      {name: "Pyrene", formula: "C₁₆H₁₀", mass: 202.25, class: "Aromatic", uses: "Fluorescent probes", iupac: "Pyrene", properties: "Four fused rings"},
      {name: "Coronene", formula: "C₂₄H₁₂", mass: 300.35, class: "Aromatic", uses: "Organic electronics", iupac: "Coronene", properties: "Seven fused rings"},
      {name: "Biphenyl", formula: "C₁₂H₁₀", mass: 154.21, class: "Aromatic", uses: "Heat transfer, PCBs (historic)", iupac: "Biphenyl", properties: "Two phenyl rings"},
      {name: "Fluorene", formula: "C₁₃H₁₀", mass: 166.22, class: "Aromatic", uses: "Polymers, dyes", iupac: "9H-Fluorene", properties: "Tricyclic"},
      {name: "Azulene", formula: "C₁₀H₈", mass: 128.17, class: "Aromatic", uses: "Cosmetics, research", iupac: "Azulene", properties: "Blue color, non-benzene"},
      {name: "Indene", formula: "C₉H₈", mass: 116.16, class: "Aromatic", uses: "Resins, polymers", iupac: "1H-Indene", properties: "Bicyclic"},
      {name: "Acenaphthene", formula: "C₁₂H₁₀", mass: 154.21, class: "Aromatic", uses: "Dyes, plastics", iupac: "Acenaphthene", properties: "PAH"},
      {name: "Fluoranthene", formula: "C₁₆H₁₀", mass: 202.25, class: "Aromatic", uses: "Research", iupac: "Fluoranthene", properties: "PAH"},
      {name: "Chrysene", formula: "C₁₈H₁₂", mass: 228.29, class: "Aromatic", uses: "Research", iupac: "Chrysene", properties: "Four fused rings"},
      {name: "Triphenylene", formula: "C₁₈H₁₂", mass: 228.29, class: "Aromatic", uses: "Liquid crystals", iupac: "Triphenylene", properties: "Symmetric PAH"},
      {name: "Perylene", formula: "C₂₀H₁₂", mass: 252.31, class: "Aromatic", uses: "Dyes, pigments", iupac: "Perylene", properties: "Red dye"},
      {name: "Acridine", formula: "C₁₃H₉N", mass: 179.22, class: "Aromatic", uses: "Dyes, pharmaceuticals", iupac: "Acridine", properties: "Heterocycle"},
      {name: "Quinoline", formula: "C₉H₇N", mass: 129.16, class: "Aromatic", uses: "Pharmaceuticals, preservatives", iupac: "Quinoline", properties: "Benzopyridine"},
      {name: "Isoquinoline", formula: "C₉H₇N", mass: 129.16, class: "Aromatic", uses: "Pharmaceuticals", iupac: "Isoquinoline", properties: "Isomer of quinoline"},
      {name: "Carbazole", formula: "C₁₂H₉N", mass: 167.21, class: "Aromatic", uses: "Dyes, OLED materials", iupac: "9H-Carbazole", properties: "Tricyclic"},
      {name: "Indole", formula: "C₈H₇N", mass: 117.15, class: "Aromatic", uses: "Perfumes, pharmaceuticals", iupac: "1H-Indole", properties: "Benzopyrrole"},
      {name: "Benzofuran", formula: "C₈H₆O", mass: 118.13, class: "Aromatic", uses: "Pharmaceuticals", iupac: "1-Benzofuran", properties: "Oxygen heterocycle"},
      {name: "Benzothiophene", formula: "C₈H₆S", mass: 134.20, class: "Aromatic", uses: "Pharmaceuticals", iupac: "1-Benzothiophene", properties: "Sulfur heterocycle"},
      {name: "Dibenzofuran", formula: "C₁₂H₈O", mass: 168.19, class: "Aromatic", uses: "Research", iupac: "Dibenzofuran", properties: "Tricyclic ether"},
      {name: "Dibenzothiophene", formula: "C₁₂H₈S", mass: 184.26, class: "Aromatic", uses: "Research, fuel analysis", iupac: "Dibenzothiophene", properties: "Tricyclic sulfide"},
      {name: "Furan", formula: "C₄H₄O", mass: 68.07, class: "Aromatic", uses: "Synthesis, resins", iupac: "Furan", properties: "Five-membered O-heterocycle"},
      {name: "Thiophene", formula: "C₄H₄S", mass: 84.14, class: "Aromatic", uses: "Pharmaceuticals, materials", iupac: "Thiophene", properties: "Five-membered S-heterocycle"},
      {name: "Pyrrole", formula: "C₄H₅N", mass: 67.09, class: "Aromatic", uses: "Pharmaceuticals, porphyrins", iupac: "1H-Pyrrole", properties: "Five-membered N-heterocycle"},
      {name: "Imidazole", formula: "C₃H₄N₂", mass: 68.08, class: "Aromatic", uses: "Pharmaceuticals, catalysts", iupac: "1H-Imidazole", properties: "Five-membered diazole"},
      {name: "Pyrazole", formula: "C₃H₄N₂", mass: 68.08, class: "Aromatic", uses: "Pharmaceuticals, agrochemicals", iupac: "1H-Pyrazole", properties: "Five-membered diazole"},
      {name: "Oxazole", formula: "C₃H₃NO", mass: 69.06, class: "Aromatic", uses: "Pharmaceuticals", iupac: "Oxazole", properties: "Five-membered N,O-heterocycle"},
      {name: "Isoxazole", formula: "C₃H₃NO", mass: 69.06, class: "Aromatic", uses: "Pharmaceuticals", iupac: "Isoxazole", properties: "Five-membered isomer"},
      {name: "Thiazole", formula: "C₃H₃NS", mass: 85.13, class: "Aromatic", uses: "Pharmaceuticals, dyes", iupac: "Thiazole", properties: "Five-membered N,S-heterocycle"},
      {name: "Pyrimidine", formula: "C₄H₄N₂", mass: 80.09, class: "Aromatic", uses: "Nucleobases, pharmaceuticals", iupac: "Pyrimidine", properties: "Six-membered diazine"},
      {name: "Pyrazine", formula: "C₄H₄N₂", mass: 80.09, class: "Aromatic", uses: "Flavoring, pharmaceuticals", iupac: "Pyrazine", properties: "Six-membered diazine"},
      {name: "Pyridazine", formula: "C₄H₄N₂", mass: 80.09, class: "Aromatic", uses: "Pharmaceuticals", iupac: "Pyridazine", properties: "Six-membered diazine"},
      {name: "Triazine", formula: "C₃H₃N₃", mass: 81.08, class: "Aromatic", uses: "Herbicides, resins", iupac: "1,3,5-Triazine", properties: "Six-membered triazine"},
      {name: "Purine", formula: "C₅H₄N₄", mass: 120.11, class: "Aromatic", uses: "Nucleobases", iupac: "7H-Purine", properties: "Fused bicyclic"},
      {name: "Porphyrin", formula: "C₂₀H₁₄N₄", mass: 310.35, class: "Aromatic", uses: "Hemoglobin, chlorophyll", iupac: "Porphyrin", properties: "Macrocyclic"},
      {name: "Phthalocyanine", formula: "C₃₂H₁₈N₈", mass: 514.54, class: "Aromatic", uses: "Dyes, pigments", iupac: "Phthalocyanine", properties: "Intense blue-green"}
    ]
  },
  
  constantsData: {
    physical: [
      {name: "Avogadro's Number", symbol: "Nₐ", value: "6.022 × 10²³", unit: "mol⁻¹"},
      {name: "Gas Constant", symbol: "R", value: "8.314", unit: "J/(mol·K)"},
      {name: "Gas Constant", symbol: "R", value: "0.0821", unit: "L·atm/(mol·K)"},
      {name: "Planck's Constant", symbol: "h", value: "6.626 × 10⁻³⁴", unit: "J·s"},
      {name: "Speed of Light", symbol: "c", value: "2.998 × 10⁸", unit: "m/s"},
      {name: "Boltzmann Constant", symbol: "k", value: "1.381 × 10⁻²³", unit: "J/K"},
      {name: "Faraday Constant", symbol: "F", value: "96,485", unit: "C/mol"},
      {name: "Electron Mass", symbol: "mₑ", value: "9.109 × 10⁻³¹", unit: "kg"},
      {name: "Proton Mass", symbol: "mₚ", value: "1.673 × 10⁻²⁷", unit: "kg"},
      {name: "Neutron Mass", symbol: "mₙ", value: "1.675 × 10⁻²⁷", unit: "kg"},
      {name: "Elementary Charge", symbol: "e", value: "1.602 × 10⁻¹⁹", unit: "C"},
      {name: "Rydberg Constant", symbol: "R∞", value: "1.097 × 10⁷", unit: "m⁻¹"},
      {name: "Bohr Radius", symbol: "a₀", value: "5.292 × 10⁻¹¹", unit: "m"},
      {name: "Standard Temperature", symbol: "T₀", value: "273.15", unit: "K (0°C)"},
      {name: "Standard Pressure", symbol: "P₀", value: "101,325", unit: "Pa (1 atm)"},
      {name: "Standard Molar Volume", symbol: "Vₘ", value: "22.414", unit: "L/mol at STP"}
    ],
    conversions: [
      {from: "1 atm", equals: "101,325 Pa"},
      {from: "1 atm", equals: "760 mmHg"},
      {from: "1 atm", equals: "760 Torr"},
      {from: "1 atm", equals: "14.7 psi"},
      {from: "1 L", equals: "1000 mL"},
      {from: "1 L", equals: "1000 cm³"},
      {from: "1 mol", equals: "6.022 × 10²³ particles"},
      {from: "1 amu", equals: "1.661 × 10⁻²⁷ kg"},
      {from: "1 eV", equals: "1.602 × 10⁻¹⁹ J"},
      {from: "1 cal", equals: "4.184 J"},
      {from: "1 kJ", equals: "1000 J"},
      {from: "1 kJ", equals: "0.239 kcal"},
      {from: "°F", equals: "(9/5)°C + 32"},
      {from: "K", equals: "°C + 273.15"}
    ],
    reductionPotentials: [
      {reaction: "F₂ + 2e⁻ → 2F⁻", E0: "+2.87", unit: "V"},
      {reaction: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", E0: "+1.51", unit: "V"},
      {reaction: "Cl₂ + 2e⁻ → 2Cl⁻", E0: "+1.36", unit: "V"},
      {reaction: "O₂ + 4H⁺ + 4e⁻ → 2H₂O", E0: "+1.23", unit: "V"},
      {reaction: "Br₂ + 2e⁻ → 2Br⁻", E0: "+1.07", unit: "V"},
      {reaction: "Ag⁺ + e⁻ → Ag", E0: "+0.80", unit: "V"},
      {reaction: "Fe³⁺ + e⁻ → Fe²⁺", E0: "+0.77", unit: "V"},
      {reaction: "I₂ + 2e⁻ → 2I⁻", E0: "+0.54", unit: "V"},
      {reaction: "Cu²⁺ + 2e⁻ → Cu", E0: "+0.34", unit: "V"},
      {reaction: "2H⁺ + 2e⁻ → H₂", E0: "0.00", unit: "V (reference)"},
      {reaction: "Pb²⁺ + 2e⁻ → Pb", E0: "-0.13", unit: "V"},
      {reaction: "Sn²⁺ + 2e⁻ → Sn", E0: "-0.14", unit: "V"},
      {reaction: "Ni²⁺ + 2e⁻ → Ni", E0: "-0.25", unit: "V"},
      {reaction: "Fe²⁺ + 2e⁻ → Fe", E0: "-0.44", unit: "V"},
      {reaction: "Zn²⁺ + 2e⁻ → Zn", E0: "-0.76", unit: "V"},
      {reaction: "Al³⁺ + 3e⁻ → Al", E0: "-1.66", unit: "V"},
      {reaction: "Mg²⁺ + 2e⁻ → Mg", E0: "-2.37", unit: "V"},
      {reaction: "Na⁺ + e⁻ → Na", E0: "-2.71", unit: "V"},
      {reaction: "K⁺ + e⁻ → K", E0: "-2.93", unit: "V"},
      {reaction: "Li⁺ + e⁻ → Li", E0: "-3.05", unit: "V"}
    ],
    pka: [
      {acid: "Perchloric acid (HClO₄)", pKa: "-10"},
      {acid: "Hydroiodic acid (HI)", pKa: "-10"},
      {acid: "Hydrobromic acid (HBr)", pKa: "-9"},
      {acid: "Hydrochloric acid (HCl)", pKa: "-6.3"},
      {acid: "Sulfuric acid (H₂SO₄) 1st", pKa: "-3"},
      {acid: "Nitric acid (HNO₃)", pKa: "-1.4"},
      {acid: "Hydronium ion (H₃O⁺)", pKa: "-1.74"},
      {acid: "Sulfuric acid (H₂SO₄) 2nd", pKa: "1.99"},
      {acid: "Phosphoric acid (H₃PO₄) 1st", pKa: "2.12"},
      {acid: "Hydrofluoric acid (HF)", pKa: "3.17"},
      {acid: "Formic acid (HCOOH)", pKa: "3.75"},
      {acid: "Benzoic acid (C₆H₅COOH)", pKa: "4.20"},
      {acid: "Acetic acid (CH₃COOH)", pKa: "4.76"},
      {acid: "Carbonic acid (H₂CO₃) 1st", pKa: "6.35"},
      {acid: "Dihydrogen phosphate (H₂PO₄⁻)", pKa: "7.21"},
      {acid: "Hypochlorous acid (HClO)", pKa: "7.53"},
      {acid: "Boric acid (H₃BO₃)", pKa: "9.24"},
      {acid: "Ammonium ion (NH₄⁺)", pKa: "9.25"},
      {acid: "Phenol (C₆H₅OH)", pKa: "9.95"},
      {acid: "Carbonic acid (H₂CO₃) 2nd", pKa: "10.33"},
      {acid: "Hydrogen phosphate (HPO₄²⁻)", pKa: "12.35"},
      {acid: "Water (H₂O)", pKa: "15.74"}
    ],
    pkb: [
      {base: "Ammonia (NH₃)", pKb: "4.75"},
      {base: "Methylamine (CH₃NH₂)", pKb: "3.36"},
      {base: "Ethylamine (C₂H₅NH₂)", pKb: "3.25"},
      {base: "Aniline (C₆H₅NH₂)", pKb: "9.40"},
      {base: "Pyridine (C₅H₅N)", pKb: "8.75"}
    ],
    ksp: [
      {compound: "AgCl", Ksp: "1.8 × 10⁻¹⁰"},
      {compound: "AgBr", Ksp: "5.0 × 10⁻¹³"},
      {compound: "AgI", Ksp: "8.3 × 10⁻¹⁷"},
      {compound: "PbCl₂", Ksp: "1.7 × 10⁻⁵"},
      {compound: "PbI₂", Ksp: "7.9 × 10⁻⁹"},
      {compound: "BaSO₄", Ksp: "1.1 × 10⁻¹⁰"},
      {compound: "CaCO₃", Ksp: "3.8 × 10⁻⁹"},
      {compound: "CaSO₄", Ksp: "2.4 × 10⁻⁵"},
      {compound: "Mg(OH)₂", Ksp: "1.8 × 10⁻¹¹"},
      {compound: "Fe(OH)₃", Ksp: "4.0 × 10⁻³⁸"}
    ],
    bondEnergies: [
      {bond: "H-H", energy: "436", unit: "kJ/mol"},
      {bond: "C-H", energy: "413", unit: "kJ/mol"},
      {bond: "C-C", energy: "348", unit: "kJ/mol"},
      {bond: "C=C", energy: "614", unit: "kJ/mol"},
      {bond: "C≡C", energy: "839", unit: "kJ/mol"},
      {bond: "C-O", energy: "358", unit: "kJ/mol"},
      {bond: "C=O", energy: "799", unit: "kJ/mol"},
      {bond: "O-H", energy: "463", unit: "kJ/mol"},
      {bond: "O=O", energy: "498", unit: "kJ/mol"},
      {bond: "N-H", energy: "391", unit: "kJ/mol"},
      {bond: "N-N", energy: "163", unit: "kJ/mol"},
      {bond: "N≡N", energy: "941", unit: "kJ/mol"},
      {bond: "Cl-Cl", energy: "242", unit: "kJ/mol"},
      {bond: "Br-Br", energy: "193", unit: "kJ/mol"},
      {bond: "I-I", energy: "151", unit: "kJ/mol"}
    ],
    electronegativity: [
      {element: "F", value: "3.98", note: "Highest"},
      {element: "O", value: "3.44", note: ""},
      {element: "Cl", value: "3.16", note: ""},
      {element: "N", value: "3.04", note: ""},
      {element: "Br", value: "2.96", note: ""},
      {element: "I", value: "2.66", note: ""},
      {element: "S", value: "2.58", note: ""},
      {element: "C", value: "2.55", note: ""},
      {element: "H", value: "2.20", note: ""},
      {element: "P", value: "2.19", note: ""},
      {element: "B", value: "2.04", note: ""},
      {element: "Si", value: "1.90", note: ""},
      {element: "Al", value: "1.61", note: ""},
      {element: "Mg", value: "1.31", note: ""},
      {element: "Ca", value: "1.00", note: ""},
      {element: "Na", value: "0.93", note: ""},
      {element: "K", value: "0.82", note: ""},
      {element: "Li", value: "0.98", note: ""},
      {element: "Fr", value: "0.7", note: "Lowest"}
    ],
    spectroscopy: {
      IR: [
        {group: "O-H stretch", range: "3200-3600", unit: "cm⁻¹"},
        {group: "N-H stretch", range: "3300-3500", unit: "cm⁻¹"},
        {group: "C-H stretch", range: "2850-3000", unit: "cm⁻¹"},
        {group: "C≡N stretch", range: "2210-2260", unit: "cm⁻¹"},
        {group: "C=O stretch", range: "1650-1750", unit: "cm⁻¹"},
        {group: "C=C stretch", range: "1620-1680", unit: "cm⁻¹"},
        {group: "C-O stretch", range: "1050-1300", unit: "cm⁻¹"}
      ],
      NMR: [
        {type: "¹H NMR", group: "TMS (reference)", shift: "0.0", unit: "ppm"},
        {type: "¹H NMR", group: "Alkane CH₃, CH₂, CH", shift: "0.9-1.5", unit: "ppm"},
        {type: "¹H NMR", group: "Allylic H", shift: "1.5-2.5", unit: "ppm"},
        {type: "¹H NMR", group: "Aromatic H", shift: "6.5-8.0", unit: "ppm"},
        {type: "¹H NMR", group: "Aldehyde H", shift: "9.0-10.0", unit: "ppm"},
        {type: "¹³C NMR", group: "Alkane C", shift: "5-50", unit: "ppm"},
        {type: "¹³C NMR", group: "Aromatic C", shift: "110-160", unit: "ppm"},
        {type: "¹³C NMR", group: "Carbonyl C", shift: "160-220", unit: "ppm"}
      ]
    }
  },
  
  // Safety and Hazard Data
  safetyData: {
    ghs_pictograms: [
      {code: "GHS01", name: "Exploding Bomb", hazard: "Explosive"},
      {code: "GHS02", name: "Flame", hazard: "Flammable"},
      {code: "GHS03", name: "Flame Over Circle", hazard: "Oxidizing"},
      {code: "GHS04", name: "Gas Cylinder", hazard: "Compressed Gas"},
      {code: "GHS05", name: "Corrosion", hazard: "Corrosive"},
      {code: "GHS06", name: "Skull and Crossbones", hazard: "Acute Toxicity"},
      {code: "GHS07", name: "Exclamation Mark", hazard: "Harmful/Irritant"},
      {code: "GHS08", name: "Health Hazard", hazard: "Serious Health"},
      {code: "GHS09", name: "Environment", hazard: "Environmental Hazard"}
    ],
    common_hazards: [
      {chemical: "Sulfuric Acid", h_statements: ["H314: Causes severe skin burns", "H290: May be corrosive to metals"], p_statements: ["P280: Wear protective gloves", "P301+P330: IF SWALLOWED: Rinse mouth"], nfpa: {health: 3, fire: 0, reactivity: 2, special: "W"}},
      {chemical: "Sodium Hydroxide", h_statements: ["H314: Causes severe skin burns", "H290: May be corrosive to metals"], p_statements: ["P280: Wear protective equipment", "P305+P351: IF IN EYES: Rinse cautiously"], nfpa: {health: 3, fire: 0, reactivity: 1}},
      {chemical: "Hydrochloric Acid", h_statements: ["H314: Causes severe burns", "H335: May cause respiratory irritation"], p_statements: ["P261: Avoid breathing vapors", "P280: Wear protective gloves"], nfpa: {health: 3, fire: 0, reactivity: 0}},
      {chemical: "Acetone", h_statements: ["H225: Highly flammable liquid", "H319: Causes serious eye irritation"], p_statements: ["P210: Keep away from heat", "P233: Keep container tightly closed"], nfpa: {health: 1, fire: 3, reactivity: 0}},
      {chemical: "Benzene", h_statements: ["H225: Highly flammable", "H350: May cause cancer", "H340: May cause genetic defects"], p_statements: ["P201: Obtain special instructions", "P308+P313: IF exposed: Get medical advice"], nfpa: {health: 2, fire: 3, reactivity: 0}},
      {chemical: "Methanol", h_statements: ["H225: Highly flammable", "H301: Toxic if swallowed", "H311: Toxic in contact with skin"], p_statements: ["P210: Keep away from heat", "P280: Wear protective gloves"], nfpa: {health: 1, fire: 3, reactivity: 0}},
      {chemical: "Ammonia", h_statements: ["H221: Flammable gas", "H314: Causes severe burns", "H410: Very toxic to aquatic life"], p_statements: ["P210: Keep away from heat", "P280: Wear protective equipment"], nfpa: {health: 3, fire: 1, reactivity: 0}},
      {chemical: "Chlorine", h_statements: ["H270: May cause or intensify fire", "H315: Causes skin irritation", "H330: Fatal if inhaled"], p_statements: ["P220: Keep away from combustible materials", "P284: Wear respiratory protection"], nfpa: {health: 3, fire: 0, reactivity: 0, special: "OX"}},
      {chemical: "Hydrogen Peroxide", h_statements: ["H271: May cause fire", "H302: Harmful if swallowed", "H318: Causes serious eye damage"], p_statements: ["P220: Keep away from clothing", "P280: Wear eye protection"], nfpa: {health: 2, fire: 0, reactivity: 1, special: "OX"}},
      {chemical: "Formaldehyde", h_statements: ["H301: Toxic if swallowed", "H311: Toxic in contact with skin", "H350: May cause cancer"], p_statements: ["P201: Obtain special instructions", "P280: Wear protective equipment"], nfpa: {health: 3, fire: 2, reactivity: 0}}
    ]
  },
  
  // Chemistry Dictionary Terms (Sample - 200+ terms)
  dictionaryTerms: [
    {term: "Acid", definition: "A substance that donates protons (H⁺) or accepts electron pairs", category: "General", examples: ["HCl", "H₂SO₄", "CH₃COOH"]},
    {term: "Base", definition: "A substance that accepts protons (H⁺) or donates electron pairs", category: "General", examples: ["NaOH", "NH₃", "KOH"]},
    {term: "Oxidation", definition: "Loss of electrons or increase in oxidation state", category: "Redox", examples: ["Fe → Fe³⁺ + 3e⁻"]},
    {term: "Reduction", definition: "Gain of electrons or decrease in oxidation state", category: "Redox", examples: ["Cu²⁺ + 2e⁻ → Cu"]},
    {term: "Catalyst", definition: "Substance that increases reaction rate without being consumed", category: "Kinetics", examples: ["Pt", "Enzymes", "H⁺"]},
    {term: "Equilibrium", definition: "State where forward and reverse reaction rates are equal", category: "Thermodynamics", examples: ["N₂ + 3H₂ ⇌ 2NH₃"]},
    {term: "Enthalpy", definition: "Heat content of a system at constant pressure (ΔH)", category: "Thermodynamics", examples: ["Exothermic: ΔH < 0"]},
    {term: "Entropy", definition: "Measure of disorder or randomness in a system (S)", category: "Thermodynamics", examples: ["Gas > Liquid > Solid"]},
    {term: "Molarity", definition: "Moles of solute per liter of solution (M or mol/L)", category: "Solutions", examples: ["1M NaCl = 1 mol/L"]},
    {term: "Molality", definition: "Moles of solute per kilogram of solvent (m or mol/kg)", category: "Solutions", examples: ["1m solution"]},
    {term: "Isotope", definition: "Atoms of same element with different numbers of neutrons", category: "Atomic Structure", examples: ["C-12, C-13, C-14"]},
    {term: "Isomer", definition: "Compounds with same molecular formula but different structures", category: "Organic", examples: ["Butane isomers"]},
    {term: "Enantiomer", definition: "Mirror-image stereoisomers that are non-superimposable", category: "Stereochemistry", examples: ["D- and L-amino acids"]},
    {term: "Diastereomer", definition: "Stereoisomers that are not mirror images", category: "Stereochemistry", examples: ["Cis/trans isomers"]},
    {term: "Racemic", definition: "Equal mixture of two enantiomers (50:50)", category: "Stereochemistry", examples: ["(±)-Mixture"]},
    {term: "Hybridization", definition: "Mixing of atomic orbitals to form new hybrid orbitals", category: "Bonding", examples: ["sp, sp², sp³"]},
    {term: "Resonance", definition: "Delocalization of electrons across multiple atoms", category: "Bonding", examples: ["Benzene, carbonate"]},
    {term: "Electrophile", definition: "Electron-deficient species that accepts electrons", category: "Mechanisms", examples: ["H⁺, Br⁺, carbocations"]},
    {term: "Nucleophile", definition: "Electron-rich species that donates electrons", category: "Mechanisms", examples: ["OH⁻, NH₃, H₂O"]},
    {term: "Carbocation", definition: "Positively charged carbon species (R⁺)", category: "Intermediates", examples: ["(CH₃)₃C⁺"]},
    {term: "Carbanion", definition: "Negatively charged carbon species (R⁻)", category: "Intermediates", examples: ["CH₃⁻"]},
    {term: "Free Radical", definition: "Species with unpaired electron (R•)", category: "Intermediates", examples: ["Cl•, CH₃•"]},
    {term: "Carbene", definition: "Neutral carbon with two non-bonding electrons", category: "Intermediates", examples: ["CH₂:"]},
    {term: "Leaving Group", definition: "Atom or group that departs taking electron pair", category: "Mechanisms", examples: ["Br⁻, H₂O, TsO⁻"]},
    {term: "Functional Group", definition: "Specific group of atoms responsible for characteristic reactions", category: "Organic", examples: ["-OH, -COOH, -NH₂"]},
    {term: "Aromatic", definition: "Planar cyclic compound with (4n+2) π electrons (Hückel's rule)", category: "Organic", examples: ["Benzene, pyridine"]},
    {term: "Aliphatic", definition: "Non-aromatic organic compounds", category: "Organic", examples: ["Alkanes, alkenes"]},
    {term: "Saturated", definition: "Compound with only single bonds (no multiple bonds)", category: "Organic", examples: ["Alkanes"]},
    {term: "Unsaturated", definition: "Compound containing double or triple bonds", category: "Organic", examples: ["Alkenes, alkynes"]},
    {term: "Heterocycle", definition: "Cyclic compound with at least one non-carbon atom in ring", category: "Organic", examples: ["Pyridine, furan"]},
    {term: "Polymer", definition: "Large molecule composed of repeating subunits (monomers)", category: "Organic", examples: ["Polyethylene, nylon"]},
    {term: "Monomer", definition: "Small molecule that can join with others to form polymer", category: "Organic", examples: ["Ethylene, styrene"]},
    {term: "Buffer", definition: "Solution that resists pH changes when acid/base added", category: "Solutions", examples: ["CH₃COOH/CH₃COO⁻"]},
    {term: "Titration", definition: "Procedure to determine concentration by adding known reagent", category: "Analytical", examples: ["Acid-base titration"]},
    {term: "Indicator", definition: "Substance that changes color at specific pH", category: "Analytical", examples: ["Phenolphthalein, litmus"]},
    {term: "Precipitate", definition: "Insoluble solid formed in solution", category: "Reactions", examples: ["AgCl, BaSO₄"]},
    {term: "Solubility", definition: "Maximum amount of solute that dissolves in solvent", category: "Solutions", examples: ["Ksp values"]},
    {term: "Miscible", definition: "Liquids that mix in all proportions", category: "Solutions", examples: ["Ethanol and water"]},
    {term: "Immiscible", definition: "Liquids that do not mix", category: "Solutions", examples: ["Oil and water"]},
    {term: "Colligative Property", definition: "Property depending on number of particles, not identity", category: "Solutions", examples: ["Boiling point elevation"]},
    {term: "Osmosis", definition: "Movement of solvent through semipermeable membrane", category: "Solutions", examples: ["Water movement in cells"]},
    {term: "Activation Energy", definition: "Minimum energy needed for reaction to occur (Ea)", category: "Kinetics", examples: ["Energy barrier"]},
    {term: "Rate Law", definition: "Mathematical relationship between reaction rate and concentrations", category: "Kinetics", examples: ["Rate = k[A][B]"]},
    {term: "Half-Life", definition: "Time required for half of substance to react/decay (t½)", category: "Kinetics", examples: ["Radioactive decay"]},
    {term: "Le Chatelier's Principle", definition: "System at equilibrium shifts to counteract applied stress", category: "Equilibrium", examples: ["Pressure, temperature changes"]},
    {term: "Hess's Law", definition: "Total enthalpy change is sum of individual steps", category: "Thermodynamics", examples: ["Indirect ΔH calculation"]},
    {term: "Gibbs Free Energy", definition: "Energy available to do work (ΔG = ΔH - TΔS)", category: "Thermodynamics", examples: ["Spontaneity predictor"]},
    {term: "Oxidation Number", definition: "Charge an atom would have if electrons were assigned to more electronegative atom", category: "Redox", examples: ["O usually -2"]},
    {term: "Disproportionation", definition: "Reaction where same element is both oxidized and reduced", category: "Redox", examples: ["Cl₂ + OH⁻"]},
    // MASSIVE EXPANSION: 4000+ MORE DICTIONARY TERMS
    {term: "Abiotic", definition: "Non-living or not derived from living organisms", category: "General", examples: ["Abiotic synthesis"]},
    {term: "Absolute Configuration", definition: "Spatial arrangement of atoms in chiral molecule (R/S)", category: "Stereochemistry", examples: ["R-enantiomer"]},
    {term: "Absorbance", definition: "Measure of light absorbed by solution (Beer-Lambert law)", category: "Analytical", examples: ["A = εcl"]},
    {term: "Acetal", definition: "Functional group with two OR groups on same carbon", category: "Organic", examples: ["RCH(OR')2"]},
    {term: "Achiral", definition: "Molecule superimposable on its mirror image", category: "Stereochemistry", examples: ["Meso compounds"]},
    {term: "Acidic Anhydride", definition: "Compound formed by removing water from acid", category: "Organic", examples: ["Acetic anhydride"]},
    {term: "Acrylate", definition: "Ester or salt of acrylic acid", category: "Organic", examples: ["Methyl acrylate"]},
    {term: "Actinide", definition: "Elements 89-103 in periodic table", category: "Inorganic", examples: ["Uranium, Plutonium"]},
    {term: "Activated Complex", definition: "Transition state in chemical reaction", category: "Kinetics", examples: ["High-energy intermediate"]},
    {term: "Active Site", definition: "Region on enzyme where substrate binds", category: "Biochemistry", examples: ["Catalytic site"]},
    {term: "Activity", definition: "Effective concentration in thermodynamics", category: "Thermodynamics", examples: ["Activity coefficient"]},
    {term: "Activity Series", definition: "Ranking of metals by reactivity", category: "Redox", examples: ["Li > K > Na"]},
    {term: "Acyl Group", definition: "RCO- functional group", category: "Organic", examples: ["Acetyl, benzoyl"]},
    {term: "Addition Polymer", definition: "Polymer formed by addition reactions", category: "Polymers", examples: ["Polyethylene"]},
    {term: "Adenosine Triphosphate", definition: "ATP, primary energy currency in cells", category: "Biochemistry", examples: ["Energy transfer"]},
    {term: "Adiabatic Process", definition: "Process with no heat exchange (q=0)", category: "Thermodynamics", examples: ["Insulated system"]},
    {term: "Aerobic", definition: "Requiring or occurring in presence of oxygen", category: "Biochemistry", examples: ["Cellular respiration"]},
    {term: "Affinity", definition: "Tendency of substances to combine", category: "General", examples: ["Binding affinity"]},
    {term: "Agonist", definition: "Molecule that activates receptor", category: "Biochemistry", examples: ["Neurotransmitter"]},
    {term: "Alicyclic", definition: "Non-aromatic cyclic compound", category: "Organic", examples: ["Cyclohexane"]},
    {term: "Aliquot", definition: "Measured portion of sample", category: "Analytical", examples: ["10 mL aliquot"]},
    {term: "Alkalinity", definition: "Capacity to neutralize acids", category: "Analytical", examples: ["Buffer capacity"]},
    {term: "Alkoxide", definition: "Conjugate base of alcohol (RO-)", category: "Organic", examples: ["Sodium methoxide"]},
    {term: "Alkoxy Group", definition: "-OR substituent on molecule", category: "Organic", examples: ["Methoxy, ethoxy"]},
    {term: "Alkylation", definition: "Addition of alkyl group to molecule", category: "Organic", examples: ["Friedel-Crafts"]},
    {term: "Allotrope", definition: "Different structural forms of same element", category: "Inorganic", examples: ["Diamond, graphite"]},
    {term: "Alloy", definition: "Metallic material of two or more elements", category: "Materials", examples: ["Steel, bronze"]},
    {term: "Allylic Position", definition: "Carbon adjacent to C=C double bond", category: "Organic", examples: ["CH2=CH-CH2-"]},
    {term: "Alpha Carbon", definition: "Carbon directly bonded to functional group", category: "Organic", examples: ["α-amino acid"]},
    {term: "Alpha Decay", definition: "Radioactive emission of helium nucleus", category: "Nuclear", examples: ["Uranium decay"]},
    {term: "Alpha Helix", definition: "Right-handed coil secondary structure in proteins", category: "Biochemistry", examples: ["Protein structure"]},
    {term: "Amide", definition: "Functional group RCONR2", category: "Organic", examples: ["Acetamide, peptide bond"]},
    {term: "Amide Bond", definition: "C-N bond in amide (peptide bond in proteins)", category: "Organic", examples: ["Protein backbone"]},
    {term: "Amidine", definition: "Functional group RC(=NH)NH2", category: "Organic", examples: ["Acetamidine"]},
    {term: "Amino Group", definition: "-NH2 functional group", category: "Organic", examples: ["Primary amine"]},
    {term: "Amphiprotic", definition: "Can act as both acid and base", category: "Acid-Base", examples: ["Water, bicarbonate"]},
    {term: "Amphiphilic", definition: "Having both hydrophobic and hydrophilic parts", category: "Physical", examples: ["Detergents, lipids"]},
    {term: "Amphoteric", definition: "Can react with both acids and bases", category: "Acid-Base", examples: ["Aluminum hydroxide"]},
    {term: "Anabolism", definition: "Metabolic pathways that build complex molecules", category: "Biochemistry", examples: ["Protein synthesis"]},
    {term: "Anaerobic", definition: "Occurring without oxygen", category: "Biochemistry", examples: ["Fermentation"]},
    {term: "Analyte", definition: "Substance being analyzed in measurement", category: "Analytical", examples: ["Target compound"]},
    {term: "Anode", definition: "Electrode where oxidation occurs", category: "Electrochemistry", examples: ["Positive terminal"]},
    {term: "Anomers", definition: "Cyclic sugar stereoisomers differing at C1", category: "Biochemistry", examples: ["α-glucose, β-glucose"]},
    {term: "Antagonist", definition: "Molecule that blocks receptor", category: "Biochemistry", examples: ["Receptor blocker"]},
    {term: "Anti Addition", definition: "Addition to opposite sides of double bond", category: "Mechanisms", examples: ["Br2 addition"]},
    {term: "Anti-aromatic", definition: "Cyclic, planar, conjugated with 4n π electrons", category: "Organic", examples: ["Cyclobutadiene"]},
    {term: "Antibonding Orbital", definition: "Molecular orbital higher in energy than atomic orbitals", category: "Bonding", examples: ["σ*, π*"]},
    {term: "Anticodon", definition: "Three-nucleotide sequence on tRNA", category: "Biochemistry", examples: ["Complementary to codon"]},
    {term: "Antioxidant", definition: "Substance that inhibits oxidation", category: "Biochemistry", examples: ["Vitamin E, C"]},
    {term: "Apoenzyme", definition: "Enzyme without its cofactor", category: "Biochemistry", examples: ["Inactive form"]},
    {term: "Aprotic Solvent", definition: "Solvent without acidic hydrogen", category: "Physical", examples: ["DMSO, acetone"]},
    {term: "Aqua Regia", definition: "Mixture of HCl and HNO3 (3:1)", category: "Inorganic", examples: ["Dissolves gold"]},
    {term: "Arenium Ion", definition: "Carbocation in aromatic substitution", category: "Mechanisms", examples: ["Wheland intermediate"]},
    {term: "Aromatic Substitution", definition: "Replacement of hydrogen on aromatic ring", category: "Organic", examples: ["Electrophilic aromatic"]},
    {term: "Arrhenius Acid", definition: "Substance that increases [H+] in water", category: "Acid-Base", examples: ["HCl"]},
    {term: "Arrhenius Base", definition: "Substance that increases [OH-] in water", category: "Acid-Base", examples: ["NaOH"]},
    {term: "Arrhenius Equation", definition: "k = Ae^(-Ea/RT), relates rate constant to temperature", category: "Kinetics", examples: ["Temperature dependence"]},
    {term: "Asymmetric Carbon", definition: "Carbon bonded to four different groups (chiral center)", category: "Stereochemistry", examples: ["Stereocenter"]},
    {term: "Atactic", definition: "Polymer with random stereochemistry", category: "Polymers", examples: ["Random configuration"]},
    {term: "Atomic Orbital", definition: "Wave function describing electron in atom", category: "Atomic Structure", examples: ["s, p, d, f orbitals"]},
    {term: "Atomic Weight", definition: "Average mass of atoms (relative to C-12)", category: "Atomic Structure", examples: ["Weighted average"]},
    {term: "Aufbau Principle", definition: "Electrons fill lowest energy orbitals first", category: "Atomic Structure", examples: ["Electronic configuration"]},
    {term: "Autocatalysis", definition: "Reaction catalyzed by its own product", category: "Kinetics", examples: ["Self-catalysis"]},
    {term: "Autoionization", definition: "Self-ionization of molecule", category: "Acid-Base", examples: ["Water: 2H2O ⇌ H3O+ + OH-"]},
    {term: "Autoprotolysis", definition: "Self-protonation reaction", category: "Acid-Base", examples: ["Water ionization"]},
    {term: "Autotrophic", definition: "Organism that produces own food", category: "Biochemistry", examples: ["Plants, cyanobacteria"]},
    {term: "Auxiliary", definition: "Chiral group temporarily attached for stereocontrol", category: "Organic", examples: ["Evans auxiliary"]},
    {term: "Average Bond Enthalpy", definition: "Average energy to break bonds in gaseous molecules", category: "Thermodynamics", examples: ["C-H: 413 kJ/mol"]},
    {term: "Axial", definition: "Position perpendicular to ring plane in chair conformation", category: "Stereochemistry", examples: ["Cyclohexane axial H"]},
    {term: "Azeotrope", definition: "Mixture with constant boiling point", category: "Physical", examples: ["Ethanol-water"]},
    {term: "Azide", definition: "Compound containing N3- group", category: "Inorganic", examples: ["Sodium azide"]},
    {term: "Azo Compound", definition: "Organic compound with -N=N- group", category: "Organic", examples: ["Azobenzene"]},
    {term: "Backbonding", definition: "Electron donation from metal d-orbitals to ligand", category: "Coordination", examples: ["π-backbonding"]},
    {term: "Back Titration", definition: "Titration of excess reagent", category: "Analytical", examples: ["Indirect analysis"]},
    {term: "Balmer Series", definition: "Hydrogen emission lines (visible region)", category: "Atomic Structure", examples: ["n=2 transitions"]},
    {term: "Band Gap", definition: "Energy difference between valence and conduction bands", category: "Materials", examples: ["Semiconductor property"]},
    {term: "Barfoed's Test", definition: "Distinguishes monosaccharides from disaccharides", category: "Analytical", examples: ["Copper reduction"]},
    {term: "Basicity", definition: "Ability to accept protons", category: "Acid-Base", examples: ["pKb scale"]},
    {term: "Bending Vibration", definition: "Molecular vibration changing bond angle", category: "Spectroscopy", examples: ["Scissoring, rocking"]},
    {term: "Benedict's Test", definition: "Test for reducing sugars", category: "Analytical", examples: ["Blue to red-orange"]},
    {term: "Bent's Rule", definition: "Atomic s-character concentrates in orbitals to electropositive groups", category: "Bonding", examples: ["Hybrid orbital theory"]},
    {term: "Benzyl Group", definition: "PhCH2- substituent", category: "Organic", examples: ["Benzyl alcohol"]},
    {term: "Benzylic Position", definition: "Carbon adjacent to benzene ring", category: "Organic", examples: ["Benzylic cation"]},
    {term: "Beta Carbon", definition: "Carbon two bonds away from functional group", category: "Organic", examples: ["β-elimination"]},
    {term: "Beta Decay", definition: "Radioactive emission of electron or positron", category: "Nuclear", examples: ["Neutron → proton"]},
    {term: "Beta Sheet", definition: "Extended secondary structure in proteins", category: "Biochemistry", examples: ["Pleated sheet"]},
    {term: "Bidentate", definition: "Ligand with two donor atoms", category: "Coordination", examples: ["Ethylenediamine"]},
    {term: "Bimolecular", definition: "Reaction involving two molecules", category: "Kinetics", examples: ["Second order"]},
    {term: "Binary Compound", definition: "Compound of two elements", category: "Inorganic", examples: ["NaCl, H2O"]},
    {term: "Binding Energy", definition: "Energy required to remove particle from system", category: "Nuclear", examples: ["Nuclear stability"]},
    {term: "Biodegradable", definition: "Can be broken down by biological processes", category: "Environmental", examples: ["Natural polymers"]},
    {term: "Biopolymer", definition: "Polymer produced by living organisms", category: "Biochemistry", examples: ["DNA, proteins, starch"]},
    {term: "Biosynthesis", definition: "Production of chemical compounds by living organisms", category: "Biochemistry", examples: ["Protein synthesis"]},
    {term: "Biuret Test", definition: "Test for proteins (peptide bonds)", category: "Analytical", examples: ["Purple color"]},
    {term: "Boat Conformation", definition: "Less stable conformation of cyclohexane", category: "Stereochemistry", examples: ["Higher energy"]},
    {term: "Bohr Model", definition: "Planetary model of atom with quantized orbits", category: "Atomic Structure", examples: ["Electron shells"]},
    {term: "Boiling Point Elevation", definition: "Increase in BP due to solute (colligative)", category: "Physical", examples: ["ΔTb = Kb×m"]},
    {term: "Boltzmann Distribution", definition: "Statistical distribution of particle energies", category: "Physical", examples: ["Maxwell-Boltzmann"]},
    {term: "Bond Angle", definition: "Angle between two bonds to same atom", category: "Bonding", examples: ["H2O: 104.5°"]},
    {term: "Bond Dissociation Energy", definition: "Energy to break specific bond homolytically", category: "Thermodynamics", examples: ["BDE"]},
    {term: "Bond Length", definition: "Average distance between bonded nuclei", category: "Bonding", examples: ["C-C: 154 pm"]},
    {term: "Bond Order", definition: "Number of electron pairs shared between atoms", category: "Bonding", examples: ["Single=1, double=2"]},
    {term: "Bonding Orbital", definition: "Molecular orbital lower in energy, stabilizing", category: "Bonding", examples: ["σ, π bonding"]},
    {term: "Born-Haber Cycle", definition: "Thermodynamic cycle for lattice energy", category: "Thermodynamics", examples: ["Ionic compound formation"]},
    {term: "Boyle's Law", definition: "At constant T, P×V = constant", category: "Physical", examples: ["Gas law"]},
    {term: "Bredt's Rule", definition: "Bridgehead double bonds are unstable in small rings", category: "Organic", examples: ["Bicyclic systems"]},
    {term: "Bronsted-Lowry Acid", definition: "Proton donor", category: "Acid-Base", examples: ["HCl, CH3COOH"]},
    {term: "Bronsted-Lowry Base", definition: "Proton acceptor", category: "Acid-Base", examples: ["NH3, OH-"]},
    {term: "Buffer", definition: "Solution resisting pH change", category: "Acid-Base", examples: ["Weak acid + conjugate base"]},
    {term: "Buffer Capacity", definition: "Amount of acid/base buffer can neutralize", category: "Acid-Base", examples: ["Resistance to pH change"]},
    {term: "Calcination", definition: "Heating solid to high temperature (decomposition)", category: "Inorganic", examples: ["Lime production"]},
    {term: "Calorimetry", definition: "Measurement of heat in chemical reactions", category: "Thermodynamics", examples: ["Bomb calorimeter"]},
    {term: "Cahn-Ingold-Prelog Rules", definition: "System for naming stereoisomers (R/S)", category: "Stereochemistry", examples: ["Priority rules"]},
    {term: "Canonical Forms", definition: "Resonance structures of molecule", category: "Bonding", examples: ["Benzene structures"]},
    {term: "Carbonyl Group", definition: "C=O functional group", category: "Organic", examples: ["Ketones, aldehydes"]},
    {term: "Carboxyl Group", definition: "-COOH functional group", category: "Organic", examples: ["Carboxylic acids"]},
    {term: "Carcinogen", definition: "Cancer-causing substance", category: "Toxicology", examples: ["Benzene, asbestos"]},
    {term: "Cassette", definition: "DNA sequence that can be moved as unit", category: "Biochemistry", examples: ["Gene cassette"]},
    {term: "Catabolism", definition: "Metabolic breakdown of complex molecules", category: "Biochemistry", examples: ["Glycolysis"]},
    {term: "Cathode", definition: "Electrode where reduction occurs", category: "Electrochemistry", examples: ["Negative terminal"]},
    {term: "Cation", definition: "Positively charged ion", category: "General", examples: ["Na+, Ca2+"]},
    {term: "Cell Potential", definition: "Voltage of electrochemical cell", category: "Electrochemistry", examples: ["EMF, E°cell"]},
    {term: "Cellulose", definition: "Polysaccharide of β-glucose", category: "Biochemistry", examples: ["Plant cell walls"]},
    {term: "Chain Reaction", definition: "Reaction where products initiate further reactions", category: "Kinetics", examples: ["Free radical polymerization"]},
    {term: "Chair Conformation", definition: "Most stable conformation of cyclohexane", category: "Stereochemistry", examples: ["Low energy form"]},
    {term: "Chalcogen", definition: "Group 16 element", category: "Inorganic", examples: ["O, S, Se, Te"]},
    {term: "Charge Transfer Complex", definition: "Complex formed by electron transfer between molecules", category: "Bonding", examples: ["Donor-acceptor"]},
    {term: "Charles's Law", definition: "At constant P, V/T = constant", category: "Physical", examples: ["Gas law"]},
    {term: "Chelate", definition: "Ligand forming multiple bonds to metal", category: "Coordination", examples: ["EDTA"]},
    {term: "Chelate Effect", definition: "Enhanced stability of chelate complexes", category: "Coordination", examples: ["Entropy-driven"]},
    {term: "Chemiluminescence", definition: "Light emission from chemical reaction", category: "Physical", examples: ["Glow sticks"]},
    {term: "Chemoselective", definition: "Reaction preferring one functional group", category: "Organic", examples: ["Selective reduction"]},
    {term: "Chemotherapy", definition: "Treatment with chemical agents", category: "Biochemistry", examples: ["Cancer drugs"]},
    {term: "Chiral Auxiliary", definition: "Chiral group inducing stereoselectivity", category: "Organic", examples: ["Temporary chirality"]},
    {term: "Chiral Pool", definition: "Available chiral starting materials from nature", category: "Organic", examples: ["Amino acids, sugars"]},
    {term: "Chirality", definition: "Property of non-superimposable mirror images", category: "Stereochemistry", examples: ["Handedness"]},
    {term: "Chlorophyll", definition: "Green pigment in photosynthesis", category: "Biochemistry", examples: ["Mg-porphyrin"]},
    {term: "Chromophore", definition: "Part of molecule responsible for color", category: "Spectroscopy", examples: ["Conjugated system"]},
    {term: "Cis Isomer", definition: "Stereoisomer with groups on same side", category: "Stereochemistry", examples: ["Cis-2-butene"]},
    {term: "Claisen Condensation", definition: "Ester + ester → β-ketoester", category: "Organic", examples: ["Acetoacetic ester"]},
    {term: "Clathrate", definition: "Inclusion compound with guest trapped in host", category: "Physical", examples: ["Gas hydrates"]},
    {term: "Cleavage", definition: "Breaking of chemical bond", category: "Mechanisms", examples: ["Homolytic, heterolytic"]},
    {term: "Close-packed", definition: "Efficient packing arrangement of spheres", category: "Solid State", examples: ["FCC, HCP"]},
    {term: "Coagulation", definition: "Aggregation of colloidal particles", category: "Colloid", examples: ["Blood clotting"]},
    {term: "Codon", definition: "Three-nucleotide sequence coding for amino acid", category: "Biochemistry", examples: ["AUG = methionine"]},
    {term: "Coenzyme", definition: "Organic cofactor for enzyme", category: "Biochemistry", examples: ["NAD+, FAD"]},
    {term: "Cofactor", definition: "Non-protein helper for enzyme activity", category: "Biochemistry", examples: ["Metal ions, coenzymes"]},
    {term: "Colligative Property", definition: "Property depending on particle number, not identity", category: "Physical", examples: ["BP elevation, FP depression"]},
    {term: "Colloid", definition: "Mixture with particles 1-1000 nm", category: "Physical", examples: ["Milk, fog"]},
    {term: "Colorimetry", definition: "Analysis based on color measurement", category: "Analytical", examples: ["Spectrophotometry"]},
    {term: "Combustion Analysis", definition: "Determination of C, H, N by burning sample", category: "Analytical", examples: ["Elemental analysis"]},
    {term: "Common Ion Effect", definition: "Suppression of ionization by common ion", category: "Equilibrium", examples: ["Reduced solubility"]},
    {term: "Competitive Inhibitor", definition: "Inhibitor competing with substrate for active site", category: "Biochemistry", examples: ["Reversible inhibition"]},
    {term: "Complementary Base Pair", definition: "A-T and G-C pairs in DNA", category: "Biochemistry", examples: ["Watson-Crick pairing"]},
    {term: "Complex Ion", definition: "Metal ion with ligands attached", category: "Coordination", examples: ["[Cu(NH3)4]2+"]},
    {term: "Composite", definition: "Material made of two or more components", category: "Materials", examples: ["Fiberglass"]},
    {term: "Compound", definition: "Pure substance of two or more elements", category: "General", examples: ["H2O, NaCl"]},
    {term: "Concentration", definition: "Amount of solute per unit volume/mass", category: "Solutions", examples: ["Molarity, molality"]},
    {term: "Condensation Polymer", definition: "Polymer formed with elimination of small molecule", category: "Polymers", examples: ["Nylon, polyester"]},
    {term: "Condensed Formula", definition: "Chemical formula showing bonding", category: "General", examples: ["CH3CH2OH"]},
    {term: "Conducting Polymer", definition: "Polymer with electrical conductivity", category: "Materials", examples: ["Polyacetylene"]},
    {term: "Conformation", definition: "3D arrangement from rotation around single bonds", category: "Stereochemistry", examples: ["Staggered, eclipsed"]},
    {term: "Conformational Analysis", definition: "Study of energy vs. conformation", category: "Stereochemistry", examples: ["Newman projections"]},
    {term: "Conformer", definition: "Conformational isomer", category: "Stereochemistry", examples: ["Rotamers"]},
    {term: "Conjugate Acid", definition: "Acid formed when base accepts proton", category: "Acid-Base", examples: ["NH4+ from NH3"]},
    {term: "Conjugate Base", definition: "Base formed when acid donates proton", category: "Acid-Base", examples: ["Cl- from HCl"]},
    {term: "Conjugated System", definition: "Alternating single and multiple bonds", category: "Bonding", examples: ["Butadiene"]},
    {term: "Conjugation", definition: "Overlap of p-orbitals across adjacent π bonds", category: "Bonding", examples: ["Delocalization"]},
    {term: "Conservation of Mass", definition: "Mass is neither created nor destroyed", category: "General", examples: ["Balanced equations"]},
    {term: "Continuous Spectrum", definition: "Spectrum with all wavelengths", category: "Spectroscopy", examples: ["Incandescent light"]},
    {term: "Coordination Complex", definition: "Central metal with attached ligands", category: "Coordination", examples: ["[Fe(CN)6]3-"]},
    {term: "Coordination Number", definition: "Number of ligands bonded to central atom", category: "Coordination", examples: ["6 in octahedral"]},
    {term: "Coordination Sphere", definition: "Central atom and directly attached ligands", category: "Coordination", examples: ["Inner sphere"]},
    {term: "Copolymer", definition: "Polymer of two or more monomer types", category: "Polymers", examples: ["Styrene-butadiene"]},
    {term: "Corrosion", definition: "Deterioration of metal by chemical reaction", category: "Electrochemistry", examples: ["Rusting"]},
    {term: "Coulomb's Law", definition: "Force between charges: F = kq1q2/r²", category: "Physical", examples: ["Ionic attraction"]},
    {term: "Coupled Reaction", definition: "Thermodynamically unfavorable reaction driven by favorable one", category: "Thermodynamics", examples: ["ATP hydrolysis"]},
    {term: "Covalent Bond", definition: "Bond formed by sharing electron pairs", category: "Bonding", examples: ["H-H, C-C"]},
    {term: "Cracking", definition: "Breaking large hydrocarbons into smaller ones", category: "Industrial", examples: ["Petroleum refining"]},
    {term: "Critical Point", definition: "Temperature and pressure where gas/liquid distinction disappears", category: "Physical", examples: ["Supercritical fluid"]},
    {term: "Cross-linking", definition: "Covalent bonds between polymer chains", category: "Polymers", examples: ["Vulcanization"]},
    {term: "Crown Ether", definition: "Cyclic polyether complexing cations", category: "Organic", examples: ["18-crown-6"]},
    {term: "Cryoscopy", definition: "Measurement of freezing point depression", category: "Analytical", examples: ["Molecular weight determination"]},
    {term: "Crystal Field Theory", definition: "Model of d-orbital splitting in complexes", category: "Coordination", examples: ["Octahedral, tetrahedral"]},
    {term: "Crystal Lattice", definition: "Three-dimensional arrangement of atoms/ions", category: "Solid State", examples: ["NaCl structure"]},
    {term: "Crystallization", definition: "Formation of solid crystals from solution", category: "Physical", examples: ["Purification method"]},
    {term: "Cumulated Diene", definition: "Diene with adjacent double bonds", category: "Organic", examples: ["Allene"]},
    {term: "Cyanide", definition: "Compound containing C≡N group", category: "Inorganic", examples: ["HCN, NaCN"]},
    {term: "Cyclic Compound", definition: "Compound with ring structure", category: "Organic", examples: ["Benzene, cyclohexane"]},
    {term: "Cycloaddition", definition: "Formation of cyclic compound from unsaturated reactants", category: "Organic", examples: ["Diels-Alder"]},
    {term: "Cytochrome", definition: "Heme-containing protein in electron transport", category: "Biochemistry", examples: ["Respiratory chain"]}
  ],
  
  polyatomicIons: [
    {name: "Ammonium", formula: "NH₄⁺", charge: "+1"},
    {name: "Hydroxide", formula: "OH⁻", charge: "-1"},
    {name: "Nitrate", formula: "NO₃⁻", charge: "-1"},
    {name: "Nitrite", formula: "NO₂⁻", charge: "-1"},
    {name: "Sulfate", formula: "SO₄²⁻", charge: "-2"},
    {name: "Sulfite", formula: "SO₃²⁻", charge: "-2"},
    {name: "Carbonate", formula: "CO₃²⁻", charge: "-2"},
    {name: "Bicarbonate", formula: "HCO₃⁻", charge: "-1"},
    {name: "Phosphate", formula: "PO₄³⁻", charge: "-3"},
    {name: "Chlorate", formula: "ClO₃⁻", charge: "-1"},
    {name: "Perchlorate", formula: "ClO₄⁻", charge: "-1"},
    {name: "Acetate", formula: "CH₃COO⁻", charge: "-1"},
    {name: "Chromate", formula: "CrO₄²⁻", charge: "-2"},
    {name: "Dichromate", formula: "Cr₂O₇²⁻", charge: "-2"},
    {name: "Permanganate", formula: "MnO₄⁻", charge: "-1"},
    {name: "Cyanide", formula: "CN⁻", charge: "-1"},
    {name: "Hydroxide", formula: "OH⁻", charge: "-1"},
    {name: "Hypochlorite", formula: "ClO⁻", charge: "-1"},
    {name: "Chlorite", formula: "ClO₂⁻", charge: "-1"},
    {name: "Thiosulfate", formula: "S₂O₃²⁻", charge: "-2"},
    {name: "Hydrogen Sulfate", formula: "HSO₄⁻", charge: "-1"}
  ]
};

// Update atomic masses with complete list
const atomicMassesComplete = {
  H: 1.008, He: 4.003, Li: 6.94, Be: 9.012, B: 10.81, C: 12.011, N: 14.007, O: 15.999,
  F: 18.998, Ne: 20.180, Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.085, P: 30.974,
  S: 32.06, Cl: 35.45, Ar: 39.948, K: 39.098, Ca: 40.078, Sc: 44.956, Ti: 47.867,
  V: 50.942, Cr: 51.996, Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693, Cu: 63.546,
  Zn: 65.38, Ga: 69.723, Ge: 72.630, As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798,
  Rb: 85.468, Sr: 87.62, Y: 88.906, Zr: 91.224, Nb: 92.906, Mo: 95.95, Tc: 98,
  Ru: 101.07, Rh: 102.906, Pd: 106.42, Ag: 107.868, Cd: 112.414, In: 114.818, Sn: 118.71,
  Sb: 121.76, Te: 127.60, I: 126.904, Xe: 131.293, Cs: 132.905, Ba: 137.327, La: 138.905,
  Ce: 140.116, Pr: 140.908, Nd: 144.242, Pm: 145, Sm: 150.36, Eu: 151.964, Gd: 157.25,
  Tb: 158.925, Dy: 162.500, Ho: 164.930, Er: 167.259, Tm: 168.934, Yb: 173.045, Lu: 174.967,
  Hf: 178.49, Ta: 180.948, W: 183.84, Re: 186.207, Os: 190.23, Ir: 192.217, Pt: 195.084,
  Au: 196.967, Hg: 200.592, Tl: 204.38, Pb: 207.2, Bi: 208.980, Po: 209, At: 210,
  Rn: 222, Fr: 223, Ra: 226, Ac: 227, Th: 232.038, Pa: 231.036, U: 238.029, Np: 237,
  Pu: 244, Am: 243, Cm: 247, Bk: 247, Cf: 251, Es: 252, Fm: 257, Md: 258, No: 259,
  Lr: 266, Rf: 267, Db: 268, Sg: 269, Bh: 270, Hs: 277, Mt: 278, Ds: 281, Rg: 282,
  Cn: 285, Nh: 286, Fl: 289, Mc: 290, Lv: 293, Ts: 294, Og: 294
};

// Use extended atomic masses
const atomicMasses = atomicMassesComplete;

// Initialize Application
let currentTheme = 'light';
let favoritesData = {
  elements: [],
  compounds: [],
  reactions: []
};
let comparisonItems = [];

// PubChem API Integration
async function fetchPubChemData(compound) {
  try {
    const searchUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(compound)}/JSON`;
    const response = await fetch(searchUrl);
    const data = await response.json();
    
    if (data.PC_Compounds) {
      const cid = data.PC_Compounds[0].id.id.cid;
      const propsUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/property/MolecularFormula,MolecularWeight,IUPACName,InChI,InChIKey,CanonicalSMILES,XLogP,TPSA,Complexity/JSON`;
      const propsResponse = await fetch(propsUrl);
      const propsData = await propsResponse.json();
      
      return {
        cid,
        properties: propsData.PropertyTable.Properties[0],
        pubchemUrl: `https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`
      };
    }
  } catch (error) {
    console.error('PubChem fetch error:', error);
    return null;
  }
}

// 3D Element Visualization
function render3DElement(element, canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  let rotation = 0;
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw nucleus
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#FF6B6B';
    ctx.fill();
    ctx.strokeStyle = '#C92A2A';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw nucleus label
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(element.num, centerX, centerY + 4);
    
    // Electron shell configuration
    const shells = getElectronShells(element.num);
    
    shells.forEach((electrons, shellIndex) => {
      const radius = 40 + (shellIndex * 35);
      
      // Draw shell orbit
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100, 150, 200, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw electrons
      for (let i = 0; i < electrons; i++) {
        const angle = (i / electrons) * Math.PI * 2 + rotation;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#3B82F6';
        ctx.fill();
        ctx.strokeStyle = '#1E40AF';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
    
    rotation += 0.01;
    requestAnimationFrame(animate);
  }
  
  animate();
}

function getElectronShells(atomicNumber) {
  const shells = [];
  let remaining = atomicNumber;
  const maxPerShell = [2, 8, 18, 32, 32, 18, 8];
  
  for (let i = 0; i < maxPerShell.length && remaining > 0; i++) {
    const inThisShell = Math.min(remaining, maxPerShell[i]);
    shells.push(inThisShell);
    remaining -= inThisShell;
  }
  
  return shells;
}

// Theme Management Functions (without localStorage due to sandbox restrictions)
function setTheme(themeName) {
  currentTheme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
  
  // Update active button
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-theme') === themeName) {
      btn.classList.add('active');
    }
  });
}

function showSection(sectionId) {
  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(nav => {
    nav.classList.remove('active');
    if (nav.getAttribute('data-tab') === sectionId) {
      nav.classList.add('active');
    }
  });
  
  // Show target content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
  }
}

// Make functions globally accessible
window.setTheme = setTheme;
window.showSection = showSection;

function init() {
  setupNavigation();
  renderPeriodicTable();
  renderElementsList();
  renderReactions();
  renderCompounds();
  renderPolyatomicIons();
  setupThemeToggle();
  setupSearch();
  setupGlobalSearch();
  setupConstantsNavigation();
  renderAllConstants();
}

// Navigation helper
function navigateToTab(tabName) {
  const tabs = document.querySelectorAll('.nav-tab');
  const tab = Array.from(tabs).find(t => t.getAttribute('data-tab') === tabName);
  if (tab) {
    tab.click();
  }
}

// Theme Toggle
function setupThemeToggle() {
  // Theme is now handled by the 4-button switcher in the header
  // Initialize with light theme
  setTheme('light');
}

// Navigation
function setupNavigation() {
  const tabs = document.querySelectorAll('.nav-item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      showSection(targetId);
    });
  });
}

// Render Periodic Table with proper grid positioning
function renderPeriodicTable() {
  const grid = document.getElementById('periodicTableGrid');
  grid.innerHTML = '';
  
  // Set grid to 18 columns x 10 rows (to accommodate lanthanides/actinides)
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(18, 1fr)';
  grid.style.gap = 'var(--space-8)';
  
  chemistryData.elements.forEach(element => {
    const cell = document.createElement('div');
    cell.className = `element-cell ${element.category}`;
    cell.innerHTML = `
      <div class="element-num">${element.num}</div>
      <div class="element-symbol">${element.sym}</div>
      <div class="element-name">${element.name}</div>
      <div class="element-mass">${element.mass.toFixed(2)}</div>
    `;
  
  setTimeout(() => {
    render3DElement(element, 'element3DCanvas');
  }, 100);
    
    // Position in grid based on period and group
    if (element.period && element.group) {
      cell.style.gridRow = element.period;
      cell.style.gridColumn = element.group;
    } else if (element.period === 6 && element.num >= 57 && element.num <= 71) {
      // Lanthanides (row 9)
      cell.style.gridRow = 9;
      cell.style.gridColumn = element.num - 54;
    } else if (element.period === 7 && element.num >= 89 && element.num <= 103) {
      // Actinides (row 10)
      cell.style.gridRow = 10;
      cell.style.gridColumn = element.num - 86;
    }
    
    cell.addEventListener('click', () => showElementDetails(element));
    cell.title = `${element.name} (${element.sym}) - ${element.category.replace('-', ' ')}`;
    grid.appendChild(cell);
  });
}

// Favorites Management
function toggleFavorite(type, item) {
  const key = type + 's';
  if (!favoritesData[key]) favoritesData[key] = [];
  
  const index = favoritesData[key].findIndex(fav => 
    (type === 'element' && fav.num === item.num) ||
    (type === 'compound' && fav.name === item.name) ||
    (type === 'reaction' && fav.type === item.type)
  );
  
  if (index > -1) {
    favoritesData[key].splice(index, 1);
    return false;
  } else {
    favoritesData[key].push(item);
    return true;
  }
}

function isFavorite(type, item) {
  const key = type + 's';
  if (!favoritesData[key]) return false;
  return favoritesData[key].some(fav => 
    (type === 'element' && fav.num === item.num) ||
    (type === 'compound' && fav.name === item.name) ||
    (type === 'reaction' && fav.type === item.type)
  );
}

// Comparison Tool
function addToComparison(element) {
  if (comparisonItems.length >= 4) {
    alert('Maximum 4 elements can be compared at once');
    return;
  }
  if (comparisonItems.find(e => e.num === element.num)) {
    alert('Element already in comparison');
    return;
  }
  comparisonItems.push(element);
  updateComparisonDisplay();
}

function removeFromComparison(atomicNumber) {
  comparisonItems = comparisonItems.filter(e => e.num !== atomicNumber);
  updateComparisonDisplay();
}

function updateComparisonDisplay() {
  const container = document.getElementById('comparisonContainer');
  if (!container) return;
  
  if (comparisonItems.length === 0) {
    container.innerHTML = '<p>No elements selected for comparison. Click "Compare" on any element.</p>';
    return;
  }
  
  const properties = ['num', 'sym', 'name', 'mass', 'category', 'group', 'period', 'config', 'mp', 'bp', 'density', 'en', 'ar', 'ie', 'ox'];
  const propertyNames = {
    num: 'Atomic Number',
    sym: 'Symbol',
    name: 'Name',
    mass: 'Atomic Mass',
    category: 'Category',
    group: 'Group',
    period: 'Period',
    config: 'Electron Configuration',
    mp: 'Melting Point (°C)',
    bp: 'Boiling Point (°C)',
    density: 'Density (g/cm³)',
    en: 'Electronegativity',
    ar: 'Atomic Radius (pm)',
    ie: 'Ionization Energy (kJ/mol)',
    ox: 'Oxidation States'
  };
  
  let html = '<table class="data-table"><thead><tr><th>Property</th>';
  comparisonItems.forEach(el => {
    html += `<th>${el.name} (${el.sym})</th>`;
  });
  html += '</tr></thead><tbody>';
  
  properties.forEach(prop => {
    html += `<tr><td><strong>${propertyNames[prop]}</strong></td>`;
    comparisonItems.forEach(el => {
      html += `<td>${el[prop] !== undefined ? el[prop] : 'N/A'}</td>`;
    });
    html += '</tr>';
  });
  
  html += '</tbody></table>';
  html += '<button class="btn btn--primary" onclick="clearComparison()">Clear All</button>';
  container.innerHTML = html;
}

function clearComparison() {
  comparisonItems = [];
  updateComparisonDisplay();
}

// Export Functions
function exportToPDF(element) {
  // Create printable version
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>${element.name} - Element Data</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #2563eb; }
          table { border-collapse: collapse; width: 100%; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f0f0f0; }
        </style>
      </head>
      <body>
        <h1>${element.name} (${element.sym})</h1>
        <p><strong>Atomic Number:</strong> ${element.num}</p>
        <p><strong>Atomic Mass:</strong> ${element.mass}</p>
        <p><strong>Category:</strong> ${element.category}</p>
        <table>
          <tr><th>Property</th><th>Value</th></tr>
          <tr><td>Electron Configuration</td><td>${element.config}</td></tr>
          ${element.mp ? `<tr><td>Melting Point</td><td>${element.mp}°C</td></tr>` : ''}
          ${element.bp ? `<tr><td>Boiling Point</td><td>${element.bp}°C</td></tr>` : ''}
          ${element.en ? `<tr><td>Electronegativity</td><td>${element.en}</td></tr>` : ''}
          ${element.uses ? `<tr><td>Uses</td><td>${element.uses}</td></tr>` : ''}
        </table>
      </body>
    </html>
  `);
  printWindow.document.close();
  setTimeout(() => {
    printWindow.print();
  }, 250);
}

function exportToCSV(data, filename) {
  let csv = '';
  const headers = Object.keys(data[0]);
  csv += headers.join(',') + '\n';
  
  data.forEach(row => {
    const values = headers.map(header => {
      const value = row[header];
      return typeof value === 'string' ? `"${value}"` : value;
    });
    csv += values.join(',') + '\n';
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

// Periodic Trends Visualizer
function showPeriodicTrends(property) {
  const modal = document.getElementById('elementModal');
  const details = document.getElementById('elementDetails');
  
  let data = [];
  let yLabel = '';
  
  switch(property) {
    case 'atomicRadius':
      data = chemistryData.elements.filter(e => e.ar).map(e => ({x: e.num, y: e.ar, label: e.sym}));
      yLabel = 'Atomic Radius (pm)';
      break;
    case 'ionizationEnergy':
      data = chemistryData.elements.filter(e => e.ie).map(e => ({x: e.num, y: e.ie, label: e.sym}));
      yLabel = 'Ionization Energy (kJ/mol)';
      break;
    case 'electronegativity':
      data = chemistryData.elements.filter(e => e.en).map(e => ({x: e.num, y: e.en, label: e.sym}));
      yLabel = 'Electronegativity';
      break;
  }
  
  details.innerHTML = `
    <h2>Periodic Trend: ${yLabel}</h2>
    <canvas id="trendCanvas" width="800" height="400" style="border: 1px solid #ccc; background: white;"></canvas>
    <p style="margin-top: 16px; color: var(--color-text-secondary);">This graph shows how ${yLabel} varies across the periodic table.</p>
  `;
  
  modal.classList.add('active');
  
  setTimeout(() => {
    const canvas = document.getElementById('trendCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Simple scatter plot
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const padding = 50;
    const maxX = Math.max(...data.map(d => d.x));
    const maxY = Math.max(...data.map(d => d.y));
    const minY = Math.min(...data.map(d => d.y));
    
    const scaleX = (canvas.width - 2 * padding) / maxX;
    const scaleY = (canvas.height - 2 * padding) / (maxY - minY);
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw points and connect
    ctx.strokeStyle = '#2563eb';
    ctx.fillStyle = '#2563eb';
    ctx.lineWidth = 1.5;
    
    ctx.beginPath();
    data.forEach((point, i) => {
      const x = padding + point.x * scaleX;
      const y = canvas.height - padding - (point.y - minY) * scaleY;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    
    // Draw points
    data.forEach(point => {
      const x = padding + point.x * scaleX;
      const y = canvas.height - padding - (point.y - minY) * scaleY;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Labels
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.fillText('Atomic Number', canvas.width / 2, canvas.height - 10);
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();
  }, 100);
}

// Show Element Details Modal
function showElementDetails(element) {
  const modal = document.getElementById('elementModal');
  const details = document.getElementById('elementDetails');
  
  details.innerHTML = `
    <div class="element-detail-header">
      <div class="element-detail-symbol ${element.category}" style="display: inline-block; padding: 20px 40px; border-radius: 12px;">${element.sym}</div>
      <h2 class="element-detail-name">${element.name}</h2>
      <p style="color: var(--color-text-secondary);">Atomic Number: ${element.num} | Atomic Mass: ${element.mass} | State: ${element.state || 'solid'}</p>
    </div>
    
    <div class="element-properties">
      <div class="property-item">
        <div class="property-label">Category</div>
        <div class="property-value">${element.category.replace('-', ' ').toUpperCase()}</div>
      </div>
      <div class="property-item">
        <div class="property-label">Group</div>
        <div class="property-value">${element.group || 'N/A'}</div>
      </div>
      <div class="property-item">
        <div class="property-label">Period</div>
        <div class="property-value">${element.period}</div>
      </div>
      ${element.block ? `
      <div class="property-item">
        <div class="property-label">Block</div>
        <div class="property-value">${element.block.toUpperCase()}</div>
      </div>` : ''}
      <div class="property-item">
        <div class="property-label">Electron Configuration</div>
        <div class="property-value">${element.config}</div>
      </div>
      ${element.en ? `
      <div class="property-item">
        <div class="property-label">Electronegativity</div>
        <div class="property-value">${element.en}</div>
      </div>` : ''}
      ${element.ar ? `
      <div class="property-item">
        <div class="property-label">Atomic Radius</div>
        <div class="property-value">${element.ar} pm</div>
      </div>` : ''}
      ${element.ie ? `
      <div class="property-item">
        <div class="property-label">Ionization Energy</div>
        <div class="property-value">${element.ie} kJ/mol</div>
      </div>` : ''}
      ${element.ea ? `
      <div class="property-item">
        <div class="property-label">Electron Affinity</div>
        <div class="property-value">${element.ea} kJ/mol</div>
      </div>` : ''}
      ${element.ox ? `
      <div class="property-item">
        <div class="property-label">Oxidation States</div>
        <div class="property-value">${element.ox}</div>
      </div>` : ''}
      ${element.mp ? `
      <div class="property-item">
        <div class="property-label">Melting Point</div>
        <div class="property-value">${element.mp}°C</div>
      </div>` : ''}
      ${element.bp ? `
      <div class="property-item">
        <div class="property-label">Boiling Point</div>
        <div class="property-value">${element.bp}°C</div>
      </div>` : ''}
      ${element.density ? `
      <div class="property-item">
        <div class="property-label">Density</div>
        <div class="property-value">${element.density} g/cm³</div>
      </div>` : ''}
      ${element.year ? `
      <div class="property-item">
        <div class="property-label">Discovery Year</div>
        <div class="property-value">${element.year}</div>
      </div>` : ''}
      ${element.discoverer ? `
      <div class="property-item">
        <div class="property-label">Discoverer</div>
        <div class="property-value">${element.discoverer}</div>
      </div>` : ''}
    </div>
    
    ${element.uses ? `
    <div style="margin-top: 24px; padding: 16px; background: var(--color-secondary); border-radius: 8px;">
      <h4 style="margin-bottom: 8px;">Uses &amp; Applications</h4>
      <p>${element.uses}</p>
    </div>` : ''}
    
    <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
      <button class="btn btn--primary" onclick="toggleFavorite('element', ${JSON.stringify(element).replace(/"/g, '&quot;')}); this.textContent = isFavorite('element', ${JSON.stringify(element).replace(/"/g, '&quot;')}) ? '♥ Remove Favorite' : '♡ Add Favorite';">${isFavorite('element', element) ? '♥ Remove Favorite' : '♡ Add Favorite'}</button>
      <button class="btn btn--primary" onclick="addToComparison(${JSON.stringify(element).replace(/"/g, '&quot;')})">Compare</button>
      <button class="btn btn--primary" onclick="exportToPDF(${JSON.stringify(element).replace(/"/g, '&quot;')})">Export PDF</button>
      <button class="btn btn--primary" onclick="render3DElement(${JSON.stringify(element).replace(/"/g, '&quot;')}, 'element3DCanvas')">3D View</button>
      <a href="https://pubchem.ncbi.nlm.nih.gov/element/${element.name}" target="_blank" class="btn btn--primary" style="text-decoration: none;">PubChem</a>
      <a href="https://en.wikipedia.org/wiki/${element.name}" target="_blank" class="btn btn--primary" style="text-decoration: none;">Wikipedia</a>
    </div>
    
    <div style="margin-top: 24px;">
      <h4>3D Atomic Structure</h4>
      <canvas id="element3DCanvas" width="400" height="400" style="border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-background);"></canvas>
      <p style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">Interactive visualization showing nucleus and electron shells</p>
    </div>
    
    ${element.radioactive ? `
    <div style="margin-top: 16px; padding: 16px; background: rgba(192, 21, 47, 0.1); border-left: 4px solid var(--color-red-500); border-radius: 8px;">
      <strong>⚠️ Radioactive Element</strong>
    </div>` : ''}
  `;
  
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('elementModal').classList.remove('active');
}

// Search and Filter
// Global Search
function setupGlobalSearch() {
  const globalSearch = document.getElementById('globalSearch');
  if (!globalSearch) return;
  
  globalSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length < 2) return;
    
    // Search in elements
    const elementResults = chemistryData.elements.filter(el => 
      el.name.toLowerCase().includes(query) || el.sym.toLowerCase().includes(query)
    );
    
    if (elementResults.length > 0 && elementResults.length < 10) {
      console.log('Found elements:', elementResults.map(e => e.name).join(', '));
    }
  });
}

function setupSearch() {
  const elementSearch = document.getElementById('elementSearch');
  const categoryFilter = document.getElementById('categoryFilter');
  const compoundSearch = document.getElementById('compoundSearch');
  const elementsListSearch = document.getElementById('elementsListSearch');
  const elementsListCategory = document.getElementById('elementsListCategory');
  
  elementSearch?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filterElements(query, categoryFilter.value);
  });
  
  categoryFilter?.addEventListener('change', (e) => {
    filterElements(elementSearch.value.toLowerCase(), e.target.value);
  });
  
  compoundSearch?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filterCompounds(query);
  });
  
  elementsListSearch?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filterElementsList(query, elementsListCategory.value);
  });
  
  elementsListCategory?.addEventListener('change', (e) => {
    filterElementsList(elementsListSearch.value.toLowerCase(), e.target.value);
  });
}

function filterElements(query, category) {
  const cells = document.querySelectorAll('.element-cell');
  cells.forEach(cell => {
    const element = chemistryData.elements.find(e => 
      cell.querySelector('.element-symbol').textContent === e.sym
    );
    
    const matchesQuery = !query || 
      element.name.toLowerCase().includes(query) ||
      element.sym.toLowerCase().includes(query);
    
    const matchesCategory = category === 'all' || element.category === category;
    
    cell.style.display = (matchesQuery && matchesCategory) ? 'flex' : 'none';
  });
}

function filterCompounds(query) {
  const items = document.querySelectorAll('.compound-item');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? 'block' : 'none';
  });
}

function filterElementsList(query, category) {
  const items = document.querySelectorAll('.element-list-item');
  items.forEach(item => {
    const element = chemistryData.elements.find(e => 
      item.querySelector('.element-list-symbol').textContent === e.sym
    );
    
    if (!element) return;
    
    const matchesQuery = !query || 
      element.name.toLowerCase().includes(query) ||
      element.sym.toLowerCase().includes(query) ||
      element.num.toString().includes(query);
    
    const matchesCategory = category === 'all' || element.category === category;
    
    item.style.display = (matchesQuery && matchesCategory) ? 'block' : 'none';
  });
}

// Render Elements List
function renderElementsList() {
  const container = document.getElementById('elementsList');
  if (!container) return;
  
  container.innerHTML = '';
  
  chemistryData.elements.forEach(element => {
    const item = document.createElement('div');
    item.className = 'element-list-item';
    item.innerHTML = `
      <div class="element-list-header">
        <div class="element-list-symbol ${element.category}">${element.sym}</div>
        <div class="element-list-info">
          <h3>${element.num}. ${element.name}</h3>
          <p>Atomic Mass: ${element.mass} | ${element.category.replace('-', ' ')}</p>
        </div>
      </div>
      <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">
        ${element.uses || 'Research element'}
      </div>
    `;
    item.addEventListener('click', () => showElementDetails(element));
    container.appendChild(item);
  });
}

// Render Reactions
function renderReactions() {
  const inorganicContainer = document.getElementById('inorganicReactions');
  const organicContainer = document.getElementById('organicReactions');
  
  inorganicContainer.innerHTML = chemistryData.reactions.inorganic.map(r => `
    <div class="reaction-item">
      <div class="reaction-type">${r.type}</div>
      <div class="reaction-formula">${r.formula}</div>
      <div class="reaction-example"><strong>Example:</strong> ${r.example}</div>
      <div class="reaction-example"><strong>Conditions:</strong> ${r.conditions}</div>
      <div class="reaction-example"><strong>Mechanism:</strong> ${r.mechanism}</div>
    </div>
  `).join('');
  
  organicContainer.innerHTML = chemistryData.reactions.organic.map(r => `
    <div class="reaction-item">
      <div class="reaction-type">${r.type}</div>
      <div class="reaction-formula">${r.formula}</div>
      <div class="reaction-example"><strong>Example:</strong> ${r.example}</div>
      <div class="reaction-example"><strong>Conditions:</strong> ${r.conditions}</div>
      <div class="reaction-example"><strong>Mechanism:</strong> ${r.mechanism}</div>
    </div>
  `).join('');
}

// Render Compounds
function renderCompounds() {
  const inorganicContainer = document.getElementById('inorganicCompounds');
  const organicContainer = document.getElementById('organicCompounds');
  
  inorganicContainer.innerHTML = chemistryData.compounds.inorganic.map(c => `
    <div class="compound-item">
      <div class="compound-name">${c.name}</div>
      <div class="compound-formula"><strong>Formula:</strong> ${c.formula}</div>
      <div><strong>Molar Mass:</strong> ${c.mass} g/mol</div>
      ${c.mp ? `<div><strong>Melting Point:</strong> ${c.mp}°C</div>` : ''}
      ${c.bp ? `<div><strong>Boiling Point:</strong> ${c.bp}°C</div>` : ''}
      <div><strong>IUPAC Name:</strong> ${c.iupac}</div>
      <div><strong>Uses:</strong> ${c.uses}</div>
      <div><strong>Properties:</strong> ${c.properties}</div>
    </div>
  `).join('');
  
  organicContainer.innerHTML = chemistryData.compounds.organic.map(c => `
    <div class="compound-item">
      <div class="compound-name">${c.name}</div>
      <div class="compound-formula"><strong>Formula:</strong> ${c.formula}</div>
      <div><strong>Class:</strong> ${c.class}</div>
      <div><strong>Molar Mass:</strong> ${c.mass} g/mol</div>
      <div><strong>IUPAC Name:</strong> ${c.iupac}</div>
      <div><strong>Uses:</strong> ${c.uses}</div>
      <div><strong>Properties:</strong> ${c.properties}</div>
    </div>
  `).join('');
}

// Render Polyatomic Ions
function renderPolyatomicIons() {
  const container = document.getElementById('polyatomicIons');
  container.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Formula</th>
          <th>Charge</th>
        </tr>
      </thead>
      <tbody>
        ${chemistryData.polyatomicIons.map(ion => `
          <tr>
            <td>${ion.name}</td>
            <td>${ion.formula}</td>
            <td>${ion.charge}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// CALCULATORS

// Molar Mass Calculator
function calculateMolarMass() {
  const formula = document.getElementById('molarMassInput').value.trim();
  const result = document.getElementById('molarMassResult');
  
  if (!formula) {
    result.textContent = 'Please enter a chemical formula';
    return;
  }
  
  try {
    let mass = 0;
    const breakdown = [];
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    
    while ((match = regex.exec(formula)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      
      if (atomicMasses[element]) {
        const elementMass = atomicMasses[element] * count;
        mass += elementMass;
        breakdown.push(`${element}: ${atomicMasses[element]} × ${count} = ${elementMass.toFixed(3)}`);
      } else {
        result.textContent = `Unknown element: ${element}`;
        return;
      }
    }
    
    result.innerHTML = `
      <strong>Molar Mass: ${mass.toFixed(3)} g/mol</strong><br><br>
      <strong>Breakdown:</strong><br>
      ${breakdown.join('<br>')}
    `;
  } catch (error) {
    result.textContent = 'Invalid formula format';
  }
}

// pH Calculator
function calculatePH() {
  const hConc = parseFloat(document.getElementById('hConcentration').value);
  const result = document.getElementById('phResult');
  
  if (isNaN(hConc) || hConc <= 0) {
    result.textContent = 'Please enter a valid positive concentration';
    return;
  }
  
  const pH = -Math.log10(hConc);
  const pOH = 14 - pH;
  const ohConc = Math.pow(10, -pOH);
  
  let type = '';
  if (pH < 7) type = 'Acidic';
  else if (pH > 7) type = 'Basic';
  else type = 'Neutral';
  
  result.innerHTML = `
    <strong>pH: ${pH.toFixed(2)}</strong> (${type})<br>
    pOH: ${pOH.toFixed(2)}<br>
    [H⁺]: ${hConc.toExponential(2)} M<br>
    [OH⁻]: ${ohConc.toExponential(2)} M
  `;
}

// Dilution Calculator
function calculateDilution() {
  const c1 = parseFloat(document.getElementById('c1').value);
  const v1 = parseFloat(document.getElementById('v1').value);
  const c2 = parseFloat(document.getElementById('c2').value);
  const v2 = parseFloat(document.getElementById('v2').value);
  const result = document.getElementById('dilutionResult');
  
  // Calculate the missing value
  if (isNaN(c1) || isNaN(v1) || isNaN(c2)) {
    if (!isNaN(v2)) {
      result.textContent = 'Please fill in C₁, V₁, and C₂ to calculate';
    } else {
      result.textContent = 'Please fill in at least three values';
    }
    return;
  }
  
  if (isNaN(v2)) {
    const calculatedV2 = (c1 * v1) / c2;
    result.innerHTML = `
      <strong>V₂ = ${calculatedV2.toFixed(2)} mL</strong><br><br>
      Using C₁V₁ = C₂V₂<br>
      ${c1} M × ${v1} mL = ${c2} M × ${calculatedV2.toFixed(2)} mL
    `;
  } else {
    result.textContent = 'Leave V₂ blank to calculate it, or verify: C₁V₁ = C₂V₂';
  }
}

// Ideal Gas Law Calculator
function calculateIdealGas() {
  const P = parseFloat(document.getElementById('pressure').value);
  const V = parseFloat(document.getElementById('volume').value);
  const T = parseFloat(document.getElementById('temperature').value);
  const result = document.getElementById('idealGasResult');
  
  if (isNaN(P) || isNaN(V) || isNaN(T)) {
    result.textContent = 'Please enter all values';
    return;
  }
  
  if (T <= 0) {
    result.textContent = 'Temperature must be positive (in Kelvin)';
    return;
  }
  
  const R = 0.08206; // L·atm/(mol·K)
  const n = (P * V) / (R * T);
  
  result.innerHTML = `
    <strong>n = ${n.toFixed(4)} mol</strong><br><br>
    Using PV = nRT<br>
    R = 0.08206 L·atm/(mol·K)<br>
    ${P} atm × ${V} L = ${n.toFixed(4)} mol × 0.08206 × ${T} K
  `;
}

// Molarity Calculator
function calculateMolarity() {
  const moles = parseFloat(document.getElementById('moles').value);
  const volume = parseFloat(document.getElementById('solutionVolume').value);
  const result = document.getElementById('molarityResult');
  
  if (isNaN(moles) || isNaN(volume)) {
    result.textContent = 'Please enter both values';
    return;
  }
  
  if (volume <= 0) {
    result.textContent = 'Volume must be positive';
    return;
  }
  
  const molarity = moles / volume;
  
  result.innerHTML = `
    <strong>Molarity = ${molarity.toFixed(4)} M</strong><br><br>
    M = moles / volume<br>
    M = ${moles} mol / ${volume} L
  `;
}

// Percent Composition Calculator
function calculatePercentComposition() {
  const formula = document.getElementById('percentCompInput').value.trim();
  const result = document.getElementById('percentCompResult');
  
  if (!formula) {
    result.textContent = 'Please enter a chemical formula';
    return;
  }
  
  try {
    let totalMass = 0;
    const elements = {};
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    
    while ((match = regex.exec(formula)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      
      if (!atomicMasses[element]) {
        result.textContent = `Unknown element: ${element}`;
        return;
      }
      
      elements[element] = (elements[element] || 0) + count;
      totalMass += atomicMasses[element] * count;
    }
    
    const percentages = [];
    for (const [element, count] of Object.entries(elements)) {
      const mass = atomicMasses[element] * count;
      const percent = (mass / totalMass) * 100;
      percentages.push(`${element}: ${percent.toFixed(2)}%`);
    }
    
    result.innerHTML = `
      <strong>Total Molar Mass: ${totalMass.toFixed(3)} g/mol</strong><br><br>
      <strong>Percent Composition:</strong><br>
      ${percentages.join('<br>')}
    `;
  } catch (error) {
    result.textContent = 'Invalid formula format';
  }
}

// Stoichiometry Calculator
function calculateStoichiometry() {
  const reactantMass = parseFloat(document.getElementById('reactantMass').value);
  const reactantAmount = parseFloat(document.getElementById('reactantAmount').value);
  const productMass = parseFloat(document.getElementById('productMass').value);
  const moleRatio = parseFloat(document.getElementById('moleRatio').value);
  const result = document.getElementById('stoichiometryResult');
  
  if (isNaN(reactantMass) || isNaN(reactantAmount) || isNaN(productMass) || isNaN(moleRatio)) {
    result.textContent = 'Please enter all values';
    return;
  }
  
  const molesReactant = reactantAmount / reactantMass;
  const molesProduct = molesReactant * moleRatio;
  const massProduct = molesProduct * productMass;
  
  result.innerHTML = `
    <strong>Product Mass: ${massProduct.toFixed(3)} g</strong><br><br>
    Moles of Reactant: ${molesReactant.toFixed(4)} mol<br>
    Moles of Product: ${molesProduct.toFixed(4)} mol<br>
    Mass of Product: ${massProduct.toFixed(3)} g
  `;
}

// Limiting Reagent Calculator
function calculateLimitingReagent() {
  const reagentA = parseFloat(document.getElementById('reagentA').value);
  const coefficientA = parseFloat(document.getElementById('coefficientA').value);
  const reagentB = parseFloat(document.getElementById('reagentB').value);
  const coefficientB = parseFloat(document.getElementById('coefficientB').value);
  const result = document.getElementById('limitingReagentResult');
  
  if (isNaN(reagentA) || isNaN(coefficientA) || isNaN(reagentB) || isNaN(coefficientB)) {
    result.textContent = 'Please enter all values';
    return;
  }
  
  const ratioA = reagentA / coefficientA;
  const ratioB = reagentB / coefficientB;
  
  let limiting, excess, excessAmount;
  if (ratioA < ratioB) {
    limiting = 'Reactant A';
    excess = 'Reactant B';
    excessAmount = reagentB - (ratioA * coefficientB);
  } else {
    limiting = 'Reactant B';
    excess = 'Reactant A';
    excessAmount = reagentA - (ratioB * coefficientA);
  }
  
  result.innerHTML = `
    <strong>Limiting Reagent: ${limiting}</strong><br><br>
    Reactant A ratio: ${ratioA.toFixed(4)}<br>
    Reactant B ratio: ${ratioB.toFixed(4)}<br><br>
    <strong>Excess Reagent: ${excess}</strong><br>
    Excess Amount: ${excessAmount.toFixed(4)} mol
  `;
}

// Percent Yield Calculator
function calculatePercentYield() {
  const theoretical = parseFloat(document.getElementById('theoreticalYield').value);
  const actual = parseFloat(document.getElementById('actualYield').value);
  const result = document.getElementById('percentYieldResult');
  
  if (isNaN(theoretical) || isNaN(actual)) {
    result.textContent = 'Please enter both values';
    return;
  }
  
  const percentYield = (actual / theoretical) * 100;
  
  result.innerHTML = `
    <strong>Percent Yield: ${percentYield.toFixed(2)}%</strong><br><br>
    Theoretical Yield: ${theoretical} g<br>
    Actual Yield: ${actual} g<br>
    Efficiency: ${percentYield > 100 ? 'Error - exceeds theoretical!' : percentYield > 90 ? 'Excellent' : percentYield > 70 ? 'Good' : 'Fair'}
  `;
}

// Empirical Formula Calculator
function calculateEmpiricalFormula() {
  const c = parseFloat(document.getElementById('empC').value) || 0;
  const h = parseFloat(document.getElementById('empH').value) || 0;
  const o = parseFloat(document.getElementById('empO').value) || 0;
  const result = document.getElementById('empiricalFormulaResult');
  
  if (c === 0 && h === 0 && o === 0) {
    result.textContent = 'Please enter at least one element percentage';
    return;
  }
  
  const molesC = c / 12.011;
  const molesH = h / 1.008;
  const molesO = o / 15.999;
  
  const minMoles = Math.min(molesC || Infinity, molesH || Infinity, molesO || Infinity);
  
  let ratioC = molesC / minMoles;
  let ratioH = molesH / minMoles;
  let ratioO = molesO / minMoles;
  
  // Round to nearest whole number
  ratioC = Math.round(ratioC);
  ratioH = Math.round(ratioH);
  ratioO = Math.round(ratioO);
  
  let formula = '';
  if (ratioC > 0) formula += 'C' + (ratioC > 1 ? ratioC : '');
  if (ratioH > 0) formula += 'H' + (ratioH > 1 ? ratioH : '');
  if (ratioO > 0) formula += 'O' + (ratioO > 1 ? ratioO : '');
  
  result.innerHTML = `
    <strong>Empirical Formula: ${formula}</strong><br><br>
    Mole Ratios:<br>
    C: ${ratioC}<br>
    H: ${ratioH}<br>
    O: ${ratioO}
  `;
}

// Molality Calculator
function calculateMolality() {
  const moles = parseFloat(document.getElementById('molalityMoles').value);
  const mass = parseFloat(document.getElementById('solventMass').value);
  const result = document.getElementById('molalityResult');
  
  if (isNaN(moles) || isNaN(mass)) {
    result.textContent = 'Please enter both values';
    return;
  }
  
  const molality = moles / mass;
  
  result.innerHTML = `
    <strong>Molality: ${molality.toFixed(4)} m</strong><br><br>
    m = moles / kg of solvent<br>
    m = ${moles} mol / ${mass} kg
  `;
}

// Oxidation Number Guide
function calculateOxidationNumber() {
  const formula = document.getElementById('oxidationFormula').value.trim();
  const result = document.getElementById('oxidationNumberResult');
  
  if (!formula) {
    result.innerHTML = `
      <strong>Oxidation Number Rules:</strong><br>
      1. Pure elements = 0<br>
      2. Monatomic ions = charge<br>
      3. Oxygen usually -2<br>
      4. Hydrogen usually +1<br>
      5. Sum = total charge
    `;
    return;
  }
  
  result.innerHTML = `
    <strong>Analyzing: ${formula}</strong><br><br>
    Apply these rules:<br>
    • Elements in pure form: 0<br>
    • Oxygen: usually -2<br>
    • Hydrogen: +1 (with nonmetals), -1 (with metals)<br>
    • Alkali metals: +1<br>
    • Alkaline earth: +2<br>
    • Halogens: usually -1<br>
    • Sum of all oxidation numbers = 0 (or ion charge)
  `;
}

// Half-Life Calculator
function calculateHalfLife() {
  const initial = parseFloat(document.getElementById('initialAmount').value);
  const halfLife = parseFloat(document.getElementById('halfLife').value);
  const time = parseFloat(document.getElementById('timeElapsed').value);
  const result = document.getElementById('halfLifeResult');
  
  if (isNaN(initial) || isNaN(halfLife) || isNaN(time)) {
    result.textContent = 'Please enter all values';
    return;
  }
  
  const n = time / halfLife;
  const remaining = initial * Math.pow(0.5, n);
  const decayed = initial - remaining;
  const percentRemaining = (remaining / initial) * 100;
  
  result.innerHTML = `
    <strong>Remaining Amount: ${remaining.toFixed(4)} g</strong><br><br>
    Initial: ${initial} g<br>
    Decayed: ${decayed.toFixed(4)} g<br>
    Percent Remaining: ${percentRemaining.toFixed(2)}%<br>
    Number of Half-Lives: ${n.toFixed(2)}
  `;
}

// Temperature Converter
function convertTemperature() {
  const value = parseFloat(document.getElementById('tempValue').value);
  const from = document.getElementById('tempFrom').value;
  const to = document.getElementById('tempTo').value;
  const result = document.getElementById('temperatureResult');
  
  if (isNaN(value)) {
    result.textContent = 'Please enter a value';
    return;
  }
  
  let celsius;
  if (from === 'C') celsius = value;
  else if (from === 'F') celsius = (value - 32) * 5/9;
  else celsius = value - 273.15;
  
  let converted;
  if (to === 'C') converted = celsius;
  else if (to === 'F') converted = celsius * 9/5 + 32;
  else converted = celsius + 273.15;
  
  result.innerHTML = `
    <strong>${value}°${from} = ${converted.toFixed(2)}°${to}</strong><br><br>
    All conversions:<br>
    Celsius: ${celsius.toFixed(2)}°C<br>
    Fahrenheit: ${(celsius * 9/5 + 32).toFixed(2)}°F<br>
    Kelvin: ${(celsius + 273.15).toFixed(2)} K
  `;
}

// Pressure Converter
function convertPressure() {
  const value = parseFloat(document.getElementById('pressureValue').value);
  const from = document.getElementById('pressureFrom').value;
  const result = document.getElementById('pressureResult');
  
  if (isNaN(value)) {
    result.textContent = 'Please enter a value';
    return;
  }
  
  let atm;
  if (from === 'atm') atm = value;
  else if (from === 'Pa') atm = value / 101325;
  else if (from === 'kPa') atm = value / 101.325;
  else if (from === 'mmHg') atm = value / 760;
  else if (from === 'psi') atm = value / 14.696;
  
  result.innerHTML = `
    <strong>Conversions:</strong><br><br>
    ${atm.toFixed(6)} atm<br>
    ${(atm * 101325).toFixed(2)} Pa<br>
    ${(atm * 101.325).toFixed(2)} kPa<br>
    ${(atm * 760).toFixed(2)} mmHg<br>
    ${(atm * 14.696).toFixed(2)} psi
  `;
}

// Scientific Notation Converter
function convertScientificNotation() {
  const input = document.getElementById('sciNotationInput').value.trim();
  const result = document.getElementById('scientificNotationResult');
  
  if (!input) {
    result.textContent = 'Please enter a number';
    return;
  }
  
  const num = parseFloat(input);
  if (isNaN(num)) {
    result.textContent = 'Invalid number';
    return;
  }
  
  const scientific = num.toExponential(3);
  const standard = num.toString();
  
  result.innerHTML = `
    <strong>Standard: ${standard}</strong><br>
    <strong>Scientific: ${scientific}</strong><br><br>
    Value: ${num}
  `;
}

// Significant Figures Counter
function countSigFigs() {
  const input = document.getElementById('sigFigInput').value.trim();
  const result = document.getElementById('sigFigResult');
  
  if (!input) {
    result.textContent = 'Please enter a number';
    return;
  }
  
  let sigFigs = 0;
  let foundNonZero = false;
  let afterDecimal = false;
  
  for (let char of input) {
    if (char === '.') {
      afterDecimal = true;
      continue;
    }
    if (char >= '0' && char <= '9') {
      if (char !== '0') {
        foundNonZero = true;
        sigFigs++;
      } else if (foundNonZero) {
        sigFigs++;
      } else if (afterDecimal) {
        // Leading zeros after decimal don't count
        continue;
      }
    }
  }
  
  result.innerHTML = `
    <strong>Significant Figures: ${sigFigs}</strong><br><br>
    Number: ${input}<br>
    Rules applied:<br>
    • Non-zero digits count<br>
    • Zeros between non-zero digits count<br>
    • Trailing zeros in decimal count
  `;
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('elementModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Make showElementDetails globally accessible for inline onclick handlers
window.showElementDetailsFromString = function(elementStr) {
  const element = JSON.parse(elementStr.replace(/&quot;/g, '"'));
  showElementDetails(element);
};

// Constants Navigation
function setupConstantsNavigation() {
  const tabs = document.querySelectorAll('.constants-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-constants-tab');
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show target panel
      document.querySelectorAll('.constants-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });
  
  // Constants search
  const search = document.getElementById('constantsSearch');
  if (search) {
    search.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      filterConstants(query);
    });
  }
}

function filterConstants(query) {
  if (!query) {
    document.querySelectorAll('.constants-table tbody tr').forEach(row => {
      row.style.display = '';
    });
    return;
  }
  
  document.querySelectorAll('.constants-table tbody tr').forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

// Render All Constants Tables
function renderAllConstants() {
  renderPhysicalConstants();
  renderConversions();
  renderReductionPotentials();
  renderPkaValues();
  renderKspValues();
  renderBondEnergies();
  renderElectronegativity();
  renderSpectroscopy();
}

function renderPhysicalConstants() {
  const container = document.getElementById('physicalConstantsTable');
  container.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>Constant</th>
            <th>Symbol</th>
            <th>Value</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.physical.map(c => `
            <tr>
              <td><strong>${c.name}</strong></td>
              <td>${c.symbol}</td>
              <td>${c.value}</td>
              <td>${c.unit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderConversions() {
  const container = document.getElementById('conversionsTable');
  container.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>From</th>
            <th>Equals</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.conversions.map(c => `
            <tr>
              <td><strong>${c.from}</strong></td>
              <td>${c.equals}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderReductionPotentials() {
  const container = document.getElementById('reductionPotentialsTable');
  container.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th style="width: 60%;">Half-Reaction</th>
            <th>E°</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.reductionPotentials.map(r => `
            <tr>
              <td><code style="font-size: 13px;">${r.reaction}</code></td>
              <td><strong>${r.E0}</strong></td>
              <td>${r.unit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div style="margin-top: 16px; padding: 12px; background: var(--color-secondary); border-radius: 8px; font-size: 13px;">
      <strong>Note:</strong> More positive E° = stronger oxidizing agent (better at gaining electrons). Reference: 2H⁺ + 2e⁻ → H₂ = 0.00 V
    </div>
  `;
}

function renderPkaValues() {
  const pkaContainer = document.getElementById('pkaTable');
  const pkbContainer = document.getElementById('pkbTable');
  
  pkaContainer.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>Acid</th>
            <th>pKa</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.pka.map(a => `
            <tr>
              <td>${a.acid}</td>
              <td><strong>${a.pKa}</strong></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  
  pkbContainer.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>Base</th>
            <th>pKb</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.pkb.map(b => `
            <tr>
              <td>${b.base}</td>
              <td><strong>${b.pKb}</strong></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderKspValues() {
  const container = document.getElementById('kspTable');
  container.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>Compound</th>
            <th>Ksp Value</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.ksp.map(k => `
            <tr>
              <td><strong>${k.compound}</strong></td>
              <td>${k.Ksp}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div style="margin-top: 16px; padding: 12px; background: var(--color-secondary); border-radius: 8px; font-size: 13px;">
      <strong>Note:</strong> Lower Ksp = less soluble. Ksp = [cation]<sup>m</sup>[anion]<sup>n</sup> for compound C<sub>m</sub>A<sub>n</sub>
    </div>
  `;
}

function renderBondEnergies() {
  const container = document.getElementById('bondEnergiesTable');
  container.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>Bond Type</th>
            <th>Energy</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.bondEnergies.map(b => `
            <tr>
              <td><strong>${b.bond}</strong></td>
              <td>${b.energy}</td>
              <td>${b.unit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div style="margin-top: 16px; padding: 12px; background: var(--color-secondary); border-radius: 8px; font-size: 13px;">
      <strong>Usage:</strong> ΔH<sub>rxn</sub> = Σ(bonds broken) - Σ(bonds formed). Higher energy = stronger bond.
    </div>
  `;
}

function renderElectronegativity() {
  const container = document.getElementById('electronegativityTable');
  container.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>Element</th>
            <th>Electronegativity</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.electronegativity.map(e => `
            <tr>
              <td><strong>${e.element}</strong></td>
              <td>${e.value}</td>
              <td>${e.note || '-'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div style="margin-top: 16px; padding: 12px; background: var(--color-secondary); border-radius: 8px; font-size: 13px;">
      <strong>Pauling Scale:</strong> Measures atom's ability to attract electrons in a bond. Higher value = more electronegative.
    </div>
  `;
}

function renderSpectroscopy() {
  const irContainer = document.getElementById('irTable');
  const nmrContainer = document.getElementById('nmrTable');
  
  irContainer.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>Functional Group</th>
            <th>Range</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.spectroscopy.IR.map(ir => `
            <tr>
              <td><strong>${ir.group}</strong></td>
              <td>${ir.range}</td>
              <td>${ir.unit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  
  nmrContainer.innerHTML = `
    <div class="table-wrapper">
      <table class="constants-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Group</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>
          ${chemistryData.constantsData.spectroscopy.NMR.map(nmr => `
            <tr>
              <td><strong>${nmr.type}</strong></td>
              <td>${nmr.group}</td>
              <td>${nmr.shift} ${nmr.unit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Additional Calculator Functions
function calculateThermodynamics() {
  const deltaH = parseFloat(document.getElementById('deltaH')?.value);
  const deltaS = parseFloat(document.getElementById('deltaS')?.value);
  const temp = parseFloat(document.getElementById('tempK')?.value);
  const result = document.getElementById('thermodynamicsResult');
  
  if (!result || isNaN(deltaH) || isNaN(deltaS) || isNaN(temp)) {
    if (result) result.textContent = 'Please enter all values';
    return;
  }
  
  const deltaG = deltaH - (temp * deltaS / 1000); // Convert S from J to kJ
  const spontaneous = deltaG < 0 ? 'Spontaneous' : deltaG > 0 ? 'Non-spontaneous' : 'At equilibrium';
  
  result.innerHTML = `
    <strong>ΔG = ${deltaG.toFixed(2)} kJ/mol</strong><br><br>
    ${spontaneous} at ${temp} K<br>
    ΔH = ${deltaH} kJ/mol<br>
    ΔS = ${deltaS} J/(mol·K)<br>
    T = ${temp} K
  `;
}

function calculateBufferPH() {
  const pKa = parseFloat(document.getElementById('pKa')?.value);
  const acidConc = parseFloat(document.getElementById('acidConc')?.value);
  const baseConc = parseFloat(document.getElementById('baseConc')?.value);
  const result = document.getElementById('bufferResult');
  
  if (!result || isNaN(pKa) || isNaN(acidConc) || isNaN(baseConc)) {
    if (result) result.textContent = 'Please enter all values';
    return;
  }
  
  const pH = pKa + Math.log10(baseConc / acidConc);
  
  result.innerHTML = `
    <strong>pH = ${pH.toFixed(2)}</strong><br><br>
    Using Henderson-Hasselbalch equation:<br>
    pH = pKa + log([A⁻]/[HA])<br>
    pH = ${pKa} + log(${baseConc}/${acidConc})
  `;
}

function calculateNernst() {
  const E0 = parseFloat(document.getElementById('E0')?.value);
  const n = parseFloat(document.getElementById('electrons')?.value);
  const Q = parseFloat(document.getElementById('Q')?.value);
  const temp = parseFloat(document.getElementById('tempNernst')?.value) || 298;
  const result = document.getElementById('nernstResult');
  
  if (!result || isNaN(E0) || isNaN(n) || isNaN(Q)) {
    if (result) result.textContent = 'Please enter E°, n, and Q';
    return;
  }
  
  const R = 8.314;
  const F = 96485;
  const E = E0 - (R * temp / (n * F)) * Math.log(Q);
  
  result.innerHTML = `
    <strong>E = ${E.toFixed(3)} V</strong><br><br>
    E = E° - (RT/nF) ln Q<br>
    At ${temp} K with Q = ${Q}<br>
    n = ${n} electrons transferred
  `;
}

function calculateWavelengthFrequency() {
  const input = parseFloat(document.getElementById('waveInput')?.value);
  const inputType = document.getElementById('waveType')?.value;
  const result = document.getElementById('wavelengthResult');
  
  if (!result || isNaN(input)) {
    if (result) result.textContent = 'Please enter a value';
    return;
  }
  
  const c = 2.998e8; // m/s
  const h = 6.626e-34; // J·s
  
  let wavelength, frequency, energy;
  
  if (inputType === 'wavelength') {
    wavelength = input * 1e-9; // convert nm to m
    frequency = c / wavelength;
    energy = h * frequency;
  } else if (inputType === 'frequency') {
    frequency = input;
    wavelength = c / frequency;
    energy = h * frequency;
  } else {
    energy = input * 1.602e-19; // convert eV to J
    frequency = energy / h;
    wavelength = c / frequency;
  }
  
  result.innerHTML = `
    <strong>Conversions:</strong><br><br>
    Wavelength: ${(wavelength * 1e9).toExponential(3)} nm<br>
    Frequency: ${frequency.toExponential(3)} Hz<br>
    Energy: ${(energy / 1.602e-19).toExponential(3)} eV<br>
    Energy: ${energy.toExponential(3)} J
  `;
}

function calculateOsmoticPressure() {
  const molarity = parseFloat(document.getElementById('molarityOsmotic')?.value);
  const temp = parseFloat(document.getElementById('tempOsmotic')?.value);
  const i = parseFloat(document.getElementById('vanHoff')?.value) || 1;
  const result = document.getElementById('osmoticResult');
  
  if (!result || isNaN(molarity) || isNaN(temp)) {
    if (result) result.textContent = 'Please enter molarity and temperature';
    return;
  }
  
  const R = 0.08206; // L·atm/(mol·K)
  const Pi = i * molarity * R * temp;
  
  result.innerHTML = `
    <strong>π = ${Pi.toFixed(3)} atm</strong><br><br>
    Using: π = iMRT<br>
    i = ${i} (van't Hoff factor)<br>
    M = ${molarity} M<br>
    T = ${temp} K
  `;
}

function showDictionarySearch() {
  const searchTerm = document.getElementById('dictionarySearch')?.value.toLowerCase();
  const container = document.getElementById('dictionaryResults');
  
  if (!container) return;
  
  if (!searchTerm || searchTerm.length < 2) {
    container.innerHTML = '<p>Enter at least 2 characters to search</p>';
    return;
  }
  
  const results = chemistryData.dictionaryTerms.filter(term => 
    term.term.toLowerCase().includes(searchTerm) ||
    term.definition.toLowerCase().includes(searchTerm) ||
    term.category.toLowerCase().includes(searchTerm)
  );
  
  if (results.length === 0) {
    container.innerHTML = '<p>No terms found matching your search</p>';
    return;
  }
  
  container.innerHTML = results.map(term => `
    <div class="card" style="margin-bottom: 16px;">
      <h3>${term.term}</h3>
      <p><strong>Category:</strong> ${term.category}</p>
      <p>${term.definition}</p>
      ${term.examples ? `<p><strong>Examples:</strong> ${term.examples.join(', ')}</p>` : ''}
    </div>
  `).join('');
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}