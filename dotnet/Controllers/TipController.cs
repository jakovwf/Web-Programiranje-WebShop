namespace WebTemplate.Controllers
{   
    [Route("api/[controller]")]
    [ApiController]
    public class TipController : ControllerBase
    {
        private readonly IspitContext context;
        public TipController(IspitContext conn)
        {
            context=conn;
        }

        [HttpPost("dodajTip")]
        public async Task<IActionResult> dodajTIp([FromBody] TipProizvoda tip)
        {
            try
            {
                await context.TipoviProizvoda.AddAsync(tip);
                await context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpDelete("izbrisiTip/{id}")]
        public async Task<IActionResult> izbrisiTip(int id)
        {
            var tipp = await context.TipoviProizvoda.FindAsync(id);
            if (tipp == null)
            {
                return NotFound("Nema bajo");
            }
            try
            {
                 context.TipoviProizvoda.Remove(tipp);
                await context.SaveChangesAsync();
                 return Ok();    
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        [HttpGet("vratiSveTIpove")]
        public async Task<IActionResult> vratiSveTIpove()
        {
            try
            {
                var tipovi= await context.TipoviProizvoda.ToListAsync();
                if (tipovi.Count == 0)
                {
                    return NotFound("nema bajo nema");
                }
                return Ok(tipovi);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}