import { useEffect } from 'react';
import ProductHero from '../components/product/ProductHero';
import PriceSection from '../components/product/PriceSection';
import AIRecommendation from '../components/product/AIRecommendation';
import PerformanceBenchmarks from '../components/product/PerformanceBenchmarks';
import Compatibility from '../components/product/Compatibility';
import TechnicalSpecs from '../components/product/TechnicalSpecs';
import ProductGallery from '../components/product/ProductGallery';
import CustomerReviews from '../components/product/CustomerReviews';
import RelatedProducts from '../components/product/RelatedProducts';
import StickyBuyBar from '../components/product/StickyBuyBar';
import FloatingAIAssistant from '../components/product/FloatingAIAssistant';

export default function ProductDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050816] text-white min-h-screen relative overflow-hidden">
      <ProductHero />
      <PriceSection />
      <AIRecommendation />
      <PerformanceBenchmarks />
      <Compatibility />
      <TechnicalSpecs />
      <ProductGallery />
      <CustomerReviews />
      <RelatedProducts />

      <StickyBuyBar />
      <FloatingAIAssistant />
    </div>
  );
}
