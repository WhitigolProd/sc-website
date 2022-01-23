import Head from "next/head";
import { OGP } from "react-ogp";
import { Footer } from "src/components/Footer";
import { FeaturesSection } from "../components/FeaturesSection";
import { Gallery } from "../components/Gallery";
import { HeroSection } from "../components/HeroSection";
import { Nav } from "../components/Nav";
import { ReviewsSection } from "../components/ReviewsSection";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-eval' 'unsafe-inline'"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <title>SnailyCAD - The Free and open-source CAD/MDT for FiveM</title>
        <meta
          name="description"
          content="SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted features to fit your roleplay needs."
        />
        <meta
          name="keywords"
          content="CAD, MDT, fivem, leo, open source, roleplay, law enforcement, fire department, ems, bleeter, free, customizable"
        />
        <OGP
          url="https://snailycad.caspertheghost.me"
          title="SnailyCAD - The Free and open-source CAD/MDT for FiveM"
          description="SnailyCAD is a free and open-source CAD/MDT made to feel and look modern with all the wanted features to fit your roleplay needs."
          siteName="snailycad.caspertheghost.me"
          image="http://example.com/cover.jpg"
        />

        <link rel="canonical" href="https://snailycad.caspertheghost.me" />
      </Head>

      <div className="antialiased flex flex-col items-center justify-center w-full h-full px-4 lg:px-0">
        <div className="w-full max-w-5xl">
          <Nav />

          <HeroSection />
          <FeaturesSection />
          <ReviewsSection />
          <Gallery />

          <Footer />
        </div>
      </div>
    </div>
  );
}
