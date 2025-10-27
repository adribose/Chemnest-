// Chemistry Database - Complete Data
const chemistryData = {
  elements: [
    // Period 1
    {num: 1, sym: "H", name: "Hydrogen", mass: 1.008, group: 1, period: 1, category: "nonmetal", mp: -259.16, bp: -252.87, density: 0.00008988, config: "1s¹", en: 2.20, ar: 53, ie: 1312, uses: "Fuel, ammonia production, hydrogenation, fuel cells", oxidation: "+1, -1", discovery: "1766", discoverer: "Henry Cavendish", state: "gas"},
    {num: 2, sym: "He", name: "Helium", mass: 4.003, group: 18, period: 1, category: "noble-gas", mp: -272.2, bp: -268.93, config: "1s²", uses: "Balloons, cryogenics", discovery: "1895", discoverer: "William Ramsay"},
    {num: 3, sym: "Li", name: "Lithium", mass: 6.94, group: 1, period: 2, category: "alkali-metal", mp: 180.54, bp: 1342, density: 0.534, config: "[He] 2s¹", en: 0.98, uses: "Batteries, psychiatric medication", oxidation: "+1", discovery: "1817"},
    {num: 4, sym: "Be", name: "Beryllium", mass: 9.012, group: 2, period: 2, category: "alkaline-earth", mp: 1287, bp: 2470, config: "[He] 2s²", en: 1.57, uses: "Aerospace alloys, X-ray windows", oxidation: "+2", discovery: "1798"},
    {num: 5, sym: "B", name: "Boron", mass: 10.81, group: 13, period: 2, category: "metalloid", mp: 2075, bp: 4000, config: "[He] 2s² 2p¹", en: 2.04, uses: "Glass, ceramics, detergents", oxidation: "+3", discovery: "1808"},
    {num: 6, sym: "C", name: "Carbon", mass: 12.011, group: 14, period: 2, category: "nonmetal", mp: 3550, bp: 4027, config: "[He] 2s² 2p²", en: 2.55, uses: "Organic compounds, steel production", oxidation: "+4, +2, -4", discovery: "Ancient"},
    {num: 7, sym: "N", name: "Nitrogen", mass: 14.007, group: 15, period: 2, category: "nonmetal", mp: -210.1, bp: -195.79, config: "[He] 2s² 2p³", en: 3.04, uses: "Fertilizers, cryogenics, inert atmosphere", oxidation: "+5, +4, +3, +2, +1, -3", discovery: "1772"},
    {num: 8, sym: "O", name: "Oxygen", mass: 15.999, group: 16, period: 2, category: "nonmetal", mp: -218.79, bp: -182.95, config: "[He] 2s² 2p⁴", en: 3.44, uses: "Respiration, combustion, medical", oxidation: "-2, -1", discovery: "1774"},
    {num: 9, sym: "F", name: "Fluorine", mass: 18.998, group: 17, period: 2, category: "halogen", mp: -219.62, bp: -188.12, config: "[He] 2s² 2p⁵", en: 3.98, uses: "Toothpaste, refrigerants, Teflon", oxidation: "-1", discovery: "1886"},
    {num: 10, sym: "Ne", name: "Neon", mass: 20.180, group: 18, period: 2, category: "noble-gas", mp: -248.59, bp: -246.08, config: "[He] 2s² 2p⁶", uses: "Neon signs, lasers", discovery: "1898"},
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
    {num: 37, sym: "Rb", name: "Rubidium", mass: 85.468, group: 1, period: 5, category: "alkali-metal", config: "[Kr] 5s¹", mp: 39.31, bp: 688, uses: "Atomic clocks, photocells", oxidation: "+1", discovery: "1861"},
    {num: 38, sym: "Sr", name: "Strontium", mass: 87.62, group: 2, period: 5, category: "alkaline-earth", config: "[Kr] 5s²", mp: 777, bp: 1382, uses: "Fireworks, magnets", oxidation: "+2", discovery: "1790"},
    {num: 47, sym: "Ag", name: "Silver", mass: 107.868, group: 11, period: 5, category: "transition-metal", mp: 961.78, bp: 2162, config: "[Kr] 4d¹⁰ 5s¹", uses: "Jewelry, photography, electronics", oxidation: "+1", discovery: "Ancient"},
    {num: 79, sym: "Au", name: "Gold", mass: 196.967, group: 11, period: 6, category: "transition-metal", mp: 1064.18, bp: 2856, config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", uses: "Jewelry, electronics, investment", oxidation: "+3, +1", discovery: "Ancient"},
    {num: 80, sym: "Hg", name: "Mercury", mass: 200.592, group: 12, period: 6, category: "transition-metal", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", mp: -38.83, bp: 356.73, uses: "Thermometers, batteries", oxidation: "+2, +1", discovery: "Ancient"},
    {num: 82, sym: "Pb", name: "Lead", mass: 207.2, group: 14, period: 6, category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", mp: 327.46, bp: 1749, uses: "Batteries, radiation shielding", oxidation: "+4, +2", discovery: "Ancient"},
    {num: 92, sym: "U", name: "Uranium", mass: 238.029, period: 7, category: "actinide", mp: 1135, bp: 4131, config: "[Rn] 5f³ 6d¹ 7s²", radioactive: true, uses: "Nuclear fuel, weapons", oxidation: "+6, +5, +4, +3", discovery: "1789", state: "solid"},
    
    // Additional elements to complete 118
    {num: 41, sym: "Nb", name: "Niobium", mass: 92.906, group: 5, period: 5, category: "transition-metal", config: "[Kr] 4d⁴ 5s¹", mp: 2477, bp: 4744, uses: "Steel alloys, superconductors", oxidation: "+5, +3", discovery: "1801", state: "solid"},
    {num: 42, sym: "Mo", name: "Molybdenum", mass: 95.95, group: 6, period: 5, category: "transition-metal", config: "[Kr] 4d⁵ 5s¹", mp: 2623, bp: 4639, uses: "Steel alloys, catalysts", oxidation: "+6, +4", discovery: "1778", state: "solid"},
    {num: 43, sym: "Tc", name: "Technetium", mass: 98, group: 7, period: 5, category: "transition-metal", config: "[Kr] 4d⁵ 5s²", radioactive: true, uses: "Medical imaging", oxidation: "+7, +4", discovery: "1937", state: "solid"},
    {num: 44, sym: "Ru", name: "Ruthenium", mass: 101.07, group: 8, period: 5, category: "transition-metal", config: "[Kr] 4d⁷ 5s¹", mp: 2334, bp: 4150, uses: "Catalysts, electronics", oxidation: "+3, +4", discovery: "1844", state: "solid"},
    {num: 45, sym: "Rh", name: "Rhodium", mass: 102.906, group: 9, period: 5, category: "transition-metal", config: "[Kr] 4d⁸ 5s¹", mp: 1964, bp: 3695, uses: "Catalytic converters, jewelry", oxidation: "+3", discovery: "1803", state: "solid"},
    {num: 46, sym: "Pd", name: "Palladium", mass: 106.42, group: 10, period: 5, category: "transition-metal", config: "[Kr] 4d¹⁰", mp: 1555, bp: 2963, uses: "Catalytic converters, jewelry", oxidation: "+2, +4", discovery: "1803", state: "solid"},
    {num: 48, sym: "Cd", name: "Cadmium", mass: 112.414, group: 12, period: 5, category: "transition-metal", config: "[Kr] 4d¹⁰ 5s²", mp: 321.07, bp: 767, uses: "Batteries, pigments", oxidation: "+2", discovery: "1817", state: "solid"},
    {num: 49, sym: "In", name: "Indium", mass: 114.818, group: 13, period: 5, category: "post-transition", config: "[Kr] 4d¹⁰ 5s² 5p¹", mp: 156.6, bp: 2072, uses: "LCD screens, semiconductors", oxidation: "+3", discovery: "1863", state: "solid"},
    {num: 51, sym: "Sb", name: "Antimony", mass: 121.76, group: 15, period: 5, category: "metalloid", config: "[Kr] 4d¹⁰ 5s² 5p³", mp: 630.63, bp: 1587, uses: "Flame retardants, alloys", oxidation: "+5, +3, -3", discovery: "Ancient", state: "solid"},
    {num: 52, sym: "Te", name: "Tellurium", mass: 127.60, group: 16, period: 5, category: "metalloid", config: "[Kr] 4d¹⁰ 5s² 5p⁴", mp: 449.51, bp: 988, uses: "Solar panels, metallurgy", oxidation: "+6, +4, -2", discovery: "1782", state: "solid"},
    
    // Period 6
    {num: 55, sym: "Cs", name: "Cesium", mass: 132.905, group: 1, period: 6, category: "alkali-metal", config: "[Xe] 6s¹", mp: 28.44, bp: 671, uses: "Atomic clocks, drilling fluids", oxidation: "+1", discovery: "1860", state: "solid"},
    {num: 56, sym: "Ba", name: "Barium", mass: 137.327, group: 2, period: 6, category: "alkaline-earth", config: "[Xe] 6s²", mp: 727, bp: 1845, uses: "Medical imaging, fireworks", oxidation: "+2", discovery: "1808", state: "solid"},
    {num: 57, sym: "La", name: "Lanthanum", mass: 138.905, group: 3, period: 6, category: "lanthanide", config: "[Xe] 5d¹ 6s²", mp: 920, bp: 3464, uses: "Camera lenses, catalysts", oxidation: "+3", discovery: "1839", state: "solid"},
    {num: 58, sym: "Ce", name: "Cerium", mass: 140.116, period: 6, category: "lanthanide", config: "[Xe] 4f¹ 5d¹ 6s²", mp: 795, bp: 3443, uses: "Catalytic converters, lighter flints", oxidation: "+3, +4", discovery: "1803", state: "solid"},
    {num: 59, sym: "Pr", name: "Praseodymium", mass: 140.908, period: 6, category: "lanthanide", config: "[Xe] 4f³ 6s²", uses: "Magnets, glass coloring", oxidation: "+3", discovery: "1885", state: "solid"},
    {num: 60, sym: "Nd", name: "Neodymium", mass: 144.242, period: 6, category: "lanthanide", config: "[Xe] 4f⁴ 6s²", uses: "Powerful magnets, lasers", oxidation: "+3", discovery: "1885", state: "solid"},
    {num: 61, sym: "Pm", name: "Promethium", mass: 145, period: 6, category: "lanthanide", config: "[Xe] 4f⁵ 6s²", radioactive: true, uses: "Nuclear batteries", oxidation: "+3", discovery: "1945", state: "solid"},
    {num: 62, sym: "Sm", name: "Samarium", mass: 150.36, period: 6, category: "lanthanide", config: "[Xe] 4f⁶ 6s²", uses: "Magnets, nuclear reactors", oxidation: "+3, +2", discovery: "1879", state: "solid"},
    {num: 63, sym: "Eu", name: "Europium", mass: 151.964, period: 6, category: "lanthanide", config: "[Xe] 4f⁷ 6s²", uses: "Red phosphors in TVs", oxidation: "+3, +2", discovery: "1901", state: "solid"},
    {num: 64, sym: "Gd", name: "Gadolinium", mass: 157.25, period: 6, category: "lanthanide", config: "[Xe] 4f⁷ 5d¹ 6s²", uses: "MRI contrast agent, magnets", oxidation: "+3", discovery: "1880", state: "solid"},
    {num: 65, sym: "Tb", name: "Terbium", mass: 158.925, period: 6, category: "lanthanide", config: "[Xe] 4f⁹ 6s²", uses: "Green phosphors, magnets", oxidation: "+3", discovery: "1843", state: "solid"},
    {num: 66, sym: "Dy", name: "Dysprosium", mass: 162.500, period: 6, category: "lanthanide", config: "[Xe] 4f¹⁰ 6s²", uses: "Magnets, lasers", oxidation: "+3", discovery: "1886", state: "solid"},
    {num: 67, sym: "Ho", name: "Holmium", mass: 164.930, period: 6, category: "lanthanide", config: "[Xe] 4f¹¹ 6s²", uses: "Lasers, magnets", oxidation: "+3", discovery: "1878", state: "solid"},
    {num: 68, sym: "Er", name: "Erbium", mass: 167.259, period: 6, category: "lanthanide", config: "[Xe] 4f¹² 6s²", uses: "Fiber optic amplifiers", oxidation: "+3", discovery: "1843", state: "solid"},
    {num: 69, sym: "Tm", name: "Thulium", mass: 168.934, period: 6, category: "lanthanide", config: "[Xe] 4f¹³ 6s²", uses: "Portable X-ray devices", oxidation: "+3", discovery: "1879", state: "solid"},
    {num: 70, sym: "Yb", name: "Ytterbium", mass: 173.045, period: 6, category: "lanthanide", config: "[Xe] 4f¹⁴ 6s²", uses: "Lasers, metallurgy", oxidation: "+3, +2", discovery: "1878", state: "solid"},
    {num: 71, sym: "Lu", name: "Lutetium", mass: 174.967, period: 6, category: "lanthanide", config: "[Xe] 4f¹⁴ 5d¹ 6s²", uses: "Catalysts, PET scanners", oxidation: "+3", discovery: "1907", state: "solid"},
    {num: 72, sym: "Hf", name: "Hafnium", mass: 178.49, group: 4, period: 6, category: "transition-metal", config: "[Xe] 4f¹⁴ 5d² 6s²", uses: "Nuclear reactors, superalloys", oxidation: "+4", discovery: "1923", state: "solid"},
    {num: 73, sym: "Ta", name: "Tantalum", mass: 180.948, group: 5, period: 6, category: "transition-metal", config: "[Xe] 4f¹⁴ 5d³ 6s²", uses: "Capacitors, surgical implants", oxidation: "+5", discovery: "1802", state: "solid"},
    {num: 74, sym: "W", name: "Tungsten", mass: 183.84, group: 6, period: 6, category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", mp: 3422, bp: 5555, uses: "Light bulb filaments, steel alloys", oxidation: "+6, +4", discovery: "1783", state: "solid"},
    {num: 75, sym: "Re", name: "Rhenium", mass: 186.207, group: 7, period: 6, category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", mp: 3186, bp: 5596, uses: "Jet engine parts, catalysts", oxidation: "+7, +4", discovery: "1925", state: "solid"},
    {num: 76, sym: "Os", name: "Osmium", mass: 190.23, group: 8, period: 6, category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", mp: 3033, bp: 5012, uses: "Fountain pen tips, electrical contacts", oxidation: "+4, +3", discovery: "1803", state: "solid"},
    {num: 77, sym: "Ir", name: "Iridium", mass: 192.217, group: 9, period: 6, category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", mp: 2446, bp: 4428, uses: "Spark plugs, crucibles", oxidation: "+3, +4", discovery: "1803", state: "solid"},
    {num: 78, sym: "Pt", name: "Platinum", mass: 195.084, group: 10, period: 6, category: "transition-metal", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", mp: 1768.3, bp: 3825, uses: "Catalytic converters, jewelry", oxidation: "+2, +4", discovery: "1735", state: "solid"},
    {num: 81, sym: "Tl", name: "Thallium", mass: 204.38, group: 13, period: 6, category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", uses: "Electronics, optics", oxidation: "+1, +3", discovery: "1861", state: "solid"},
    {num: 83, sym: "Bi", name: "Bismuth", mass: 208.980, group: 15, period: 6, category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", mp: 271.4, bp: 1564, uses: "Cosmetics, pharmaceuticals", oxidation: "+3, +5", discovery: "Ancient", state: "solid"},
    {num: 84, sym: "Po", name: "Polonium", mass: 209, group: 16, period: 6, category: "post-transition", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", radioactive: true, uses: "Antistatic devices", oxidation: "+4, +2", discovery: "1898", state: "solid"},
    {num: 85, sym: "At", name: "Astatine", mass: 210, group: 17, period: 6, category: "halogen", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", radioactive: true, uses: "Cancer treatment research", oxidation: "-1, +1", discovery: "1940", state: "solid"},
    {num: 86, sym: "Rn", name: "Radon", mass: 222, group: 18, period: 6, category: "noble-gas", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", radioactive: true, uses: "Cancer treatment", oxidation: "0", discovery: "1900", state: "gas"},
    
    // Period 7
    {num: 87, sym: "Fr", name: "Francium", mass: 223, group: 1, period: 7, category: "alkali-metal", config: "[Rn] 7s¹", radioactive: true, uses: "Research", oxidation: "+1", discovery: "1939", state: "solid"},
    {num: 88, sym: "Ra", name: "Radium", mass: 226, group: 2, period: 7, category: "alkaline-earth", config: "[Rn] 7s²", radioactive: true, uses: "Cancer treatment (historical)", oxidation: "+2", discovery: "1898", state: "solid"},
    {num: 89, sym: "Ac", name: "Actinium", mass: 227, period: 7, category: "actinide", config: "[Rn] 6d¹ 7s²", radioactive: true, uses: "Neutron sources", oxidation: "+3", discovery: "1899", state: "solid"},
    {num: 90, sym: "Th", name: "Thorium", mass: 232.038, period: 7, category: "actinide", config: "[Rn] 6d² 7s²", radioactive: true, uses: "Nuclear fuel, welding rods", oxidation: "+4", discovery: "1829", state: "solid"},
    {num: 91, sym: "Pa", name: "Protactinium", mass: 231.036, period: 7, category: "actinide", config: "[Rn] 5f² 6d¹ 7s²", radioactive: true, uses: "Research", oxidation: "+5, +4", discovery: "1913", state: "solid"},
    {num: 93, sym: "Np", name: "Neptunium", mass: 237, period: 7, category: "actinide", config: "[Rn] 5f⁴ 6d¹ 7s²", radioactive: true, uses: "Neutron detection", oxidation: "+5, +3", discovery: "1940", state: "solid"},
    {num: 95, sym: "Am", name: "Americium", mass: 243, period: 7, category: "actinide", config: "[Rn] 5f⁷ 7s²", radioactive: true, uses: "Smoke detectors", oxidation: "+3", discovery: "1944", state: "solid"},
    {num: 96, sym: "Cm", name: "Curium", mass: 247, period: 7, category: "actinide", config: "[Rn] 5f⁷ 6d¹ 7s²", radioactive: true, uses: "Space missions power", oxidation: "+3", discovery: "1944", state: "solid"},
    {num: 97, sym: "Bk", name: "Berkelium", mass: 247, period: 7, category: "actinide", config: "[Rn] 5f⁹ 7s²", radioactive: true, uses: "Research", oxidation: "+3, +4", discovery: "1949", state: "solid"},
    {num: 98, sym: "Cf", name: "Californium", mass: 251, period: 7, category: "actinide", config: "[Rn] 5f¹⁰ 7s²", radioactive: true, uses: "Neutron sources, cancer treatment", oxidation: "+3", discovery: "1950", state: "solid"},
    {num: 99, sym: "Es", name: "Einsteinium", mass: 252, period: 7, category: "actinide", config: "[Rn] 5f¹¹ 7s²", radioactive: true, uses: "Research", oxidation: "+3", discovery: "1952", state: "solid"},
    {num: 100, sym: "Fm", name: "Fermium", mass: 257, period: 7, category: "actinide", config: "[Rn] 5f¹² 7s²", radioactive: true, uses: "Research", oxidation: "+3", discovery: "1952", state: "solid"},
    {num: 101, sym: "Md", name: "Mendelevium", mass: 258, period: 7, category: "actinide", config: "[Rn] 5f¹³ 7s²", radioactive: true, uses: "Research", oxidation: "+3, +2", discovery: "1955", state: "solid"},
    {num: 102, sym: "No", name: "Nobelium", mass: 259, period: 7, category: "actinide", config: "[Rn] 5f¹⁴ 7s²", radioactive: true, uses: "Research", oxidation: "+3, +2", discovery: "1958", state: "solid"},
    {num: 103, sym: "Lr", name: "Lawrencium", mass: 266, period: 7, category: "actinide", config: "[Rn] 5f¹⁴ 7s² 7p¹", radioactive: true, uses: "Research", oxidation: "+3", discovery: "1961", state: "solid"},
    {num: 104, sym: "Rf", name: "Rutherfordium", mass: 267, group: 4, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d² 7s²", radioactive: true, uses: "Research", oxidation: "+4", discovery: "1969", state: "solid"},
    {num: 105, sym: "Db", name: "Dubnium", mass: 268, group: 5, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d³ 7s²", radioactive: true, uses: "Research", oxidation: "+5", discovery: "1970", state: "solid"},
    {num: 106, sym: "Sg", name: "Seaborgium", mass: 269, group: 6, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", radioactive: true, uses: "Research", oxidation: "+6", discovery: "1974", state: "solid"},
    {num: 107, sym: "Bh", name: "Bohrium", mass: 270, group: 7, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", radioactive: true, uses: "Research", oxidation: "+7", discovery: "1981", state: "solid"},
    {num: 108, sym: "Hs", name: "Hassium", mass: 277, group: 8, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", radioactive: true, uses: "Research", oxidation: "+8", discovery: "1984", state: "solid"},
    {num: 109, sym: "Mt", name: "Meitnerium", mass: 278, group: 9, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", radioactive: true, uses: "Research", oxidation: "+9", discovery: "1982", state: "solid"},
    {num: 110, sym: "Ds", name: "Darmstadtium", mass: 281, group: 10, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d⁹ 7s¹", radioactive: true, uses: "Research", oxidation: "+10", discovery: "1994", state: "solid"},
    {num: 111, sym: "Rg", name: "Roentgenium", mass: 282, group: 11, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s¹", radioactive: true, uses: "Research", discovery: "1994", state: "solid"},
    {num: 112, sym: "Cn", name: "Copernicium", mass: 285, group: 12, period: 7, category: "transition-metal", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", radioactive: true, uses: "Research", discovery: "1996", state: "solid"},
    {num: 113, sym: "Nh", name: "Nihonium", mass: 286, group: 13, period: 7, category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", radioactive: true, uses: "Research", discovery: "2004", state: "solid"},
    {num: 114, sym: "Fl", name: "Flerovium", mass: 289, group: 14, period: 7, category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", radioactive: true, uses: "Research", discovery: "1999", state: "solid"},
    {num: 115, sym: "Mc", name: "Moscovium", mass: 290, group: 15, period: 7, category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", radioactive: true, uses: "Research", discovery: "2004", state: "solid"},
    {num: 116, sym: "Lv", name: "Livermorium", mass: 293, group: 16, period: 7, category: "post-transition", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", radioactive: true, uses: "Research", discovery: "2000", state: "solid"},
    {num: 117, sym: "Ts", name: "Tennessine", mass: 294, group: 17, period: 7, category: "halogen", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", radioactive: true, uses: "Research", discovery: "2010", state: "solid"},
    {num: 118, sym: "Og", name: "Oganesson", mass: 294, group: 18, period: 7, category: "noble-gas", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", radioactive: true, uses: "Research", oxidation: "0", discovery: "2006", state: "gas"}
  ],
  
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
      {type: "Reduction of Carbonyl", formula: "R-CO-R' + H₂ → R-CH(OH)-R'", example: "CH₃COCH₃ + H₂ → CH₃CH(OH)CH₃", conditions: "Metal catalyst or NaBH₄", mechanism: "Nucleophilic addition"}
    ]
  },
  
  compounds: {
    inorganic: [
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
      {name: "Barium Sulfate", formula: "BaSO₄", mass: 233.39, mp: 1580, uses: "Medical imaging, paint, paper", iupac: "Barium sulfate", properties: "Insoluble, radio-opaque"}
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
      {name: "Sucrose", formula: "C₁₂H₂₂O₁₁", mass: 342.30, class: "Carbohydrate", uses: "Table sugar, sweetener", iupac: "Sucrose", properties: "Disaccharide, non-reducing"}
    ]
  },
  
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

// Atomic masses for calculations
const atomicMasses = {
  H: 1.008, He: 4.003, Li: 6.94, Be: 9.012, B: 10.81, C: 12.011, N: 14.007, O: 15.999,
  F: 18.998, Ne: 20.180, Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.085, P: 30.974,
  S: 32.06, Cl: 35.45, Ar: 39.948, K: 39.098, Ca: 40.078, Sc: 44.956, Ti: 47.867,
  V: 50.942, Cr: 51.996, Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693, Cu: 63.546,
  Zn: 65.38, Ga: 69.723, Ge: 72.630, As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798,
  Rb: 85.468, Sr: 87.62, Ag: 107.868, Au: 196.967, Hg: 200.592, Pb: 207.2, U: 238.029
};

// Initialize Application
let currentTheme = 'light';

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
  const toggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (prefersDark) {
    currentTheme = 'dark';
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.querySelector('.theme-icon').textContent = '☀️';
  }
  
  toggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggle.querySelector('.theme-icon').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  });
}

// Navigation
function setupNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show target content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });
}

// Render Periodic Table
function renderPeriodicTable() {
  const grid = document.getElementById('periodicTableGrid');
  grid.innerHTML = '';
  
  chemistryData.elements.forEach(element => {
    const cell = document.createElement('div');
    cell.className = `element-cell ${element.category}`;
    cell.innerHTML = `
      <div class="element-num">${element.num}</div>
      <div class="element-symbol">${element.sym}</div>
      <div class="element-name">${element.name}</div>
      <div class="element-mass">${element.mass}</div>
    `;
    cell.addEventListener('click', () => showElementDetails(element));
    grid.appendChild(cell);
  });
}

// Show Element Details Modal
function showElementDetails(element) {
  const modal = document.getElementById('elementModal');
  const details = document.getElementById('elementDetails');
  
  details.innerHTML = `
    <div class="element-detail-header">
      <div class="element-detail-symbol ${element.category}" style="display: inline-block; padding: 20px 40px; border-radius: 12px;">${element.sym}</div>
      <h2 class="element-detail-name">${element.name}</h2>
      <p style="color: var(--color-text-secondary);">Atomic Number: ${element.num} | Atomic Mass: ${element.mass}</p>
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
      <div class="property-item">
        <div class="property-label">Electron Configuration</div>
        <div class="property-value">${element.config}</div>
      </div>
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
      ${element.en ? `
      <div class="property-item">
        <div class="property-label">Electronegativity</div>
        <div class="property-value">${element.en}</div>
      </div>` : ''}
      ${element.oxidation ? `
      <div class="property-item">
        <div class="property-label">Oxidation States</div>
        <div class="property-value">${element.oxidation}</div>
      </div>` : ''}
      ${element.discovery ? `
      <div class="property-item">
        <div class="property-label">Discovery Year</div>
        <div class="property-value">${element.discovery}</div>
      </div>` : ''}
      ${element.discoverer ? `
      <div class="property-item">
        <div class="property-label">Discoverer</div>
        <div class="property-value">${element.discoverer}</div>
      </div>` : ''}
    </div>
    
    ${element.uses ? `
    <div style="margin-top: 24px; padding: 16px; background: var(--color-secondary); border-radius: 8px;">
      <h4 style="margin-bottom: 8px;">Uses & Applications</h4>
      <p>${element.uses}</p>
    </div>` : ''}
    
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
  
  container.innerHTML = chemistryData.elements.map(element => `
    <div class="element-list-item" onclick="showElementDetails(${JSON.stringify(element).replace(/"/g, '&quot;')})">
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
    </div>
  `).join('');
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

// Fix element details to handle JSON strings
window.showElementDetails = function(element) {
  if (typeof element === 'string') {
    element = JSON.parse(element.replace(/&quot;/g, '"'));
  }
  showElementDetails(element);
};

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}