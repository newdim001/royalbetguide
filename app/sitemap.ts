import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://royalbetguide.com";
  return [
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/best-crypto-casinos`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/best-live-dealer`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/best-mobile-casinos`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/best-sportsbooks`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/best-welcome-bonuses`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-bitcoin-casinos-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/crypto-gambling-guide`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/highest-rtp-slots-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-choose-casino`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/low-deposit-casinos-uk`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/non-gamstop-casinos-uk`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/online-casino-beginners-guide`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/online-casino-tips-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/paypal-casinos-uk`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/us-sports-betting-guide-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bonus`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/bonus`,
          de: `${baseUrl}/de/bonus`,
          fr: `${baseUrl}/fr/bonus`,
          es: `${baseUrl}/es/bonus`,
          it: `${baseUrl}/it/bonus`,
        },
      },
    },
    {
      url: `${baseUrl}/bonus/crypto-bonuses`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bonus/free-spins`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bonus/no-deposit`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bonus/welcome-bonuses`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare/7bit-katsubet-mirax`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/compare/7bit-katsubet-mirax`,
          de: `${baseUrl}/de/compare/7bit-katsubet-mirax`,
          fr: `${baseUrl}/fr/compare/7bit-katsubet-mirax`,
          es: `${baseUrl}/es/compare/7bit-katsubet-mirax`,
          it: `${baseUrl}/it/compare/7bit-katsubet-mirax`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/de`,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          de: `${baseUrl}/de`,
          fr: `${baseUrl}/fr`,
          es: `${baseUrl}/es`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/de/blog/beste-bitcoin-casinos-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/blog/einsteiger-casino-guide`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/blog/hoechste-rtp-slots-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/bonus`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/bonus`,
          de: `${baseUrl}/de/bonus`,
          fr: `${baseUrl}/fr/bonus`,
          es: `${baseUrl}/es/bonus`,
          it: `${baseUrl}/it/bonus`,
        },
      },
    },
    {
      url: `${baseUrl}/de/bonus/7bit-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/7bit-casino`,
          fr: `${baseUrl}/fr/bonus/7bit-casino`,
          es: `${baseUrl}/es/bonus/7bit-casino`,
          it: `${baseUrl}/it/bonus/7bit-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/de/bonus/katsubet`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/katsubet`,
          fr: `${baseUrl}/fr/bonus/katsubet`,
          es: `${baseUrl}/es/bonus/katsubet`,
          it: `${baseUrl}/it/bonus/katsubet`,
        },
      },
    },
    {
      url: `${baseUrl}/de/bonus/mirax-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/mirax-casino`,
          fr: `${baseUrl}/fr/bonus/mirax-casino`,
          es: `${baseUrl}/es/bonus/mirax-casino`,
          it: `${baseUrl}/it/bonus/mirax-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/de/compare/7bit-katsubet-mirax`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/compare/7bit-katsubet-mirax`,
          de: `${baseUrl}/de/compare/7bit-katsubet-mirax`,
          fr: `${baseUrl}/fr/compare/7bit-katsubet-mirax`,
          es: `${baseUrl}/es/compare/7bit-katsubet-mirax`,
          it: `${baseUrl}/it/compare/7bit-katsubet-mirax`,
        },
      },
    },
    {
      url: `${baseUrl}/de/games/evolution-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/evolution-casinos`,
          de: `${baseUrl}/de/games/evolution-casinos`,
          fr: `${baseUrl}/fr/games/evolution-casinos`,
          es: `${baseUrl}/es/games/evolution-casinos`,
          it: `${baseUrl}/it/games/evolution-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/de/games/slots`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/slots`,
          de: `${baseUrl}/de/games/slots`,
          fr: `${baseUrl}/fr/games/slots`,
          es: `${baseUrl}/es/games/slots`,
          it: `${baseUrl}/it/games/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/de/guides`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides`,
          de: `${baseUrl}/de/guides`,
          fr: `${baseUrl}/fr/guides`,
          es: `${baseUrl}/es/guides`,
          it: `${baseUrl}/it/guides`,
        },
      },
    },
    {
      url: `${baseUrl}/de/guides/blackjack`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/blackjack`,
          de: `${baseUrl}/de/guides/blackjack`,
          fr: `${baseUrl}/fr/guides/blackjack`,
          es: `${baseUrl}/es/guides/blackjack`,
          it: `${baseUrl}/it/guides/blackjack`,
        },
      },
    },
    {
      url: `${baseUrl}/de/guides/roulette`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/roulette`,
          de: `${baseUrl}/de/guides/roulette`,
          fr: `${baseUrl}/fr/guides/roulette`,
          es: `${baseUrl}/es/guides/roulette`,
          it: `${baseUrl}/it/guides/roulette`,
        },
      },
    },
    {
      url: `${baseUrl}/de/news/krypto-regulierung-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/news/online-gluecksspiel-trends-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/reviews`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/reviews`,
          de: `${baseUrl}/de/reviews`,
          fr: `${baseUrl}/fr/reviews`,
          es: `${baseUrl}/es/reviews`,
          it: `${baseUrl}/it/reviews`,
        },
      },
    },
    {
      url: `${baseUrl}/de/reviews/7bit-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/7bit-casino`,
          fr: `${baseUrl}/fr/reviews/7bit-casino`,
          es: `${baseUrl}/es/reviews/7bit-casino`,
          it: `${baseUrl}/it/reviews/7bit-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/de/reviews/katsubet`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/katsubet`,
          fr: `${baseUrl}/fr/reviews/katsubet`,
          es: `${baseUrl}/es/reviews/katsubet`,
          it: `${baseUrl}/it/reviews/katsubet`,
        },
      },
    },
    {
      url: `${baseUrl}/de/reviews/mirax-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/mirax-casino`,
          fr: `${baseUrl}/fr/reviews/mirax-casino`,
          es: `${baseUrl}/es/reviews/mirax-casino`,
          it: `${baseUrl}/it/reviews/mirax-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          de: `${baseUrl}/de`,
          fr: `${baseUrl}/fr`,
          es: `${baseUrl}/es`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/es/blog/guia-casino-principiantes`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es/blog/mejores-casinos-bitcoin-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es/blog/mejores-rtp-slots-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es/bonus`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/bonus`,
          de: `${baseUrl}/de/bonus`,
          fr: `${baseUrl}/fr/bonus`,
          es: `${baseUrl}/es/bonus`,
          it: `${baseUrl}/it/bonus`,
        },
      },
    },
    {
      url: `${baseUrl}/es/bonus/7bit-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/7bit-casino`,
          fr: `${baseUrl}/fr/bonus/7bit-casino`,
          es: `${baseUrl}/es/bonus/7bit-casino`,
          it: `${baseUrl}/it/bonus/7bit-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/es/bonus/katsubet`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/katsubet`,
          fr: `${baseUrl}/fr/bonus/katsubet`,
          es: `${baseUrl}/es/bonus/katsubet`,
          it: `${baseUrl}/it/bonus/katsubet`,
        },
      },
    },
    {
      url: `${baseUrl}/es/bonus/mirax-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/mirax-casino`,
          fr: `${baseUrl}/fr/bonus/mirax-casino`,
          es: `${baseUrl}/es/bonus/mirax-casino`,
          it: `${baseUrl}/it/bonus/mirax-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/es/compare/7bit-katsubet-mirax`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/compare/7bit-katsubet-mirax`,
          de: `${baseUrl}/de/compare/7bit-katsubet-mirax`,
          fr: `${baseUrl}/fr/compare/7bit-katsubet-mirax`,
          es: `${baseUrl}/es/compare/7bit-katsubet-mirax`,
          it: `${baseUrl}/it/compare/7bit-katsubet-mirax`,
        },
      },
    },
    {
      url: `${baseUrl}/es/games/evolution-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/evolution-casinos`,
          de: `${baseUrl}/de/games/evolution-casinos`,
          fr: `${baseUrl}/fr/games/evolution-casinos`,
          es: `${baseUrl}/es/games/evolution-casinos`,
          it: `${baseUrl}/it/games/evolution-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/es/games/pragmatic-play-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/pragmatic-play-casinos`,
          fr: `${baseUrl}/fr/games/pragmatic-play-casinos`,
          es: `${baseUrl}/es/games/pragmatic-play-casinos`,
          it: `${baseUrl}/it/games/pragmatic-play-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/es/games/slots`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/slots`,
          de: `${baseUrl}/de/games/slots`,
          fr: `${baseUrl}/fr/games/slots`,
          es: `${baseUrl}/es/games/slots`,
          it: `${baseUrl}/it/games/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/es/guides`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides`,
          de: `${baseUrl}/de/guides`,
          fr: `${baseUrl}/fr/guides`,
          es: `${baseUrl}/es/guides`,
          it: `${baseUrl}/it/guides`,
        },
      },
    },
    {
      url: `${baseUrl}/es/guides/blackjack`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/blackjack`,
          de: `${baseUrl}/de/guides/blackjack`,
          fr: `${baseUrl}/fr/guides/blackjack`,
          es: `${baseUrl}/es/guides/blackjack`,
          it: `${baseUrl}/it/guides/blackjack`,
        },
      },
    },
    {
      url: `${baseUrl}/es/guides/roulette`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/roulette`,
          de: `${baseUrl}/de/guides/roulette`,
          fr: `${baseUrl}/fr/guides/roulette`,
          es: `${baseUrl}/es/guides/roulette`,
          it: `${baseUrl}/it/guides/roulette`,
        },
      },
    },
    {
      url: `${baseUrl}/es/guides/slots`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/slots`,
          fr: `${baseUrl}/fr/guides/slots`,
          es: `${baseUrl}/es/guides/slots`,
          it: `${baseUrl}/it/guides/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/es/news/regulacion-cripto-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es/news/tendencias-juego-online-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es/reviews`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/reviews`,
          de: `${baseUrl}/de/reviews`,
          fr: `${baseUrl}/fr/reviews`,
          es: `${baseUrl}/es/reviews`,
          it: `${baseUrl}/it/reviews`,
        },
      },
    },
    {
      url: `${baseUrl}/es/reviews/7bit-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/7bit-casino`,
          fr: `${baseUrl}/fr/reviews/7bit-casino`,
          es: `${baseUrl}/es/reviews/7bit-casino`,
          it: `${baseUrl}/it/reviews/7bit-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/es/reviews/katsubet`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/katsubet`,
          fr: `${baseUrl}/fr/reviews/katsubet`,
          es: `${baseUrl}/es/reviews/katsubet`,
          it: `${baseUrl}/it/reviews/katsubet`,
        },
      },
    },
    {
      url: `${baseUrl}/es/reviews/mirax-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/mirax-casino`,
          fr: `${baseUrl}/fr/reviews/mirax-casino`,
          es: `${baseUrl}/es/reviews/mirax-casino`,
          it: `${baseUrl}/it/reviews/mirax-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/features`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/fr`,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          de: `${baseUrl}/de`,
          fr: `${baseUrl}/fr`,
          es: `${baseUrl}/es`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/blog/guide-casino-debutants`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/blog/meilleurs-casinos-bitcoin-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/blog/meilleurs-taux-rtp-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/bonus`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/bonus`,
          de: `${baseUrl}/de/bonus`,
          fr: `${baseUrl}/fr/bonus`,
          es: `${baseUrl}/es/bonus`,
          it: `${baseUrl}/it/bonus`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/bonus/7bit-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/7bit-casino`,
          fr: `${baseUrl}/fr/bonus/7bit-casino`,
          es: `${baseUrl}/es/bonus/7bit-casino`,
          it: `${baseUrl}/it/bonus/7bit-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/bonus/katsubet`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/katsubet`,
          fr: `${baseUrl}/fr/bonus/katsubet`,
          es: `${baseUrl}/es/bonus/katsubet`,
          it: `${baseUrl}/it/bonus/katsubet`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/bonus/mirax-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/mirax-casino`,
          fr: `${baseUrl}/fr/bonus/mirax-casino`,
          es: `${baseUrl}/es/bonus/mirax-casino`,
          it: `${baseUrl}/it/bonus/mirax-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/compare/7bit-katsubet-mirax`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/compare/7bit-katsubet-mirax`,
          de: `${baseUrl}/de/compare/7bit-katsubet-mirax`,
          fr: `${baseUrl}/fr/compare/7bit-katsubet-mirax`,
          es: `${baseUrl}/es/compare/7bit-katsubet-mirax`,
          it: `${baseUrl}/it/compare/7bit-katsubet-mirax`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/games/evolution-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/evolution-casinos`,
          de: `${baseUrl}/de/games/evolution-casinos`,
          fr: `${baseUrl}/fr/games/evolution-casinos`,
          es: `${baseUrl}/es/games/evolution-casinos`,
          it: `${baseUrl}/it/games/evolution-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/games/netent-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/netent-casinos`,
          fr: `${baseUrl}/fr/games/netent-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/games/pragmatic-play-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/pragmatic-play-casinos`,
          fr: `${baseUrl}/fr/games/pragmatic-play-casinos`,
          es: `${baseUrl}/es/games/pragmatic-play-casinos`,
          it: `${baseUrl}/it/games/pragmatic-play-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/games/slots`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/slots`,
          de: `${baseUrl}/de/games/slots`,
          fr: `${baseUrl}/fr/games/slots`,
          es: `${baseUrl}/es/games/slots`,
          it: `${baseUrl}/it/games/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/guides`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides`,
          de: `${baseUrl}/de/guides`,
          fr: `${baseUrl}/fr/guides`,
          es: `${baseUrl}/es/guides`,
          it: `${baseUrl}/it/guides`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/guides/blackjack`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/blackjack`,
          de: `${baseUrl}/de/guides/blackjack`,
          fr: `${baseUrl}/fr/guides/blackjack`,
          es: `${baseUrl}/es/guides/blackjack`,
          it: `${baseUrl}/it/guides/blackjack`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/guides/roulette`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/roulette`,
          de: `${baseUrl}/de/guides/roulette`,
          fr: `${baseUrl}/fr/guides/roulette`,
          es: `${baseUrl}/es/guides/roulette`,
          it: `${baseUrl}/it/guides/roulette`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/guides/slots`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/slots`,
          fr: `${baseUrl}/fr/guides/slots`,
          es: `${baseUrl}/es/guides/slots`,
          it: `${baseUrl}/it/guides/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/news/reglementation-crypto-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/news/tendances-jeux-en-ligne-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/reviews`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/reviews`,
          de: `${baseUrl}/de/reviews`,
          fr: `${baseUrl}/fr/reviews`,
          es: `${baseUrl}/es/reviews`,
          it: `${baseUrl}/it/reviews`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/reviews/7bit-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/7bit-casino`,
          fr: `${baseUrl}/fr/reviews/7bit-casino`,
          es: `${baseUrl}/es/reviews/7bit-casino`,
          it: `${baseUrl}/it/reviews/7bit-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/reviews/katsubet`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/katsubet`,
          fr: `${baseUrl}/fr/reviews/katsubet`,
          es: `${baseUrl}/es/reviews/katsubet`,
          it: `${baseUrl}/it/reviews/katsubet`,
        },
      },
    },
    {
      url: `${baseUrl}/fr/reviews/mirax-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/mirax-casino`,
          fr: `${baseUrl}/fr/reviews/mirax-casino`,
          es: `${baseUrl}/es/reviews/mirax-casino`,
          it: `${baseUrl}/it/reviews/mirax-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/free-slots`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/betsoft-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/bgaming-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/crypto-games`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/eu-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/evolution-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/evolution-casinos`,
          de: `${baseUrl}/de/games/evolution-casinos`,
          fr: `${baseUrl}/fr/games/evolution-casinos`,
          es: `${baseUrl}/es/games/evolution-casinos`,
          it: `${baseUrl}/it/games/evolution-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/games/free`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/hacksaw-gaming-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/igt-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/live-casino`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/live-dealer-baccarat`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/live-dealer-blackjack`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/live-dealer-roulette`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/microgaming-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/mobile-games`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/netent-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/netent-casinos`,
          fr: `${baseUrl}/fr/games/netent-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/games/nolimit-city-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/playn-go-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/playtech-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/pragmatic-play-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/pragmatic-play-casinos`,
          fr: `${baseUrl}/fr/games/pragmatic-play-casinos`,
          es: `${baseUrl}/es/games/pragmatic-play-casinos`,
          it: `${baseUrl}/it/games/pragmatic-play-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/games/progressive-jackpots`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/slots`,
          de: `${baseUrl}/de/games/slots`,
          fr: `${baseUrl}/fr/games/slots`,
          es: `${baseUrl}/es/games/slots`,
          it: `${baseUrl}/it/games/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/games/slots/5-dragons`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/7-pigs`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/888-dragons`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/beast-of-wealth`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/big-bass-bonanza`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/big-bass-bonanza-megaways`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/big-bass-splash`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/bison-x`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/book-of-dead`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/book-of-golden-sands`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/buffalo-king`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/caishang-cash-pots`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/chilli-heat`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/curse-of-the-werewolf`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/dead-or-alive-2`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/demon-pots`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/dog-house-megaways`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/dragon-tiger`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/fire-strike`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/fortune-pots`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/fruit-party`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/ganesh-fortune`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/gates-of-olympus`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/gates-of-tartarus`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/golden-tale`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/gonzos-quest`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/heist-stake`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/john-hunter`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/joker-jewels`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/leprechaun-song`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/madame-destiny`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/mega-moolah`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/muertos-multiplier`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/night-of-the-living-tread`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/panda-fortune`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/pirate-silver`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/pirates-pots`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/power-of-minotaurus`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/power-of-torii`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/razor-returns`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/ring-of-odins-wild`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/rise-of-samurai`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/rise-of-samurai-4`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/snake-eye`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/starburst`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/starlight-princess`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/sugar-crush`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/super-joker`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/sweet-bonanza`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/the-bone-riders`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/the-dog-house`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/the-greatest-catch`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/ultra-burn`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/wild-ape`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/wild-west-gold`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/slots/wolf-gold`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/table-games`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games/yggdrasil-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guides`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides`,
          de: `${baseUrl}/de/guides`,
          fr: `${baseUrl}/fr/guides`,
          es: `${baseUrl}/es/guides`,
          it: `${baseUrl}/it/guides`,
        },
      },
    },
    {
      url: `${baseUrl}/guides/baccarat`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/baccarat/how-to-play`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/blackjack`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/blackjack`,
          de: `${baseUrl}/de/guides/blackjack`,
          fr: `${baseUrl}/fr/guides/blackjack`,
          es: `${baseUrl}/es/guides/blackjack`,
          it: `${baseUrl}/it/guides/blackjack`,
        },
      },
    },
    {
      url: `${baseUrl}/guides/blackjack/card-counting`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/blackjack/how-to-play`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/blackjack/strategy`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/blackjack/tips`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/craps`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/craps/how-to-play`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/live-dealer`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/poker`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/poker/how-to-play`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/roulette`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/roulette`,
          de: `${baseUrl}/de/guides/roulette`,
          fr: `${baseUrl}/fr/guides/roulette`,
          es: `${baseUrl}/es/guides/roulette`,
          it: `${baseUrl}/it/guides/roulette`,
        },
      },
    },
    {
      url: `${baseUrl}/guides/roulette/how-to-play`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/roulette/strategy`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/slots`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/slots`,
          fr: `${baseUrl}/fr/guides/slots`,
          es: `${baseUrl}/es/guides/slots`,
          it: `${baseUrl}/it/guides/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/guides/video-poker`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it`,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          de: `${baseUrl}/de`,
          fr: `${baseUrl}/fr`,
          es: `${baseUrl}/es`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/it/blog/guida-casino-principianti`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it/blog/migliori-casino-bitcoin-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it/blog/migliori-rtp-slot-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it/bonus`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/bonus`,
          de: `${baseUrl}/de/bonus`,
          fr: `${baseUrl}/fr/bonus`,
          es: `${baseUrl}/es/bonus`,
          it: `${baseUrl}/it/bonus`,
        },
      },
    },
    {
      url: `${baseUrl}/it/bonus/7bit-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/7bit-casino`,
          fr: `${baseUrl}/fr/bonus/7bit-casino`,
          es: `${baseUrl}/es/bonus/7bit-casino`,
          it: `${baseUrl}/it/bonus/7bit-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/it/bonus/katsubet`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/katsubet`,
          fr: `${baseUrl}/fr/bonus/katsubet`,
          es: `${baseUrl}/es/bonus/katsubet`,
          it: `${baseUrl}/it/bonus/katsubet`,
        },
      },
    },
    {
      url: `${baseUrl}/it/bonus/mirax-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/bonus/mirax-casino`,
          fr: `${baseUrl}/fr/bonus/mirax-casino`,
          es: `${baseUrl}/es/bonus/mirax-casino`,
          it: `${baseUrl}/it/bonus/mirax-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/it/compare/7bit-katsubet-mirax`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/compare/7bit-katsubet-mirax`,
          de: `${baseUrl}/de/compare/7bit-katsubet-mirax`,
          fr: `${baseUrl}/fr/compare/7bit-katsubet-mirax`,
          es: `${baseUrl}/es/compare/7bit-katsubet-mirax`,
          it: `${baseUrl}/it/compare/7bit-katsubet-mirax`,
        },
      },
    },
    {
      url: `${baseUrl}/it/games/evolution-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/evolution-casinos`,
          de: `${baseUrl}/de/games/evolution-casinos`,
          fr: `${baseUrl}/fr/games/evolution-casinos`,
          es: `${baseUrl}/es/games/evolution-casinos`,
          it: `${baseUrl}/it/games/evolution-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/it/games/pragmatic-play-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/pragmatic-play-casinos`,
          fr: `${baseUrl}/fr/games/pragmatic-play-casinos`,
          es: `${baseUrl}/es/games/pragmatic-play-casinos`,
          it: `${baseUrl}/it/games/pragmatic-play-casinos`,
        },
      },
    },
    {
      url: `${baseUrl}/it/games/slots`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/games/slots`,
          de: `${baseUrl}/de/games/slots`,
          fr: `${baseUrl}/fr/games/slots`,
          es: `${baseUrl}/es/games/slots`,
          it: `${baseUrl}/it/games/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/it/guides`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides`,
          de: `${baseUrl}/de/guides`,
          fr: `${baseUrl}/fr/guides`,
          es: `${baseUrl}/es/guides`,
          it: `${baseUrl}/it/guides`,
        },
      },
    },
    {
      url: `${baseUrl}/it/guides/blackjack`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/blackjack`,
          de: `${baseUrl}/de/guides/blackjack`,
          fr: `${baseUrl}/fr/guides/blackjack`,
          es: `${baseUrl}/es/guides/blackjack`,
          it: `${baseUrl}/it/guides/blackjack`,
        },
      },
    },
    {
      url: `${baseUrl}/it/guides/roulette`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/roulette`,
          de: `${baseUrl}/de/guides/roulette`,
          fr: `${baseUrl}/fr/guides/roulette`,
          es: `${baseUrl}/es/guides/roulette`,
          it: `${baseUrl}/it/guides/roulette`,
        },
      },
    },
    {
      url: `${baseUrl}/it/guides/slots`,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/guides/slots`,
          fr: `${baseUrl}/fr/guides/slots`,
          es: `${baseUrl}/es/guides/slots`,
          it: `${baseUrl}/it/guides/slots`,
        },
      },
    },
    {
      url: `${baseUrl}/it/news/regolamentazione-crypto-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it/news/tendenze-gioco-online-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/it/reviews`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/reviews`,
          de: `${baseUrl}/de/reviews`,
          fr: `${baseUrl}/fr/reviews`,
          es: `${baseUrl}/es/reviews`,
          it: `${baseUrl}/it/reviews`,
        },
      },
    },
    {
      url: `${baseUrl}/it/reviews/7bit-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/7bit-casino`,
          fr: `${baseUrl}/fr/reviews/7bit-casino`,
          es: `${baseUrl}/es/reviews/7bit-casino`,
          it: `${baseUrl}/it/reviews/7bit-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/it/reviews/katsubet`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/katsubet`,
          fr: `${baseUrl}/fr/reviews/katsubet`,
          es: `${baseUrl}/es/reviews/katsubet`,
          it: `${baseUrl}/it/reviews/katsubet`,
        },
      },
    },
    {
      url: `${baseUrl}/it/reviews/mirax-casino`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/reviews/mirax-casino`,
          fr: `${baseUrl}/fr/reviews/mirax-casino`,
          es: `${baseUrl}/es/reviews/mirax-casino`,
          it: `${baseUrl}/it/reviews/mirax-casino`,
        },
      },
    },
    {
      url: `${baseUrl}/news`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/biggest-jackpot-wins-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/crypto-gambling-market-growth`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/crypto-regulations-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/new-casino-launches-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/online-gambling-trends-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news/uk-gambling-regulations-2026`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/page.tsx`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/poker`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/region/canada`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/region/michigan`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/region/new-jersey`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/region/pennsylvania`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/region/united-kingdom`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/responsible-gambling`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/reviews`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/reviews`,
          de: `${baseUrl}/de/reviews`,
          fr: `${baseUrl}/fr/reviews`,
          es: `${baseUrl}/es/reviews`,
          it: `${baseUrl}/it/reviews`,
        },
      },
    },
    {
      url: `${baseUrl}/sports`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sports/football-betting`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sports/new-jersey-sportsbooks`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sports/pennsylvania-sportsbooks`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sweepstakes-casinos`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/us`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
