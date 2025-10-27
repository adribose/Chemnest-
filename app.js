// Chemistry Data
const chemistryData = {
  elements: [
    // Period 1
    { name: 'Hydrogen', symbol: 'H', atomic_number: 1, atomic_mass: 1.008, category: 'Nonmetal', group: 1, period: 1, electron_config: '1s¹', state: 'Gas', melting_point: '-259.16°C', boiling_point: '-252.87°C', description: 'Lightest element, fuel of stars', uses: 'Fuel, ammonia production, hydrogenation', color: '#FF0D0D', density: '0.09 g/L' },
    { name: 'Helium', symbol: 'He', atomic_number: 2, atomic_mass: 4.003, category: 'Noble Gas', group: 18, period: 1, electron_config: '1s²', state: 'Gas', melting_point: '-272.2°C', boiling_point: '-268.93°C', description: 'Second lightest element, inert gas', uses: 'Balloons, cryogenics, diving gas', color: '#8B5CF6', density: '0.18 g/L' },
    
    // Period 2
    { name: 'Lithium', symbol: 'Li', atomic_number: 3, atomic_mass: 6.94, category: 'Alkali Metal', group: 1, period: 2, electron_config: '1s² 2s¹', state: 'Solid', melting_point: '180.54°C', boiling_point: '1342°C', description: 'Lightest metal, highly reactive', uses: 'Batteries, ceramics, lubricants', color: '#AB5CF2', density: '0.53 g/cm³' },
    { name: 'Beryllium', symbol: 'Be', atomic_number: 4, atomic_mass: 9.012, category: 'Alkaline Earth', group: 2, period: 2, electron_config: '1s² 2s²', state: 'Solid', melting_point: '1287°C', boiling_point: '2470°C', description: 'Light, strong metal', uses: 'Aerospace alloys, X-ray windows', color: '#22C55E', density: '1.85 g/cm³' },
    { name: 'Boron', symbol: 'B', atomic_number: 5, atomic_mass: 10.81, category: 'Metalloid', group: 13, period: 2, electron_config: '1s² 2s² 2p¹', state: 'Solid', melting_point: '2075°C', boiling_point: '4000°C', description: 'Metalloid with unique chemistry', uses: 'Glass, detergents, semiconductors', color: '#FACC15', density: '2.34 g/cm³' },
    { name: 'Carbon', symbol: 'C', atomic_number: 6, atomic_mass: 12.011, category: 'Nonmetal', group: 14, period: 2, electron_config: '1s² 2s² 2p²', state: 'Solid', melting_point: '3550°C', boiling_point: '4827°C', description: 'Basis of all organic chemistry', uses: 'Organic compounds, steel, diamonds', color: '#FF0D0D', density: '2.27 g/cm³' },
    { name: 'Nitrogen', symbol: 'N', atomic_number: 7, atomic_mass: 14.007, category: 'Nonmetal', group: 15, period: 2, electron_config: '1s² 2s² 2p³', state: 'Gas', melting_point: '-210.1°C', boiling_point: '-195.79°C', description: '78% of atmosphere', uses: 'Fertilizers, explosives, cryogenics', color: '#FF0D0D', density: '1.25 g/L' },
    { name: 'Oxygen', symbol: 'O', atomic_number: 8, atomic_mass: 15.999, category: 'Nonmetal', group: 16, period: 2, electron_config: '1s² 2s² 2p⁴', state: 'Gas', melting_point: '-218.79°C', boiling_point: '-182.96°C', description: 'Essential for respiration', uses: 'Respiration, combustion, steel making', color: '#FF0D0D', density: '1.43 g/L' },
    { name: 'Fluorine', symbol: 'F', atomic_number: 9, atomic_mass: 18.998, category: 'Halogen', group: 17, period: 2, electron_config: '1s² 2s² 2p⁵', state: 'Gas', melting_point: '-219.67°C', boiling_point: '-188.11°C', description: 'Most reactive element', uses: 'Toothpaste, Teflon, refrigerants', color: '#14B8A6', density: '1.70 g/L' },
    { name: 'Neon', symbol: 'Ne', atomic_number: 10, atomic_mass: 20.180, category: 'Noble Gas', group: 18, period: 2, electron_config: '1s² 2s² 2p⁶', state: 'Gas', melting_point: '-248.59°C', boiling_point: '-246.08°C', description: 'Inert gas, bright red-orange glow', uses: 'Neon signs, lasers, cryogenics', color: '#8B5CF6', density: '0.90 g/L' },
    
    // Period 3
    { name: 'Sodium', symbol: 'Na', atomic_number: 11, atomic_mass: 22.990, category: 'Alkali Metal', group: 1, period: 3, electron_config: '[Ne] 3s¹', state: 'Solid', melting_point: '97.72°C', boiling_point: '883°C', description: 'Soft, highly reactive metal', uses: 'Table salt, soap, street lamps', color: '#AB5CF2', density: '0.97 g/cm³' },
    { name: 'Magnesium', symbol: 'Mg', atomic_number: 12, atomic_mass: 24.305, category: 'Alkaline Earth', group: 2, period: 3, electron_config: '[Ne] 3s²', state: 'Solid', melting_point: '650°C', boiling_point: '1090°C', description: 'Light structural metal', uses: 'Alloys, flares, photography', color: '#22C55E', density: '1.74 g/cm³' },
    { name: 'Aluminum', symbol: 'Al', atomic_number: 13, atomic_mass: 26.982, category: 'Post-transition', group: 13, period: 3, electron_config: '[Ne] 3s² 3p¹', state: 'Solid', melting_point: '660.32°C', boiling_point: '2519°C', description: 'Lightweight, corrosion resistant', uses: 'Cans, foil, aircraft, construction', color: '#0EA5E9', density: '2.70 g/cm³' },
    { name: 'Silicon', symbol: 'Si', atomic_number: 14, atomic_mass: 28.085, category: 'Metalloid', group: 14, period: 3, electron_config: '[Ne] 3s² 3p²', state: 'Solid', melting_point: '1414°C', boiling_point: '3265°C', description: 'Semiconductor, second most abundant', uses: 'Semiconductors, glass, solar cells', color: '#FACC15', density: '2.33 g/cm³' },
    { name: 'Phosphorus', symbol: 'P', atomic_number: 15, atomic_mass: 30.974, category: 'Nonmetal', group: 15, period: 3, electron_config: '[Ne] 3s² 3p³', state: 'Solid', melting_point: '44.15°C', boiling_point: '280.5°C', description: 'Essential for life, DNA', uses: 'Fertilizers, matches, detergents', color: '#FF0D0D', density: '1.82 g/cm³' },
    { name: 'Sulfur', symbol: 'S', atomic_number: 16, atomic_mass: 32.06, category: 'Nonmetal', group: 16, period: 3, electron_config: '[Ne] 3s² 3p⁴', state: 'Solid', melting_point: '115.21°C', boiling_point: '444.6°C', description: 'Yellow solid, essential element', uses: 'Sulfuric acid, rubber, gunpowder', color: '#FF0D0D', density: '2.07 g/cm³' },
    { name: 'Chlorine', symbol: 'Cl', atomic_number: 17, atomic_mass: 35.45, category: 'Halogen', group: 17, period: 3, electron_config: '[Ne] 3s² 3p⁵', state: 'Gas', melting_point: '-101.5°C', boiling_point: '-34.04°C', description: 'Toxic gas, strong oxidizer', uses: 'Disinfectant, PVC, bleach', color: '#14B8A6', density: '3.21 g/L' },
    { name: 'Argon', symbol: 'Ar', atomic_number: 18, atomic_mass: 39.948, category: 'Noble Gas', group: 18, period: 3, electron_config: '[Ne] 3s² 3p⁶', state: 'Gas', melting_point: '-189.35°C', boiling_point: '-185.85°C', description: 'Third most common gas in air', uses: 'Light bulbs, welding, lasers', color: '#8B5CF6', density: '1.78 g/L' },
    
    // Period 4
    { name: 'Potassium', symbol: 'K', atomic_number: 19, atomic_mass: 39.098, category: 'Alkali Metal', group: 1, period: 4, electron_config: '[Ar] 4s¹', state: 'Solid', melting_point: '63.38°C', boiling_point: '759°C', description: 'Soft, highly reactive', uses: 'Fertilizers, soap, glass', color: '#AB5CF2', density: '0.86 g/cm³' },
    { name: 'Calcium', symbol: 'Ca', atomic_number: 20, atomic_mass: 40.078, category: 'Alkaline Earth', group: 2, period: 4, electron_config: '[Ar] 4s²', state: 'Solid', melting_point: '842°C', boiling_point: '1484°C', description: 'Essential for bones and teeth', uses: 'Cement, bones, antacids', color: '#22C55E', density: '1.54 g/cm³' },
    { name: 'Scandium', symbol: 'Sc', atomic_number: 21, atomic_mass: 44.956, category: 'Transition Metal', group: 3, period: 4, electron_config: '[Ar] 3d¹ 4s²', state: 'Solid', melting_point: '1541°C', boiling_point: '2836°C', description: 'Lightweight transition metal', uses: 'Aerospace alloys, lights', color: '#F97316', density: '2.99 g/cm³' },
    { name: 'Titanium', symbol: 'Ti', atomic_number: 22, atomic_mass: 47.867, category: 'Transition Metal', group: 4, period: 4, electron_config: '[Ar] 3d² 4s²', state: 'Solid', melting_point: '1668°C', boiling_point: '3287°C', description: 'Strong, lightweight, corrosion resistant', uses: 'Aircraft, implants, paint', color: '#F97316', density: '4.54 g/cm³' },
    { name: 'Vanadium', symbol: 'V', atomic_number: 23, atomic_mass: 50.942, category: 'Transition Metal', group: 5, period: 4, electron_config: '[Ar] 3d³ 4s²', state: 'Solid', melting_point: '1910°C', boiling_point: '3407°C', description: 'Hard, steel-gray metal', uses: 'Steel alloys, catalysts', color: '#F97316', density: '6.11 g/cm³' },
    { name: 'Chromium', symbol: 'Cr', atomic_number: 24, atomic_mass: 51.996, category: 'Transition Metal', group: 6, period: 4, electron_config: '[Ar] 3d⁵ 4s¹', state: 'Solid', melting_point: '1907°C', boiling_point: '2671°C', description: 'Hard, corrosion resistant', uses: 'Stainless steel, chrome plating', color: '#F97316', density: '7.19 g/cm³' },
    { name: 'Manganese', symbol: 'Mn', atomic_number: 25, atomic_mass: 54.938, category: 'Transition Metal', group: 7, period: 4, electron_config: '[Ar] 3d⁵ 4s²', state: 'Solid', melting_point: '1246°C', boiling_point: '2061°C', description: 'Brittle, gray-white metal', uses: 'Steel production, batteries', color: '#F97316', density: '7.43 g/cm³' },
    { name: 'Iron', symbol: 'Fe', atomic_number: 26, atomic_mass: 55.845, category: 'Transition Metal', group: 8, period: 4, electron_config: '[Ar] 3d⁶ 4s²', state: 'Solid', melting_point: '1538°C', boiling_point: '2862°C', description: 'Most common element on Earth by mass', uses: 'Steel, construction, tools', color: '#F97316', density: '7.87 g/cm³' },
    { name: 'Cobalt', symbol: 'Co', atomic_number: 27, atomic_mass: 58.933, category: 'Transition Metal', group: 9, period: 4, electron_config: '[Ar] 3d⁷ 4s²', state: 'Solid', melting_point: '1495°C', boiling_point: '2927°C', description: 'Hard, magnetic metal', uses: 'Batteries, magnets, alloys', color: '#F97316', density: '8.90 g/cm³' },
    { name: 'Nickel', symbol: 'Ni', atomic_number: 28, atomic_mass: 58.693, category: 'Transition Metal', group: 10, period: 4, electron_config: '[Ar] 3d⁸ 4s²', state: 'Solid', melting_point: '1455°C', boiling_point: '2913°C', description: 'Silvery-white, magnetic', uses: 'Stainless steel, coins, batteries', color: '#F97316', density: '8.91 g/cm³' },
    { name: 'Copper', symbol: 'Cu', atomic_number: 29, atomic_mass: 63.546, category: 'Transition Metal', group: 11, period: 4, electron_config: '[Ar] 3d¹⁰ 4s¹', state: 'Solid', melting_point: '1084.62°C', boiling_point: '2562°C', description: 'Excellent conductor of electricity', uses: 'Wiring, plumbing, coins', color: '#F97316', density: '8.96 g/cm³' },
    { name: 'Zinc', symbol: 'Zn', atomic_number: 30, atomic_mass: 65.38, category: 'Transition Metal', group: 12, period: 4, electron_config: '[Ar] 3d¹⁰ 4s²', state: 'Solid', melting_point: '419.53°C', boiling_point: '907°C', description: 'Bluish-white metal', uses: 'Galvanizing, batteries, alloys', color: '#F97316', density: '7.13 g/cm³' },
    { name: 'Gallium', symbol: 'Ga', atomic_number: 31, atomic_mass: 69.723, category: 'Post-transition', group: 13, period: 4, electron_config: '[Ar] 3d¹⁰ 4s² 4p¹', state: 'Solid', melting_point: '29.76°C', boiling_point: '2204°C', description: 'Melts in your hand', uses: 'Semiconductors, LEDs', color: '#0EA5E9', density: '5.91 g/cm³' },
    { name: 'Germanium', symbol: 'Ge', atomic_number: 32, atomic_mass: 72.630, category: 'Metalloid', group: 14, period: 4, electron_config: '[Ar] 3d¹⁰ 4s² 4p²', state: 'Solid', melting_point: '938.3°C', boiling_point: '2820°C', description: 'Semiconductor', uses: 'Electronics, fiber optics', color: '#FACC15', density: '5.32 g/cm³' },
    { name: 'Arsenic', symbol: 'As', atomic_number: 33, atomic_mass: 74.922, category: 'Metalloid', group: 15, period: 4, electron_config: '[Ar] 3d¹⁰ 4s² 4p³', state: 'Solid', melting_point: '817°C', boiling_point: '614°C', description: 'Toxic metalloid', uses: 'Pesticides, semiconductors', color: '#FACC15', density: '5.73 g/cm³' },
    { name: 'Selenium', symbol: 'Se', atomic_number: 34, atomic_mass: 78.971, category: 'Nonmetal', group: 16, period: 4, electron_config: '[Ar] 3d¹⁰ 4s² 4p⁴', state: 'Solid', melting_point: '221°C', boiling_point: '685°C', description: 'Essential trace element', uses: 'Photocells, glass coloring', color: '#FF0D0D', density: '4.81 g/cm³' },
    { name: 'Bromine', symbol: 'Br', atomic_number: 35, atomic_mass: 79.904, category: 'Halogen', group: 17, period: 4, electron_config: '[Ar] 3d¹⁰ 4s² 4p⁵', state: 'Liquid', melting_point: '-7.2°C', boiling_point: '58.8°C', description: 'Only nonmetal liquid at room temp', uses: 'Flame retardants, fumigants', color: '#14B8A6', density: '3.12 g/cm³' },
    { name: 'Krypton', symbol: 'Kr', atomic_number: 36, atomic_mass: 83.798, category: 'Noble Gas', group: 18, period: 4, electron_config: '[Ar] 3d¹⁰ 4s² 4p⁶', state: 'Gas', melting_point: '-157.36°C', boiling_point: '-153.22°C', description: 'Inert gas, white light', uses: 'Lasers, high-speed photography', color: '#8B5CF6', density: '3.75 g/L' },
    
    // Period 5
    { name: 'Rubidium', symbol: 'Rb', atomic_number: 37, atomic_mass: 85.468, category: 'Alkali Metal', group: 1, period: 5, electron_config: '[Kr] 5s¹', state: 'Solid', melting_point: '39.31°C', boiling_point: '688°C', description: 'Soft, silvery metal', uses: 'Photocells, research', color: '#AB5CF2', density: '1.53 g/cm³' },
    { name: 'Strontium', symbol: 'Sr', atomic_number: 38, atomic_mass: 87.62, category: 'Alkaline Earth', group: 2, period: 5, electron_config: '[Kr] 5s²', state: 'Solid', melting_point: '777°C', boiling_point: '1382°C', description: 'Soft, silvery-white', uses: 'Fireworks (red color), magnets', color: '#22C55E', density: '2.64 g/cm³' },
    { name: 'Yttrium', symbol: 'Y', atomic_number: 39, atomic_mass: 88.906, category: 'Transition Metal', group: 3, period: 5, electron_config: '[Kr] 4d¹ 5s²', state: 'Solid', melting_point: '1526°C', boiling_point: '3345°C', description: 'Silvery-metallic', uses: 'LEDs, superconductors', color: '#F97316', density: '4.47 g/cm³' },
    { name: 'Zirconium', symbol: 'Zr', atomic_number: 40, atomic_mass: 91.224, category: 'Transition Metal', group: 4, period: 5, electron_config: '[Kr] 4d² 5s²', state: 'Solid', melting_point: '1855°C', boiling_point: '4409°C', description: 'Corrosion resistant', uses: 'Nuclear reactors, gems', color: '#F97316', density: '6.51 g/cm³' },
    { name: 'Niobium', symbol: 'Nb', atomic_number: 41, atomic_mass: 92.906, category: 'Transition Metal', group: 5, period: 5, electron_config: '[Kr] 4d⁴ 5s¹', state: 'Solid', melting_point: '2477°C', boiling_point: '4744°C', description: 'Superconducting', uses: 'Superconductors, steel alloys', color: '#F97316', density: '8.57 g/cm³' },
    { name: 'Molybdenum', symbol: 'Mo', atomic_number: 42, atomic_mass: 95.95, category: 'Transition Metal', group: 6, period: 5, electron_config: '[Kr] 4d⁵ 5s¹', state: 'Solid', melting_point: '2623°C', boiling_point: '4639°C', description: 'High melting point', uses: 'Steel alloys, catalysts', color: '#F97316', density: '10.28 g/cm³' },
    { name: 'Technetium', symbol: 'Tc', atomic_number: 43, atomic_mass: 98, category: 'Transition Metal', group: 7, period: 5, electron_config: '[Kr] 4d⁵ 5s²', state: 'Solid', melting_point: '2157°C', boiling_point: '4265°C', description: 'First artificial element', uses: 'Medical imaging', color: '#F97316', density: '11.5 g/cm³' },
    { name: 'Ruthenium', symbol: 'Ru', atomic_number: 44, atomic_mass: 101.07, category: 'Transition Metal', group: 8, period: 5, electron_config: '[Kr] 4d⁷ 5s¹', state: 'Solid', melting_point: '2334°C', boiling_point: '4150°C', description: 'Rare platinum group metal', uses: 'Catalysts, electronics', color: '#F97316', density: '12.37 g/cm³' },
    { name: 'Rhodium', symbol: 'Rh', atomic_number: 45, atomic_mass: 102.91, category: 'Transition Metal', group: 9, period: 5, electron_config: '[Kr] 4d⁸ 5s¹', state: 'Solid', melting_point: '1964°C', boiling_point: '3695°C', description: 'Rare, reflective metal', uses: 'Catalytic converters, jewelry', color: '#F97316', density: '12.41 g/cm³' },
    { name: 'Palladium', symbol: 'Pd', atomic_number: 46, atomic_mass: 106.42, category: 'Transition Metal', group: 10, period: 5, electron_config: '[Kr] 4d¹⁰', state: 'Solid', melting_point: '1554.9°C', boiling_point: '2963°C', description: 'Absorbs hydrogen', uses: 'Catalytic converters, electronics', color: '#F97316', density: '12.02 g/cm³' },
    { name: 'Silver', symbol: 'Ag', atomic_number: 47, atomic_mass: 107.868, category: 'Transition Metal', group: 11, period: 5, electron_config: '[Kr] 4d¹⁰ 5s¹', state: 'Solid', melting_point: '961.78°C', boiling_point: '2162°C', description: 'Best conductor of electricity', uses: 'Jewelry, coins, photography', color: '#F97316', density: '10.49 g/cm³' },
    { name: 'Cadmium', symbol: 'Cd', atomic_number: 48, atomic_mass: 112.41, category: 'Transition Metal', group: 12, period: 5, electron_config: '[Kr] 4d¹⁰ 5s²', state: 'Solid', melting_point: '321.07°C', boiling_point: '767°C', description: 'Soft, toxic metal', uses: 'Batteries, pigments', color: '#F97316', density: '8.65 g/cm³' },
    { name: 'Indium', symbol: 'In', atomic_number: 49, atomic_mass: 114.82, category: 'Post-transition', group: 13, period: 5, electron_config: '[Kr] 4d¹⁰ 5s² 5p¹', state: 'Solid', melting_point: '156.6°C', boiling_point: '2072°C', description: 'Soft, malleable', uses: 'LCD screens, semiconductors', color: '#0EA5E9', density: '7.31 g/cm³' },
    { name: 'Tin', symbol: 'Sn', atomic_number: 50, atomic_mass: 118.71, category: 'Post-transition', group: 14, period: 5, electron_config: '[Kr] 4d¹⁰ 5s² 5p²', state: 'Solid', melting_point: '231.93°C', boiling_point: '2602°C', description: 'Used since ancient times', uses: 'Tin cans, solder, bronze', color: '#0EA5E9', density: '7.29 g/cm³' },
    { name: 'Antimony', symbol: 'Sb', atomic_number: 51, atomic_mass: 121.76, category: 'Metalloid', group: 15, period: 5, electron_config: '[Kr] 4d¹⁰ 5s² 5p³', state: 'Solid', melting_point: '630.63°C', boiling_point: '1587°C', description: 'Brittle metalloid', uses: 'Flame retardants, semiconductors', color: '#FACC15', density: '6.69 g/cm³' },
    { name: 'Tellurium', symbol: 'Te', atomic_number: 52, atomic_mass: 127.60, category: 'Metalloid', group: 16, period: 5, electron_config: '[Kr] 4d¹⁰ 5s² 5p⁴', state: 'Solid', melting_point: '449.51°C', boiling_point: '988°C', description: 'Brittle, silvery-white', uses: 'Metallurgy, solar cells', color: '#FACC15', density: '6.24 g/cm³' },
    { name: 'Iodine', symbol: 'I', atomic_number: 53, atomic_mass: 126.904, category: 'Halogen', group: 17, period: 5, electron_config: '[Kr] 4d¹⁰ 5s² 5p⁵', state: 'Solid', melting_point: '113.7°C', boiling_point: '184.3°C', description: 'Purple vapor, essential element', uses: 'Disinfectant, iodized salt', color: '#14B8A6', density: '4.93 g/cm³' },
    { name: 'Xenon', symbol: 'Xe', atomic_number: 54, atomic_mass: 131.293, category: 'Noble Gas', group: 18, period: 5, electron_config: '[Kr] 4d¹⁰ 5s² 5p⁶', state: 'Gas', melting_point: '-111.75°C', boiling_point: '-108.04°C', description: 'Heavy, inert gas', uses: 'Flash lamps, anesthetics, lasers', color: '#8B5CF6', density: '5.89 g/L' },
    
    // Period 6
    { name: 'Cesium', symbol: 'Cs', atomic_number: 55, atomic_mass: 132.91, category: 'Alkali Metal', group: 1, period: 6, electron_config: '[Xe] 6s¹', state: 'Solid', melting_point: '28.44°C', boiling_point: '671°C', description: 'Soft, gold-colored', uses: 'Atomic clocks, photoelectric cells', color: '#AB5CF2', density: '1.93 g/cm³' },
    { name: 'Barium', symbol: 'Ba', atomic_number: 56, atomic_mass: 137.33, category: 'Alkaline Earth', group: 2, period: 6, electron_config: '[Xe] 6s²', state: 'Solid', melting_point: '727°C', boiling_point: '1870°C', description: 'Soft, silvery metal', uses: 'X-ray imaging, fireworks', color: '#22C55E', density: '3.59 g/cm³' },
    { name: 'Lanthanum', symbol: 'La', atomic_number: 57, atomic_mass: 138.91, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 5d¹ 6s²', state: 'Solid', melting_point: '920°C', boiling_point: '3464°C', description: 'Soft, silvery-white', uses: 'Camera lenses, lighter flints', color: '#EC4899', density: '6.15 g/cm³' },
    { name: 'Cerium', symbol: 'Ce', atomic_number: 58, atomic_mass: 140.12, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f¹ 5d¹ 6s²', state: 'Solid', melting_point: '798°C', boiling_point: '3443°C', description: 'Soft, ductile', uses: 'Catalytic converters, lighters', color: '#EC4899', density: '6.77 g/cm³' },
    { name: 'Praseodymium', symbol: 'Pr', atomic_number: 59, atomic_mass: 140.91, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f³ 6s²', state: 'Solid', melting_point: '931°C', boiling_point: '3520°C', description: 'Soft, silvery', uses: 'Magnets, lasers, glass coloring', color: '#EC4899', density: '6.77 g/cm³' },
    { name: 'Neodymium', symbol: 'Nd', atomic_number: 60, atomic_mass: 144.24, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f⁴ 6s²', state: 'Solid', melting_point: '1021°C', boiling_point: '3074°C', description: 'Strong magnetic properties', uses: 'Powerful magnets, lasers', color: '#EC4899', density: '7.01 g/cm³' },
    { name: 'Promethium', symbol: 'Pm', atomic_number: 61, atomic_mass: 145, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f⁵ 6s²', state: 'Solid', melting_point: '1042°C', boiling_point: '3000°C', description: 'Radioactive rare earth', uses: 'Research, luminous paint', color: '#EC4899', density: '7.26 g/cm³' },
    { name: 'Samarium', symbol: 'Sm', atomic_number: 62, atomic_mass: 150.36, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f⁶ 6s²', state: 'Solid', melting_point: '1074°C', boiling_point: '1794°C', description: 'Silvery-white metal', uses: 'Magnets, lasers, nuclear reactors', color: '#EC4899', density: '7.52 g/cm³' },
    { name: 'Europium', symbol: 'Eu', atomic_number: 63, atomic_mass: 151.96, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f⁷ 6s²', state: 'Solid', melting_point: '822°C', boiling_point: '1596°C', description: 'Most reactive rare earth', uses: 'Euro banknotes, phosphors', color: '#EC4899', density: '5.24 g/cm³' },
    { name: 'Gadolinium', symbol: 'Gd', atomic_number: 64, atomic_mass: 157.25, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f⁷ 5d¹ 6s²', state: 'Solid', melting_point: '1313°C', boiling_point: '3273°C', description: 'Magnetic at room temp', uses: 'MRI contrast agent, magnets', color: '#EC4899', density: '7.90 g/cm³' },
    { name: 'Terbium', symbol: 'Tb', atomic_number: 65, atomic_mass: 158.93, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f⁹ 6s²', state: 'Solid', melting_point: '1356°C', boiling_point: '3230°C', description: 'Silvery-white', uses: 'Phosphors, magnets, lasers', color: '#EC4899', density: '8.23 g/cm³' },
    { name: 'Dysprosium', symbol: 'Dy', atomic_number: 66, atomic_mass: 162.50, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f¹⁰ 6s²', state: 'Solid', melting_point: '1412°C', boiling_point: '2567°C', description: 'Bright, silvery', uses: 'Magnets, nuclear reactors', color: '#EC4899', density: '8.55 g/cm³' },
    { name: 'Holmium', symbol: 'Ho', atomic_number: 67, atomic_mass: 164.93, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f¹¹ 6s²', state: 'Solid', melting_point: '1474°C', boiling_point: '2700°C', description: 'Highest magnetic strength', uses: 'Lasers, magnets', color: '#EC4899', density: '8.80 g/cm³' },
    { name: 'Erbium', symbol: 'Er', atomic_number: 68, atomic_mass: 167.26, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f¹² 6s²', state: 'Solid', melting_point: '1529°C', boiling_point: '2868°C', description: 'Soft, malleable', uses: 'Fiber optics, lasers', color: '#EC4899', density: '9.07 g/cm³' },
    { name: 'Thulium', symbol: 'Tm', atomic_number: 69, atomic_mass: 168.93, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f¹³ 6s²', state: 'Solid', melting_point: '1545°C', boiling_point: '1950°C', description: 'Second rarest rare earth', uses: 'Portable X-ray devices', color: '#EC4899', density: '9.32 g/cm³' },
    { name: 'Ytterbium', symbol: 'Yb', atomic_number: 70, atomic_mass: 173.05, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f¹⁴ 6s²', state: 'Solid', melting_point: '824°C', boiling_point: '1196°C', description: 'Soft, malleable', uses: 'Lasers, metallurgy', color: '#EC4899', density: '6.90 g/cm³' },
    { name: 'Lutetium', symbol: 'Lu', atomic_number: 71, atomic_mass: 174.97, category: 'Lanthanide', group: 3, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹ 6s²', state: 'Solid', melting_point: '1663°C', boiling_point: '3402°C', description: 'Hardest rare earth', uses: 'Catalysts, phosphors', color: '#EC4899', density: '9.84 g/cm³' },
    { name: 'Hafnium', symbol: 'Hf', atomic_number: 72, atomic_mass: 178.49, category: 'Transition Metal', group: 4, period: 6, electron_config: '[Xe] 4f¹⁴ 5d² 6s²', state: 'Solid', melting_point: '2233°C', boiling_point: '4603°C', description: 'Corrosion resistant', uses: 'Nuclear reactors, microchips', color: '#F97316', density: '13.31 g/cm³' },
    { name: 'Tantalum', symbol: 'Ta', atomic_number: 73, atomic_mass: 180.95, category: 'Transition Metal', group: 5, period: 6, electron_config: '[Xe] 4f¹⁴ 5d³ 6s²', state: 'Solid', melting_point: '3017°C', boiling_point: '5458°C', description: 'Highly corrosion resistant', uses: 'Capacitors, surgical implants', color: '#F97316', density: '16.65 g/cm³' },
    { name: 'Tungsten', symbol: 'W', atomic_number: 74, atomic_mass: 183.84, category: 'Transition Metal', group: 6, period: 6, electron_config: '[Xe] 4f¹⁴ 5d⁴ 6s²', state: 'Solid', melting_point: '3422°C', boiling_point: '5555°C', description: 'Highest melting point', uses: 'Light bulb filaments, tools', color: '#F97316', density: '19.25 g/cm³' },
    { name: 'Rhenium', symbol: 'Re', atomic_number: 75, atomic_mass: 186.21, category: 'Transition Metal', group: 7, period: 6, electron_config: '[Xe] 4f¹⁴ 5d⁵ 6s²', state: 'Solid', melting_point: '3186°C', boiling_point: '5596°C', description: 'Third highest melting point', uses: 'Jet engines, catalysts', color: '#F97316', density: '21.02 g/cm³' },
    { name: 'Osmium', symbol: 'Os', atomic_number: 76, atomic_mass: 190.23, category: 'Transition Metal', group: 8, period: 6, electron_config: '[Xe] 4f¹⁴ 5d⁶ 6s²', state: 'Solid', melting_point: '3033°C', boiling_point: '5012°C', description: 'Densest naturally occurring element', uses: 'Fountain pen tips, electrical contacts', color: '#F97316', density: '22.59 g/cm³' },
    { name: 'Iridium', symbol: 'Ir', atomic_number: 77, atomic_mass: 192.22, category: 'Transition Metal', group: 9, period: 6, electron_config: '[Xe] 4f¹⁴ 5d⁷ 6s²', state: 'Solid', melting_point: '2466°C', boiling_point: '4428°C', description: 'Second densest element', uses: 'Spark plugs, crucibles', color: '#F97316', density: '22.56 g/cm³' },
    { name: 'Platinum', symbol: 'Pt', atomic_number: 78, atomic_mass: 195.08, category: 'Transition Metal', group: 10, period: 6, electron_config: '[Xe] 4f¹⁴ 5d⁹ 6s¹', state: 'Solid', melting_point: '1768.3°C', boiling_point: '3825°C', description: 'Precious, corrosion resistant', uses: 'Catalytic converters, jewelry', color: '#F97316', density: '21.45 g/cm³' },
    { name: 'Gold', symbol: 'Au', atomic_number: 79, atomic_mass: 196.967, category: 'Transition Metal', group: 11, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', state: 'Solid', melting_point: '1064.18°C', boiling_point: '2856°C', description: 'Highly valued precious metal', uses: 'Jewelry, electronics, currency', color: '#F97316', density: '19.32 g/cm³' },
    { name: 'Mercury', symbol: 'Hg', atomic_number: 80, atomic_mass: 200.592, category: 'Transition Metal', group: 12, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', state: 'Liquid', melting_point: '-38.83°C', boiling_point: '356.73°C', description: 'Only metal liquid at room temp', uses: 'Thermometers, lamps, switches', color: '#F97316', density: '13.53 g/cm³' },
    { name: 'Thallium', symbol: 'Tl', atomic_number: 81, atomic_mass: 204.38, category: 'Post-transition', group: 13, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', state: 'Solid', melting_point: '304°C', boiling_point: '1473°C', description: 'Soft, toxic metal', uses: 'Electronics, optics', color: '#0EA5E9', density: '11.85 g/cm³' },
    { name: 'Lead', symbol: 'Pb', atomic_number: 82, atomic_mass: 207.2, category: 'Post-transition', group: 14, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', state: 'Solid', melting_point: '327.46°C', boiling_point: '1749°C', description: 'Heavy, soft, toxic', uses: 'Batteries, radiation shielding', color: '#0EA5E9', density: '11.34 g/cm³' },
    { name: 'Bismuth', symbol: 'Bi', atomic_number: 83, atomic_mass: 208.98, category: 'Post-transition', group: 15, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', state: 'Solid', melting_point: '271.4°C', boiling_point: '1564°C', description: 'Diamagnetic, low toxicity', uses: 'Cosmetics, medicines, alloys', color: '#0EA5E9', density: '9.78 g/cm³' },
    { name: 'Polonium', symbol: 'Po', atomic_number: 84, atomic_mass: 209, category: 'Post-transition', group: 16, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', state: 'Solid', melting_point: '254°C', boiling_point: '962°C', description: 'Highly radioactive', uses: 'Static eliminators, research', color: '#0EA5E9', density: '9.20 g/cm³' },
    { name: 'Astatine', symbol: 'At', atomic_number: 85, atomic_mass: 210, category: 'Halogen', group: 17, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', state: 'Solid', melting_point: '302°C', boiling_point: '337°C', description: 'Rarest naturally occurring element', uses: 'Research only', color: '#14B8A6', density: '7 g/cm³' },
    { name: 'Radon', symbol: 'Rn', atomic_number: 86, atomic_mass: 222.018, category: 'Noble Gas', group: 18, period: 6, electron_config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', state: 'Gas', melting_point: '-71°C', boiling_point: '-61.7°C', description: 'Radioactive, health hazard', uses: 'Cancer treatment (historical)', color: '#8B5CF6', density: '9.73 g/L' },
    
    // Period 7
    { name: 'Francium', symbol: 'Fr', atomic_number: 87, atomic_mass: 223, category: 'Alkali Metal', group: 1, period: 7, electron_config: '[Rn] 7s¹', state: 'Solid', melting_point: '27°C', boiling_point: '677°C', description: 'Extremely rare, radioactive', uses: 'Research only', color: '#AB5CF2', density: '1.87 g/cm³' },
    { name: 'Radium', symbol: 'Ra', atomic_number: 88, atomic_mass: 226, category: 'Alkaline Earth', group: 2, period: 7, electron_config: '[Rn] 7s²', state: 'Solid', melting_point: '700°C', boiling_point: '1737°C', description: 'Radioactive, glows in dark', uses: 'Historical cancer treatment', color: '#22C55E', density: '5.5 g/cm³' },
    { name: 'Actinium', symbol: 'Ac', atomic_number: 89, atomic_mass: 227, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 6d¹ 7s²', state: 'Solid', melting_point: '1050°C', boiling_point: '3198°C', description: 'Radioactive, glows blue', uses: 'Neutron source, research', color: '#F59E0B', density: '10.07 g/cm³' },
    { name: 'Thorium', symbol: 'Th', atomic_number: 90, atomic_mass: 232.04, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 6d² 7s²', state: 'Solid', melting_point: '1750°C', boiling_point: '4788°C', description: 'Weakly radioactive', uses: 'Nuclear fuel, gas mantles', color: '#F59E0B', density: '11.72 g/cm³' },
    { name: 'Protactinium', symbol: 'Pa', atomic_number: 91, atomic_mass: 231.04, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f² 6d¹ 7s²', state: 'Solid', melting_point: '1572°C', boiling_point: '4000°C', description: 'Rare, toxic, radioactive', uses: 'Research only', color: '#F59E0B', density: '15.37 g/cm³' },
    { name: 'Uranium', symbol: 'U', atomic_number: 92, atomic_mass: 238.029, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f³ 6d¹ 7s²', state: 'Solid', melting_point: '1135°C', boiling_point: '4131°C', description: 'Primary nuclear fuel', uses: 'Nuclear fuel, weapons, dating', color: '#F59E0B', density: '19.05 g/cm³' },
    { name: 'Neptunium', symbol: 'Np', atomic_number: 93, atomic_mass: 237, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f⁴ 6d¹ 7s²', state: 'Solid', melting_point: '644°C', boiling_point: '3902°C', description: 'First transuranium element', uses: 'Research, neutron detectors', color: '#F59E0B', density: '20.45 g/cm³' },
    { name: 'Plutonium', symbol: 'Pu', atomic_number: 94, atomic_mass: 244, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f⁶ 7s²', state: 'Solid', melting_point: '640°C', boiling_point: '3228°C', description: 'Used in nuclear weapons', uses: 'Nuclear weapons, reactors, power', color: '#F59E0B', density: '19.84 g/cm³' },
    { name: 'Americium', symbol: 'Am', atomic_number: 95, atomic_mass: 243, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f⁷ 7s²', state: 'Solid', melting_point: '1176°C', boiling_point: '2011°C', description: 'Used in smoke detectors', uses: 'Smoke detectors, research', color: '#F59E0B', density: '13.69 g/cm³' },
    { name: 'Curium', symbol: 'Cm', atomic_number: 96, atomic_mass: 247, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f⁷ 6d¹ 7s²', state: 'Solid', melting_point: '1345°C', boiling_point: '3110°C', description: 'Named after Marie Curie', uses: 'Research, power sources', color: '#F59E0B', density: '13.51 g/cm³' },
    { name: 'Berkelium', symbol: 'Bk', atomic_number: 97, atomic_mass: 247, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f⁹ 7s²', state: 'Solid', melting_point: '986°C', boiling_point: '2627°C', description: 'Named after Berkeley', uses: 'Research only', color: '#F59E0B', density: '14.79 g/cm³' },
    { name: 'Californium', symbol: 'Cf', atomic_number: 98, atomic_mass: 251, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f¹⁰ 7s²', state: 'Solid', melting_point: '900°C', boiling_point: '1470°C', description: 'Strong neutron emitter', uses: 'Neutron moisture gauges, research', color: '#F59E0B', density: '15.1 g/cm³' },
    { name: 'Einsteinium', symbol: 'Es', atomic_number: 99, atomic_mass: 252, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f¹¹ 7s²', state: 'Solid', melting_point: '860°C', boiling_point: '996°C', description: 'Named after Einstein', uses: 'Research only', color: '#F59E0B', density: '8.84 g/cm³' },
    { name: 'Fermium', symbol: 'Fm', atomic_number: 100, atomic_mass: 257, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f¹² 7s²', state: 'Solid', melting_point: '1527°C', boiling_point: 'Unknown', description: 'Named after Enrico Fermi', uses: 'Research only', color: '#F59E0B', density: 'Unknown' },
    { name: 'Mendelevium', symbol: 'Md', atomic_number: 101, atomic_mass: 258, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f¹³ 7s²', state: 'Solid', melting_point: '827°C', boiling_point: 'Unknown', description: 'Named after Mendeleev', uses: 'Research only', color: '#F59E0B', density: 'Unknown' },
    { name: 'Nobelium', symbol: 'No', atomic_number: 102, atomic_mass: 259, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f¹⁴ 7s²', state: 'Solid', melting_point: '827°C', boiling_point: 'Unknown', description: 'Named after Alfred Nobel', uses: 'Research only', color: '#F59E0B', density: 'Unknown' },
    { name: 'Lawrencium', symbol: 'Lr', atomic_number: 103, atomic_mass: 266, category: 'Actinide', group: 3, period: 7, electron_config: '[Rn] 5f¹⁴ 7s² 7p¹', state: 'Solid', melting_point: '1627°C', boiling_point: 'Unknown', description: 'Named after Ernest Lawrence', uses: 'Research only', color: '#F59E0B', density: 'Unknown' },
    { name: 'Rutherfordium', symbol: 'Rf', atomic_number: 104, atomic_mass: 267, category: 'Transition Metal', group: 4, period: 7, electron_config: '[Rn] 5f¹⁴ 6d² 7s²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Synthetic element', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Dubnium', symbol: 'Db', atomic_number: 105, atomic_mass: 268, category: 'Transition Metal', group: 5, period: 7, electron_config: '[Rn] 5f¹⁴ 6d³ 7s²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Synthetic element', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Seaborgium', symbol: 'Sg', atomic_number: 106, atomic_mass: 269, category: 'Transition Metal', group: 6, period: 7, electron_config: '[Rn] 5f¹⁴ 6d⁴ 7s²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named after Glenn Seaborg', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Bohrium', symbol: 'Bh', atomic_number: 107, atomic_mass: 270, category: 'Transition Metal', group: 7, period: 7, electron_config: '[Rn] 5f¹⁴ 6d⁵ 7s²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named after Niels Bohr', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Hassium', symbol: 'Hs', atomic_number: 108, atomic_mass: 277, category: 'Transition Metal', group: 8, period: 7, electron_config: '[Rn] 5f¹⁴ 6d⁶ 7s²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Synthetic element', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Meitnerium', symbol: 'Mt', atomic_number: 109, atomic_mass: 278, category: 'Transition Metal', group: 9, period: 7, electron_config: '[Rn] 5f¹⁴ 6d⁷ 7s²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named after Lise Meitner', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Darmstadtium', symbol: 'Ds', atomic_number: 110, atomic_mass: 281, category: 'Transition Metal', group: 10, period: 7, electron_config: '[Rn] 5f¹⁴ 6d⁸ 7s²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Synthetic element', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Roentgenium', symbol: 'Rg', atomic_number: 111, atomic_mass: 282, category: 'Transition Metal', group: 11, period: 7, electron_config: '[Rn] 5f¹⁴ 6d⁹ 7s²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named after Wilhelm Röntgen', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Copernicium', symbol: 'Cn', atomic_number: 112, atomic_mass: 285, category: 'Transition Metal', group: 12, period: 7, electron_config: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', state: 'Gas', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named after Copernicus', uses: 'Research only', color: '#F97316', density: 'Unknown' },
    { name: 'Nihonium', symbol: 'Nh', atomic_number: 113, atomic_mass: 286, category: 'Post-transition', group: 13, period: 7, electron_config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named for Japan (Nihon)', uses: 'Research only', color: '#0EA5E9', density: 'Unknown' },
    { name: 'Flerovium', symbol: 'Fl', atomic_number: 114, atomic_mass: 289, category: 'Post-transition', group: 14, period: 7, electron_config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Synthetic element', uses: 'Research only', color: '#0EA5E9', density: 'Unknown' },
    { name: 'Moscovium', symbol: 'Mc', atomic_number: 115, atomic_mass: 290, category: 'Post-transition', group: 15, period: 7, electron_config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named after Moscow', uses: 'Research only', color: '#0EA5E9', density: 'Unknown' },
    { name: 'Livermorium', symbol: 'Lv', atomic_number: 116, atomic_mass: 293, category: 'Post-transition', group: 16, period: 7, electron_config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Synthetic element', uses: 'Research only', color: '#0EA5E9', density: 'Unknown' },
    { name: 'Tennessine', symbol: 'Ts', atomic_number: 117, atomic_mass: 294, category: 'Halogen', group: 17, period: 7, electron_config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', state: 'Solid', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named after Tennessee', uses: 'Research only', color: '#14B8A6', density: 'Unknown' },
    { name: 'Oganesson', symbol: 'Og', atomic_number: 118, atomic_mass: 294, category: 'Noble Gas', group: 18, period: 7, electron_config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', state: 'Unknown', melting_point: 'Unknown', boiling_point: 'Unknown', description: 'Named after Yuri Oganessian', uses: 'Research only', color: '#8B5CF6', density: 'Unknown' }
  ],
  compounds: [
    { name: 'Water', iupac: 'Dihydrogen monoxide', formula: 'H₂O', molecular_mass: 18.015, type: 'Inorganic', description: 'Universal solvent, essential for all known life', state: 'Liquid at STP', melting_point: '0°C', boiling_point: '100°C', density: '1.00 g/mL', uses: 'Drinking, solvent, coolant, chemical reactions', properties: 'Polar molecule, excellent solvent, high specific heat' },
    { name: 'Sodium Chloride', iupac: 'Sodium chloride', formula: 'NaCl', molecular_mass: 58.44, type: 'Ionic compound', description: 'Common table salt, essential electrolyte', state: 'Solid crystalline', melting_point: '801°C', boiling_point: '1413°C', density: '2.165 g/cm³', uses: 'Food seasoning, road de-icing, chemical production', properties: 'Ionic bonding, highly soluble in water, conducts electricity in solution' },
    { name: 'Glucose', iupac: 'D-Glucose', formula: 'C₆H₁₂O₆', molecular_mass: 180.156, type: 'Organic', description: 'Simple sugar, primary energy source for cells', state: 'White crystalline solid', melting_point: '146°C', density: '1.54 g/cm³', uses: 'Energy metabolism, sweetener, fermentation', properties: 'Sweet taste, very soluble in water, reduces Benedict\'s reagent' },
    { name: 'Sulfuric Acid', iupac: 'Sulfuric acid', formula: 'H₂SO₄', molecular_mass: 98.079, type: 'Inorganic', description: 'Strong diprotic acid, most produced industrial chemical', state: 'Oily colorless liquid', density: '1.84 g/cm³', boiling_point: '337°C', uses: 'Fertilizers, batteries, chemical manufacturing, refining', properties: 'Highly corrosive, strong dehydrating agent, exothermic dilution' },
    { name: 'Methane', iupac: 'Methane', formula: 'CH₄', molecular_mass: 16.043, type: 'Organic', description: 'Simplest alkane, main component of natural gas', state: 'Gas at STP', melting_point: '-182°C', boiling_point: '-161°C', density: '0.656 g/L', uses: 'Fuel, heating, electricity generation, chemical feedstock', properties: 'Colorless, odorless, flammable, greenhouse gas' },
    { name: 'Ethanol', iupac: 'Ethyl alcohol', formula: 'C₂H₅OH', molecular_mass: 46.068, type: 'Organic', description: 'Common alcohol, beverage and industrial solvent', state: 'Colorless liquid', melting_point: '-114°C', boiling_point: '78°C', density: '0.789 g/mL', uses: 'Beverages, fuel, solvent, antiseptic', properties: 'Flammable, miscible with water, psychoactive' },
    { name: 'Ammonia', iupac: 'Azane', formula: 'NH₃', molecular_mass: 17.031, type: 'Inorganic', description: 'Pungent gas, essential for fertilizers', state: 'Gas at STP', melting_point: '-77.73°C', boiling_point: '-33.34°C', density: '0.73 kg/m³', uses: 'Fertilizer production, cleaning products, refrigerant', properties: 'Basic, forms hydrogen bonds, highly soluble in water' },
    { name: 'Carbon Dioxide', iupac: 'Carbon dioxide', formula: 'CO₂', molecular_mass: 44.009, type: 'Inorganic', description: 'Greenhouse gas, product of respiration', state: 'Gas at STP', melting_point: '-78.5°C', boiling_point: '-78.5°C (sublimes)', density: '1.98 kg/m³', uses: 'Carbonated beverages, fire extinguishers, dry ice', properties: 'Acidic when dissolved, sublimes at standard pressure' },
    { name: 'Acetic Acid', iupac: 'Ethanoic acid', formula: 'CH₃COOH', molecular_mass: 60.052, type: 'Organic', description: 'Weak carboxylic acid, main component of vinegar', state: 'Colorless liquid', melting_point: '16.6°C', boiling_point: '118°C', density: '1.05 g/mL', uses: 'Food preservative, solvent, chemical synthesis', properties: 'Weak acid, distinctive sour taste and smell' },
    { name: 'Benzene', iupac: 'Benzene', formula: 'C₆H₆', molecular_mass: 78.114, type: 'Organic', description: 'Aromatic hydrocarbon, important industrial chemical', state: 'Colorless liquid', melting_point: '5.5°C', boiling_point: '80.1°C', density: '0.876 g/mL', uses: 'Chemical synthesis, plastics, dyes, detergents', properties: 'Aromatic ring, carcinogenic, resonance stabilized' },
    { name: 'Calcium Carbonate', iupac: 'Calcium carbonate', formula: 'CaCO₃', molecular_mass: 100.09, type: 'Ionic compound', description: 'Main component of limestone, chalk, marble', state: 'White solid', melting_point: '825°C', density: '2.71 g/cm³', uses: 'Construction, antacids, calcium supplements', properties: 'Reacts with acids, decomposes on heating' },
    { name: 'Hydrogen Peroxide', iupac: 'Hydrogen peroxide', formula: 'H₂O₂', molecular_mass: 34.015, type: 'Inorganic', description: 'Pale blue liquid, strong oxidizing agent', state: 'Liquid', melting_point: '-0.43°C', boiling_point: '150.2°C', density: '1.45 g/cm³', uses: 'Bleaching, disinfectant, rocket propellant', properties: 'Oxidizing agent, decomposes to water and oxygen' },
    { name: 'Sodium Hydroxide', iupac: 'Sodium hydroxide', formula: 'NaOH', molecular_mass: 39.997, type: 'Ionic compound', description: 'Strong base, caustic soda', state: 'White solid', melting_point: '323°C', boiling_point: '1388°C', density: '2.13 g/cm³', uses: 'Soap making, drain cleaner, paper production', properties: 'Highly corrosive, very soluble in water, exothermic dissolution' },
    { name: 'Aspirin', iupac: 'Acetylsalicylic acid', formula: 'C₉H₈O₄', molecular_mass: 180.158, type: 'Organic', description: 'Common pain reliever and anti-inflammatory', state: 'White crystalline', melting_point: '135°C', density: '1.40 g/cm³', uses: 'Pain relief, fever reduction, anti-inflammatory', properties: 'Weak acid, inhibits prostaglandin synthesis' },
    { name: 'Caffeine', iupac: '1,3,7-Trimethylxanthine', formula: 'C₈H₁₀N₄O₂', molecular_mass: 194.19, type: 'Organic', description: 'Stimulant alkaloid found in coffee and tea', state: 'White solid', melting_point: '238°C', density: '1.23 g/cm³', uses: 'Beverages, medications, cognitive enhancement', properties: 'Central nervous system stimulant, adenosine antagonist' },
    { name: 'Nitric Acid', iupac: 'Nitric acid', formula: 'HNO₃', molecular_mass: 63.012, type: 'Inorganic', description: 'Strong acid, important oxidizing agent', state: 'Colorless liquid', melting_point: '-42°C', boiling_point: '83°C', density: '1.51 g/mL', uses: 'Fertilizers, explosives, metallurgy', properties: 'Strong acid and oxidizer, yellow in light' },
    { name: 'Hydrochloric Acid', iupac: 'Hydrogen chloride', formula: 'HCl', molecular_mass: 36.458, type: 'Inorganic', description: 'Strong acid, gastric acid main component', state: 'Colorless liquid', melting_point: '-114°C', boiling_point: '-85°C', density: '1.49 g/cm³', uses: 'Steel pickling, chemical production, pH control', properties: 'Strong acid, pungent odor, fumes in air' },
    { name: 'Ethylene', iupac: 'Ethene', formula: 'C₂H₄', molecular_mass: 28.054, type: 'Organic', description: 'Simplest alkene, plant hormone', state: 'Colorless gas', melting_point: '-169°C', boiling_point: '-104°C', density: '1.18 kg/m³', uses: 'Plastics, ripening fruit, chemical synthesis', properties: 'Flammable, undergoes addition reactions' },
    { name: 'Acetone', iupac: 'Propanone', formula: 'C₃H₆O', molecular_mass: 58.08, type: 'Organic', description: 'Common solvent, simplest ketone', state: 'Colorless liquid', melting_point: '-95°C', boiling_point: '56°C', density: '0.791 g/mL', uses: 'Solvent, nail polish remover, chemical synthesis', properties: 'Flammable, miscible with water, volatile' },
    { name: 'Sodium Bicarbonate', iupac: 'Sodium hydrogen carbonate', formula: 'NaHCO₃', molecular_mass: 84.007, type: 'Ionic compound', description: 'Baking soda, mild base', state: 'White solid', melting_point: '50°C (decomposes)', density: '2.20 g/cm³', uses: 'Baking, antacid, cleaning, fire extinguisher', properties: 'Weak base, releases CO₂ when heated or in acid' },
    { name: 'Formaldehyde', iupac: 'Methanal', formula: 'CH₂O', molecular_mass: 30.026, type: 'Organic', description: 'Simplest aldehyde, preservative', state: 'Gas at STP', melting_point: '-92°C', boiling_point: '-19°C', density: '0.815 g/mL (37% solution)', uses: 'Preservative, disinfectant, resin production', properties: 'Pungent odor, carcinogenic, polymerizes readily' },
    { name: 'Urea', iupac: 'Carbamide', formula: 'CH₄N₂O', molecular_mass: 60.056, type: 'Organic', description: 'Nitrogenous waste, fertilizer', state: 'White solid', melting_point: '133°C', density: '1.32 g/cm³', uses: 'Fertilizer, animal feed, plastics', properties: 'Very soluble in water, non-toxic at normal levels' },
    { name: 'Potassium Chloride', iupac: 'Potassium chloride', formula: 'KCl', molecular_mass: 74.55, type: 'Ionic compound', description: 'Salt substitute, electrolyte supplement', state: 'White solid', melting_point: '770°C', boiling_point: '1420°C', density: '1.98 g/cm³', uses: 'Salt substitute, fertilizer, medical applications', properties: 'Soluble in water, bitter taste' },
    { name: 'Silicon Dioxide', iupac: 'Silicon dioxide', formula: 'SiO₂', molecular_mass: 60.08, type: 'Inorganic', description: 'Quartz, sand, glass component', state: 'Solid', melting_point: '1710°C', boiling_point: '2950°C', density: '2.65 g/cm³', uses: 'Glass, ceramics, electronics', properties: 'Very hard, insoluble in water, piezoelectric' },
    { name: 'Iron Oxide', iupac: 'Iron(III) oxide', formula: 'Fe₂O₃', molecular_mass: 159.69, type: 'Ionic compound', description: 'Rust, red pigment', state: 'Reddish-brown solid', melting_point: '1566°C', density: '5.24 g/cm³', uses: 'Pigments, polishing compounds, magnetic storage', properties: 'Paramagnetic, insoluble in water' },
    { name: 'Magnesium Sulfate', iupac: 'Magnesium sulfate', formula: 'MgSO₄', molecular_mass: 120.37, type: 'Ionic compound', description: 'Epsom salt, laxative', state: 'White solid', melting_point: '1124°C', density: '2.66 g/cm³', uses: 'Medicine, bath salts, fertilizer', properties: 'Very soluble in water, bitter taste' },
    { name: 'Copper Sulfate', iupac: 'Copper(II) sulfate', formula: 'CuSO₄', molecular_mass: 159.61, type: 'Ionic compound', description: 'Blue vitriol, fungicide', state: 'Blue solid', melting_point: '110°C (decomposes)', density: '3.60 g/cm³', uses: 'Fungicide, herbicide, chemistry teaching', properties: 'Blue pentahydrate, white anhydrous form' },
    { name: 'Propane', iupac: 'Propane', formula: 'C₃H₈', molecular_mass: 44.096, type: 'Organic', description: 'LPG component, fuel', state: 'Gas at STP', melting_point: '-188°C', boiling_point: '-42°C', density: '2.01 kg/m³', uses: 'Heating fuel, cooking, propellant', properties: 'Highly flammable, odorless (odorant added)' },
    { name: 'Toluene', iupac: 'Methylbenzene', formula: 'C₇H₈', molecular_mass: 92.141, type: 'Organic', description: 'Aromatic solvent, octane booster', state: 'Colorless liquid', melting_point: '-95°C', boiling_point: '111°C', density: '0.867 g/mL', uses: 'Solvent, fuel additive, chemical synthesis', properties: 'Aromatic, flammable, sweet smell' },
    { name: 'Glycerol', iupac: 'Propane-1,2,3-triol', formula: 'C₃H₈O₃', molecular_mass: 92.094, type: 'Organic', description: 'Trihydric alcohol, moisturizer', state: 'Viscous liquid', melting_point: '18°C', boiling_point: '290°C', density: '1.26 g/mL', uses: 'Cosmetics, pharmaceuticals, food additive', properties: 'Sweet taste, hygroscopic, non-toxic' },
    { name: 'Citric Acid', iupac: '2-Hydroxypropane-1,2,3-tricarboxylic acid', formula: 'C₆H₈O₇', molecular_mass: 192.12, type: 'Organic', description: 'Weak organic acid in citrus fruits', state: 'White solid', melting_point: '153°C', density: '1.66 g/cm³', uses: 'Food additive, cleaning agent, pH buffer', properties: 'Sour taste, chelating agent, biodegradable' },
    { name: 'Aluminum Hydroxide', iupac: 'Aluminum hydroxide', formula: 'Al(OH)₃', molecular_mass: 78.004, type: 'Inorganic', description: 'Antacid, flame retardant', state: 'White solid', melting_point: '300°C', density: '2.42 g/cm³', uses: 'Antacid, adjuvant in vaccines, water treatment', properties: 'Amphoteric, insoluble in water' },
    { name: 'Phosphoric Acid', iupac: 'Phosphoric acid', formula: 'H₃PO₄', molecular_mass: 97.994, type: 'Inorganic', description: 'Weak triprotic acid, rust converter', state: 'Colorless solid/liquid', melting_point: '42.4°C', boiling_point: '158°C', density: '1.88 g/cm³', uses: 'Soft drinks, rust removal, fertilizers', properties: 'Triprotic acid, non-toxic, used in cola' },
    { name: 'Vitamin C', iupac: 'Ascorbic acid', formula: 'C₆H₈O₆', molecular_mass: 176.12, type: 'Organic', description: 'Essential nutrient, antioxidant', state: 'White solid', melting_point: '190°C', density: '1.65 g/cm³', uses: 'Dietary supplement, antioxidant, food preservative', properties: 'Water-soluble vitamin, reduces free radicals' }
  ],
  terms: [
    { term: 'Acid', category: 'General Chemistry', definition: 'A substance that donates protons (H⁺) in solution or accepts electron pairs, has pH less than 7', example: 'Hydrochloric acid (HCl), Sulfuric acid (H₂SO₄), Acetic acid (CH₃COOH)' },
    { term: 'Activation Energy', category: 'Chemical Kinetics', definition: 'Minimum energy required for reactants to undergo a chemical reaction', example: 'Catalysts lower activation energy, speeding up reactions' },
    { term: 'Alkali', category: 'General Chemistry', definition: 'Soluble base that produces hydroxide ions (OH⁻) in aqueous solution', example: 'Sodium hydroxide (NaOH), Potassium hydroxide (KOH)' },
    { term: 'Allotrope', category: 'General Chemistry', definition: 'Different structural forms of the same element in the same physical state', example: 'Diamond and graphite are allotropes of carbon' },
    { term: 'Anion', category: 'General Chemistry', definition: 'Negatively charged ion formed by gaining electrons', example: 'Cl⁻ (chloride), SO₄²⁻ (sulfate), NO₃⁻ (nitrate)' },
    { term: 'Aromatic Compound', category: 'Organic Chemistry', definition: 'Cyclic, planar molecule with delocalized π electrons following Hückel\'s rule', example: 'Benzene (C₆H₆), naphthalene, pyridine' },
    { term: 'Atom', category: 'Atomic Structure', definition: 'Smallest unit of an element that retains chemical properties, consists of nucleus and electrons', example: 'Hydrogen atom has 1 proton and 1 electron' },
    { term: 'Avogadro\'s Number', category: 'Stoichiometry', definition: 'Number of particles in one mole: 6.022 × 10²³', example: 'One mole of any substance contains Avogadro\'s number of particles' },
    { term: 'Base', category: 'General Chemistry', definition: 'Substance that accepts protons (H⁺) or donates electron pairs, pH greater than 7', example: 'Sodium hydroxide (NaOH), ammonia (NH₃)' },
    { term: 'Bond Energy', category: 'Chemical Bonding', definition: 'Energy required to break one mole of bonds in gaseous state', example: 'C-H bond energy is approximately 413 kJ/mol' },
    { term: 'Buffer', category: 'Acid-Base Chemistry', definition: 'Solution that resists pH changes when small amounts of acid or base are added', example: 'Blood bicarbonate buffer (H₂CO₃/HCO₃⁻) maintains pH around 7.4' },
    { term: 'Catalyst', category: 'Chemical Kinetics', definition: 'A substance that increases the rate of a chemical reaction without being permanently consumed, works by lowering activation energy', example: 'Platinum in catalytic converters, enzymes in biological systems, iron in Haber process' },
    { term: 'Cation', category: 'General Chemistry', definition: 'Positively charged ion formed by losing electrons', example: 'Na⁺ (sodium), Ca²⁺ (calcium), Fe³⁺ (iron)' },
    { term: 'Chelation', category: 'Inorganic Chemistry', definition: 'Formation of multiple bonds between ligand and central metal ion', example: 'EDTA chelates metal ions in water treatment' },
    { term: 'Chirality', category: 'Organic Chemistry', definition: 'Property of molecule having non-superimposable mirror image', example: 'Amino acids, sugars have chiral centers' },
    { term: 'Colloid', category: 'Physical Chemistry', definition: 'Mixture where particles are dispersed but not dissolved', example: 'Milk, fog, smoke, gel' },
    { term: 'Combustion', category: 'General Chemistry', definition: 'Rapid exothermic reaction with oxygen producing heat and light', example: 'CH₄ + 2O₂ → CO₂ + 2H₂O' },
    { term: 'Compound', category: 'General Chemistry', definition: 'Pure substance composed of two or more elements chemically bonded', example: 'Water (H₂O), salt (NaCl), glucose (C₆H₁₂O₆)' },
    { term: 'Concentration', category: 'Solutions', definition: 'Amount of solute present in given quantity of solution', example: 'Molarity (M) = moles of solute / liters of solution' },
    { term: 'Covalent Bond', category: 'Chemical Bonding', definition: 'Chemical bond formed by sharing electrons between atoms', example: 'H-H bond in H₂, C=O bond in CO₂' },
    { term: 'Crystal Lattice', category: 'Solid State', definition: 'Three-dimensional arrangement of atoms, ions, or molecules in crystalline solid', example: 'NaCl forms cubic lattice structure' },
    { term: 'Dehydration', category: 'Organic Chemistry', definition: 'Removal of water molecule from compound', example: 'Alcohol → alkene + water (using H₂SO₄)' },
    { term: 'Diffusion', category: 'Physical Chemistry', definition: 'Movement of particles from high to low concentration', example: 'Perfume spreading through room' },
    { term: 'Dipole Moment', category: 'Chemical Bonding', definition: 'Measure of polarity in molecule due to charge separation', example: 'Water has large dipole moment (1.85 D)' },
    { term: 'Distillation', category: 'Separation Techniques', definition: 'Separation based on differences in boiling points', example: 'Separating ethanol from water' },
    { term: 'Electrochemistry', category: 'Physical Chemistry', definition: 'Study of chemical processes involving electron transfer', example: 'Batteries, electrolysis, corrosion' },
    { term: 'Electrolysis', category: 'Electrochemistry', definition: 'Use of electric current to drive non-spontaneous chemical reaction', example: 'Electrolysis of water produces H₂ and O₂' },
    { term: 'Electron', category: 'Atomic Structure', definition: 'Negatively charged subatomic particle orbiting nucleus', example: 'Mass = 9.109 × 10⁻³¹ kg, charge = -1.602 × 10⁻¹⁹ C' },
    { term: 'Electronegativity', category: 'Chemical Bonding', definition: 'The ability of an atom to attract shared electrons in a chemical bond, measured on Pauling scale', example: 'Fluorine has highest electronegativity (3.98), Francium has lowest (0.7)' },
    { term: 'Element', category: 'General Chemistry', definition: 'Pure substance consisting of only one type of atom', example: 'Hydrogen (H), Carbon (C), Gold (Au)' },
    { term: 'Endothermic', category: 'Thermodynamics', definition: 'Reaction that absorbs heat from surroundings (ΔH > 0)', example: 'Photosynthesis, melting ice, evaporation' },
    { term: 'Enthalpy', category: 'Thermodynamics', definition: 'Heat content of a system at constant pressure, represented by ΔH', example: 'Combustion reactions have negative ΔH (exothermic)' },
    { term: 'Entropy', category: 'Thermodynamics', definition: 'Measure of disorder or randomness in system', example: 'Gas has higher entropy than liquid or solid' },
    { term: 'Enzyme', category: 'Biochemistry', definition: 'Biological catalyst that speeds up biochemical reactions', example: 'Amylase breaks down starch, catalase decomposes H₂O₂' },
    { term: 'Equilibrium', category: 'Chemical Equilibrium', definition: 'State where forward and reverse reaction rates are equal', example: 'N₂ + 3H₂ ⇌ 2NH₃ (Haber process)' },
    { term: 'Ester', category: 'Organic Chemistry', definition: 'Organic compound formed from carboxylic acid and alcohol', example: 'Ethyl acetate (CH₃COOC₂H₅), used in nail polish' },
    { term: 'Evaporation', category: 'Physical Chemistry', definition: 'Phase change from liquid to gas at surface below boiling point', example: 'Water evaporating from puddle' },
    { term: 'Exothermic', category: 'Thermodynamics', definition: 'Reaction that releases heat to surroundings (ΔH < 0)', example: 'Combustion, neutralization, rusting' },
    { term: 'Filtration', category: 'Separation Techniques', definition: 'Separation of solid from liquid using porous barrier', example: 'Coffee filter, water purification' },
    { term: 'Formula Mass', category: 'Stoichiometry', definition: 'Sum of atomic masses of all atoms in chemical formula', example: 'H₂O: (2 × 1.008) + 15.999 = 18.015 g/mol' },
    { term: 'Free Radical', category: 'Organic Chemistry', definition: 'Atom or molecule with unpaired electron, highly reactive', example: 'Cl• in ozone depletion, OH• in atmosphere' },
    { term: 'Functional Group', category: 'Organic Chemistry', definition: 'Specific group of atoms responsible for characteristic reactions', example: '-OH (alcohol), -COOH (carboxylic acid), -NH₂ (amine)' },
    { term: 'Galvanic Cell', category: 'Electrochemistry', definition: 'Electrochemical cell that generates electrical energy from spontaneous redox reaction', example: 'Daniell cell, batteries' },
    { term: 'Gas Laws', category: 'Physical Chemistry', definition: 'Mathematical relationships describing gas behavior', example: 'PV = nRT (Ideal Gas Law)' },
    { term: 'Gibbs Free Energy', category: 'Thermodynamics', definition: 'Energy available to do work in thermodynamic process', example: 'ΔG = ΔH - TΔS; ΔG < 0 for spontaneous reactions' },
    { term: 'Half-Life', category: 'Nuclear Chemistry', definition: 'Time required for half of radioactive substance to decay', example: 'C-14 half-life is 5,730 years' },
    { term: 'Halogen', category: 'Periodic Table', definition: 'Group 17 elements: highly reactive nonmetals', example: 'Fluorine, Chlorine, Bromine, Iodine' },
    { term: 'Heterogeneous', category: 'General Chemistry', definition: 'Mixture with non-uniform composition, visible phases', example: 'Sand in water, oil and water' },
    { term: 'Homogeneous', category: 'General Chemistry', definition: 'Mixture with uniform composition throughout', example: 'Salt water, air, brass' },
    { term: 'Hydration', category: 'General Chemistry', definition: 'Process of dissolving substance in water or adding water', example: 'Anhydrous CuSO₄ + water → blue CuSO₄•5H₂O' },
    { term: 'Hydrocarbon', category: 'Organic Chemistry', definition: 'Organic compound containing only hydrogen and carbon', example: 'Methane (CH₄), ethene (C₂H₄), benzene (C₆H₆)' },
    { term: 'Hydrogen Bond', category: 'Chemical Bonding', definition: 'Strong dipole-dipole attraction between H and N, O, or F atoms', example: 'Water molecules, DNA double helix, protein structure' },
    { term: 'Hydrolysis', category: 'General Chemistry', definition: 'Chemical breakdown of compound by reaction with water', example: 'Ester + water → carboxylic acid + alcohol' },
    { term: 'Indicator', category: 'Acid-Base Chemistry', definition: 'Substance that changes color at specific pH', example: 'Phenolphthalein (colorless in acid, pink in base)' },
    { term: 'Ion', category: 'General Chemistry', definition: 'Atom or molecule with net electric charge', example: 'Na⁺ (cation), Cl⁻ (anion)' },
    { term: 'Ionic Bond', category: 'Chemical Bonding', definition: 'Electrostatic attraction between oppositely charged ions', example: 'Na⁺ and Cl⁻ in NaCl' },
    { term: 'Ionization Energy', category: 'Atomic Structure', definition: 'Energy required to remove electron from gaseous atom', example: 'First ionization energy of H is 1312 kJ/mol' },
    { term: 'Isomer', category: 'Organic Chemistry', definition: 'Compounds with the same molecular formula but different structural arrangements or spatial orientations', example: 'Butane and isobutane are both C₄H₁₀ but have different structures' },
    { term: 'Isotope', category: 'Nuclear Chemistry', definition: 'Atoms of same element with different numbers of neutrons', example: 'C-12, C-13, C-14 are carbon isotopes' },
    { term: 'Ketone', category: 'Organic Chemistry', definition: 'Organic compound with carbonyl group (C=O) bonded to two carbon atoms', example: 'Acetone (CH₃COCH₃), used as solvent' },
    { term: 'Kinetic Energy', category: 'Physical Chemistry', definition: 'Energy of motion, increases with temperature', example: 'Gas particles have high kinetic energy' },
    { term: 'Le Chatelier\'s Principle', category: 'Chemical Equilibrium', definition: 'System at equilibrium responds to stress by shifting to counteract change', example: 'Increasing pressure shifts equilibrium to fewer gas moles' },
    { term: 'Lewis Structure', category: 'Chemical Bonding', definition: 'Diagram showing bonding between atoms and lone pairs', example: 'H:O:H for water molecule' },
    { term: 'Limiting Reagent', category: 'Stoichiometry', definition: 'Reactant completely consumed in reaction, determines product amount', example: 'If 1 mol H₂ reacts with 0.4 mol O₂, O₂ is limiting' },
    { term: 'Lone Pair', category: 'Chemical Bonding', definition: 'Pair of valence electrons not involved in bonding', example: 'Oxygen in water has 2 lone pairs' },
    { term: 'Mass Number', category: 'Nuclear Chemistry', definition: 'Total number of protons and neutrons in nucleus', example: 'Carbon-12 has mass number 12 (6p + 6n)' },
    { term: 'Metalloid', category: 'Periodic Table', definition: 'Element with properties between metals and nonmetals', example: 'Silicon, Germanium, Arsenic' },
    { term: 'Miscible', category: 'Solutions', definition: 'Liquids that mix in all proportions to form homogeneous solution', example: 'Ethanol and water are miscible' },
    { term: 'Molarity', category: 'Solutions', definition: 'Concentration expressed as moles of solute per liter of solution', example: '1 M NaCl = 1 mole NaCl in 1 L solution' },
    { term: 'Mole', category: 'Stoichiometry', definition: 'SI unit for amount of substance containing exactly 6.022 × 10²³ particles (Avogadro\'s number)', example: '1 mole of carbon atoms = 12 grams = 6.022 × 10²³ atoms' },
    { term: 'Molecule', category: 'General Chemistry', definition: 'Two or more atoms bonded together', example: 'O₂, H₂O, C₆H₁₂O₆' },
    { term: 'Neutralization', category: 'Acid-Base Chemistry', definition: 'Reaction between acid and base producing salt and water', example: 'HCl + NaOH → NaCl + H₂O' },
    { term: 'Neutron', category: 'Atomic Structure', definition: 'Neutral subatomic particle in nucleus', example: 'Mass ≈ 1 amu, no charge' },
    { term: 'Noble Gas', category: 'Periodic Table', definition: 'Group 18 elements with complete valence shells, very unreactive', example: 'Helium, Neon, Argon, Krypton, Xenon' },
    { term: 'Octet Rule', category: 'Chemical Bonding', definition: 'Atoms tend to gain/lose/share electrons to have 8 valence electrons', example: 'NaCl forms because both achieve octet' },
    { term: 'Orbital', category: 'Atomic Structure', definition: 'Region of space where electron is likely to be found', example: 's, p, d, f orbitals with different shapes' },
    { term: 'Organic Chemistry', category: 'Chemistry Branches', definition: 'Study of carbon-containing compounds', example: 'Hydrocarbons, alcohols, carboxylic acids' },
    { term: 'Oxidation', category: 'Redox Chemistry', definition: 'Chemical process involving loss of electrons or increase in oxidation state', example: '2Mg + O₂ → 2MgO (Magnesium oxidized from 0 to +2 state)' },
    { term: 'Oxidation Number', category: 'Redox Chemistry', definition: 'Charge atom would have if all bonds were ionic', example: 'In H₂O, H is +1 and O is -2' },
    { term: 'Periodic Table', category: 'General Chemistry', definition: 'Arrangement of elements by atomic number showing periodic trends', example: '118 elements organized in groups and periods' },
    { term: 'pH', category: 'Acid-Base Chemistry', definition: 'Measure of hydrogen ion concentration, pH = -log[H⁺]', example: 'pH 7 is neutral, <7 acidic, >7 basic' },
    { term: 'Phase Change', category: 'Physical Chemistry', definition: 'Transformation from one state of matter to another', example: 'Melting, freezing, vaporization, condensation, sublimation' },
    { term: 'Photochemistry', category: 'Physical Chemistry', definition: 'Study of chemical reactions initiated by light', example: 'Photosynthesis, photography, ozone formation' },
    { term: 'Polymer', category: 'Organic Chemistry', definition: 'Large molecule composed of many repeating structural units (monomers) linked by covalent bonds', example: 'Polyethylene (plastic bags), proteins, DNA, cellulose, nylon' },
    { term: 'Precipitate', category: 'General Chemistry', definition: 'Insoluble solid formed from solution during chemical reaction', example: 'AgCl forms when AgNO₃ meets NaCl' },
    { term: 'Proton', category: 'Atomic Structure', definition: 'Positively charged subatomic particle in nucleus', example: 'Mass ≈ 1 amu, charge = +1' },
    { term: 'Quantum Number', category: 'Atomic Structure', definition: 'Number describing specific property of electron in atom', example: 'n (principal), l (angular), m (magnetic), s (spin)' },
    { term: 'Radioactivity', category: 'Nuclear Chemistry', definition: 'Spontaneous emission of radiation from unstable nuclei', example: 'Alpha, beta, gamma decay' },
    { term: 'Rate Law', category: 'Chemical Kinetics', definition: 'Mathematical relationship between reaction rate and reactant concentrations', example: 'Rate = k[A]^m[B]^n' },
    { term: 'Redox Reaction', category: 'Redox Chemistry', definition: 'Chemical reaction involving transfer of electrons', example: 'Zn + Cu²⁺ → Zn²⁺ + Cu' },
    { term: 'Reduction', category: 'Redox Chemistry', definition: 'Gain of electrons or decrease in oxidation state', example: 'Cu²⁺ + 2e⁻ → Cu (reduction)' },
    { term: 'Resonance', category: 'Chemical Bonding', definition: 'Delocalization of electrons represented by multiple Lewis structures', example: 'Benzene ring, carbonate ion' },
    { term: 'Salt', category: 'General Chemistry', definition: 'Ionic compound formed from neutralization of acid and base', example: 'NaCl, K₂SO₄, CaCO₃' },
    { term: 'Saturated Solution', category: 'Solutions', definition: 'Solution containing maximum amount of dissolved solute at given temperature', example: 'Adding more sugar to saturated solution won\'t dissolve' },
    { term: 'Solubility', category: 'Solutions', definition: 'Maximum amount of solute that dissolves in given amount of solvent', example: 'Sugar is highly soluble in water' },
    { term: 'Solute', category: 'Solutions', definition: 'Substance being dissolved in solution', example: 'Salt in saltwater' },
    { term: 'Solution', category: 'Solutions', definition: 'Homogeneous mixture of two or more substances', example: 'Saltwater, air, brass' },
    { term: 'Solvent', category: 'Solutions', definition: 'Substance doing the dissolving in solution', example: 'Water in saltwater' },
    { term: 'Specific Heat', category: 'Thermodynamics', definition: 'Amount of heat needed to raise temperature of 1g substance by 1°C', example: 'Water has high specific heat (4.18 J/g°C)' },
    { term: 'Spectroscopy', category: 'Analytical Chemistry', definition: 'Study of interaction between matter and electromagnetic radiation', example: 'IR, NMR, UV-Vis, Mass spectrometry' },
    { term: 'Standard Temperature and Pressure', category: 'Physical Chemistry', definition: 'Reference conditions: 0°C (273.15 K) and 1 atm pressure', example: 'At STP, 1 mole gas occupies 22.4 L' },
    { term: 'Stoichiometry', category: 'Stoichiometry', definition: 'Quantitative relationship between reactants and products in chemical reaction', example: 'Using balanced equations to calculate amounts' },
    { term: 'Sublimation', category: 'Physical Chemistry', definition: 'Phase change directly from solid to gas without liquid phase', example: 'Dry ice (CO₂), iodine, naphthalene' },
    { term: 'Suspension', category: 'Mixtures', definition: 'Heterogeneous mixture with large particles that settle', example: 'Sand in water, chalk in water' },
    { term: 'Synthesis', category: 'General Chemistry', definition: 'Formation of compound from simpler substances', example: '2H₂ + O₂ → 2H₂O' },
    { term: 'Titration', category: 'Analytical Chemistry', definition: 'Technique to determine concentration by adding measured reagent', example: 'Acid-base titration using phenolphthalein' },
    { term: 'Transition Metal', category: 'Periodic Table', definition: 'Elements in groups 3-12 with partially filled d orbitals', example: 'Iron, Copper, Gold, Silver' },
    { term: 'Triple Point', category: 'Physical Chemistry', definition: 'Temperature and pressure where all three phases coexist', example: 'Water triple point: 0.01°C, 611.657 Pa' },
    { term: 'Valence Electrons', category: 'Atomic Structure', definition: 'Electrons in the outermost shell of an atom that participate in chemical bonding', example: 'Carbon has 4 valence electrons, enabling it to form 4 bonds' },
    { term: 'Van der Waals Forces', category: 'Chemical Bonding', definition: 'Weak intermolecular forces including dipole-dipole and London dispersion', example: 'Responsible for gecko adhesion, protein folding' },
    { term: 'Volatility', category: 'Physical Chemistry', definition: 'Tendency of substance to vaporize', example: 'Acetone is highly volatile' },
    { term: 'Yield', category: 'Stoichiometry', definition: 'Amount of product obtained from chemical reaction', example: 'Actual yield vs theoretical yield, percent yield' },
    { term: 'Zwitterion', category: 'Organic Chemistry', definition: 'Molecule with both positive and negative charges', example: 'Amino acids at physiological pH' }
  ],
  reactions: [
    { name: 'Combustion of Methane', equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O', type: 'Combustion', description: 'Complete oxidation of methane in oxygen producing carbon dioxide and water', energy: 'Exothermic (ΔH = -890 kJ/mol)', conditions: 'Ignition source required, excess oxygen for complete combustion' },
    { name: 'Neutralization', equation: 'HCl + NaOH → NaCl + H₂O', type: 'Acid-Base', description: 'Reaction between strong acid and strong base producing salt and water', energy: 'Exothermic (releases heat)', conditions: 'Room temperature, aqueous solution' },
    { name: 'Photosynthesis', equation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', type: 'Biochemical', description: 'Plants convert carbon dioxide and water into glucose using light energy from sun', energy: 'Endothermic (requires light energy)', conditions: 'Presence of chlorophyll, sunlight, occurs in chloroplasts' },
    { name: 'Rusting of Iron', equation: '4Fe + 3O₂ → 2Fe₂O₃', type: 'Oxidation', description: 'Iron reacts with oxygen in presence of water forming iron(III) oxide (rust)', energy: 'Exothermic', conditions: 'Requires moisture and oxygen, accelerated by salt' },
    { name: 'Haber Process', equation: 'N₂ + 3H₂ ⇌ 2NH₃', type: 'Industrial', description: 'Production of ammonia from atmospheric nitrogen and hydrogen gas', energy: 'Exothermic (ΔH = -92 kJ/mol)', conditions: 'High pressure (150-200 atm), 450°C temperature, iron catalyst' },
    { name: 'Electrolysis of Water', equation: '2H₂O → 2H₂ + O₂', type: 'Oxidation', description: 'Decomposition of water into hydrogen and oxygen using electrical energy', energy: 'Endothermic (requires electrical energy)', conditions: 'Electric current, electrolyte solution' },
    { name: 'Saponification', equation: 'Fat + 3NaOH → Glycerol + 3 Soap', type: 'Organic', description: 'Hydrolysis of fats or oils with strong base to produce soap and glycerol', energy: 'Exothermic', conditions: 'Hot sodium hydroxide solution, heating' },
    { name: 'Fermentation', equation: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂', type: 'Biochemical', description: 'Anaerobic breakdown of glucose by yeast to produce ethanol and carbon dioxide', energy: 'Exothermic', conditions: 'Anaerobic conditions, yeast enzymes, 30-40°C' },
    { name: 'Thermal Decomposition of CaCO₃', equation: 'CaCO₃ → CaO + CO₂', type: 'Decomposition', description: 'Limestone decomposes to calcium oxide (quicklime) and carbon dioxide', energy: 'Endothermic', conditions: 'High temperature (900°C or above)' },
    { name: 'Combustion of Propane', equation: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O', type: 'Combustion', description: 'Complete combustion of propane gas producing energy', energy: 'Exothermic (ΔH = -2220 kJ/mol)', conditions: 'Ignition source, adequate oxygen supply' },
    { name: 'Reaction of Zinc with HCl', equation: 'Zn + 2HCl → ZnCl₂ + H₂', type: 'Acid-Base', description: 'Metal reacts with acid to produce salt and hydrogen gas', energy: 'Exothermic', conditions: 'Room temperature, dilute or concentrated acid' },
    { name: 'Precipitation of AgCl', equation: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃', type: 'Precipitation', description: 'Formation of insoluble silver chloride precipitate', energy: 'Slightly exothermic', conditions: 'Aqueous solution, room temperature' },
    { name: 'Contact Process', equation: '2SO₂ + O₂ ⇌ 2SO₃', type: 'Industrial', description: 'Industrial production of sulfur trioxide for sulfuric acid manufacture', energy: 'Exothermic', conditions: 'V₂O₅ catalyst, 450°C, 1-2 atm pressure' },
    { name: 'Ostwald Process', equation: '4NH₃ + 5O₂ → 4NO + 6H₂O', type: 'Industrial', description: 'Industrial production of nitric acid from ammonia', energy: 'Exothermic', conditions: 'Platinum-rhodium catalyst, 900°C' },
    { name: 'Synthesis of Ammonia', equation: 'N₂ + 3H₂ ⇌ 2NH₃', type: 'Synthesis', description: 'Haber-Bosch process for ammonia production', energy: 'Exothermic (ΔH = -92.4 kJ/mol)', conditions: 'High pressure, 450°C, iron catalyst' },
    { name: 'Esterification', equation: 'R-COOH + R\'-OH ⇌ R-COO-R\' + H₂O', type: 'Organic', description: 'Formation of esters from carboxylic acids and alcohols', energy: 'Slightly exothermic', conditions: 'Acid catalyst (H₂SO₄), heating, reflux' },
    { name: 'Aldol Condensation', equation: '2CH₃CHO → CH₃CH(OH)CH₂CHO', type: 'Organic', description: 'Formation of β-hydroxy carbonyl compounds from aldehydes or ketones', energy: 'Variable', conditions: 'Base or acid catalyst, controlled temperature' },
    { name: 'Dehydration of Alcohols', equation: 'C₂H₅OH → C₂H₄ + H₂O', type: 'Elimination', description: 'Removal of water from alcohol to form alkene', energy: 'Endothermic', conditions: 'Concentrated H₂SO₄, heating to 170°C' },
    { name: 'Halogenation of Alkanes', equation: 'CH₄ + Cl₂ → CH₃Cl + HCl', type: 'Substitution', description: 'Free radical substitution of hydrogen with halogen', energy: 'Exothermic', conditions: 'UV light or heat, gas phase' },
    { name: 'Grignard Reaction', equation: 'RMgX + R\'CHO → R-R\'-CH-OH', type: 'Organic', description: 'Addition of Grignard reagent to carbonyl compounds', energy: 'Exothermic', conditions: 'Anhydrous ether solvent, inert atmosphere' },
    { name: 'Diels-Alder Reaction', equation: 'Diene + Dienophile → Cyclohexene', type: 'Cycloaddition', description: 'Formation of six-membered rings from conjugated dienes', energy: 'Exothermic', conditions: 'Heating, no catalyst required' },
    { name: 'Friedel-Crafts Alkylation', equation: 'C₆H₆ + RCl → C₆H₅R + HCl', type: 'Substitution', description: 'Electrophilic aromatic substitution with alkyl groups', energy: 'Exothermic', conditions: 'AlCl₃ catalyst, anhydrous conditions' },
    { name: 'Oxidation of Alcohols', equation: 'RCH₂OH + [O] → RCHO + H₂O', type: 'Oxidation', description: 'Conversion of primary alcohols to aldehydes then carboxylic acids', energy: 'Exothermic', conditions: 'Oxidizing agent (K₂Cr₂O₇, KMnO₄), acidic medium' },
    { name: 'Reduction of Aldehydes', equation: 'RCHO + 2[H] → RCH₂OH', type: 'Reduction', description: 'Conversion of aldehydes to primary alcohols', energy: 'Exothermic', conditions: 'Reducing agent (NaBH₄, LiAlH₄), solvent' },
    { name: 'Amide Formation', equation: 'R-COOH + R\'NH₂ → R-CONH-R\' + H₂O', type: 'Condensation', description: 'Formation of amides from carboxylic acids and amines', energy: 'Exothermic', conditions: 'Heating, dehydrating agent or acid catalyst' },
    { name: 'Cannizzaro Reaction', equation: '2PhCHO + NaOH → PhCH₂OH + PhCOONa', type: 'Disproportionation', description: 'Self-oxidation-reduction of aldehydes without α-hydrogen', energy: 'Exothermic', conditions: 'Strong base (NaOH), heating' },
    { name: 'Hydrolysis of Esters', equation: 'RCOOR\' + H₂O → RCOOH + R\'OH', type: 'Hydrolysis', description: 'Breakdown of esters into carboxylic acids and alcohols', energy: 'Endothermic (acidic) or Exothermic (basic)', conditions: 'Acid or base catalyst, heating, water' },
    { name: 'Nucleophilic Substitution', equation: 'RX + Nu⁻ → RNu + X⁻', type: 'Substitution', description: 'Replacement of leaving group with nucleophile', energy: 'Variable', conditions: 'Polar solvent, nucleophile, appropriate temperature' },
    { name: 'Bromination of Benzene', equation: 'C₆H₆ + Br₂ → C₆H₅Br + HBr', type: 'Substitution', description: 'Electrophilic aromatic substitution with bromine', energy: 'Exothermic', conditions: 'FeBr₃ catalyst, room temperature' },
    { name: 'Nitration of Benzene', equation: 'C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O', type: 'Substitution', description: 'Introduction of nitro group to benzene ring', energy: 'Exothermic', conditions: 'Concentrated HNO₃ and H₂SO₄, 50-60°C' },
    { name: 'Hydrogenation of Alkenes', equation: 'C₂H₄ + H₂ → C₂H₆', type: 'Addition', description: 'Addition of hydrogen across carbon-carbon double bond', energy: 'Exothermic', conditions: 'Metal catalyst (Pt, Pd, Ni), elevated pressure' },
    { name: 'Polymerization of Ethylene', equation: 'nC₂H₄ → (-CH₂-CH₂-)n', type: 'Polymerization', description: 'Formation of polyethylene from ethylene monomers', energy: 'Exothermic', conditions: 'High pressure, catalyst, initiator' },
    { name: 'Thermite Reaction', equation: 'Fe₂O₃ + 2Al → 2Fe + Al₂O₃', type: 'Oxidation', description: 'Highly exothermic reduction of iron oxide by aluminum', energy: 'Highly exothermic', conditions: 'Ignition at high temperature (>1000°C)' },
    { name: 'Decomposition of H₂O₂', equation: '2H₂O₂ → 2H₂O + O₂', type: 'Decomposition', description: 'Breakdown of hydrogen peroxide to water and oxygen', energy: 'Exothermic', conditions: 'Catalyst (MnO₂, catalase), room temperature' },
    { name: 'Formation of Ammonia Chloride', equation: 'NH₃ + HCl → NH₄Cl', type: 'Acid-Base', description: 'Formation of white smoke from ammonia and hydrogen chloride', energy: 'Exothermic', conditions: 'Gas phase, room temperature' },
    { name: 'Respiration', equation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', type: 'Biochemical', description: 'Cellular breakdown of glucose to produce energy', energy: 'Exothermic (produces ATP)', conditions: 'Enzyme-catalyzed, 37°C, mitochondria' }
  ],
  functionalGroups: [
    { name: 'Hydroxyl', formula: '-OH', description: 'Alcohol functional group, makes molecules polar and capable of hydrogen bonding', example: 'Ethanol (CH₃CH₂OH), Methanol (CH₃OH)' },
    { name: 'Carboxyl', formula: '-COOH', description: 'Acidic functional group found in carboxylic acids', example: 'Acetic acid (CH₃COOH), Formic acid (HCOOH)' },
    { name: 'Amino', formula: '-NH₂', description: 'Basic functional group found in amines and amino acids', example: 'Methylamine (CH₃NH₂), Glycine (amino acid)' },
    { name: 'Carbonyl', formula: 'C=O', description: 'Carbon double-bonded to oxygen, found in aldehydes and ketones', example: 'Acetone (CH₃COCH₃), Formaldehyde (HCHO)' },
    { name: 'Aldehyde', formula: '-CHO', description: 'Carbonyl group at the end of a carbon chain', example: 'Formaldehyde (HCHO), Acetaldehyde (CH₃CHO)' }
  ],
  ions: {
    cations: [
      { symbol: 'Na⁺', name: 'Sodium ion', charge: '+1' },
      { symbol: 'Ca²⁺', name: 'Calcium ion', charge: '+2' },
      { symbol: 'Fe³⁺', name: 'Iron(III) ion', charge: '+3' },
      { symbol: 'NH₄⁺', name: 'Ammonium ion', charge: '+1' }
    ],
    anions: [
      { symbol: 'Cl⁻', name: 'Chloride ion', charge: '-1' },
      { symbol: 'SO₄²⁻', name: 'Sulfate ion', charge: '-2' },
      { symbol: 'NO₃⁻', name: 'Nitrate ion', charge: '-1' },
      { symbol: 'CO₃²⁻', name: 'Carbonate ion', charge: '-2' },
      { symbol: 'PO₄³⁻', name: 'Phosphate ion', charge: '-3' }
    ]
  },
  strongAcids: [
    { formula: 'HCl', name: 'Hydrochloric acid' },
    { formula: 'H₂SO₄', name: 'Sulfuric acid' },
    { formula: 'HNO₃', name: 'Nitric acid' },
    { formula: 'HClO₄', name: 'Perchloric acid' },
    { formula: 'HBr', name: 'Hydrobromic acid' },
    { formula: 'HI', name: 'Hydroiodic acid' }
  ],
  strongBases: [
    { formula: 'NaOH', name: 'Sodium hydroxide' },
    { formula: 'KOH', name: 'Potassium hydroxide' },
    { formula: 'Ca(OH)₂', name: 'Calcium hydroxide' },
    { formula: 'Ba(OH)₂', name: 'Barium hydroxide' }
  ],
  spectroscopy: {
    ir_ranges: [
      { range: '3600-3200', group: 'O-H stretch (alcohols, phenols)', strength: 'Strong, broad' },
      { range: '3000-2850', group: 'C-H stretch (alkanes)', strength: 'Medium' },
      { range: '1750-1650', group: 'C=O stretch (carbonyls)', strength: 'Strong, sharp' },
      { range: '1680-1620', group: 'C=C stretch (alkenes)', strength: 'Medium' },
      { range: '1600-1450', group: 'Aromatic C=C', strength: 'Variable' },
      { range: '1300-1000', group: 'C-O stretch (alcohols, ethers)', strength: 'Strong' },
      { range: '3500-3300', group: 'N-H stretch (amines)', strength: 'Medium' },
      { range: '2260-2210', group: 'C≡N stretch (nitriles)', strength: 'Medium' },
      { range: '1560-1530', group: 'N-O stretch (nitro)', strength: 'Strong' }
    ],
    nmr_ranges: [
      { shift: '0-2', type: '¹H NMR', group: 'Alkyl C-H', description: 'Methyl, methylene protons' },
      { shift: '2-3', type: '¹H NMR', group: 'C-H alpha to C=O', description: 'Protons next to carbonyl' },
      { shift: '3-4', type: '¹H NMR', group: 'C-H on C-O', description: 'Alcohol, ether protons' },
      { shift: '7-8', type: '¹H NMR', group: 'Aromatic C-H', description: 'Benzene ring protons' },
      { shift: '9-10', type: '¹H NMR', group: 'Aldehyde C-H', description: 'Formyl protons' },
      { shift: '10-13', type: '¹H NMR', group: 'Carboxylic acid O-H', description: 'Acidic protons' },
      { shift: '0-50', type: '¹³C NMR', group: 'Aliphatic C', description: 'Saturated carbons' },
      { shift: '110-160', type: '¹³C NMR', group: 'Aromatic C', description: 'Benzene ring carbons' },
      { shift: '160-220', type: '¹³C NMR', group: 'Carbonyl C', description: 'C=O carbons' }
    ]
  },
  safetyData: {
    ghs_pictograms: [
      { code: 'GHS01', name: 'Explosive', description: 'Explosive materials' },
      { code: 'GHS02', name: 'Flammable', description: 'Flammable gases, liquids, solids' },
      { code: 'GHS03', name: 'Oxidizing', description: 'Oxidizing gases, liquids, solids' },
      { code: 'GHS04', name: 'Compressed Gas', description: 'Gases under pressure' },
      { code: 'GHS05', name: 'Corrosive', description: 'Corrosive to metals, skin, eyes' },
      { code: 'GHS06', name: 'Toxic', description: 'Acute toxicity (fatal or toxic)' },
      { code: 'GHS07', name: 'Harmful', description: 'Harmful, irritant' },
      { code: 'GHS08', name: 'Health Hazard', description: 'Serious health hazard' },
      { code: 'GHS09', name: 'Environmental', description: 'Hazardous to aquatic environment' }
    ],
    first_aid: {
      inhalation: 'Move to fresh air. If breathing is difficult, give oxygen. Get medical attention.',
      skin: 'Remove contaminated clothing. Wash with soap and water. Get medical attention if irritation persists.',
      eyes: 'Rinse with water for at least 15 minutes. Get immediate medical attention.',
      ingestion: 'Do NOT induce vomiting. Rinse mouth with water. Get immediate medical attention.'
    }
  },
  calculators: {
    stoichiometry: true,
    equilibrium: true,
    kinetics: true,
    thermodynamics: true,
    electrochemistry: true,
    organic: true
  },
  featuredFacts: [
    { fact: 'Diamond and graphite are both pure carbon but have completely different properties due to their atomic structures', category: 'Materials' },
    { fact: 'A single drop of water contains approximately 1.67 sextillion (1.67 × 10²¹) molecules', category: 'Quantities' },
    { fact: 'Hydrogen is the most abundant element in the universe, making up about 75% of its elemental mass', category: 'Elements' },
    { fact: 'The human body contains enough carbon to make 900 pencils and enough iron to make a 3-inch nail', category: 'Body Chemistry' },
    { fact: 'Noble gases are called \'noble\' because they rarely react with other elements, like nobility rarely mingling with commoners', category: 'History' }
  ]
};

// App State
let currentView = 'home';
let favorites = [];
let currentTheme = 'light';

// Initialize App
function init() {
  setupEventListeners();
  renderPeriodicTable();
  renderFeaturedFact();
  setupAlphabetNav();
  showView('home');
}

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('darkModeToggle').addEventListener('change', toggleTheme);
  
  // Category cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const view = card.dataset.view;
      showView(view);
      // Update bottom nav
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      if (view === 'home') {
        document.querySelector('.nav-btn[data-view="home"]').classList.add('active');
      }
    });
  });
  
  // Bottom navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if (view === 'search') {
        showView('home');
        document.getElementById('globalSearch').focus();
      } else if (view === 'home') {
        showView('home');
      } else {
        showView(view);
      }
    });
  });
  
  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showView('home');
    });
  });
  
  // Global search
  const searchInput = document.getElementById('globalSearch');
  searchInput.addEventListener('input', handleSearch);
  searchInput.addEventListener('focus', () => {
    if (searchInput.value) handleSearch();
  });
  
  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      document.getElementById('searchResults').classList.add('hidden');
    }
  });
  
  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').classList.add('hidden');
    });
  });
  
  // Click outside modal to close
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
  
  // Compound filter
  document.getElementById('compoundFilter').addEventListener('change', renderCompounds);
  
  // Reaction filter
  document.getElementById('reactionFilter').addEventListener('change', renderReactions);
  
  // Tool cards
  document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
      const tool = card.dataset.tool;
      openCalculator(tool);
    });
  });
  
  // Reference tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderReferenceTable(btn.dataset.tab);
    });
  });
}

// Theme Toggle
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.dataset.theme = currentTheme;
  
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.checked = currentTheme === 'dark';
}

// View Management
function showView(viewName) {
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  
  const viewMap = {
    'home': 'homeView',
    'periodicTable': 'periodicTableView',
    'compounds': 'compoundsView',
    'dictionary': 'dictionaryView',
    'reactions': 'reactionsView',
    'tools': 'toolsView',
    'reference': 'referenceView',
    'favorites': 'favoritesView',
    'more': 'moreView'
  };
  
  const viewId = viewMap[viewName];
  if (viewId) {
    document.getElementById(viewId).classList.add('active');
    currentView = viewName;
    
    // Render content for specific views
    if (viewName === 'compounds') renderCompounds();
    if (viewName === 'dictionary') renderDictionary();
    if (viewName === 'reactions') renderReactions();
    if (viewName === 'reference') renderReferenceTable('ions');
    if (viewName === 'favorites') renderFavorites();
  }
}

// Search Functionality
function handleSearch() {
  const query = document.getElementById('globalSearch').value.toLowerCase().trim();
  const resultsContainer = document.getElementById('searchResults');
  
  if (!query) {
    resultsContainer.classList.add('hidden');
    return;
  }
  
  const results = {
    elements: chemistryData.elements.filter(e => 
      e.name.toLowerCase().includes(query) || 
      e.symbol.toLowerCase().includes(query)
    ),
    compounds: chemistryData.compounds.filter(c => 
      c.name.toLowerCase().includes(query) || 
      c.formula.toLowerCase().includes(query)
    ),
    terms: chemistryData.terms.filter(t => 
      t.term.toLowerCase().includes(query)
    )
  };
  
  if (results.elements.length === 0 && results.compounds.length === 0 && results.terms.length === 0) {
    resultsContainer.innerHTML = '<p>No results found</p>';
    resultsContainer.classList.remove('hidden');
    return;
  }
  
  let html = '';
  
  if (results.elements.length > 0) {
    html += '<div class="search-category"><h3>Elements</h3>';
    results.elements.forEach(element => {
      html += `
        <div class="search-result-item" onclick="showElementDetails(${element.atomic_number})">
          <strong>${element.name} (${element.symbol})</strong>
          <div style="font-size: 13px; color: var(--color-text-secondary);">${element.description}</div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  if (results.compounds.length > 0) {
    html += '<div class="search-category"><h3>Compounds</h3>';
    results.compounds.forEach((compound, idx) => {
      html += `
        <div class="search-result-item" onclick="showCompoundDetails(${idx})">
          <strong>${compound.name} (${compound.formula})</strong>
          <div style="font-size: 13px; color: var(--color-text-secondary);">${compound.description}</div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  if (results.terms.length > 0) {
    html += '<div class="search-category"><h3>Dictionary Terms</h3>';
    results.terms.forEach(term => {
      html += `
        <div class="search-result-item">
          <strong>${term.term}</strong>
          <div style="font-size: 13px; color: var(--color-text-secondary);">${term.definition}</div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  resultsContainer.innerHTML = html;
  resultsContainer.classList.remove('hidden');
}

// Featured Fact
function renderFeaturedFact() {
  const fact = chemistryData.featuredFacts[Math.floor(Math.random() * chemistryData.featuredFacts.length)];
  document.getElementById('featuredFact').innerHTML = `
    <strong style="font-size: 13px; opacity: 0.9;">${fact.category}</strong>
    <p style="margin-top: 8px; font-size: 15px;">${fact.fact}</p>
  `;
}

// Periodic Table
function renderPeriodicTable() {
  const container = document.getElementById('periodicTable');
  
  // Create a grid with proper positioning for standard periodic table
  // 18 columns (groups), 7 periods + 2 rows for lanthanides/actinides
  const grid = [];
  
  // Initialize empty grid
  for (let row = 0; row < 10; row++) {
    grid[row] = [];
    for (let col = 0; col < 18; col++) {
      grid[row][col] = null;
    }
  }
  
  // Position each element based on its group and period
  chemistryData.elements.forEach(element => {
    const period = element.period;
    const group = element.group;
    
    // Handle lanthanides (elements 57-71)
    if (element.atomic_number >= 58 && element.atomic_number <= 71) {
      const col = element.atomic_number - 58 + 3;
      grid[7][col] = element; // Row 7 for lanthanides
      return;
    }
    
    // Handle actinides (elements 89-103)
    if (element.atomic_number >= 90 && element.atomic_number <= 103) {
      const col = element.atomic_number - 90 + 3;
      grid[8][col] = element; // Row 8 for actinides
      return;
    }
    
    // Special positioning
    let row = period - 1;
    let col = group - 1;
    
    // Adjust for lanthanides/actinides placeholder
    if (element.atomic_number === 57) { // La
      grid[row][2] = element;
      return;
    }
    if (element.atomic_number === 89) { // Ac
      grid[row][2] = element;
      return;
    }
    
    grid[row][col] = element;
  });
  
  // Render the grid
  let html = '';
  
  // First 7 periods
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 18; col++) {
      const element = grid[row][col];
      if (element) {
        html += `
          <div class="element-cell" 
               style="background-color: ${element.color}; border-color: ${element.color};" 
               onclick="showElementDetails(${element.atomic_number})">
            <div class="element-number">${element.atomic_number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name" style="font-size: 8px;">${element.name}</div>
          </div>
        `;
      } else {
        html += '<div class="element-spacer"></div>';
      }
    }
  }
  
  // Add separator row
  for (let i = 0; i < 18; i++) {
    html += '<div class="element-spacer"></div>';
  }
  
  // Lanthanides row
  for (let col = 0; col < 18; col++) {
    const element = grid[7][col];
    if (element) {
      html += `
        <div class="element-cell" 
             style="background-color: ${element.color}; border-color: ${element.color};" 
             onclick="showElementDetails(${element.atomic_number})">
          <div class="element-number">${element.atomic_number}</div>
          <div class="element-symbol">${element.symbol}</div>
          <div class="element-name" style="font-size: 8px;">${element.name}</div>
        </div>
      `;
    } else {
      html += '<div class="element-spacer"></div>';
    }
  }
  
  // Actinides row
  for (let col = 0; col < 18; col++) {
    const element = grid[8][col];
    if (element) {
      html += `
        <div class="element-cell" 
             style="background-color: ${element.color}; border-color: ${element.color};" 
             onclick="showElementDetails(${element.atomic_number})">
          <div class="element-number">${element.atomic_number}</div>
          <div class="element-symbol">${element.symbol}</div>
          <div class="element-name" style="font-size: 8px;">${element.name}</div>
        </div>
      `;
    } else {
      html += '<div class="element-spacer"></div>';
    }
  }
  
  container.innerHTML = html;
}

function showElementDetails(atomicNumber) {
  const element = chemistryData.elements.find(e => e.atomic_number === atomicNumber);
  if (!element) return;
  
  const modal = document.getElementById('elementModal');
  const details = document.getElementById('elementDetails');
  
  details.innerHTML = `
    <div class="element-header" style="background: linear-gradient(135deg, ${element.color} 0%, ${element.color}dd 100%);">
      <div class="element-number" style="font-size: 16px;">${element.atomic_number}</div>
      <div class="element-symbol-large">${element.symbol}</div>
      <h2>${element.name}</h2>
      <div style="margin-top: 8px; opacity: 0.9;">${element.category}</div>
      <div style="margin-top: 4px; font-size: 13px; opacity: 0.8;">Group ${element.group} | Period ${element.period}</div>
    </div>
    
    <div class="element-tabs">
      <button class="element-tab active" onclick="showElementTab('overview')">Overview</button>
      <button class="element-tab" onclick="showElementTab('physical')">Physical</button>
      <button class="element-tab" onclick="showElementTab('atomic')">Atomic</button>
      <button class="element-tab" onclick="showElementTab('safety')">Safety</button>
      <button class="element-tab" onclick="showElementTab('uses')">Uses</button>
    </div>
    
    <div id="tab-overview" class="element-tab-content active">
      <div class="element-detail-grid">
        <div class="detail-item">
          <div class="detail-label">Atomic Mass</div>
          <div class="detail-value">${element.atomic_mass} u</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">State at STP</div>
          <div class="detail-value">${element.state}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Melting Point</div>
          <div class="detail-value">${element.melting_point}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Boiling Point</div>
          <div class="detail-value">${element.boiling_point}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Density</div>
          <div class="detail-value">${element.density}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Electron Config</div>
          <div class="detail-value">${element.electron_config}</div>
        </div>
      </div>
      <div style="margin-top: 24px;">
        <strong>Description</strong>
        <p style="margin-top: 8px; color: var(--color-text-secondary); line-height: 1.6;">${element.description}</p>
      </div>
    </div>
    
    <div id="tab-physical" class="element-tab-content">
      <div class="property-section">
        <h4>Thermal Properties</h4>
        <div class="property-list">
          <div class="detail-item">
            <div class="detail-label">Melting Point</div>
            <div class="detail-value">${element.melting_point}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Boiling Point</div>
            <div class="detail-value">${element.boiling_point}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">State</div>
            <div class="detail-value">${element.state}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Density</div>
            <div class="detail-value">${element.density}</div>
          </div>
        </div>
      </div>
      <div class="property-section">
        <h4>Appearance</h4>
        <p style="color: var(--color-text-secondary);">${element.description}</p>
      </div>
    </div>
    
    <div id="tab-atomic" class="element-tab-content">
      <div class="property-section">
        <h4>Electronic Configuration</h4>
        <div class="detail-item" style="padding: 16px; background: var(--color-background); border-radius: 8px;">
          <div class="detail-label">Electron Configuration</div>
          <div class="detail-value" style="font-size: 16px;">${element.electron_config}</div>
        </div>
      </div>
      <div class="property-section">
        <h4>Position in Periodic Table</h4>
        <div class="property-list">
          <div class="detail-item">
            <div class="detail-label">Group</div>
            <div class="detail-value">${element.group}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Period</div>
            <div class="detail-value">${element.period}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Category</div>
            <div class="detail-value">${element.category}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="tab-safety" class="element-tab-content">
      <div class="property-section">
        <h4>Hazard Information</h4>
        <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Safety data varies by form and concentration. Always consult MSDS.</p>
        ${element.nfpa_health !== undefined ? `
        <div class="nfpa-diamond">
          <div class="nfpa-health nfpa-cell">${element.nfpa_health || 0}</div>
          <div class="nfpa-fire nfpa-cell">${element.nfpa_fire || 0}</div>
          <div class="nfpa-reactivity nfpa-cell">${element.nfpa_reactivity || 0}</div>
          <div class="nfpa-special nfpa-cell">${element.nfpa_special || '-'}</div>
        </div>
        <div style="text-align: center; font-size: 11px; color: var(--color-text-secondary); margin-top: 8px;">
          <div>Health: ${element.nfpa_health} | Flammability: ${element.nfpa_fire} | Reactivity: ${element.nfpa_reactivity}</div>
        </div>
        ` : '<p style="color: var(--color-text-secondary);">NFPA rating data not available for this element.</p>'}
      </div>
    </div>
    
    <div id="tab-uses" class="element-tab-content">
      <div class="property-section">
        <h4>Applications &amp; Uses</h4>
        <p style="color: var(--color-text-secondary); line-height: 1.6;">${element.uses}</p>
      </div>
      <div class="property-section">
        <h4>Industrial Importance</h4>
        <p style="color: var(--color-text-secondary); line-height: 1.6;">${element.description}</p>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function showElementTab(tabName) {
  document.querySelectorAll('.element-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.element-tab-content').forEach(content => content.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById('tab-' + tabName).classList.add('active');
}

// Compounds
function renderCompounds() {
  const filter = document.getElementById('compoundFilter').value;
  const container = document.getElementById('compoundsList');
  
  const filtered = filter === 'all' 
    ? chemistryData.compounds 
    : chemistryData.compounds.filter(c => c.type.includes(filter));
  
  let html = '';
  filtered.forEach((compound, idx) => {
    html += `
      <div class="compound-card" onclick="showCompoundDetails(${idx})">
        <div class="compound-name">${compound.name}</div>
        <div class="compound-formula">${compound.formula}</div>
        <span class="compound-type">${compound.type}</span>
        <div class="compound-description">${compound.description}</div>
      </div>
    `;
  });
  
  container.innerHTML = html || '<div class="empty-state">No compounds found</div>';
}

function showCompoundDetails(index) {
  const compound = chemistryData.compounds[index];
  if (!compound) return;
  
  const modal = document.getElementById('compoundModal');
  const details = document.getElementById('compoundDetails');
  
  details.innerHTML = `
    <h2>${compound.name}</h2>
    <div style="margin: 16px 0;">
      <div class="compound-formula" style="font-size: 24px;">${compound.formula}</div>
      <div style="color: var(--color-text-secondary); margin-top: 4px;">IUPAC: ${compound.iupac}</div>
    </div>
    
    <div class="element-detail-grid">
      <div class="detail-item">
        <div class="detail-label">Molecular Mass</div>
        <div class="detail-value">${compound.molecular_mass} g/mol</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Type</div>
        <div class="detail-value">${compound.type}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">State</div>
        <div class="detail-value">${compound.state}</div>
      </div>
      ${compound.melting_point ? `
      <div class="detail-item">
        <div class="detail-label">Melting Point</div>
        <div class="detail-value">${compound.melting_point}</div>
      </div>` : ''}
      ${compound.boiling_point ? `
      <div class="detail-item">
        <div class="detail-label">Boiling Point</div>
        <div class="detail-value">${compound.boiling_point}</div>
      </div>` : ''}
      ${compound.density ? `
      <div class="detail-item">
        <div class="detail-label">Density</div>
        <div class="detail-value">${compound.density}</div>
      </div>` : ''}
    </div>
    
    <div style="margin-top: 24px;">
      <strong>Description</strong>
      <p style="margin-top: 8px; color: var(--color-text-secondary);">${compound.description}</p>
    </div>
    
    <div style="margin-top: 16px;">
      <strong>Properties</strong>
      <p style="margin-top: 8px; color: var(--color-text-secondary);">${compound.properties}</p>
    </div>
    
    <div style="margin-top: 16px;">
      <strong>Uses</strong>
      <p style="margin-top: 8px; color: var(--color-text-secondary);">${compound.uses}</p>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Dictionary
function setupAlphabetNav() {
  const container = document.getElementById('alphabetNav');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  let html = '';
  alphabet.forEach(letter => {
    html += `<button class="alphabet-btn" onclick="filterByLetter('${letter}')">${letter}</button>`;
  });
  html += `<button class="alphabet-btn" onclick="renderDictionary()">All</button>`;
  
  container.innerHTML = html;
}

function filterByLetter(letter) {
  const filtered = chemistryData.terms.filter(t => t.term.startsWith(letter));
  renderTerms(filtered);
}

function renderDictionary() {
  renderTerms(chemistryData.terms);
}

function renderTerms(terms) {
  const container = document.getElementById('termsList');
  
  let html = '';
  terms.forEach(term => {
    html += `
      <div class="term-card">
        <div class="term-name">${term.term}</div>
        <span class="term-category">${term.category}</span>
        <div class="term-definition">${term.definition}</div>
        <div class="term-example"><strong>Example:</strong> ${term.example}</div>
      </div>
    `;
  });
  
  container.innerHTML = html || '<div class="empty-state">No terms found</div>';
}

// Reactions
function renderReactions() {
  const filter = document.getElementById('reactionFilter').value;
  const container = document.getElementById('reactionsList');
  
  const filtered = filter === 'all' 
    ? chemistryData.reactions 
    : chemistryData.reactions.filter(r => r.type.includes(filter));
  
  let html = '';
  filtered.forEach(reaction => {
    html += `
      <div class="reaction-card">
        <div class="reaction-name">${reaction.name}</div>
        <div class="reaction-equation">${reaction.equation}</div>
        <span class="reaction-type">${reaction.type}</span>
        <div class="compound-description">${reaction.description}</div>
        <div style="margin-top: 12px;">
          <strong style="font-size: 13px;">Energy:</strong> 
          <span style="color: var(--color-text-secondary); font-size: 13px;">${reaction.energy}</span>
        </div>
        <div style="margin-top: 8px;">
          <strong style="font-size: 13px;">Conditions:</strong> 
          <span style="color: var(--color-text-secondary); font-size: 13px;">${reaction.conditions}</span>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html || '<div class="empty-state">No reactions found</div>';
}

// Calculators
function openCalculator(tool) {
  const modal = document.getElementById('calculatorModal');
  const content = document.getElementById('calculatorContent');
  
  let html = '';
  
  switch(tool) {
    case 'molarMass':
      html = `
        <div class="calculator-form">
          <h3>⚖️ Molar Mass Calculator</h3>
          <div class="form-group">
            <label>Chemical Formula (e.g., H₂O, NaCl, C₆H₁₂O₆)</label>
            <input type="text" id="calcFormula" placeholder="Enter formula" />
          </div>
          <button class="btn" onclick="calculateMolarMass()">Calculate</button>
          <div id="calcResult"></div>
        </div>
      `;
      break;
    case 'ph':
      html = `
        <div class="calculator-form">
          <h3>📈 pH Calculator</h3>
          <div class="form-group">
            <label>Concentration (M)</label>
            <input type="number" id="concentration" placeholder="Enter concentration" step="0.001" />
          </div>
          <div class="form-group">
            <label>Type</label>
            <select id="acidBase" class="form-control">
              <option value="acid">Strong Acid</option>
              <option value="base">Strong Base</option>
            </select>
          </div>
          <button class="btn" onclick="calculatePH()">Calculate</button>
          <div id="calcResult"></div>
        </div>
      `;
      break;
    case 'dilution':
      html = `
        <div class="calculator-form">
          <h3>💧 Dilution Calculator (M₁V₁ = M₂V₂)</h3>
          <div class="form-group">
            <label>Initial Concentration (M₁)</label>
            <input type="number" id="m1" placeholder="M₁" step="0.01" />
          </div>
          <div class="form-group">
            <label>Initial Volume (V₁)</label>
            <input type="number" id="v1" placeholder="V₁" step="0.1" />
          </div>
          <div class="form-group">
            <label>Final Concentration (M₂)</label>
            <input type="number" id="m2" placeholder="M₂" step="0.01" />
          </div>
          <button class="btn" onclick="calculateDilution()">Calculate V₂</button>
          <div id="calcResult"></div>
        </div>
      `;
      break;
    case 'gasLaw':
      html = `
        <div class="calculator-form">
          <h3>🌡️ Gas Laws Calculator (PV = nRT)</h3>
          <p style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 16px;">R = 0.0821 L·atm/(mol·K)</p>
          <div class="form-group">
            <label>Pressure (atm)</label>
            <input type="number" id="pressure" placeholder="P" step="0.1" />
          </div>
          <div class="form-group">
            <label>Volume (L)</label>
            <input type="number" id="volume" placeholder="V" step="0.1" />
          </div>
          <div class="form-group">
            <label>Temperature (K)</label>
            <input type="number" id="temperature" placeholder="T" step="0.1" />
          </div>
          <button class="btn" onclick="calculateGasLaw()">Calculate Moles (n)</button>
          <div id="calcResult"></div>
        </div>
      `;
      break;
    case 'stoichiometry':
      html = `
        <div class="calculator-form">
          <h3>⚖️ Stoichiometry Calculator</h3>
          <p style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 16px;">Calculate mass relationships in chemical reactions</p>
          <div class="form-group">
            <label>Reactant 1 Moles</label>
            <input type="number" id="reactant1" placeholder="Moles of reactant 1" step="0.01" />
          </div>
          <div class="form-group">
            <label>Reactant 2 Moles</label>
            <input type="number" id="reactant2" placeholder="Moles of reactant 2" step="0.01" />
          </div>
          <div class="form-group">
            <label>Molar Ratio (1:x)</label>
            <input type="number" id="ratio" placeholder="Stoichiometric ratio" step="0.1" value="1" />
          </div>
          <button class="btn" onclick="calculateStoichiometry()">Find Limiting Reagent</button>
          <div id="calcResult"></div>
        </div>
      `;
      break;
    case 'equilibrium':
      html = `
        <div class="calculator-form">
          <h3>⚖️ Equilibrium Constant Calculator</h3>
          <p style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 16px;">Calculate equilibrium constant (K)</p>
          <div class="form-group">
            <label>[Products] (M)</label>
            <input type="number" id="products" placeholder="Product concentration" step="0.01" />
          </div>
          <div class="form-group">
            <label>[Reactants] (M)</label>
            <input type="number" id="reactants" placeholder="Reactant concentration" step="0.01" />
          </div>
          <div class="form-group">
            <label>Product Coefficient</label>
            <input type="number" id="prodCoeff" placeholder="Coefficient" step="1" value="1" />
          </div>
          <div class="form-group">
            <label>Reactant Coefficient</label>
            <input type="number" id="reactCoeff" placeholder="Coefficient" step="1" value="1" />
          </div>
          <button class="btn" onclick="calculateEquilibrium()">Calculate K</button>
          <div id="calcResult"></div>
        </div>
      `;
      break;
    case 'concentration':
      html = `
        <div class="calculator-form">
          <h3>🧪 Concentration Converter</h3>
          <div class="form-group">
            <label>Moles of solute</label>
            <input type="number" id="moles" placeholder="Moles" step="0.01" />
          </div>
          <div class="form-group">
            <label>Volume of solution (L)</label>
            <input type="number" id="volumeL" placeholder="Volume in liters" step="0.1" />
          </div>
          <button class="btn" onclick="calculateConcentration()">Calculate Molarity</button>
          <div id="calcResult"></div>
        </div>
      `;
      break;
    case 'balancer':
      html = `
        <div class="calculator-form">
          <h3>🔧 Chemical Equation Balancer</h3>
          <p style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 16px;">Balance simple chemical equations</p>
          <div class="form-group">
            <label>Common Equations (click to load)</label>
            <select id="presetEquations" class="form-control" onchange="loadPresetEquation()">
              <option value="">Select preset equation...</option>
              <option value="H2 + O2 = H2O">Combustion of Hydrogen</option>
              <option value="C3H8 + O2 = CO2 + H2O">Combustion of Propane</option>
              <option value="Fe + O2 = Fe2O3">Rusting of Iron</option>
              <option value="N2 + H2 = NH3">Haber Process</option>
              <option value="Ca + O2 = CaO">Calcium Oxidation</option>
            </select>
          </div>
          <div id="calcResult"></div>
          <div style="margin-top: 16px; padding: 16px; background: var(--color-background); border-radius: 8px; font-size: 13px; color: var(--color-text-secondary);">
            <strong>How to balance:</strong>
            <p style="margin-top: 8px; line-height: 1.6;">
            1. Count atoms of each element on both sides<br>
            2. Add coefficients to balance one element at a time<br>
            3. Check all elements are balanced<br>
            4. Ensure coefficients are in lowest whole number ratio
            </p>
          </div>
        </div>
      `;
      break;
  }
  
  content.innerHTML = html;
  modal.classList.remove('hidden');
}

function openSpectroscopyView() {
  showView('spectroscopy');
  renderSpectroscopy();
}

function renderSpectroscopy() {
  const container = document.getElementById('spectroscopyContent');
  
  let html = `
    <div class="property-section">
      <h3>IR Spectroscopy Reference</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Infrared absorption frequencies for common functional groups (cm⁻¹)</p>
      <table class="reference-table">
        <thead>
          <tr>
            <th>Wavenumber Range</th>
            <th>Functional Group</th>
            <th>Characteristics</th>
          </tr>
        </thead>
        <tbody>
  `;
  
  chemistryData.spectroscopy.ir_ranges.forEach(range => {
    html += `
      <tr>
        <td><strong>${range.range}</strong></td>
        <td>${range.group}</td>
        <td>${range.strength}</td>
      </tr>
    `;
  });
  
  html += `
        </tbody>
      </table>
    </div>
    
    <div class="property-section" style="margin-top: 32px;">
      <h3>NMR Spectroscopy Reference</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Chemical shift ranges for common functional groups (ppm)</p>
      <table class="reference-table">
        <thead>
          <tr>
            <th>Chemical Shift</th>
            <th>Type</th>
            <th>Assignment</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
  `;
  
  chemistryData.spectroscopy.nmr_ranges.forEach(range => {
    html += `
      <tr>
        <td><strong>δ ${range.shift}</strong></td>
        <td>${range.type}</td>
        <td>${range.group}</td>
        <td>${range.description}</td>
      </tr>
    `;
  });
  
  html += `
        </tbody>
      </table>
    </div>
  `;
  
  container.innerHTML = html;
}

function calculateMolarMass() {
  const formula = document.getElementById('calcFormula').value.trim();
  const result = document.getElementById('calcResult');
  
  if (!formula) {
    result.innerHTML = '<div style="color: var(--color-error); margin-top: 16px;">Please enter a formula</div>';
    return;
  }
  
  // Simplified calculation for common elements
  const masses = { H: 1.008, C: 12.011, O: 15.999, N: 14.007, S: 32.06, Cl: 35.45, Na: 22.990, Ca: 40.078, Fe: 55.845 };
  
  let totalMass = 0;
  let validFormula = true;
  
  // Simple parser for basic formulas
  const pattern = /([A-Z][a-z]?)(\d*)/g;
  let match;
  
  while ((match = pattern.exec(formula)) !== null) {
    const element = match[1];
    const count = match[2] ? parseInt(match[2]) : 1;
    
    if (masses[element]) {
      totalMass += masses[element] * count;
    } else {
      validFormula = false;
    }
  }
  
  if (validFormula && totalMass > 0) {
    result.innerHTML = `<div class="result-box">Molar Mass: ${totalMass.toFixed(3)} g/mol</div>`;
  } else {
    result.innerHTML = '<div style="color: var(--color-error); margin-top: 16px;">Invalid formula or unsupported element</div>';
  }
}

function calculatePH() {
  const concentration = parseFloat(document.getElementById('concentration').value);
  const type = document.getElementById('acidBase').value;
  const result = document.getElementById('calcResult');
  
  if (!concentration || concentration <= 0) {
    result.innerHTML = '<div style="color: var(--color-error); margin-top: 16px;">Please enter a valid concentration</div>';
    return;
  }
  
  let pH, pOH;
  
  if (type === 'acid') {
    pH = -Math.log10(concentration);
    pOH = 14 - pH;
  } else {
    pOH = -Math.log10(concentration);
    pH = 14 - pOH;
  }
  
  result.innerHTML = `
    <div class="result-box">
      pH = ${pH.toFixed(2)}<br>
      pOH = ${pOH.toFixed(2)}<br>
      <span style="font-size: 14px; opacity: 0.8;">[H⁺] = ${Math.pow(10, -pH).toExponential(2)} M</span>
    </div>
  `;
}

function calculateDilution() {
  const m1 = parseFloat(document.getElementById('m1').value);
  const v1 = parseFloat(document.getElementById('v1').value);
  const m2 = parseFloat(document.getElementById('m2').value);
  const result = document.getElementById('calcResult');
  
  if (!m1 || !v1 || !m2 || m1 <= 0 || v1 <= 0 || m2 <= 0) {
    result.innerHTML = '<div style="color: var(--color-error); margin-top: 16px;">Please enter valid values</div>';
    return;
  }
  
  const v2 = (m1 * v1) / m2;
  
  result.innerHTML = `
    <div class="result-box">
      V₂ = ${v2.toFixed(2)} L<br>
      <span style="font-size: 14px; opacity: 0.8;">Add ${(v2 - v1).toFixed(2)} L of solvent</span>
    </div>
  `;
}

function calculateGasLaw() {
  const P = parseFloat(document.getElementById('pressure').value);
  const V = parseFloat(document.getElementById('volume').value);
  const T = parseFloat(document.getElementById('temperature').value);
  const result = document.getElementById('calcResult');
  const R = 0.0821;
  
  if (!P || !V || !T || P <= 0 || V <= 0 || T <= 0) {
    result.innerHTML = '<div style="color: var(--color-error); margin-top: 16px;">Please enter valid values</div>';
    return;
  }
  
  const n = (P * V) / (R * T);
  
  result.innerHTML = `
    <div class="result-box">
      n = ${n.toFixed(3)} moles<br>
      <span style="font-size: 14px; opacity: 0.8;">Mass varies by substance</span>
    </div>
  `;
}

function calculateStoichiometry() {
  const r1 = parseFloat(document.getElementById('reactant1').value);
  const r2 = parseFloat(document.getElementById('reactant2').value);
  const ratio = parseFloat(document.getElementById('ratio').value);
  const result = document.getElementById('calcResult');
  
  if (!r1 || !r2 || !ratio || r1 <= 0 || r2 <= 0 || ratio <= 0) {
    result.innerHTML = '<div style="color: var(--color-error); margin-top: 16px;">Please enter valid values</div>';
    return;
  }
  
  const r1_needed = r2 / ratio;
  const limiting = r1 < r1_needed ? 'Reactant 1' : 'Reactant 2';
  const excess = limiting === 'Reactant 1' ? r2 - (r1 * ratio) : r1 - (r2 / ratio);
  
  result.innerHTML = `
    <div class="result-box">
      <strong>Limiting Reagent:</strong> ${limiting}<br>
      <strong>Excess Reagent:</strong> ${excess.toFixed(3)} moles remaining<br>
      <span style="font-size: 14px; opacity: 0.8; margin-top: 8px; display: block;">Product yield limited by ${limiting}</span>
    </div>
  `;
}

function calculateEquilibrium() {
  const products = parseFloat(document.getElementById('products').value);
  const reactants = parseFloat(document.getElementById('reactants').value);
  const prodCoeff = parseFloat(document.getElementById('prodCoeff').value);
  const reactCoeff = parseFloat(document.getElementById('reactCoeff').value);
  const result = document.getElementById('calcResult');
  
  if (!products || !reactants || !prodCoeff || !reactCoeff || products <= 0 || reactants <= 0) {
    result.innerHTML = '<div style="color: var(--color-error); margin-top: 16px;">Please enter valid values</div>';
    return;
  }
  
  const K = Math.pow(products, prodCoeff) / Math.pow(reactants, reactCoeff);
  let interpretation = '';
  
  if (K > 1) {
    interpretation = 'Products favored at equilibrium';
  } else if (K < 1) {
    interpretation = 'Reactants favored at equilibrium';
  } else {
    interpretation = 'Equal amounts of products and reactants';
  }
  
  result.innerHTML = `
    <div class="result-box">
      K = ${K.toExponential(3)}<br>
      <span style="font-size: 14px; opacity: 0.8; margin-top: 8px; display: block;">${interpretation}</span>
    </div>
  `;
}

function calculateConcentration() {
  const moles = parseFloat(document.getElementById('moles').value);
  const volume = parseFloat(document.getElementById('volumeL').value);
  const result = document.getElementById('calcResult');
  
  if (!moles || !volume || moles <= 0 || volume <= 0) {
    result.innerHTML = '<div style="color: var(--color-error); margin-top: 16px;">Please enter valid values</div>';
    return;
  }
  
  const molarity = moles / volume;
  const millimolar = molarity * 1000;
  
  result.innerHTML = `
    <div class="result-box">
      Molarity (M) = ${molarity.toFixed(4)} mol/L<br>
      Millimolar (mM) = ${millimolar.toFixed(2)} mmol/L<br>
      <span style="font-size: 14px; opacity: 0.8; margin-top: 8px; display: block;">Concentration calculated</span>
    </div>
  `;
}

function loadPresetEquation() {
  const select = document.getElementById('presetEquations');
  const equation = select.value;
  const result = document.getElementById('calcResult');
  
  if (!equation) {
    result.innerHTML = '';
    return;
  }
  
  const balanced = {
    'H2 + O2 = H2O': '2H₂ + O₂ → 2H₂O',
    'C3H8 + O2 = CO2 + H2O': 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
    'Fe + O2 = Fe2O3': '4Fe + 3O₂ → 2Fe₂O₃',
    'N2 + H2 = NH3': 'N₂ + 3H₂ → 2NH₃',
    'Ca + O2 = CaO': '2Ca + O₂ → 2CaO'
  };
  
  result.innerHTML = `
    <div style="margin-top: 16px; padding: 16px; background: var(--color-background); border-radius: 8px;">
      <strong>Unbalanced:</strong>
      <div style="font-size: 18px; color: var(--color-text-secondary); margin: 12px 0;">${equation}</div>
      <strong style="color: var(--color-primary);">Balanced:</strong>
      <div class="result-box" style="margin-top: 8px;">${balanced[equation] || 'Not available'}</div>
      <div style="margin-top: 12px; font-size: 13px; color: var(--color-text-secondary);">
        <strong>Step-by-step:</strong><br>
        1. Count atoms on each side<br>
        2. Balance one element at a time<br>
        3. Adjust coefficients to achieve balance<br>
        4. Verify all elements are balanced
      </div>
    </div>
  `;
}

// Reference Tables
function renderReferenceTable(tab) {
  const container = document.getElementById('referenceContent');
  let html = '';
  
  switch(tab) {
    case 'ions':
      html = `
        <h3 style="margin-bottom: 16px;">Cations (Positive Ions)</h3>
        <table class="reference-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Charge</th>
            </tr>
          </thead>
          <tbody>
            ${chemistryData.ions.cations.map(ion => `
              <tr>
                <td><strong>${ion.symbol}</strong></td>
                <td>${ion.name}</td>
                <td>${ion.charge}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <h3 style="margin: 24px 0 16px;">Anions (Negative Ions)</h3>
        <table class="reference-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Charge</th>
            </tr>
          </thead>
          <tbody>
            ${chemistryData.ions.anions.map(ion => `
              <tr>
                <td><strong>${ion.symbol}</strong></td>
                <td>${ion.name}</td>
                <td>${ion.charge}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      break;
    case 'acids':
      html = `
        <h3 style="margin-bottom: 16px;">Strong Acids</h3>
        <table class="reference-table">
          <thead>
            <tr>
              <th>Formula</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            ${chemistryData.strongAcids.map(acid => `
              <tr>
                <td><strong>${acid.formula}</strong></td>
                <td>${acid.name}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      break;
    case 'bases':
      html = `
        <h3 style="margin-bottom: 16px;">Strong Bases</h3>
        <table class="reference-table">
          <thead>
            <tr>
              <th>Formula</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            ${chemistryData.strongBases.map(base => `
              <tr>
                <td><strong>${base.formula}</strong></td>
                <td>${base.name}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      break;
    case 'functional':
      html = chemistryData.functionalGroups.map(group => `
        <div class="functional-group-item">
          <h4>${group.name}</h4>
          <div class="functional-group-formula">${group.formula}</div>
          <p style="color: var(--color-text-secondary); margin-bottom: 8px;">${group.description}</p>
          <p style="font-size: 13px; color: var(--color-text-secondary);"><strong>Example:</strong> ${group.example}</p>
        </div>
      `).join('');
      break;
  }
  
  container.innerHTML = html;
}

// Favorites
function renderFavorites() {
  const container = document.getElementById('favoritesList');
  
  if (favorites.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⭐</div>
        <h3>No favorites yet</h3>
        <p>Start adding elements, compounds, or terms to your favorites!</p>
      </div>
    `;
    return;
  }
  
  // Render favorites (simplified for now)
  container.innerHTML = '<p>Favorites feature coming soon!</p>';
}

// Enhanced view rendering
function renderViewContent(viewName) {
  switch(viewName) {
    case 'spectroscopy':
      renderSpectroscopy();
      break;
    case 'safety':
      renderSafetyData();
      break;
    case 'biochem':
      // Already rendered in HTML
      break;
  }
}

function renderSafetyData() {
  const ghsGrid = document.getElementById('ghsGrid');
  if (!ghsGrid) return;
  
  let html = '';
  const icons = {
    'GHS01': '💥',
    'GHS02': '🔥',
    'GHS03': '⭕',
    'GHS04': '💨',
    'GHS05': '⚡',
    'GHS06': '☠️',
    'GHS07': '⚠️',
    'GHS08': '❤️',
    'GHS09': '🌍'
  };
  
  chemistryData.safetyData.ghs_pictograms.forEach(pictogram => {
    html += `
      <div class="ghs-card">
        <div class="ghs-icon">${icons[pictogram.code] || '⚠️'}</div>
        <div class="ghs-code">${pictogram.code}</div>
        <div class="ghs-name">${pictogram.name}</div>
        <div class="ghs-description">${pictogram.description}</div>
      </div>
    `;
  });
  
  ghsGrid.innerHTML = html;
}

// Override showView to add rendering
const originalShowView = showView;
showView = function(viewName) {
  // Call original showView
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  
  const viewMap = {
    'home': 'homeView',
    'periodicTable': 'periodicTableView',
    'compounds': 'compoundsView',
    'dictionary': 'dictionaryView',
    'reactions': 'reactionsView',
    'tools': 'toolsView',
    'reference': 'referenceView',
    'spectroscopy': 'spectroscopyView',
    'safety': 'safetyView',
    'biochem': 'biochemView',
    'favorites': 'favoritesView',
    'more': 'moreView'
  };
  
  const viewId = viewMap[viewName];
  if (viewId) {
    document.getElementById(viewId).classList.add('active');
    currentView = viewName;
    
    // Render content for specific views
    if (viewName === 'compounds') renderCompounds();
    if (viewName === 'dictionary') renderDictionary();
    if (viewName === 'reactions') renderReactions();
    if (viewName === 'reference') renderReferenceTable('ions');
    if (viewName === 'spectroscopy') renderSpectroscopy();
    if (viewName === 'safety') renderSafetyData();
    if (viewName === 'favorites') renderFavorites();
  }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}