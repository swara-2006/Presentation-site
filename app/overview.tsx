
import ProductOverview from "@/components/hero/ProductOverview";
import ModelContainer from "@/components/hero/modelContainer";
import Tooltips from "@/components/hero/tooltips";
import Outro from "@/components/hero/outro";




export default function OverView() {
  return (
    <main className="min-h-screen overflow-hidden">
      

      <ProductOverview>
        <ModelContainer />
        <Tooltips />
      </ProductOverview>

      <Outro />
    </main>
  );
}

