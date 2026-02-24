using Microsoft.AspNetCore.Http.HttpResults;

namespace WebTemplate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProizvodController:ControllerBase
    {
        private readonly IspitContext context;

        public ProizvodController(IspitContext conn)
        {
            context=conn;
 
        }

        [HttpGet("vratiSveProizvode")]
        public async Task<IActionResult> vratiProizvode()
        {
           var proiz = await context.Proizvods.ToListAsync();
            if (proiz.Count==0)
            {
                return NotFound("Nema proizvoda!");
            }
            return Ok(proiz);
        }
        [HttpGet("vratiProizvod/{id}")]
        public async Task<IActionResult> vratiProizvod(int id)
        {
            var pro = await context.Proizvods.FindAsync(id);
            if(pro == null)
            {
                return NotFound($"Ne postoji proizivod sa id -{id}");
            }
            return Ok(pro);
        }

        [HttpPost("unesiNoviProizvod")]
        public async Task<IActionResult> unesiProizvod([FromBody] Proizvod novi)
        {
            if (novi == null)
            {
                return BadRequest("Nema bato");
            }
            try
            {
                context.Proizvods.Add(novi);
                await context.SaveChangesAsync();
             return Ok("Novi proizvod je usepsno dodat");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("updateProizvod/{id}")]
        public async Task<IActionResult> updteProizvod(int id,[FromBody] Proizvod update)
        {
            var pro = await context.Proizvods.FindAsync(id);
            if (pro == null)
            {
                return NotFound("Nema bato");
            }
            context.Entry(pro).CurrentValues.SetValues(update);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete("izbrisiProizvod/{id}")]
        public async Task<IActionResult> izbrisiProizvod(int id)
        {
            var pro = await context.Proizvods.FindAsync(id);
            if (pro == null)
            {
                return NotFound("nema batice");
            }
            if (id != pro.id){
                return BadRequest("ID u linku i ID u poslatim podacima se ne poklapaju!");
            }
            context.Proizvods.Remove(pro);
            await context.SaveChangesAsync();
            return Ok();
        }
        
    }
}