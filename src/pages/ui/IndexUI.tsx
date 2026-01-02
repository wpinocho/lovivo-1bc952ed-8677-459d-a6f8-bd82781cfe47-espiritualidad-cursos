import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="Spiritual Journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Ciencia y Consciencia Unidas
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Transforma tu realidad con física cuántica, neurociencias, epigenética y espiritualidad aplicada. Donde la ciencia encuentra la consciencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Cursos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all"
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Colecciones
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16 bg-gradient-to-b from-background to-muted/30 relative">
          <div className="absolute inset-0 bg-celestial-glow opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Nuestras Colecciones
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora nuestros caminos de transformación organizados por temática
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Colección' 
                  : 'Cursos de Transformación Cuántica'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? 'Cursos seleccionados de esta colección'
                  : 'Reprograma tu mente, cuerpo y realidad con ciencia de vanguardia'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
              >
                See All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};