export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "signs-brownstone-needs-brick-pointing",
    title: "Signs Your Brownstone Needs Brick Pointing",
    excerpt:
      "Mortar is supposed to wear out before the brick does. Here's how to tell when your joints have stopped doing their job — and what waiting costs you.",
    date: "October 12, 2026",
    readTime: "4 min read",
    img: "/img/wall-crack.jpg",
    body: [
      "Every brownstone owner in Brooklyn eventually faces the same question: is that mortar just ugly, or is it a problem? Mortar joints are the sacrificial layer of your facade — they're designed to wear out over 25–30 years so your brick doesn't have to. When they go too long, water gets behind the brick, and a pointing job quietly becomes a brick-replacement job.",
      "Sign one: recessed joints. Run a finger along a mortar joint. If the mortar sits more than about a quarter-inch behind the face of the brick — or crumbles and feels sandy when you press it — it's done. Sound mortar is hard and sits nearly flush.",
      "Sign two: bricks are starting to suffer. Cracked, flaking, or rounded brick faces (that's called spalling) mean water is entering the brick itself and freezing inside it. Pointing protects brick; once the brick is spalling, those units need replacement too.",
      "Sign three: water inside. Stains on interior plaster near exterior walls, peeling paint that keeps coming back, or white powdery efflorescence on the brick all point to water traveling through failed joints.",
      "Sign four: daylight and daylight's cousin — plants. Mortar missing deeply enough that you can see into the joint, or weeds sprouting from the wall, means the joint is open, not just worn.",
      "One warning that saves people real money: the fix has to match the building. Repointing a soft, old brick facade with modern high-strength mortar is a classic expensive mistake — the hard mortar traps moisture and the brick faces blow off within a few winters. The mortar should always be softer than the brick.",
      "If you're seeing two or more of these signs, get the facade looked at before winter. Freeze-thaw cycles are what turn worn joints into damaged brick, and pointing in fall is a lot cheaper than pointing plus brick replacement in spring. Estimates are free — we'd rather tell you 'you've got a few years left' than sell you work you don't need yet.",
    ],
  },
  {
    slug: "basement-waterproofing-nyc-homeowners-miss",
    title: "Basement Waterproofing: What NYC Homeowners Miss",
    excerpt:
      "Most wet basements aren't mysteries — they're one entry point nobody found. The four things homeowners (and plenty of contractors) overlook.",
    date: "September 28, 2026",
    readTime: "4 min read",
    img: "/img/basement-before.jpg",
    body: [
      "Ask a Brooklyn homeowner about their wet basement and you'll usually hear the same story: they painted it with sealer, it helped for a season, and the water came back. That's because most basement water problems are misdiagnosed, not unsolvable. Here's what actually gets missed.",
      "Miss one: the water's entry point. Water in the basement is a symptom. The cause is specific — a foundation crack, the joint where the floor meets the wall (the cove joint), a failed exterior membrane, or groundwater pushing up under pressure. Each one has a different correct fix, and treating the wrong one wastes the whole job.",
      "Miss two: the outside of the house. Gutters dumping next to the foundation, soil graded toward the house, and a neighbor's concrete pitched your way can send thousands of gallons at your foundation every storm. Sometimes the most effective waterproofing is a downspout extension and a regrade — not a system at all.",
      "Miss three: sealer paint is not waterproofing. Interior coatings can slow vapor and hide stains, but they don't stop water under pressure, and they peel as the pressure builds behind them. Real waterproofing means a membrane system, drainage, or both — matched to where the water enters.",
      "Miss four: finishing first. The most expensive version of this mistake is a beautiful finished basement built over an active leak. Within a couple of seasons there's mold behind the drywall and the whole thing comes back out. Waterproof first, finish second — always in that order.",
      "The good news: a proper diagnosis is quick. We trace the water to its entry point, show you exactly where it comes in, and price the fix for that problem — not a generic package. If your basement smells musty after rain or you've got stains climbing the walls, that's your sign to find the entry point before the next storm does the testing for you.",
    ],
  },
  {
    slug: "concrete-steps-vs-stone-steps-ny-winters",
    title: "Concrete Steps vs. Stone Steps: Which Lasts Longer in NY Winters?",
    excerpt:
      "Salt, freeze-thaw, and a hundred freeze cycles a year make New York brutal on front steps. Here's the honest comparison we give homeowners at the curb.",
    date: "September 10, 2026",
    readTime: "4 min read",
    img: "/img/steps-before.jpg",
    body: [
      "Front steps in New York live a hard life: dozens of freeze-thaw cycles a winter, road salt tracked onto every tread, and meltwater that ponds and refreezes nightly. When a Brooklyn stoop finally crumbles, the replacement question is always the same — concrete or stone? Here's the honest breakdown.",
      "Concrete, done right: A properly built concrete stoop — excavated to a solid base, reinforced, poured at the right thickness, and pitched so water sheds — lasts 25–40 years. It costs significantly less than stone, matches most row-house facades, and can be tinted or finished to look sharp. Where concrete fails early, it's almost never the material: it's a thin pour over a bad base, or patch jobs layered over failing concrete.",
      "Stone, done right: Bluestone and granite treads are the traditional Brooklyn choice, and for good reason — dense natural stone handles freeze-thaw and salt better than almost anything, and a well-set stone stoop can outlast the mortar joints around it by generations. The tradeoff is cost: material and setting labor typically run well above concrete, and repairs mean resetting individual treads.",
      "The winter factor both ways: the real enemy isn't cold, it's water sitting where it shouldn't. Steps pitched even slightly toward the house, joints left open, and aggressive rock salt will shorten the life of either material. Calcium chloride melts ice with far less damage than rock salt, whichever steps you choose.",
      "So which should you pick? If the budget is real and the house is a classic concrete-stoop row house, a properly built concrete rebuild is the smart money — decades of life at a fraction of the cost. If it's a brownstone with stone detailing, or you want the stoop to be a feature of the facade for the next fifty years, stone earns its price.",
      "What we'd avoid: patching crumbling steps one more time. Once treads rock or the base moves, patches last a season or two and the money is gone. Come look at your actual steps with us — repair vs. rebuild is a judgment call we make standing at your curb, and the estimate is free either way.",
    ],
  },
];
