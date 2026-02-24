namespace WebTemplate.Models
{
    [Table("TipProizvoda")]
    public class TipProizvoda
    {
        [Key]
        public int id{get;set;}

        [Required]
        public string? imeTipa{get;set;}

        
    }
}