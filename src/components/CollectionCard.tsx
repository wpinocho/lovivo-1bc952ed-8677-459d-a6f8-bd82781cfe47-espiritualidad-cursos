import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 border-2 hover:border-primary/50 bg-card overflow-hidden cursor-pointer" onClick={() => onViewProducts(collection.id)}>
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden relative">
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
          
          {collection.featured && (
            <span className="absolute top-3 right-3 bg-gradient-to-r from-primary to-accent text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
              Destacada
            </span>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border-2 border-primary/30 hover:border-primary transition-all group-hover:shadow-lg group-hover:shadow-primary/30"
            onClick={(e) => {
              e.stopPropagation()
              onViewProducts(collection.id)
            }}
          >
            Ver Cursos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}