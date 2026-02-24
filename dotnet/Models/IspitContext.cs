namespace WebTemplate.Models;

public class IspitContext : DbContext
{
    // DbSet kolekcije!

    public IspitContext(DbContextOptions options) : base(options)

    {   }


    public DbSet<Proizvod> Proizvods {get;set;}
    public DbSet<TipProizvoda>TipoviProizvoda{get;set;}
    public DbSet<Korisnik> Korisnici {get;set;}
}

