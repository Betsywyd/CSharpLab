using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Diagnostics;
using NorthwindAPI.Models;
using System.Collections.Generic;

namespace NorthwindAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        NorthwndContext db = new NorthwndContext();
        [HttpGet("/minUnitPrice&minUnitsInStock")]
        public short GetProduct(Product p)
        {
         
          
            List <Product> list = db.Products.Where(i=>i.UnitPrice.Min()).ToList();


        }

        [HttpPost("addbyCategory")]
        public string AddProduct(Product p)
        {
            db.Products.Add(p);
            db.SaveChanges();
            return $"{p.ProductName} CategoryID={p.CategoryId} been added";
        }

        

    }
}
