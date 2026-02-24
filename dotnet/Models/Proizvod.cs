namespace WebTemplate.Models
{
    
    [Table("Proizvod")]
    public class Proizvod
    {
        [Key]
        public int id{get;set;}

        [Required]
        public string? imeProizvoda{get;set;}

        [Required]
        public int cenaProizvoda{get;set;}

        [Required]
        public string? putanjaDoSLikeProizvoda{get;set;}

        [Required]
        public TipProizvoda? tip{get;set;}

        [Required]
        public string? deskripcijaProizvoda {get;set;}
    
    }
}