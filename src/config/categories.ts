export const categories = {
  'retro-games': {
    slug: 'retro-games',
    title: 'Retro Games',
    description: `
This category is a space where I revisit older games and write down
what it actually feels like to play them again today.

Some moments feel familiar, others are surprisingly confusing,
and many mechanics were never clearly explained back then.
These posts are not complete guides or historical breakdowns,
but personal play notes meant for players who might be feeling
stuck, lost, or simply curious while playing the same games.
    `.trim(),
  },

  'retro-style-indie-games': {
    slug: 'retro-style-indie-games',
    title: 'Retro-Style Indie Games',
    description: `
This category collects writing based on playing modern indie games
that draw inspiration from older eras.

The focus is not on judging how retro a game truly is,
but on the experience of playing it, learning its systems,
getting lost, and slowly forming personal thoughts along the way.
These articles are shaped by real play sessions rather than fixed opinions,
formal reviews, or genre definitions.
    `.trim(),
  },
} as const;

export type CategoryKey = keyof typeof categories;
