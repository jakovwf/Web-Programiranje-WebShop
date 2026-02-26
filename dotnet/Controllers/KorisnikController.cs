using Microsoft.AspNetCore.Http.HttpResults;

namespace WebTemplate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class KorisnikController:ControllerBase
    {
        private readonly IspitContext context;

        public KorisnikController(IspitContext conn)
        {
            context=conn;
        }

        [HttpPost("registracija")]
        public async Task<IActionResult> registracija([FromBody] Korisnik kor)
        {
            var provera =await context.Korisnici.FirstOrDefaultAsync(e =>e.email== kor.email);
            if (provera != null)
            {
                return BadRequest("Postojis vec sine");
            }
            context.Korisnici.Add(kor);
            await context.SaveChangesAsync();
            return Ok(kor);
        }
        [HttpPost("login/{email}/{password}")]
        public async Task<IActionResult> loginujse([FromRoute]string email,[FromRoute] string password)
        {
            var provera =await context.Korisnici.FirstOrDefaultAsync(e => e.email ==email && e.password ==password); 
            if (provera == null)
            {
                return Unauthorized("Nemas account sine");
            }
            var bezbednoZaFront = new Korisnik
            {
                email=email,
            };
            return Ok();
        }
    }
}