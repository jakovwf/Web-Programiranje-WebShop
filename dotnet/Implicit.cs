global using Microsoft.EntityFrameworkCore;
global using WebTemplate.Models;
global using Microsoft.AspNetCore.Mvc;
global using System.ComponentModel.DataAnnotations;
global using System.ComponentModel.DataAnnotations.Schema;
global using Microsoft.AspNetCore.Authentication.JwtBearer; // Za konfiguraciju JWT šeme
global using Microsoft.IdentityModel.Tokens;               // Za rad sa sigurnosnim ključevima (SymmetricSecurityKey)
global using System.IdentityModel.Tokens.Jwt;              // Za generisanje i rukovanje samim tokenom
global using System.Text;                                  // Za Encoding (pretvaranje tajnog ključa u bajtove)