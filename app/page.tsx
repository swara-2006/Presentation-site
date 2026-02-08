
import ProductOverview from "@/components/hero/ProductOverview";
import ModelContainer from "@/components/hero/modelContainer";
import Tooltips from "@/components/hero/tooltips";
import Outro from "@/components/hero/outro";

import Intro from "@/components/intro";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Intro/>

      <ProductOverview>
        <ModelContainer />
        <Tooltips />
      </ProductOverview>

      <Outro />
    </main>
  );
}
