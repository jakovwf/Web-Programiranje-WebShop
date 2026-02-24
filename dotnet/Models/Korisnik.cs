namespace WebTemplate.Models
{
    [Table("Korisnik")]
    public class Korisnik
    {
        [Key]
        public int id{get;set;}

        [Required]
        public string? ime{get;set;}

        [Required]
        public string? prezime{get;set;}

        [Required]
        public string? email {get;set;}

        [Required]
        public string? password{get;set;}

    
    }
}