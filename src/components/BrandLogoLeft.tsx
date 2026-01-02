export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center gap-2">
      <img 
        src="/logo.svg" 
        alt="Consciencia Cuántica"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-xl font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
        Consciencia Cuántica
      </span>
    </a>
  )
}